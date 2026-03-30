const letters = ['A','B','C','D'];

/* ========== CUSTOM DIALOG ========== */
let _cdResolveFn = null;
let _cdIsPrompt = false;

function customDialog({ title, body, okText, cancelText, danger, isPrompt, inputValue }) {
  return new Promise(resolve => {
    _cdResolveFn = resolve;
    _cdIsPrompt = !!isPrompt;
    document.getElementById('cdTitle').textContent = title || '';
    document.getElementById('cdBody').textContent = body || '';
    const okBtn = document.getElementById('cdOkBtn');
    okBtn.textContent = okText || 'OK';
    okBtn.className = 'cd-btn cd-ok' + (danger ? ' danger' : '');
    document.getElementById('cdCancelBtn').textContent = cancelText || 'Cancel';
    const input = document.getElementById('cdInput');
    if (isPrompt) {
      input.style.display = '';
      input.value = inputValue || '';
      setTimeout(() => { input.focus(); input.select(); }, 120);
    } else {
      input.style.display = 'none';
    }
    document.getElementById('customDialogOverlay').classList.add('show');
  });
}

function cdResolve(ok) {
  document.getElementById('customDialogOverlay').classList.remove('show');
  if (!_cdResolveFn) return;
  if (_cdIsPrompt) {
    _cdResolveFn(ok ? document.getElementById('cdInput').value : null);
  } else {
    _cdResolveFn(ok);
  }
  _cdResolveFn = null;
}

/* STATE */
let allQuestions = [];
let filtered = [];
let userAnswers = {};
let submitted = false;
let reviewMode = false;
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let currentTab = 'full';
let selectedSources = new Set(['2026','study4','2024','2023']); // all selected by default
let showVi = false;
let fullPool = [];

let currentSection = null;

/* HOME SCREEN */
function enterSection(section) {
  document.getElementById('homeView').style.display = 'none';
  if (section === 'part5') {
    currentSection = 'part5';
    document.getElementById('topBar').style.display = '';
    initPart5();
  } else if (section === 'listening') {
    currentSection = 'listening';
    document.getElementById('topBar').style.display = '';
    initListening();
  }
}

function goHome() {
  currentSection = null;
  document.getElementById('topBar').style.display = 'none';
  document.getElementById('mainView').style.display = 'none';
  document.getElementById('historyView').style.display = 'none';
  document.getElementById('historyReviewView').style.display = 'none';
  document.getElementById('bookmarkView').style.display = 'none';
  document.getElementById('vocabView').style.display = 'none';
  document.getElementById('listenHome').style.display = 'none';
  document.getElementById('listenPractice').style.display = 'none';
  document.getElementById('listenFillView').style.display = 'none';
  document.getElementById('listenHistoryView').style.display = 'none';
  document.getElementById('listenHistoryReviewView').style.display = 'none';
  document.getElementById('listenBookmarkView').style.display = 'none';
  document.getElementById('homeView').style.display = '';
  window.scrollTo(0, 0);
}

/* INIT */
function init() {
  // Show home screen on load
  document.getElementById('homeView').style.display = '';
  document.getElementById('topBar').style.display = 'none';
  document.getElementById('mainView').style.display = 'none';
}

function initPart5() {
  allQuestions = [];
  const maxTest = Object.keys(testsRaw2026).length;
  for (let t = 1; t <= maxTest; t++) {
    if (!testsRaw2026[t] || !answerKey[t]) continue;
    const ak = answerKey[t];
    testsRaw2026[t].forEach((item, i) => {
      allQuestions.push({
        q: item.q,
        a: item.a,
        t: item.t,
        testNum: t,
        qNum: 101 + i,
        correctIdx: letters.indexOf(ak[i]),
        qVi: testsRawTranslate2026[t][i].q,
        aVi: testsRawTranslate2026[t][i].a,
        explain: (typeof testsExplain !== 'undefined' && testsExplain[t] && testsExplain[t][i]) ? testsExplain[t][i] : '',
        source: t <= 10 ? '2026' : t <= 20 ? 'study4' : t <= 30 ? '2024' : '2023',
        displayTestNum: t <= 10 ? t : t <= 20 ? t - 10 : t <= 30 ? t - 20 : t - 30,
      });
    });
  }
  buildTabs();
  setFilter('full');
  window.scrollTo(0, 0);
}

/* TOGGLE VI */
function toggleVi() {
  showVi = document.getElementById('viToggle').checked;
  document.getElementById('questionList').classList.toggle('show-vi', showVi);
  // Also apply to history review if visible
  const hrList = document.getElementById('hrQuestionList');
  if (hrList) {
    hrList.querySelectorAll('.q-card').forEach(card => {
      card.classList.toggle('show-vi', showVi);
    });
  }
  // Apply to listening views
  const listenQL = document.getElementById('listenQuestionList');
  if (listenQL) listenQL.classList.toggle('show-vi', showVi);
}

/* TABS */
function buildTabs() {
  const tabsEl = document.getElementById('tabs');
  const filterTabs = [
    {id:'full', label:'Full Test'},
    {id:'grammar', label:'Grammar'},
    {id:'mean', label:'Meaning'},
  ];
  let html = '<div class="tab-row">';
  html += filterTabs.map(td =>
    `<div class="tab${td.id === currentTab ? ' active' : ''}" data-tab="${td.id}" onclick="setFilter('${td.id}')">${td.label}</div>`
  ).join('');
  // Source filter - show when grammar or mean is selected
  const showSource = currentTab === 'grammar' || currentTab === 'mean';
  if (showSource) {
    const allSources = ['2026','study4','2024','2023'];
    html += '<span style="width:1px;height:18px;background:rgba(0,0,0,0.1);margin:0 4px;"></span>';
    allSources.forEach(s => {
      const isOn = selectedSources.has(s);
      html += `<div class="tab${isOn ? ' active' : ''}" style="${isOn ? 'background:rgba(37,99,235,0.12);border-color:#3b82f6;color:#2563eb;' : ''}" onclick="toggleSource('${s}')">${s === 'study4' ? 'Study4' : s}</div>`;
    });
  }
  html += '</div><div class="tab-row"><div class="tab-group-label">2026</div>';
  for (let i = 1; i <= 10; i++) {
    html += `<div class="tab${('test'+i) === currentTab ? ' active' : ''}" data-tab="test${i}" onclick="setFilter('test${i}')">Test ${i}</div>`;
  }
  html += '<span style="width:1px;height:18px;background:rgba(0,0,0,0.12);margin:0 6px;"></span><div class="tab-group-label">Study4</div>';
  for (let i = 11; i <= 20; i++) {
    html += `<div class="tab${('test'+i) === currentTab ? ' active' : ''}" data-tab="test${i}" onclick="setFilter('test${i}')">Test ${i - 10}</div>`;
  }
  html += '</div><div class="tab-row"><div class="tab-group-label">2024</div>';
  for (let i = 21; i <= 30; i++) {
    html += `<div class="tab${('test'+i) === currentTab ? ' active' : ''}" data-tab="test${i}" onclick="setFilter('test${i}')">Test ${i - 20}</div>`;
  }
  html += '<span style="width:1px;height:18px;background:rgba(0,0,0,0.12);margin:0 6px;"></span><div class="tab-group-label">2023</div>';
  for (let i = 31; i <= 40; i++) {
    html += `<div class="tab${('test'+i) === currentTab ? ' active' : ''}" data-tab="test${i}" onclick="setFilter('test${i}')">Test ${i - 30}</div>`;
  }
  html += '</div>';
  tabsEl.innerHTML = html;
}

function setFilter(tabId) {
  // Show main view, hide others
  document.getElementById('historyView').style.display = 'none';
  document.getElementById('historyReviewView').style.display = 'none';
  document.getElementById('bookmarkView').style.display = 'none';
  document.getElementById('vocabView').style.display = 'none';
  document.getElementById('mainView').style.display = 'flex';
  document.getElementById('tabs').style.display = '';
  currentTab = tabId;
  submitted = false;
  reviewMode = false;
  userAnswers = {};
  document.getElementById('reviewBtn').style.display = 'none';
  document.getElementById('submitBtn').style.display = '';

  // Reset source filter when switching away from grammar/mean
  if (tabId !== 'grammar' && tabId !== 'mean') {
    selectedSources = new Set(['2026','study4','2024','2023']);
  }

  if (tabId === 'full') {
    fullPool = allQuestions.slice();
  } else if (tabId === 'grammar') {
    fullPool = allQuestions.filter(q => q.t === 'grammar').filter(q => selectedSources.has(q.source));
  } else if (tabId === 'mean') {
    fullPool = allQuestions.filter(q => q.t === 'mean').filter(q => selectedSources.has(q.source));
  } else {
    const num = parseInt(tabId.replace('test',''));
    fullPool = allQuestions.filter(q => q.testNum === num);
  }

  const sliderCard = document.getElementById('sliderCard');
  const slider = document.getElementById('qSlider');
  if (tabId === 'grammar' || tabId === 'mean') {
    sliderCard.classList.add('visible');
    slider.max = fullPool.length;
    slider.value = fullPool.length;
    updateSliderUI(slider);
    filtered = fullPool.slice();
  } else {
    sliderCard.classList.remove('visible');
    filtered = fullPool.slice();
  }

  buildTabs();

  document.getElementById('headerInfo').textContent = `${filtered.length} questions`;
  buildGrid();
  render();
  resetTimer();
}

function toggleSource(src) {
  if (selectedSources.has(src)) {
    // Don't allow deselecting the last one
    if (selectedSources.size > 1) selectedSources.delete(src);
  } else {
    selectedSources.add(src);
  }
  setFilter(currentTab);
}

function setSourceAll() {
  selectedSources = new Set(['2026','study4','2024','2023']);
  setFilter(currentTab);
}

function onSliderChange(slider) {
  const count = parseInt(slider.value);
  updateSliderUI(slider);
  const shuffled = fullPool.slice().sort(() => Math.random() - 0.5);
  filtered = shuffled.slice(0, count);
  userAnswers = {};
  submitted = false;
  reviewMode = false;
  document.getElementById('headerInfo').textContent = `${filtered.length} questions`;
  buildGrid();
  render();
}

function updateSliderUI(slider) {
  const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty('--pct', pct + '%');
  document.getElementById('sliderVal').value = slider.value;
}

function onSliderInputChange(input) {
  let val = parseInt(input.value);
  if (isNaN(val) || val < 5) return;
  const slider = document.getElementById('qSlider');
  val = Math.min(val, parseInt(slider.max));
  slider.value = val;
  onSliderChange(slider);
}

/* RENDER ALL */
function render() {
  const list = document.getElementById('questionList');
  if (showVi) list.classList.add('show-vi');
  if (filtered.length === 0) {
    list.innerHTML = '<div class="q-card glass" style="text-align:center;padding:40px;color:#64748b;">No questions available.</div>';
    return;
  }
  list.innerHTML = filtered.map((item, idx) => buildCardHTML(item, idx)).join('');
  updateProgress();
  updateGrid();
}

function buildCardHTML(item, idx) {
  const qText = item.q.replace('-------', '<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
  const qViText = item.qVi ? item.qVi.replace('-------', '______') : '';
  let optionsHTML = '';
  item.a.forEach((ans, i) => {
    let cls = 'option';
    if (userAnswers[idx] === i) cls += ' selected';
    if (submitted || reviewMode) {
      cls += ' disabled';
      if (i === item.correctIdx) {
        cls += userAnswers[idx] === i ? ' correct' : ' correct-answer';
      } else if (userAnswers[idx] === i) {
        cls += ' wrong';
      }
    }
    const viAns = item.aVi && item.aVi[i] ? item.aVi[i] : '';
    optionsHTML += `
      <div class="${cls}" onclick="selectAnswer(${idx}, ${i})">
        <div class="letter">${letters[i]}</div>
        <div style="flex:1">
          <div class="option-en">${ans}</div>
          <div class="option-vi">${viAns}</div>
        </div>
      </div>`;
  });
  return `
    <div class="q-card glass" id="q-${idx}">
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
        <span class="q-number">${idx + 1}</span>
        <span class="q-type-badge ${item.t}">${item.t}</span>
        <span style="margin-left:auto;display:flex;align-items:center;gap:6px;">
          <button class="explain-btn${item.explain ? ' has-explain' : ''}" onclick="event.stopPropagation();toggleExplain('ex-q-${idx}')" title="Explain"><svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></button>
          <button class="comment-btn${hasComment(item.testNum, item.qNum) ? ' has-comment' : ''}" data-comment-key="${item.testNum}_${item.qNum}" onclick="event.stopPropagation();toggleComment(${item.testNum},${item.qNum},'q-${idx}')" title="Comment"><svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M7 9h10v2H7zm0-3h10v2H7z"/></svg><span class="comment-dot"></span></button>
          <button class="bookmark-btn${isBookmarked(item.testNum, item.qNum) ? ' active' : ''}" onclick="event.stopPropagation();toggleBookmark(${item.testNum},${item.qNum},this)" title="Bookmark">${isBookmarked(item.testNum, item.qNum) ? '🔖' : '🏷️'}</button>
          <span style="font-size:0.68rem;color:#94a3b8;">#${item.source} #Test ${item.displayTestNum} #${item.qNum}</span>
        </span>
      </div>
      <p class="q-text">${qText}</p>
      <p class="q-vi-text">${qViText}</p>
      <div class="options">${optionsHTML}</div>
      <div class="explain-bubble" id="ex-q-${idx}" style="display:none;">${item.explain ? escapeHtml(item.explain) : '<span style="color:#94a3b8;">No explanation available.</span>'}</div>
      <div class="comment-bubble" id="cb-q-${idx}"></div>
    </div>`;
}

/* RENDER ONE */
function renderOne(idx) {
  const card = document.getElementById('q-' + idx);
  if (!card) return;
  card.outerHTML = buildCardHTML(filtered[idx], idx);
}

/* SELECT ANSWER */
let pendingChange = null;

function selectAnswer(qIdx, optIdx) {
  if (submitted || reviewMode) return;
  if (userAnswers[qIdx] !== undefined && userAnswers[qIdx] !== optIdx) {
    pendingChange = { qIdx, optIdx };
    const old = letters[userAnswers[qIdx]];
    const neu = letters[optIdx];
    document.getElementById('ctText').innerHTML = `Q${qIdx+1}: <b>${old}</b> &rarr; <b>${neu}</b> ?`;
    const overlay = document.getElementById('confirmOverlay');
    overlay.classList.add('show');
    startFire(overlay);
    return;
  }
  applyAnswer(qIdx, optIdx);
}

let fireInterval = null;
function startFire(overlay) {
  stopFire(overlay);
  const colors = ['#ef4444','#f97316','#f59e0b','#fbbf24','#dc2626'];
  fireInterval = setInterval(() => {
    for (let k = 0; k < 3; k++) {
      const p = document.createElement('div');
      p.className = 'fire-particle';
      p.style.left = Math.random() * 100 + '%';
      const c = colors[Math.floor(Math.random() * colors.length)];
      p.style.background = c; p.style.color = c;
      const size = 10 + Math.random() * 22;
      p.style.width = size + 'px'; p.style.height = size + 'px';
      p.style.animationDuration = (1.8 + Math.random() * 2.5) + 's';
      overlay.appendChild(p);
      setTimeout(() => p.remove(), 4500);
    }
  }, 30);
}
function stopFire(overlay) {
  if (fireInterval) { clearInterval(fireInterval); fireInterval = null; }
  overlay.querySelectorAll('.fire-particle').forEach(p => p.remove());
}

function confirmChange(yes) {
  const overlay = document.getElementById('confirmOverlay');
  stopFire(overlay);
  overlay.classList.remove('show');
  if (yes && pendingChange) applyAnswer(pendingChange.qIdx, pendingChange.optIdx);
  if (yes && typeof pendingListenChange !== 'undefined' && pendingListenChange) {
    applyListenAnswer(pendingListenChange.qId, pendingListenChange.optIdx);
  }
  pendingChange = null;
  if (typeof pendingListenChange !== 'undefined') pendingListenChange = null;
}

function applyAnswer(qIdx, optIdx) {
  userAnswers[qIdx] = optIdx;
  // Re-render the single card
  const oldCard = document.getElementById('q-' + qIdx);
  if (oldCard) {
    const tmp = document.createElement('div');
    tmp.innerHTML = buildCardHTML(filtered[qIdx], qIdx);
    oldCard.replaceWith(tmp.firstElementChild);
  }
  updateProgress();
  updateGrid();
  setTimeout(() => {
    for (let i = qIdx + 1; i < filtered.length; i++) {
      if (userAnswers[i] === undefined) { goToQuestion(i); return; }
    }
    for (let i = 0; i < qIdx; i++) {
      if (userAnswers[i] === undefined) { goToQuestion(i); return; }
    }
  }, 200);
}

/* NAVIGATION */
function goToQuestion(idx) {
  const el = document.getElementById('q-' + idx);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function goRandom() {
  if (filtered.length <= 1) return;
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    const tmpA = userAnswers[i]; const tmpB = userAnswers[j];
    if (tmpB !== undefined) userAnswers[i] = tmpB; else delete userAnswers[i];
    if (tmpA !== undefined) userAnswers[j] = tmpA; else delete userAnswers[j];
  }
  render(); buildGrid();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* PROGRESS */
function updateProgress() {
  const answered = Object.keys(userAnswers).length;
  const total = filtered.length;
  const pct = total > 0 ? (answered / total * 100) : 0;
  document.getElementById('progressText').textContent = `${answered} / ${total}`;
  document.getElementById('progressFill').style.width = pct + '%';
}

/* GRID */
function buildGrid() {
  const grid = document.getElementById('qGrid');
  grid.innerHTML = '';
  filtered.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-grid-btn';
    btn.textContent = i + 1;
    btn.onclick = () => goToQuestion(i);
    grid.appendChild(btn);
  });
}

function updateGrid() {
  const btns = document.querySelectorAll('.q-grid-btn');
  btns.forEach((btn, i) => {
    btn.className = 'q-grid-btn';
    if (submitted || reviewMode) {
      if (userAnswers[i] !== undefined) {
        btn.classList.add(userAnswers[i] === filtered[i].correctIdx ? 'correct-mark' : 'wrong-mark');
      }
    } else if (userAnswers[i] !== undefined) {
      btn.classList.add('answered');
    }
  });
}

/* TIMER */
function toggleTimer() {
  timerRunning ? stopTimer() : startTimer();
}
function startTimer() {
  if (timerRunning) return;
  const mins = parseInt(document.getElementById('timerInput').value) || 75;
  if (timerSeconds === 0) timerSeconds = mins * 60;
  timerRunning = true;
  document.getElementById('timerStartBtn').textContent = 'Pause';
  document.getElementById('timerStartBtn').className = 'timer-btn stop';
  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();
    if (timerSeconds <= 0) { stopTimer(); submitTest(); }
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById('timerStartBtn').textContent = 'Start';
  document.getElementById('timerStartBtn').className = 'timer-btn start';
}
function resetTimer() {
  stopTimer();
  timerSeconds = 0;
  updateTimerDisplay();
}
function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60);
  const s = timerSeconds % 60;
  const display = document.getElementById('timerDisplay');
  display.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  display.className = 'timer-display';
  if (timerSeconds > 0 && timerSeconds <= 60) display.classList.add('danger');
  else if (timerSeconds > 0 && timerSeconds <= 300) display.classList.add('warning');
}

/* SUBMIT */
const incompleteAudio = new Audio('audio/bg/incomplete.mp3');
const clapAudio = new Audio('correct.mp3');
const wrongAudio = new Audio('wrong.mp3');

function playClapSound() {
  clapAudio.currentTime = 0;
  clapAudio.play().catch(() => {});
}

function playWrongSound() {
  wrongAudio.currentTime = 0;
  wrongAudio.play().catch(() => {});
}

function submitTest() {
  const total = filtered.length;
  const answered = Object.keys(userAnswers).length;

  if (answered < total) {
    incompleteAudio.currentTime = 0;
    incompleteAudio.play();
  }

  stopTimer();
  submitted = true;
  let correct = 0;
  for (let i = 0; i < total; i++) {
    if (userAnswers[i] === filtered[i].correctIdx) correct++;
  }
  const wrong = total - correct;
  const pct = total > 0 ? Math.round(correct / total * 100) : 0;
  document.getElementById('correctCount').textContent = correct;
  document.getElementById('wrongCount').textContent = wrong;
  document.getElementById('totalCount').textContent = total;
  document.getElementById('pctScore').textContent = pct + '%';


  document.getElementById('reviewBtn').style.display = '';
  document.getElementById('submitBtn').style.display = 'none';
  saveToHistory();
  document.getElementById('celebOverlay').classList.add('show');
  launchConfetti();
  setTimeout(() => {
    document.getElementById('celebOverlay').classList.remove('show');
    document.getElementById('modalOverlay').classList.add('show');
  }, 5000);
  render();
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
}

/* CONFETTI */
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const colors = ['#ef4444','#f59e0b','#22c55e','#3b82f6','#a855f7','#ec4899','#14b8a6','#f97316'];
  const pieces = [];
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5, h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4, vy: Math.random() * 3 + 2,
      rot: Math.random() * 360, rotV: (Math.random() - 0.5) * 10, opacity: 1,
    });
  }
  let frame = 0; const maxFrames = 600;
  function draw() {
    if (frame > maxFrames) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.04; p.rot += p.rotV;
      if (frame > maxFrames - 40) p.opacity = Math.max(0, p.opacity - 0.03);
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180);
      ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
    });
    frame++; requestAnimationFrame(draw);
  }
  draw();
}

/* REVIEW */
function toggleReview() {
  if (!submitted) return;
  reviewMode = !reviewMode;
  render();
}

/* RESET - clears slider to max and timer to 00:00 */
function resetTest() {
  submitted = false;
  reviewMode = false;
  userAnswers = {};
  document.getElementById('reviewBtn').style.display = 'none';
  document.getElementById('submitBtn').style.display = '';

  // Restore original order from fullPool
  filtered = fullPool.slice();

  // Reset slider to max
  const sliderCard = document.getElementById('sliderCard');
  const slider = document.getElementById('qSlider');
  if (sliderCard.classList.contains('visible')) {
    slider.value = slider.max;
    updateSliderUI(slider);
  }

  // Reset timer to 00:00
  resetTimer();

  document.getElementById('headerInfo').textContent = `${filtered.length} questions`;
  buildGrid();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ================================================================
   HISTORY
   ================================================================ */
function saveToHistory() {
  const total = filtered.length;
  let correct = 0;
  const snapshot = [];
  for (let i = 0; i < total; i++) {
    const item = filtered[i];
    const userAns = userAnswers[i];
    const isCorrect = userAns === item.correctIdx;
    if (isCorrect) correct++;
    snapshot.push({
      q: item.q,
      a: item.a,
      t: item.t,
      testNum: item.testNum,
      qNum: item.qNum,
      source: item.source,
      displayTestNum: item.displayTestNum,
      correctIdx: item.correctIdx,
      userAns: userAns !== undefined ? userAns : -1,
      isCorrect: isCorrect,
      qVi: item.qVi || '',
      aVi: item.aVi || [],
      explain: item.explain || '',
    });
  }
  const entry = {
    id: Date.now(),
    date: new Date().toLocaleString('vi-VN'),
    tab: currentTab,
    total: total,
    correct: correct,
    questions: snapshot,
  };
  try {
    const h = JSON.parse(localStorage.getItem('toeic_history') || '[]');
    h.unshift(entry);
    if (h.length > 30) h.length = 30;
    localStorage.setItem('toeic_history', JSON.stringify(h));
  } catch(e) {}
}

function showHistoryList() {
  document.getElementById('mainView').style.display = 'none';
  document.getElementById('historyReviewView').style.display = 'none';
  document.getElementById('bookmarkView').style.display = 'none';
  document.getElementById('vocabView').style.display = 'none';
  document.getElementById('historyView').style.display = 'block';
  document.getElementById('tabs').style.display = 'none';
  renderHistoryList();
  window.scrollTo(0, 0);
}

function backToMain() {
  goHome();
}

function closeHistoryView() { backToMain(); }

function renderHistoryList() {
  let h = [];
  try { h = JSON.parse(localStorage.getItem('toeic_history') || '[]'); } catch(e) {}
  const list = document.getElementById('historyList');
  if (h.length === 0) {
    list.innerHTML = '<div class="history-empty">No history yet.</div>';
    return;
  }
  list.innerHTML = h.map((entry, idx) => {
    const tabLabel = entry.tab === 'full' ? 'Full Test' :
      entry.tab === 'grammar' ? 'Grammar' :
      entry.tab === 'mean' ? 'Mean' :
      'Test ' + entry.tab.replace('test','');
    const pct = Math.round(entry.correct / entry.total * 100);
    const wrong = entry.total - entry.correct;
    return `
      <div class="history-entry" onclick="viewHistoryEntry(${idx})">
        <div class="he-info">
          <span class="he-tab">${tabLabel}</span>
          <span class="he-date">${entry.date}</span>
          <span class="he-score">${entry.correct}/${entry.total} (${pct}%)</span>
          ${wrong > 0 ? `<span class="he-wrong">${wrong} wrong</span>` : ''}
        </div>
        <div class="he-actions">
          <button class="he-delete" onclick="event.stopPropagation(); deleteHistoryEntry(${idx})">delete</button>
        </div>
      </div>`;
  }).join('');
}

function deleteHistoryEntry(idx) {
  try {
    const h = JSON.parse(localStorage.getItem('toeic_history') || '[]');
    h.splice(idx, 1);
    localStorage.setItem('toeic_history', JSON.stringify(h));
    renderHistoryList();
  } catch(e) {}
}

function viewHistoryEntry(idx) {
  let h = [];
  try { h = JSON.parse(localStorage.getItem('toeic_history') || '[]'); } catch(e) {}
  const entry = h[idx];
  if (!entry) return;

  document.getElementById('historyView').style.display = 'none';
  document.getElementById('mainView').style.display = 'none';
  document.getElementById('bookmarkView').style.display = 'none';
  document.getElementById('vocabView').style.display = 'none';
  document.getElementById('historyReviewView').style.display = 'flex';

  const tabLabel = entry.tab === 'full' ? 'Full Test' :
    entry.tab === 'grammar' ? 'Grammar' :
    entry.tab === 'mean' ? 'Mean' :
    'Test ' + entry.tab.replace('test','');

  document.getElementById('hrTitle').textContent = tabLabel + ' - ' + entry.date;
  document.getElementById('hrProgress').textContent = entry.correct + '/' + entry.total + ' correct';

  const viOn = document.getElementById('viToggle').checked;
  const viCls = viOn ? ' show-vi' : '';

  // Render questions in review mode
  const qList = document.getElementById('hrQuestionList');
  qList.innerHTML = entry.questions.map((q, i) => {
    const explain = q.explain || getExplainFor(q.testNum, q.qNum);
    const qText = q.q.replace('-------', '<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
    const qViText = q.qVi ? q.qVi.replace('-------', '______') : '';
    let optionsHTML = '';
    q.a.forEach((ans, j) => {
      let cls = 'option disabled';
      if (j === q.correctIdx) {
        cls += q.userAns === j ? ' correct' : ' correct-answer';
      } else if (q.userAns === j) {
        cls += ' wrong';
      }
      const viAns = q.aVi && q.aVi[j] ? q.aVi[j] : '';
      optionsHTML += `
        <div class="${cls}">
          <div class="letter">${letters[j]}</div>
          <div style="flex:1">
            <div class="option-en">${ans}</div>
            <div class="option-vi">${viAns}</div>
          </div>
        </div>`;
    });
    return `
      <div class="q-card glass${viCls}" id="hr-${i}" style="scroll-margin-top:var(--topbar-h,160px);">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
          <span class="q-number">${i + 1}</span>
          <span class="q-type-badge ${q.t}">${q.t}</span>
          ${!q.isCorrect ? '<span style="font-size:0.65rem;color:#dc2626;font-weight:700;">WRONG</span>' : '<span style="font-size:0.65rem;color:#16a34a;font-weight:700;">CORRECT</span>'}
          <span style="margin-left:auto;display:flex;align-items:center;gap:6px;">
            <button class="explain-btn${explain ? ' has-explain' : ''}" onclick="event.stopPropagation();toggleExplain('ex-hr-${i}')" title="Explain"><svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></button>
            <button class="comment-btn${hasComment(q.testNum, q.qNum) ? ' has-comment' : ''}" data-comment-key="${q.testNum}_${q.qNum}" onclick="event.stopPropagation();toggleComment(${q.testNum},${q.qNum},'hr-${i}')" title="Comment"><svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M7 9h10v2H7zm0-3h10v2H7z"/></svg><span class="comment-dot"></span></button>
            <button class="bookmark-btn${isBookmarked(q.testNum, q.qNum) ? ' active' : ''}" onclick="event.stopPropagation();toggleBookmark(${q.testNum},${q.qNum},this)" title="Bookmark">${isBookmarked(q.testNum, q.qNum) ? '🔖' : '🏷️'}</button>
            <span style="font-size:0.68rem;color:#94a3b8;">#${q.source || (q.testNum <= 10 ? '2026' : q.testNum <= 20 ? 'study4' : q.testNum <= 30 ? '2024' : '2023')} #Test ${q.displayTestNum || (q.testNum <= 10 ? q.testNum : q.testNum <= 20 ? q.testNum-10 : q.testNum <= 30 ? q.testNum-20 : q.testNum-30)} #${q.qNum}</span>
          </span>
        </div>
        <p class="q-text">${qText}</p>
        <p class="q-vi-text">${qViText}</p>
        <div class="options">${optionsHTML}</div>
        <div class="explain-bubble" id="ex-hr-${i}" style="display:none;">${explain ? escapeHtml(explain) : '<span style="color:#94a3b8;">No explanation available.</span>'}</div>
        <div class="comment-bubble" id="cb-hr-${i}"></div>
      </div>`;
  }).join('');

  // Build grid
  const grid = document.getElementById('hrGrid');
  grid.innerHTML = '';
  entry.questions.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-grid-btn ' + (q.isCorrect ? 'correct-mark' : 'wrong-mark');
    btn.textContent = i + 1;
    btn.onclick = () => {
      const el = document.getElementById('hr-' + i);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    grid.appendChild(btn);
  });

  window.scrollTo(0, 0);
}

function closeHistoryReview() {
  document.getElementById('historyReviewView').style.display = 'none';
  document.getElementById('historyView').style.display = 'block';
  window.scrollTo(0, 0);
}

/* ========== BACKGROUND AUDIO ========== */
const bgAudio = new Audio('audio/bg/audio.mp3');
bgAudio.loop = true;
bgAudio.volume = 0.3;

function toggleBgAudio() {
  const btn = document.getElementById('bgAudioBtn');
  if (bgAudio.paused) {
    bgAudio.play();
    btn.textContent = '🔊 Music';
  } else {
    bgAudio.pause();
    btn.textContent = '🔇 Music';
  }
}

function toggleMusicPanel() {
  const panel = document.getElementById('musicPanel');
  panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

// Close panel when clicking outside
document.addEventListener('click', (e) => {
  const wrapper = document.getElementById('musicWrapper');
  const panel = document.getElementById('musicPanel');
  if (wrapper && panel && !wrapper.contains(e.target)) {
    panel.style.display = 'none';
  }
});

function fmtTime(s) {
  if (isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ':' + (sec < 10 ? '0' : '') + sec;
}

function seekAudio(slider) {
  if (bgAudio.duration) {
    bgAudio.currentTime = (slider.value / 100) * bgAudio.duration;
  }
}

function changeVolume(slider) {
  bgAudio.volume = parseFloat(slider.value);
  const pct = Math.round(slider.value * 100);
  slider.style.background = `linear-gradient(90deg,#3b82f6 ${pct}%,#e2e8f0 ${pct}%)`;
}

bgAudio.addEventListener('loadedmetadata', () => {
  document.getElementById('audioDuration').textContent = fmtTime(bgAudio.duration);
});

bgAudio.addEventListener('timeupdate', () => {
  if (!bgAudio.duration) return;
  const pct = (bgAudio.currentTime / bgAudio.duration) * 100;
  const seek = document.getElementById('audioSeek');
  seek.value = pct;
  seek.style.background = `linear-gradient(90deg,#3b82f6 ${pct}%,#e2e8f0 ${pct}%)`;
  document.getElementById('audioCurrentTime').textContent = fmtTime(bgAudio.currentTime);
});

/* Toast */
let toastTimer;
function showToast(msg) {
  let el = document.getElementById('toastMsg');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toastMsg';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  clearTimeout(toastTimer);
  requestAnimationFrame(() => { el.classList.add('show'); });
  toastTimer = setTimeout(() => { el.classList.remove('show'); }, 3000);
}

/* BOOKMARK */
function getBookmarks() {
  try { return JSON.parse(localStorage.getItem('toeic_bookmarks') || '[]'); } catch(e) { return []; }
}
function saveBookmarks(bm) {
  localStorage.setItem('toeic_bookmarks', JSON.stringify(bm));
  updateBookmarkCount();
}
function isBookmarked(testNum, qNum) {
  return getBookmarks().some(b => b.testNum === testNum && b.qNum === qNum);
}
function toggleBookmark(testNum, qNum, btnEl) {
  let bm = getBookmarks();
  const idx = bm.findIndex(b => b.testNum === testNum && b.qNum === qNum);
  if (idx >= 0) {
    bm.splice(idx, 1);
    if (btnEl) { btnEl.classList.remove('active'); btnEl.textContent = '🏷️'; }
    showToast('Đã bỏ bookmark');
  } else {
    const q = allQuestions.find(q => q.testNum === testNum && q.qNum === qNum);
    if (q) {
      bm.push({ testNum, qNum, source: q.source, displayTestNum: q.displayTestNum, q: q.q, a: q.a, t: q.t, correctIdx: q.correctIdx, qVi: q.qVi || '', aVi: q.aVi || [] });
    }
    if (btnEl) { btnEl.classList.add('active'); btnEl.textContent = '🔖'; }
    showToast('Đã bookmark câu hỏi');
  }
  saveBookmarks(bm);
}
function updateBookmarkCount() {
  const bm = getBookmarks();
  const el = document.getElementById('bookmarkCount');
  if (bm.length > 0) {
    el.textContent = bm.length;
    el.style.display = '';
  } else {
    el.style.display = 'none';
  }
}
function showBookmarkView() {
  document.getElementById('mainView').style.display = 'none';
  document.getElementById('historyView').style.display = 'none';
  document.getElementById('historyReviewView').style.display = 'none';
  document.getElementById('vocabView').style.display = 'none';
  document.getElementById('bookmarkView').style.display = 'flex';
  document.getElementById('tabs').style.display = 'none';
  renderBookmarkView();
  window.scrollTo(0, 0);
}
function renderBookmarkView() {
  const bm = getBookmarks();
  const qList = document.getElementById('bmQuestionList');
  document.getElementById('bmProgress').textContent = bm.length + ' bookmarked';

  if (bm.length === 0) {
    qList.innerHTML = '<div class="glass q-card" style="text-align:center;color:#94a3b8;">No bookmarked questions.</div>';
    document.getElementById('bmGrid').innerHTML = '';
    return;
  }

  const viOn = document.getElementById('viToggle').checked;
  const viCls = viOn ? ' show-vi' : '';

  qList.innerHTML = bm.map((q, i) => {
    const explain = q.explain || getExplainFor(q.testNum, q.qNum);
    const qText = q.q.replace('-------', '<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
    const qViText = q.qVi ? q.qVi.replace('-------', '______') : '';
    let optionsHTML = '';
    q.a.forEach((ans, j) => {
      let cls = 'option disabled';
      if (j === q.correctIdx) cls += ' correct-answer';
      const viAns = q.aVi && q.aVi[j] ? q.aVi[j] : '';
      optionsHTML += `
        <div class="${cls}">
          <div class="letter">${letters[j]}</div>
          <div style="flex:1">
            <div class="option-en">${ans}</div>
            <div class="option-vi">${viAns}</div>
          </div>
        </div>`;
    });
    const src = q.source || (q.testNum <= 10 ? '2026' : q.testNum <= 20 ? 'study4' : q.testNum <= 30 ? '2024' : '2023');
    const dtn = q.displayTestNum || (q.testNum <= 10 ? q.testNum : q.testNum <= 20 ? q.testNum-10 : q.testNum <= 30 ? q.testNum-20 : q.testNum-30);
    return `
      <div class="q-card glass${viCls}" id="bm-${i}" style="scroll-margin-top:var(--topbar-h,160px);">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
          <span class="q-number">${i + 1}</span>
          <span class="q-type-badge ${q.t}">${q.t}</span>
          <span style="margin-left:auto;display:flex;align-items:center;gap:6px;">
            <button class="explain-btn${explain ? ' has-explain' : ''}" onclick="event.stopPropagation();toggleExplain('ex-bm-${i}')" title="Explain"><svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></button>
            <button class="comment-btn${hasComment(q.testNum, q.qNum) ? ' has-comment' : ''}" data-comment-key="${q.testNum}_${q.qNum}" onclick="event.stopPropagation();toggleComment(${q.testNum},${q.qNum},'bm-${i}')" title="Comment"><svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M7 9h10v2H7zm0-3h10v2H7z"/></svg><span class="comment-dot"></span></button>
            <button class="bookmark-btn active" onclick="event.stopPropagation();removeBookmarkAndRefresh(${i})" title="Remove Bookmark">🔖</button>
            <span style="font-size:0.68rem;color:#94a3b8;">#${src} #Test ${dtn} #${q.qNum}</span>
          </span>
        </div>
        <p class="q-text">${qText}</p>
        <p class="q-vi-text">${qViText}</p>
        <div class="options">${optionsHTML}</div>
        <div class="explain-bubble" id="ex-bm-${i}" style="display:none;">${explain ? escapeHtml(explain) : '<span style="color:#94a3b8;">No explanation available.</span>'}</div>
        <div class="comment-bubble" id="cb-bm-${i}"></div>
      </div>`;
  }).join('');

  const grid = document.getElementById('bmGrid');
  grid.innerHTML = '';
  bm.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-grid-btn';
    btn.textContent = i + 1;
    btn.onclick = () => {
      const el = document.getElementById('bm-' + i);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    grid.appendChild(btn);
  });
}
function removeBookmarkAndRefresh(idx) {
  let bm = getBookmarks();
  bm.splice(idx, 1);
  saveBookmarks(bm);
  renderBookmarkView();
  showToast('Đã bỏ bookmark');
}

/* ========== VOCABULARY ========== */
function getVocab() {
  try { return JSON.parse(localStorage.getItem('toeic_vocab') || '[]'); } catch(e) { return []; }
}
function saveVocab(v) {
  localStorage.setItem('toeic_vocab', JSON.stringify(v));
  updateVocabCount();
}
function updateVocabCount() {
  const v = getVocab();
  const el = document.getElementById('vocabCount');
  if (v.length > 0) { el.textContent = v.length; el.style.display = ''; }
  else { el.style.display = 'none'; }
}

let pendingVocabWord = '';
let pendingVocabTestNum = null;
let pendingVocabSource = null;

// Text selection detection on question text
document.addEventListener('mouseup', function(e) {
  const popup = document.getElementById('vocabPopup');
  const sel = window.getSelection();
  const word = sel.toString().trim();

  if (!word || word.length < 2 || word.length > 60) {
    if (!popup.contains(e.target)) popup.style.display = 'none';
    return;
  }

  const anchor = sel.anchorNode;
  if (!anchor) return;
  const parent = anchor.parentElement;
  const card = parent ? parent.closest('.q-card, .vocab-card, .listen-passage, .lf-sentence-box, .fill-answer-section') : null;
  if (!card && !parent.closest('.q-text, .option-en, .listen-passage, .lf-sentence, .fill-answer-text, .fill-text')) return;

  // Detect which test this word belongs to
  pendingVocabTestNum = null;
  pendingVocabSource = null;
  const qCard = (card || parent.closest('.q-card'));
  if (qCard && qCard.id) {
    const prefix = qCard.id.split('-')[0]; // 'q', 'hr', 'bm'
    const qIdx = parseInt(qCard.id.split('-')[1]);
    if (prefix === 'q' && !isNaN(qIdx) && filtered[qIdx]) {
      pendingVocabTestNum = filtered[qIdx].testNum;
      pendingVocabSource = filtered[qIdx].source;
    } else if (prefix === 'hr' || prefix === 'bm') {
      // Try to get from the card's data
      const qNumEl = qCard.querySelector('.q-num');
      if (qNumEl) {
        const txt = qNumEl.textContent; // e.g. "Test 1 · Q101"
        // Try to find testNum from allQuestions
        const match = txt.match(/Q(\d+)/);
        if (match) {
          const qNum = parseInt(match[1]);
          const found = allQuestions.find(q => q.qNum === qNum);
          if (found) {
            pendingVocabTestNum = found.testNum;
            pendingVocabSource = found.source;
          }
        }
      }
    }
  }

  pendingVocabWord = word;
  popup.style.display = 'none';
  showVocabMeaningInput();
});

document.addEventListener('mousedown', function(e) {
  const popup = document.getElementById('vocabPopup');
  if (!popup.contains(e.target)) popup.style.display = 'none';
});

async function autoTranslate(text) {
  try {
    const res = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=en|vi');
    const data = await res.json();
    if (data.responseStatus === 200 && data.responseData.translatedText) {
      return data.responseData.translatedText;
    }
  } catch(e) {}
  return '';
}

function showVocabMeaningInput() {
  if (!pendingVocabWord) return;
  const vocab = getVocab();
  if (vocab.some(v => v.word.toLowerCase() === pendingVocabWord.toLowerCase())) {
    showToast('Word already exists!');
    document.getElementById('vocabPopup').style.display = 'none';
    return;
  }
  document.getElementById('vocabPopup').style.display = 'none';
  document.getElementById('vocabInputWord').textContent = pendingVocabWord;
  const input = document.getElementById('vocabMeaningInput');
  input.value = 'Translating...';
  input.disabled = true;
  document.getElementById('vocabInputOverlay').classList.add('show');

  autoTranslate(pendingVocabWord).then(translated => {
    input.value = translated || '';
    input.disabled = false;
    input.focus();
    input.select();
  });
}

function closeVocabInput() {
  document.getElementById('vocabInputOverlay').classList.remove('show');
  pendingVocabWord = '';
}

function confirmAddVocab() {
  const meaning = document.getElementById('vocabMeaningInput').value.trim();
  if (!meaning) { showToast('Please enter the meaning!'); return; }
  const vocab = getVocab();
  const entry = { word: pendingVocabWord, meaning: meaning, addedAt: new Date().toISOString() };
  if (pendingVocabTestNum) { entry.testNum = pendingVocabTestNum; entry.source = pendingVocabSource; }
  vocab.push(entry);
  saveVocab(vocab);
  showToast('Added "' + pendingVocabWord + '"!');
  closeVocabInput();
  pendingVocabWord = '';
  window.getSelection().removeAllRanges();
}

let fcIdx = 0;
let fcVocab = [];
let fcMode = 'en'; // 'en' = front EN back VI, 'vi' = front VI back EN

function fcFlipMode(mode) {
  fcMode = mode;
  document.getElementById('fcModeEn').classList.toggle('fc-act-active', mode === 'en');
  document.getElementById('fcModeVi').classList.toggle('fc-act-active', mode === 'vi');
  document.getElementById('fcLabelFront').textContent = mode === 'en' ? 'ENGLISH' : 'TIẾNG VIỆT';
  document.getElementById('fcLabelBack').textContent = mode === 'en' ? 'TIẾNG VIỆT' : 'ENGLISH';
  renderFlashcard();
}

let fcFilterTestNum = null; // null = all, number = specific test

function showVocabView() {
  document.getElementById('mainView').style.display = 'none';
  document.getElementById('historyView').style.display = 'none';
  document.getElementById('historyReviewView').style.display = 'none';
  document.getElementById('bookmarkView').style.display = 'none';
  document.getElementById('vocabView').style.display = 'block';
  document.getElementById('tabs').style.display = 'none';
  showVocabIndex();
  window.scrollTo(0, 0);
}

function getSourceLabel(source) {
  return source === 'study4' ? 'Study4' : source;
}
function getDisplayTestNum(testNum) {
  if (testNum <= 10) return testNum;
  if (testNum <= 20) return testNum - 10;
  if (testNum <= 30) return testNum - 20;
  return testNum - 30;
}
function getTestSource(testNum) {
  if (testNum <= 10) return '2026';
  if (testNum <= 20) return 'study4';
  if (testNum <= 30) return '2024';
  return '2023';
}

function showVocabIndex() {
  document.getElementById('vocabIndex').style.display = '';
  document.getElementById('vocabActivity').style.display = 'none';
  if (matchTimerInterval) { clearInterval(matchTimerInterval); matchTimerInterval = null; }
  const vocab = getVocab();
  const countEl = document.getElementById('fcCountIndex');
  if (countEl) countEl.textContent = vocab.length + ' words';

  // Group vocab by testNum
  const groups = {}; // { testNum: [words] }
  const noTest = []; // words without testNum
  vocab.forEach(v => {
    if (v.testNum) {
      if (!groups[v.testNum]) groups[v.testNum] = [];
      groups[v.testNum].push(v);
    } else {
      noTest.push(v);
    }
  });

  const listEl = document.getElementById('viTestList');
  let html = '';

  // "All" button
  html += `<div class="vi-test-item vi-all" onclick="openVocabActivity(null)">
    <div class="vi-test-info">
      <span class="vi-test-name">📚 All Vocabulary</span>
    </div>
    <span class="vi-test-count">${vocab.length} words</span>
  </div>`;

  // Group by source
  const sourceOrder = ['2026', 'study4', '2024', '2023'];
  sourceOrder.forEach(source => {
    const testsInSource = Object.keys(groups)
      .map(Number)
      .filter(t => getTestSource(t) === source)
      .sort((a, b) => a - b);
    if (testsInSource.length === 0) return;

    html += `<div class="vi-source-label">${getSourceLabel(source)}</div>`;
    testsInSource.forEach(testNum => {
      const words = groups[testNum];
      html += `<div class="vi-test-item" onclick="openVocabActivity(${testNum})">
        <div class="vi-test-info">
          <span class="vi-test-name">Test ${getDisplayTestNum(testNum)}</span>
          <span class="vi-test-preview">${words.slice(0, 3).map(w => w.word).join(', ')}${words.length > 3 ? '...' : ''}</span>
        </div>
        <span class="vi-test-count">${words.length} words</span>
      </div>`;
    });
  });

  // Words without test
  if (noTest.length > 0) {
    html += `<div class="vi-source-label">Uncategorized</div>`;
    html += `<div class="vi-test-item" onclick="openVocabActivity(-1)">
      <div class="vi-test-info">
        <span class="vi-test-name">Unlinked Words</span>
        <span class="vi-test-preview">${noTest.slice(0, 3).map(w => w.word).join(', ')}${noTest.length > 3 ? '...' : ''}</span>
      </div>
      <span class="vi-test-count">${noTest.length} words</span>
    </div>`;
  }

  if (vocab.length === 0) {
    html = '<div class="fc-empty" style="padding:40px 0;text-align:center;color:#94a3b8;">No vocabulary yet.<br>Select a word in a question to add!</div>';
  }

  listEl.innerHTML = html;
}

let currentVocabTestNum = null; // track which test is open for activity views

function openVocabActivity(testNum, mode) {
  currentVocabTestNum = testNum;
  fcFilterTestNum = testNum;
  const allVocab = getVocab();
  let vocabList;
  if (testNum === null) {
    vocabList = allVocab.slice();
  } else if (testNum === -1) {
    vocabList = allVocab.filter(v => !v.testNum);
  } else {
    vocabList = allVocab.filter(v => v.testNum === testNum);
  }
  fcVocab = vocabList;
  clVocab = vocabList;
  fcIdx = 0;

  // Set shared title
  const titleEl = document.getElementById('vaTitle');
  if (testNum === null) {
    titleEl.textContent = 'All Vocabulary';
  } else if (testNum === -1) {
    titleEl.textContent = 'Unlinked Words';
  } else {
    titleEl.textContent = getSourceLabel(getTestSource(testNum)) + ' · Test ' + getDisplayTestNum(testNum);
  }
  document.getElementById('vaCount').textContent = vocabList.length + ' words';

  document.getElementById('vocabIndex').style.display = 'none';
  document.getElementById('vocabActivity').style.display = '';

  switchVocabMode(mode || 'flashcards');
}

// Keep old names as aliases
function openVocabFlashcard(testNum) { openVocabActivity(testNum, 'flashcards'); }
function openVocabCardList(testNum) { openVocabActivity(testNum, 'learn'); }

function switchVocabMode(mode) {
  // Update mode bar
  document.querySelectorAll('.va-mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === mode);
  });
  // Hide all panels
  document.querySelectorAll('.va-panel').forEach(p => p.style.display = 'none');

  if (matchTimerInterval) { clearInterval(matchTimerInterval); matchTimerInterval = null; }

  if (mode === 'flashcards') {
    document.getElementById('vaFlashcards').style.display = '';
    fcFlipMode(fcMode);
  } else if (mode === 'learn') {
    document.getElementById('vaLearn').style.display = '';
    document.getElementById('clSearch').value = '';
    clHideMeaning = false;
    clStarOnly = false;
    document.getElementById('clHideMeaning').classList.add('active');
    document.getElementById('clStarFilter').classList.remove('active');
    renderCardList();
  } else if (mode === 'test') {
    document.getElementById('vaTest').style.display = '';
  } else if (mode === 'match') {
    document.getElementById('vaMatch').style.display = '';
    startMatch();
  }
}

/* ========== CARD LIST VIEW ========== */
let clVocab = [];
let clTestNum = null;
let clHideMeaning = false;
let clStarOnly = false;

function getStarred() {
  try { return JSON.parse(localStorage.getItem('toeic_vocab_starred') || '[]'); } catch { return []; }
}
function saveStarred(arr) { localStorage.setItem('toeic_vocab_starred', JSON.stringify(arr)); }
function isStarred(word) { return getStarred().includes(word); }
function toggleStar(word) {
  let s = getStarred();
  if (s.includes(word)) { s = s.filter(w => w !== word); } else { s.push(word); }
  saveStarred(s);
  renderCardList();
}

function speakWord(text, lang) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang || 'en-US';
  u.rate = 0.9;
  speechSynthesis.speak(u);
}

function fcSpeak() {
  if (fcVocab.length === 0) return;
  const v = fcVocab[fcIdx];
  const isFlipped = document.getElementById('fcCard').classList.contains('flipped');
  if ((fcMode === 'en' && !isFlipped) || (fcMode === 'vi' && isFlipped)) {
    speakWord(v.word, 'en-US');
  } else {
    speakWord(v.meaning, 'vi-VN');
  }
}

function fcToggleStar() {
  if (fcVocab.length === 0) return;
  const v = fcVocab[fcIdx];
  toggleStar(v.word);
  updateFcStarBtn();
}

function updateFcStarBtn() {
  if (fcVocab.length === 0) return;
  const v = fcVocab[fcIdx];
  const btn = document.getElementById('fcStarBtn');
  const starred = isStarred(v.word);
  btn.classList.toggle('starred', starred);
  btn.querySelector('svg').setAttribute('fill', starred ? 'currentColor' : 'none');
}

function speakQuizTerm() {
  const item = quizItems[quizIdx];
  if (!item) return;
  speakWord(quizCurrentDir === 'en' ? item.word : item.meaning, quizCurrentDir === 'en' ? 'en-US' : 'vi-VN');
}

function speakQtTerm() {
  const item = quizItems[quizIdx];
  if (!item) return;
  speakWord(quizCurrentDir === 'en' ? item.word : item.meaning, quizCurrentDir === 'en' ? 'en-US' : 'vi-VN');
}

function renderCardList() {
  let items = clVocab.slice();
  const query = (document.getElementById('clSearch').value || '').toLowerCase().trim();
  if (query) {
    items = items.filter(v => v.word.toLowerCase().includes(query) || (v.meaning || '').toLowerCase().includes(query));
  }
  if (clStarOnly) {
    const starred = getStarred();
    items = items.filter(v => starred.includes(v.word));
  }

  if (items.length === 0) {
    document.getElementById('clList').innerHTML = '<div style="text-align:center;color:#94a3b8;padding:40px 0;">No words found</div>';
    return;
  }

  const starred = getStarred();
  let html = '';
  items.forEach((v, i) => {
    const isStar = starred.includes(v.word);
    html += `<div class="cl-card">
      <div class="cl-card-word" onclick="speakWord('${v.word.replace(/'/g, "\\'")}', 'en-US')">${v.word}</div>
      <div class="cl-card-meaning ${clHideMeaning ? '' : 'show'}" onclick="this.classList.toggle('show')">${v.meaning || '<span style=color:#ccc>no meaning</span>'}</div>
      <div class="cl-card-actions">
        <button class="cl-card-btn ${isStar ? 'starred' : ''}" onclick="toggleStar('${v.word.replace(/'/g, "\\'")}')" title="Star">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isStar ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </button>
        <button class="cl-card-btn" onclick="speakWord('${v.word.replace(/'/g, "\\'")}', 'en-US')" title="Listen">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
        </button>
      </div>
    </div>`;
  });
  document.getElementById('clList').innerHTML = html;
}

function filterCardList() { renderCardList(); }

function toggleHideMeaning() {
  clHideMeaning = !clHideMeaning;
  document.getElementById('clHideMeaning').classList.toggle('active', !clHideMeaning);
  renderCardList();
}

function toggleStarFilter() {
  clStarOnly = !clStarOnly;
  document.getElementById('clStarFilter').classList.toggle('active', clStarOnly);
  renderCardList();
}

function renderFlashcard() {
  const card = document.getElementById('fcCard');
  const front = document.getElementById('fcFront');
  const back = document.getElementById('fcBack');
  const progress = document.getElementById('fcProgress');
  const fill = document.getElementById('fcProgressFill');
  const countEl = document.getElementById('fcCount');

  card.classList.remove('flipped');

  if (fcVocab.length === 0) {
    front.textContent = '';
    back.textContent = '';
    progress.textContent = '0 / 0';
    if (fill) fill.style.width = '0%';
    if (countEl) countEl.textContent = '0 words';
    front.innerHTML = '<div class="fc-empty">No vocabulary yet.<br>Select a word in a question to add!</div>';
    return;
  }

  const v = fcVocab[fcIdx];
  if (fcMode === 'en') {
    front.textContent = v.word;
    back.textContent = v.meaning || '(no meaning)';
  } else {
    front.textContent = v.meaning || '(no meaning)';
    back.textContent = v.word;
  }
  progress.textContent = (fcIdx + 1) + ' / ' + fcVocab.length;
  if (fill) fill.style.width = ((fcIdx + 1) / fcVocab.length * 100) + '%';
  if (countEl) countEl.textContent = fcVocab.length + ' words';
  updateFcStarBtn();
}

function flipCard() {
  if (fcVocab.length === 0) return;
  document.getElementById('fcCard').classList.toggle('flipped');
}

function fcPrev() {
  if (fcVocab.length === 0) return;
  fcIdx = (fcIdx - 1 + fcVocab.length) % fcVocab.length;
  renderFlashcard();
}

function fcNext() {
  if (fcVocab.length === 0) return;
  fcIdx = (fcIdx + 1) % fcVocab.length;
  renderFlashcard();
}

function fcShuffle() {
  if (fcVocab.length < 2) return;
  for (let i = fcVocab.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcVocab[i], fcVocab[j]] = [fcVocab[j], fcVocab[i]];
  }
  fcIdx = 0;
  renderFlashcard();
  showToast('Cards shuffled!');
}

async function fcEdit() {
  if (fcVocab.length === 0) return;
  const v = fcVocab[fcIdx];
  const newMeaning = await customDialog({
    title: 'Edit Meaning',
    body: v.word,
    isPrompt: true,
    inputValue: v.meaning || '',
    okText: 'Save'
  });
  if (newMeaning === null) return;
  if (!newMeaning.trim()) { showToast('Meaning cannot be empty!'); return; }
  v.meaning = newMeaning.trim();
  const all = getVocab();
  const match = all.find(x => x.word === v.word);
  if (match) match.meaning = v.meaning;
  saveVocab(all);
  renderFlashcard();
  showToast('Updated!');
}

async function fcDelete() {
  if (fcVocab.length === 0) return;
  const v = fcVocab[fcIdx];
  const ok = await customDialog({
    title: 'Delete Word',
    body: 'Remove "' + v.word + '" from vocabulary?',
    okText: 'Delete',
    danger: true
  });
  if (!ok) return;
  const all = getVocab();
  const idx = all.findIndex(x => x.word === v.word);
  if (idx >= 0) all.splice(idx, 1);
  saveVocab(all);
  fcVocab.splice(fcIdx, 1);
  if (fcIdx >= fcVocab.length) fcIdx = Math.max(0, fcVocab.length - 1);
  renderFlashcard();
  showToast('Word removed!');
}

async function clearAllVocab() {
  const ok = await customDialog({
    title: 'Clear All Vocabulary',
    body: 'Are you sure you want to delete all words?',
    okText: 'Delete All',
    danger: true
  });
  if (!ok) return;
  saveVocab([]);
  fcVocab = [];
  fcIdx = 0;
  renderFlashcard();
  showToast('All words cleared!');
}

/* ========== MATCH GAME ========== */
let matchCards = [];
let matchFirstCard = null;
let matchPairsLeft = 0;
let matchTimerInterval = null;
let matchStartTime = 0;
let matchLocked = false;

function startMatch() {
  const vocab = fcVocab.filter(v => v.meaning);
  if (vocab.length < 2) {
    showToast('Need at least 2 words with meanings!');
    return;
  }

  // Take up to 6 pairs (12 cards) for a good grid
  const shuffled = vocab.slice().sort(() => Math.random() - 0.5);
  const pairs = shuffled.slice(0, Math.min(6, shuffled.length));
  matchPairsLeft = pairs.length;

  // Create cards: one EN + one VI per pair
  matchCards = [];
  pairs.forEach((v, i) => {
    matchCards.push({ id: i * 2, pairId: i, text: v.word, type: 'en' });
    matchCards.push({ id: i * 2 + 1, pairId: i, text: v.meaning, type: 'vi' });
  });
  // Shuffle cards
  matchCards.sort(() => Math.random() - 0.5);

  matchFirstCard = null;
  matchLocked = false;

  // Render grid
  const grid = document.getElementById('matchGrid');
  const cols = matchCards.length <= 8 ? 4 : 4;
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  grid.innerHTML = matchCards.map(c =>
    `<button class="match-card" data-id="${c.id}" onclick="clickMatchCard(${c.id})">${c.text}</button>`
  ).join('');

  document.getElementById('matchComplete').style.display = 'none';
  grid.style.display = '';

  // Start timer
  if (matchTimerInterval) clearInterval(matchTimerInterval);
  matchStartTime = Date.now();
  document.getElementById('matchTimer').textContent = '0.0';
  matchTimerInterval = setInterval(() => {
    const elapsed = ((Date.now() - matchStartTime) / 1000).toFixed(1);
    document.getElementById('matchTimer').textContent = elapsed;
  }, 100);
}

function clickMatchCard(id) {
  if (matchLocked) return;
  const card = matchCards.find(c => c.id === id);
  const el = document.querySelector(`.match-card[data-id="${id}"]`);
  if (!card || !el || el.classList.contains('matched') || el.classList.contains('selected')) return;

  el.classList.add('selected');

  if (!matchFirstCard) {
    matchFirstCard = { card, el };
    return;
  }

  const first = matchFirstCard;
  matchFirstCard = null;

  // Check match: must be same pairId but different type (en vs vi)
  if (first.card.pairId === card.pairId && first.card.type !== card.type) {
    // Match!
    playClapSound();
    first.el.classList.add('matched');
    el.classList.add('matched');
    first.el.classList.remove('selected');
    el.classList.remove('selected');
    matchPairsLeft--;

    if (matchPairsLeft <= 0) {
      // Game complete
      clearInterval(matchTimerInterval);
      matchTimerInterval = null;
      const time = ((Date.now() - matchStartTime) / 1000).toFixed(1);
      playClapSound();
      setTimeout(() => {
        document.getElementById('matchGrid').style.display = 'none';
        document.getElementById('matchCompleteTime').textContent = time + 's';
        document.getElementById('matchComplete').style.display = '';
      }, 400);
    }
  } else {
    // No match - shake red then flip back
    matchLocked = true;
    playWrongSound();
    first.el.classList.add('wrong');
    el.classList.add('wrong');
    setTimeout(() => {
      first.el.classList.remove('selected', 'wrong');
      el.classList.remove('selected', 'wrong');
      matchLocked = false;
    }, 600);
  }
}

/* ========== LAUNCH TEST FROM ACTIVITY ========== */
let vaTestType = 'choice'; // 'choice' or 'typing'

function selectVaTestType(type) {
  vaTestType = type;
  document.getElementById('vaTestTypeChoice').classList.toggle('active', type === 'choice');
  document.getElementById('vaTestTypeTyping').classList.toggle('active', type === 'typing');
}

function launchTestFromActivity(mode) {
  const vocab = fcVocab.filter(v => v.meaning);
  const minWords = vaTestType === 'choice' ? 4 : 1;
  if (vocab.length < minWords) {
    showToast(vaTestType === 'choice' ? 'Need at least 4 words!' : 'No words to test!');
    return;
  }
  quizAllVocab = getVocab().filter(v => v.meaning);
  quizMode = mode;
  quizItems = vocab.slice().sort(() => Math.random() - 0.5);
  quizIdx = 0;
  quizCorrect = 0;
  quizWrong = 0;
  quizAnswered = false;

  if (vaTestType === 'typing') {
    document.getElementById('quizTypingOverlay').classList.add('show');
    updateQtScore();
    showQtQuestion();
  } else {
    document.getElementById('quizOverlay').classList.add('show');
    updateQuizScoreInline();
    showQuizQuestion();
  }
}

/* ========== VOCAB QUIZ (Multiple Choice - Quizlet style) ========== */
let quizItems = [];
let quizAllVocab = []; // full vocab pool for generating wrong options
let quizIdx = 0;
let quizMode = 'mix'; // 'mix' = random EN/VI per question
let quizCorrect = 0;
let quizWrong = 0;
let quizAnswered = false;
let quizCurrentDir = 'en'; // direction for current question
let quizCorrectOptionIdx = -1; // index of correct option (0-3)

let quizSelectedTestNum = null; // null = all, number = specific test, -1 = uncategorized
let quizType = 'choice'; // 'choice' or 'typing'

function selectQuizType(type, btnEl) {
  quizType = type;
  document.getElementById('quizTypeChoice').classList.toggle('active', type === 'choice');
  document.getElementById('quizTypeTyping').classList.toggle('active', type === 'typing');
}

function showQuizModeSelect() {
  const allVocab = getVocab().filter(v => v.meaning);
  if (allVocab.length === 0) {
    showToast('No words with meanings to quiz!');
    return;
  }

  // Build test list
  const groups = {};
  const noTest = [];
  allVocab.forEach(v => {
    if (v.testNum) {
      if (!groups[v.testNum]) groups[v.testNum] = [];
      groups[v.testNum].push(v);
    } else {
      noTest.push(v);
    }
  });

  const listEl = document.getElementById('quizTestList');
  let html = '';

  // "All" option (default selected)
  html += `<button class="quiz-test-chip active" data-quiz-test="all" onclick="selectQuizTest(null, this)">All (${allVocab.length})</button>`;

  const sourceOrder = ['2026', 'study4', '2024', '2023'];
  sourceOrder.forEach(source => {
    const testsInSource = Object.keys(groups).map(Number).filter(t => getTestSource(t) === source).sort((a, b) => a - b);
    testsInSource.forEach(testNum => {
      const count = groups[testNum].length;
      html += `<button class="quiz-test-chip" data-quiz-test="${testNum}" onclick="selectQuizTest(${testNum}, this)">${getSourceLabel(source)} T${getDisplayTestNum(testNum)} (${count})</button>`;
    });
  });

  if (noTest.length > 0) {
    html += `<button class="quiz-test-chip" data-quiz-test="-1" onclick="selectQuizTest(-1, this)">Other (${noTest.length})</button>`;
  }

  listEl.innerHTML = html;
  quizSelectedTestNum = null;
  quizType = 'choice';
  document.getElementById('quizTypeChoice').classList.add('active');
  document.getElementById('quizTypeTyping').classList.remove('active');

  document.getElementById('quizModeOverlay').classList.add('show');
}

function selectQuizTest(testNum, btnEl) {
  quizSelectedTestNum = testNum;
  document.querySelectorAll('.quiz-test-chip').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
}

function closeQuizModeSelect() {
  document.getElementById('quizModeOverlay').classList.remove('show');
}

function launchQuiz(mode) {
  const allVocab = getVocab().filter(v => v.meaning);
  let vocab;
  if (quizSelectedTestNum === null) {
    vocab = allVocab;
  } else if (quizSelectedTestNum === -1) {
    vocab = allVocab.filter(v => !v.testNum);
  } else {
    vocab = allVocab.filter(v => v.testNum === quizSelectedTestNum);
  }

  const minWords = quizType === 'choice' ? 4 : 1;
  if (vocab.length < minWords) {
    showToast(quizType === 'choice' ? 'Need at least 4 words to quiz!' : 'No words to quiz!');
    return;
  }

  closeQuizModeSelect();
  quizAllVocab = allVocab;
  quizMode = mode;
  quizItems = vocab.slice().sort(() => Math.random() - 0.5);
  quizIdx = 0;
  quizCorrect = 0;
  quizWrong = 0;
  quizAnswered = false;

  if (quizType === 'typing') {
    document.getElementById('quizTypingOverlay').classList.add('show');
    updateQtScore();
    showQtQuestion();
  } else {
    document.getElementById('quizOverlay').classList.add('show');
    updateQuizScoreInline();
    showQuizQuestion();
  }
}

function generateOptions(correctItem, allVocab, dir) {
  // dir = 'en' means question is English word, options are Vietnamese meanings
  // dir = 'vi' means question is Vietnamese meaning, options are English words
  const correctVal = dir === 'en' ? correctItem.meaning : correctItem.word;
  const field = dir === 'en' ? 'meaning' : 'word';

  // Get unique wrong options from all vocab
  const others = allVocab.filter(v => v.word !== correctItem.word && v[field] !== correctVal);
  // Shuffle and pick 3
  const shuffled = others.sort(() => Math.random() - 0.5);
  const wrongOptions = [];
  const usedVals = new Set([correctVal.toLowerCase()]);
  for (const v of shuffled) {
    const val = v[field];
    if (!usedVals.has(val.toLowerCase())) {
      wrongOptions.push(val);
      usedVals.add(val.toLowerCase());
    }
    if (wrongOptions.length >= 3) break;
  }

  // Build options array with correct answer at random position
  const options = [...wrongOptions];
  const correctIdx = Math.floor(Math.random() * 4);
  options.splice(correctIdx, 0, correctVal);
  return { options, correctIdx };
}

function showQuizQuestion() {
  const item = quizItems[quizIdx];
  document.getElementById('quizProgress').textContent = (quizIdx + 1) + '/' + quizItems.length;

  // Determine direction for this question
  if (quizMode === 'mix') {
    quizCurrentDir = Math.random() < 0.5 ? 'en' : 'vi';
  } else {
    quizCurrentDir = quizMode;
  }

  if (quizCurrentDir === 'en') {
    document.getElementById('quizLabel').textContent = 'English → Choose the Vietnamese meaning';
    document.getElementById('quizTerm').textContent = item.word;
  } else {
    document.getElementById('quizLabel').textContent = 'Vietnamese → Choose the English word';
    document.getElementById('quizTerm').textContent = item.meaning;
  }

  // Generate 4 options
  const { options, correctIdx } = generateOptions(item, quizAllVocab, quizCurrentDir);
  quizCorrectOptionIdx = correctIdx;

  // Render option buttons
  const optionsEl = document.getElementById('quizOptions');
  optionsEl.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = '<span class="quiz-option-label">' + labels[i] + '</span><span class="quiz-option-text">' + opt + '</span>';
    btn.onclick = () => selectQuizOption(i);
    optionsEl.appendChild(btn);
  });

  document.getElementById('quizFeedback').style.display = 'none';
  document.getElementById('quizNextBtn').style.display = 'none';
  quizAnswered = false;
}

function selectQuizOption(idx) {
  if (quizAnswered) return;
  quizAnswered = true;

  const optionBtns = document.querySelectorAll('.quiz-option');
  const isCorrect = idx === quizCorrectOptionIdx;

  // Highlight correct answer
  optionBtns[quizCorrectOptionIdx].classList.add('correct');

  if (isCorrect) {
    quizCorrect++;
    playClapSound();
    const fb = document.getElementById('quizFeedback');
    fb.style.display = 'block';
    fb.className = 'quiz-feedback correct';
    fb.textContent = 'Correct!';
  } else {
    // Highlight wrong selection
    optionBtns[idx].classList.add('wrong');
    quizWrong++;
    playWrongSound();
    const fb = document.getElementById('quizFeedback');
    fb.style.display = 'block';
    fb.className = 'quiz-feedback wrong';
    fb.textContent = 'Wrong!';
  }

  // Disable all options
  optionBtns.forEach(btn => btn.classList.add('disabled'));

  updateQuizScoreInline();

  // Show next button
  const nextBtn = document.getElementById('quizNextBtn');
  nextBtn.style.display = '';
  nextBtn.textContent = quizIdx < quizItems.length - 1 ? 'Next' : 'Result';
}

function updateQuizScoreInline() {
  document.getElementById('quizScoreCorrectInline').textContent = quizCorrect;
  document.getElementById('quizScoreWrongInline').textContent = quizWrong;
}

function skipQuiz() {
  if (!quizAnswered) {
    quizAnswered = true;
    quizWrong++;
    playWrongSound();

    const optionBtns = document.querySelectorAll('.quiz-option');
    optionBtns[quizCorrectOptionIdx].classList.add('correct');
    optionBtns.forEach(btn => btn.classList.add('disabled'));

    const fb = document.getElementById('quizFeedback');
    fb.style.display = 'block';
    fb.className = 'quiz-feedback wrong';
    fb.textContent = 'Skipped!';

    updateQuizScoreInline();

    const nextBtn = document.getElementById('quizNextBtn');
    nextBtn.style.display = '';
    nextBtn.textContent = quizIdx < quizItems.length - 1 ? 'Next' : 'Result';
  } else {
    nextQuiz();
  }
}

function nextQuiz() {
  quizIdx++;
  if (quizIdx >= quizItems.length) {
    closeQuiz();
    showQuizResult();
    return;
  }
  showQuizQuestion();
}

function closeQuiz() {
  document.getElementById('quizOverlay').classList.remove('show');
}

function showQuizResult() {
  const total = quizCorrect + quizWrong;
  const pct = total > 0 ? Math.round(quizCorrect / total * 100) : 0;
  document.getElementById('quizCorrectCount').textContent = quizCorrect;
  document.getElementById('quizWrongCount').textContent = quizWrong;
  document.getElementById('quizScorePct').textContent = pct + '%';
  document.getElementById('quizResultOverlay').classList.add('show');
  if (pct === 100) playClapSound();
}

function closeQuizResult() {
  document.getElementById('quizResultOverlay').classList.remove('show');
}

/* ========== TYPING QUIZ ========== */
let qtAnswered = false;

function normalizeAnswer(s) {
  return s.toLowerCase().trim().replace(/\s+/g, ' ');
}

function updateQtScore() {
  document.getElementById('qtScoreCorrect').textContent = quizCorrect;
  document.getElementById('qtScoreWrong').textContent = quizWrong;
}

function showQtQuestion() {
  const item = quizItems[quizIdx];
  document.getElementById('qtProgress').textContent = (quizIdx + 1) + '/' + quizItems.length;

  if (quizMode === 'mix') {
    quizCurrentDir = Math.random() < 0.5 ? 'en' : 'vi';
  } else {
    quizCurrentDir = quizMode;
  }

  if (quizCurrentDir === 'en') {
    document.getElementById('qtLabel').textContent = 'English → Type the Vietnamese meaning';
    document.getElementById('qtTerm').textContent = item.word;
  } else {
    document.getElementById('qtLabel').textContent = 'Vietnamese → Type the English word';
    document.getElementById('qtTerm').textContent = item.meaning;
  }
  document.getElementById('qtInput').value = '';
  document.getElementById('qtInput').disabled = false;
  document.getElementById('qtInput').placeholder = quizCurrentDir === 'en' ? 'Type Vietnamese meaning...' : 'Type English word...';
  document.getElementById('qtFeedback').style.display = 'none';
  document.getElementById('qtNextBtn').textContent = 'Check';
  qtAnswered = false;
  setTimeout(() => document.getElementById('qtInput').focus(), 100);
}

function checkQuizTyping() {
  if (qtAnswered) { nextQtQuiz(); return; }
  const item = quizItems[quizIdx];
  const input = document.getElementById('qtInput').value.trim();
  if (!input) return;

  const correctAnswer = quizCurrentDir === 'en' ? item.meaning : item.word;
  const isCorrect = normalizeAnswer(input) === normalizeAnswer(correctAnswer);

  const fb = document.getElementById('qtFeedback');
  fb.style.display = 'block';
  if (isCorrect) {
    fb.className = 'quiz-feedback correct';
    fb.textContent = 'Correct!';
    quizCorrect++;
    playClapSound();
  } else {
    fb.className = 'quiz-feedback wrong';
    fb.textContent = 'Wrong! Answer: ' + correctAnswer;
    quizWrong++;
    playWrongSound();
  }

  document.getElementById('qtInput').disabled = true;
  document.getElementById('qtNextBtn').textContent = quizIdx < quizItems.length - 1 ? 'Next' : 'Result';
  qtAnswered = true;
  updateQtScore();
}

function skipQuizTyping() {
  if (!qtAnswered) {
    const item = quizItems[quizIdx];
    const correctAnswer = quizCurrentDir === 'en' ? item.meaning : item.word;
    const fb = document.getElementById('qtFeedback');
    fb.style.display = 'block';
    fb.className = 'quiz-feedback wrong';
    fb.textContent = 'Answer: ' + correctAnswer;
    quizWrong++;
    playWrongSound();
    document.getElementById('qtInput').disabled = true;
    document.getElementById('qtNextBtn').textContent = quizIdx < quizItems.length - 1 ? 'Next' : 'Result';
    qtAnswered = true;
    updateQtScore();
  } else {
    nextQtQuiz();
  }
}

function nextQtQuiz() {
  quizIdx++;
  if (quizIdx >= quizItems.length) {
    closeQuizTyping();
    showQuizResult();
    return;
  }
  showQtQuestion();
}

function closeQuizTyping() {
  document.getElementById('quizTypingOverlay').classList.remove('show');
}

// Keyboard support for quiz: 1-4 or A-D to select, Enter/Space for next
document.addEventListener('keydown', function(e) {
  const overlay = document.getElementById('quizOverlay');
  if (!overlay.classList.contains('show')) return;

  const key = e.key.toLowerCase();
  if (!quizAnswered) {
    if (key === '1' || key === 'a') { selectQuizOption(0); e.preventDefault(); }
    else if (key === '2' || key === 'b') { selectQuizOption(1); e.preventDefault(); }
    else if (key === '3' || key === 'c') { selectQuizOption(2); e.preventDefault(); }
    else if (key === '4' || key === 'd') { selectQuizOption(3); e.preventDefault(); }
  } else {
    if (key === 'enter' || key === ' ') { nextQuiz(); e.preventDefault(); }
  }
});

/* ========== EXPLAIN ========== */
function getExplainFor(testNum, qNum) {
  const found = allQuestions.find(q => q.testNum === testNum && q.qNum === qNum);
  return found ? found.explain || '' : '';
}

function toggleExplain(bubbleId) {
  const bubble = document.getElementById(bubbleId);
  if (!bubble) return;
  bubble.style.display = bubble.style.display === 'none' ? 'block' : 'none';
}

/* ========== COMMENTS (Word-style) ========== */
function getComments() {
  try { return JSON.parse(localStorage.getItem('toeic_comments') || '{}'); } catch { return {}; }
}
function saveComments(obj) { localStorage.setItem('toeic_comments', JSON.stringify(obj)); }
function commentKey(testNum, qNum) { return testNum + '_' + qNum; }

function toggleComment(testNum, qNum, cardId) {
  const bubble = document.getElementById('cb-' + cardId);
  if (!bubble) return;
  if (bubble.classList.contains('show')) {
    bubble.classList.remove('show');
  } else {
    const comments = getComments();
    const key = commentKey(testNum, qNum);
    const existing = comments[key];
    if (existing) {
      showCommentDisplay(bubble, testNum, qNum, existing);
    } else {
      showCommentEditor(bubble, testNum, qNum, '');
    }
    bubble.classList.add('show');
  }
}

function showCommentEditor(bubble, testNum, qNum, text) {
  bubble.innerHTML = `
    <div class="comment-bubble-header">
      <span>Comment</span>
    </div>
    <textarea class="comment-textarea" placeholder="Ghi chú cho câu hỏi này..." id="ct-input-${bubble.id}">${text}</textarea>
    <div class="comment-save-row">
      <button class="comment-save-btn cancel" onclick="closeComment('${bubble.id}')">Hủy</button>
      <button class="comment-save-btn save" onclick="saveComment(${testNum},${qNum},'${bubble.id}')">Lưu</button>
    </div>`;
  setTimeout(() => {
    const ta = document.getElementById('ct-input-' + bubble.id);
    if (ta) ta.focus();
  }, 50);
}

function showCommentDisplay(bubble, testNum, qNum, data) {
  bubble.innerHTML = `
    <div class="comment-bubble-header">
      <span>Comment</span>
      <div class="comment-bubble-actions">
        <button onclick="editComment(${testNum},${qNum},'${bubble.id}')" title="Sửa">✏️</button>
        <button class="comment-delete" onclick="deleteComment(${testNum},${qNum},'${bubble.id}')" title="Xóa">🗑️</button>
      </div>
    </div>
    <div class="comment-display">${escapeHtml(data.text)}</div>
    <div class="comment-time">${data.time || ''}</div>`;
}

function saveComment(testNum, qNum, bubbleId) {
  const bubble = document.getElementById(bubbleId);
  const ta = document.getElementById('ct-input-' + bubbleId);
  if (!ta || !ta.value.trim()) return;
  const comments = getComments();
  const key = commentKey(testNum, qNum);
  comments[key] = {
    text: ta.value.trim(),
    time: new Date().toLocaleString('vi-VN')
  };
  saveComments(comments);
  showCommentDisplay(bubble, testNum, qNum, comments[key]);
  // Update button state
  updateCommentBtn(testNum, qNum, true);
  showToast('Đã lưu comment');
}

function editComment(testNum, qNum, bubbleId) {
  const bubble = document.getElementById(bubbleId);
  const comments = getComments();
  const key = commentKey(testNum, qNum);
  const existing = comments[key];
  showCommentEditor(bubble, testNum, qNum, existing ? existing.text : '');
}

function deleteComment(testNum, qNum, bubbleId) {
  const comments = getComments();
  const key = commentKey(testNum, qNum);
  delete comments[key];
  saveComments(comments);
  const bubble = document.getElementById(bubbleId);
  if (bubble) { bubble.classList.remove('show'); bubble.innerHTML = ''; }
  updateCommentBtn(testNum, qNum, false);
  showToast('Đã xóa comment');
}

function closeComment(bubbleId) {
  const bubble = document.getElementById(bubbleId);
  if (bubble) bubble.classList.remove('show');
}

function updateCommentBtn(testNum, qNum, hasComment) {
  document.querySelectorAll(`.comment-btn[data-comment-key="${testNum}_${qNum}"]`).forEach(btn => {
    if (hasComment) btn.classList.add('has-comment');
    else btn.classList.remove('has-comment');
  });
}

function hasComment(testNum, qNum) {
  const comments = getComments();
  return !!comments[commentKey(testNum, qNum)];
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* Measure top-bar height and set CSS variable */
function updateTopbarHeight() {
  const bar = document.querySelector('.top-bar');
  if (bar) document.documentElement.style.setProperty('--topbar-h', bar.offsetHeight + 'px');
}
window.addEventListener('resize', updateTopbarHeight);
// Call after each render/tab change
const _origBuildTabs = buildTabs;
buildTabs = function() { _origBuildTabs(); setTimeout(updateTopbarHeight, 10); };

/* Start */
updateBookmarkCount();
updateVocabCount();
init();
updateTopbarHeight();
