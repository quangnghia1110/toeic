/* ========== LISTENING SECTION ========== */

let listenState = {
  currentTest: null,
  currentPart: null,
  questions: [],
  userAnswers: {},
  submitted: false,
  reviewMode: false
};

function initListening() {
  document.getElementById('topBar').style.display = '';
  document.getElementById('tabs').style.display = 'none';
  document.getElementById('listenHome').style.display = '';
  document.getElementById('listenPractice').style.display = 'none';
  document.getElementById('listenFillView').style.display = 'none';
  document.getElementById('listenHistoryView').style.display = 'none';
  document.getElementById('listenHistoryReviewView').style.display = 'none';
  document.getElementById('listenBookmarkView').style.display = 'none';
  document.getElementById('mainView').style.display = 'none';
  renderListenHome();
  updateListenBookmarkCount();
}

function renderListenHome() {
  const container = document.getElementById('listenTestList');
  let html = '';
  for (const [key, test] of Object.entries(listenTests)) {
    const fillData = listenFillData[key];
    const f1 = fillData && fillData.part1 ? fillData.part1.length : 0;
    const f2 = fillData && fillData.part2 ? fillData.part2.length : 0;
    const f3 = fillData && fillData.part3 ? fillData.part3.length : 0;
    const f4 = fillData && fillData.part4 ? fillData.part4.length : 0;
    const fAll = f1 + f2 + f3 + f4;

    html += `
      <div class="listen-test-card glass">
        <div class="listen-test-name">${test.name}</div>
        <div class="listen-test-info">Listen & Fill</div>
        ${fAll > 0 ? `
        <div class="listen-parts-row">
          ${f1 > 0 ? `<span class="listen-part-chip listen-part-fill" onclick="startListenFill('${key}','part1')">Part 1 (${f1})</span>` : ''}
          ${f2 > 0 ? `<span class="listen-part-chip listen-part-fill" onclick="startListenFill('${key}','part2')">Part 2 (${f2})</span>` : ''}
          ${f3 > 0 ? `<span class="listen-part-chip listen-part-fill" onclick="startListenFill('${key}','part3')">Part 3 (${f3})</span>` : ''}
          ${f4 > 0 ? `<span class="listen-part-chip listen-part-fill" onclick="startListenFill('${key}','part4')">Part 4 (${f4})</span>` : ''}
          <span class="listen-part-chip listen-part-fill" onclick="startListenFill('${key}','all')">All (${fAll})</span>
        </div>` : ''}
      </div>`;
  }
  container.innerHTML = html;
}

function selectListenTest(testKey) {
  startListenPart(testKey, 'all');
}

function startListenPart(testKey, part) {
  const test = listenTests[testKey];
  if (!test) return;
  listenState.currentTest = testKey;
  listenState.currentPart = part;
  listenState.userAnswers = {};
  listenState.submitted = false;
  listenState.reviewMode = false;
  listenState.questions = [];

  if (part === 'part1' || part === 'all') {
    (test.part1 || []).forEach(q => {
      listenState.questions.push({ ...q, part: 1, passage: null });
    });
  }
  if (part === 'part2' || part === 'all') {
    (test.part2 || []).forEach(q => {
      listenState.questions.push({ ...q, part: 2, passage: null });
    });
  }
  if (part === 'part3' || part === 'all') {
    (test.part3 || []).forEach(group => {
      group.questions.forEach(q => {
        listenState.questions.push({ ...q, part: 3, passage: group.passage });
      });
    });
  }
  if (part === 'part4' || part === 'all') {
    (test.part4 || []).forEach(group => {
      group.questions.forEach(q => {
        listenState.questions.push({ ...q, part: 4, passage: group.passage });
      });
    });
  }

  // Build audio players
  listenState.audioParts = [];
  if (test.audio) {
    if (part === 'all') {
      ['part1','part2','part3','part4'].forEach(p => {
        if (test.audio[p]) listenState.audioParts.push({ label: p.replace('part','Part '), src: test.audio[p] });
      });
    } else if (test.audio[part]) {
      listenState.audioParts.push({ label: part.replace('part','Part '), src: test.audio[part] });
    }
  }

  document.getElementById('listenHome').style.display = 'none';
  document.getElementById('listenPractice').style.display = 'flex';
  renderListenAudio();
  renderListenQuestions();
  renderListenGrid();
  updateListenProgress();
  // Apply current translate state
  const listenQL = document.getElementById('listenQuestionList');
  if (listenQL) listenQL.classList.toggle('show-vi', showVi);
  window.scrollTo(0, 0);
}

/* AUDIO PLAYER FOR MCQ */
let listenAudioEls = [];

function renderListenAudio() {
  const container = document.getElementById('listenAudioPlayers');
  listenAudioEls = [];
  if (!listenState.audioParts.length) {
    container.innerHTML = '';
    return;
  }
  let html = '';
  listenState.audioParts.forEach((ap, i) => {
    html += `
      <div class="listen-audio-row glass">
        <div class="listen-audio-label">${ap.label}</div>
        <button class="fill-audio-btn fill-play-btn" onclick="toggleListenAudio(${i})" id="listenPlayBtn${i}" title="Play">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
        <button class="fill-audio-btn" onclick="rewindListenAudio(${i})" title="Rewind 5s">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
        </button>
        <input type="range" class="listen-audio-seek" id="listenSeek${i}" min="0" max="100" value="0" step="0.1" oninput="seekListenAudio(${i},this)">
        <span class="fill-audio-time" id="listenTime${i}">0:00 / 0:00</span>
        <select class="listen-speed-select" onchange="setListenSpeed(${i},this.value)">
          <option value="0.5">0.5x</option>
          <option value="0.75">0.75x</option>
          <option value="1" selected>1x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
        </select>
        <audio id="listenAudio${i}" src="${ap.src}" preload="metadata"></audio>
      </div>`;
  });
  container.innerHTML = html;

  // Setup audio events
  listenState.audioParts.forEach((ap, i) => {
    const audio = document.getElementById('listenAudio' + i);
    listenAudioEls.push(audio);
    audio.addEventListener('timeupdate', () => updateListenAudioUI(i));
    audio.addEventListener('loadedmetadata', () => updateListenAudioUI(i));
    audio.addEventListener('ended', () => {
      document.getElementById('listenPlayBtn' + i).innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
    });
  });
}

function toggleListenAudio(i) {
  const audio = listenAudioEls[i];
  if (!audio) return;
  const btn = document.getElementById('listenPlayBtn' + i);
  if (audio.paused) {
    audio.play();
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
  } else {
    audio.pause();
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  }
}

function rewindListenAudio(i) {
  const audio = listenAudioEls[i];
  if (audio) audio.currentTime = Math.max(0, audio.currentTime - 5);
}

function seekListenAudio(i, el) {
  const audio = listenAudioEls[i];
  if (audio && audio.duration) audio.currentTime = (el.value / 100) * audio.duration;
}

function setListenSpeed(i, val) {
  const audio = listenAudioEls[i];
  if (audio) audio.playbackRate = parseFloat(val);
}

function updateListenAudioUI(i) {
  const audio = listenAudioEls[i];
  if (!audio) return;
  const seek = document.getElementById('listenSeek' + i);
  const time = document.getElementById('listenTime' + i);
  if (audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    seek.value = pct;
    seek.style.background = `linear-gradient(90deg,#3b82f6 ${pct}%,#e2e8f0 ${pct}%)`;
  }
  const fmt = s => { const m = Math.floor(s/60); return m + ':' + String(Math.floor(s%60)).padStart(2,'0'); };
  time.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration || 0);
}

function renderListenQuestions() {
  const container = document.getElementById('listenQuestionList');
  let html = '';
  let lastPassage = null;
  let lastPart = null;
  let groupCounters = { 3: 0, 4: 0 };

  listenState.questions.forEach((q, idx) => {
    if (q.part !== lastPart) {
      lastPart = q.part;
      const partLabels = { 1: 'Part 1: Photographs', 2: 'Part 2: Question-Response', 3: 'Part 3: Conversations', 4: 'Part 4: Talks' };
      html += `<div class="listen-part-header">${partLabels[q.part]}</div>`;
      lastPassage = null;
    }

    if ((q.part === 3 || q.part === 4) && q.passage && q.passage !== lastPassage) {
      lastPassage = q.passage;
      const groupIdx = groupCounters[q.part]++;
      const passageHtml = q.passage.replace(/\n/g, '<br>');
      const passageVi = q.passageVi ? `<div class="q-vi-text" style="margin-top:8px;">${q.passageVi.replace(/\n/g, '<br>')}</div>` : '';
      html += `<div class="listen-passage glass">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
          <button class="listen-replay-btn" onclick="seekToPassage(${q.part},${groupIdx})" title="Replay this passage audio">\u{1F50A}</button>
          <span style="font-size:0.7rem;color:#94a3b8;">Group ${groupIdx + 1}</span>
        </div>
        ${passageHtml}${passageVi}
      </div>`;
    }

    const letters = q.options.length === 3 ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D'];
    const selected = listenState.userAnswers[q.id];
    const isSubmitted = listenState.submitted;
    const bookmarked = isListenBookmarked(listenState.currentTest, q.id);

    html += `<div class="q-card glass" id="lq${q.id}">`;
    html += `<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;"><span class="q-number">${q.id}</span>`;
    html += `<span style="margin-left:auto;"><button class="bookmark-btn${bookmarked ? ' active' : ''}" onclick="event.stopPropagation();toggleListenBookmark('${listenState.currentTest}',${q.id},this)" title="Bookmark">${bookmarked ? '\u{1F516}' : '\u{1F3F7}\u{FE0F}'}</button></span>`;
    html += `</div>`;

    if (q.question) {
      html += `<p class="q-text">${q.question}</p>`;
      if (q.questionVi) html += `<p class="q-vi-text">${q.questionVi}</p>`;
    } else if (q.part === 1) {
      html += `<p class="q-text" style="color:#94a3b8;font-style:italic;">Listen to the statement and choose the best description.</p>`;
    }

    if (q.hasGraphic) {
      html += `<div class="listen-graphic-note">* This question refers to a graphic (not available)</div>`;
    }

    html += '<div class="options">';
    q.options.forEach((opt, oi) => {
      let cls = 'opt';
      if (isSubmitted) {
        if (q.answer >= 0 && oi === q.answer) cls += ' correct';
        if (selected === oi && oi !== q.answer) cls += ' wrong';
        if (selected === oi) cls += ' selected';
      } else {
        if (selected === oi) cls += ' selected';
      }
      const optVi = q.optionsVi && q.optionsVi[oi] ? q.optionsVi[oi] : '';
      html += `<div class="${cls}" onclick="selectListenAnswer(${q.id},${oi})">`;
      html += `<div class="letter">${letters[oi]}</div>`;
      html += `<div style="flex:1"><div class="option-en">${opt}</div>${optVi ? `<div class="option-vi">${optVi}</div>` : ''}</div>`;
      html += `</div>`;
    });
    html += '</div></div>';
  });

  container.innerHTML = html;
}

let pendingListenChange = null;

function selectListenAnswer(qId, optIdx) {
  if (listenState.submitted) return;
  // Confirm dialog when changing answer (like reading)
  if (listenState.userAnswers[qId] !== undefined && listenState.userAnswers[qId] !== optIdx) {
    pendingListenChange = { qId, optIdx };
    const letters = ['A','B','C','D'];
    const old = letters[listenState.userAnswers[qId]];
    const neu = letters[optIdx];
    document.getElementById('ctText').innerHTML = `Q${qId}: <b>${old}</b> &rarr; <b>${neu}</b> ?`;
    const overlay = document.getElementById('confirmOverlay');
    overlay.classList.add('show');
    if (typeof startFire === 'function') startFire(overlay);
    return;
  }
  applyListenAnswer(qId, optIdx);
}

function applyListenAnswer(qId, optIdx) {
  listenState.userAnswers[qId] = optIdx;
  renderListenQuestions();
  renderListenGrid();
  updateListenProgress();
}

function renderListenGrid() {
  const grid = document.getElementById('listenGrid');
  let html = '';
  listenState.questions.forEach(q => {
    let cls = 'q-dot';
    const answered = listenState.userAnswers[q.id] !== undefined;
    if (listenState.submitted) {
      if (q.answer >= 0) {
        cls += listenState.userAnswers[q.id] === q.answer ? ' correct' : (answered ? ' wrong' : ' wrong');
      } else {
        cls += answered ? ' answered' : '';
      }
    } else {
      if (answered) cls += ' answered';
    }
    html += `<div class="${cls}" onclick="scrollToListenQ(${q.id})">${q.id}</div>`;
  });
  grid.innerHTML = html;
}

function scrollToListenQ(qId) {
  const el = document.getElementById('lq' + qId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function updateListenProgress() {
  const total = listenState.questions.length;
  const answered = Object.keys(listenState.userAnswers).length;
  document.getElementById('listenProgressText').textContent = `${answered} / ${total}`;
  document.getElementById('listenProgressFill').style.width = total ? (answered / total * 100) + '%' : '0%';
}

function submitListenTest() {
  const answered = Object.keys(listenState.userAnswers).length;
  if (answered === 0) {
    alert('Chưa trả lời câu nào!');
    return;
  }

  listenState.submitted = true;
  let correct = 0, wrong = 0;
  listenState.questions.forEach(q => {
    if (q.answer < 0) return;
    const ua = listenState.userAnswers[q.id];
    if (ua === undefined) return;
    if (ua === q.answer) correct++;
    else wrong++;
  });

  const gradeable = listenState.questions.filter(q => q.answer >= 0).length;
  const pct = gradeable > 0 ? Math.round(correct / gradeable * 100) : 0;

  document.getElementById('listenCorrectCount').textContent = correct;
  document.getElementById('listenWrongCount').textContent = wrong;
  document.getElementById('listenTotalCount').textContent = gradeable;
  document.getElementById('listenPctScore').textContent = pct + '%';
  document.getElementById('listenResultOverlay').classList.add('show');

  saveListenHistory();
  renderListenQuestions();
  renderListenGrid();
}

function closeListenResult() {
  document.getElementById('listenResultOverlay').classList.remove('show');
}

function resetListenTest() {
  listenState.userAnswers = {};
  listenState.submitted = false;
  listenState.reviewMode = false;
  renderListenQuestions();
  renderListenGrid();
  updateListenProgress();
  window.scrollTo(0, 0);
}

function backToListenHome() {
  listenAudioEls.forEach(a => { a.pause(); });
  listenAudioEls = [];
  document.getElementById('listenPractice').style.display = 'none';
  document.getElementById('listenFillView').style.display = 'none';
  document.getElementById('listenHistoryView').style.display = 'none';
  document.getElementById('listenHistoryReviewView').style.display = 'none';
  document.getElementById('listenBookmarkView').style.display = 'none';
  document.getElementById('listenHome').style.display = '';
  updateListenBookmarkCount();
  window.scrollTo(0, 0);
}


/* ========== LISTEN & FILL ========== */

const POS_LABELS = { v: 'Động từ', n: 'Danh từ', adj: 'Tính từ', adv: 'Trạng từ' };
const POS_COLORS = { v: '#ef4444', n: '#3b82f6', adj: '#f59e0b', adv: '#8b5cf6' };

let fillState = {
  testKey: null,
  sentences: [],
  currentIdx: 0,
  checked: false,
  results: [] // per-blank results for current sentence
};

function parseFillSentence(text) {
  // Parse "{word|pos}" patterns
  const parts = [];
  const regex = /\{([^|}]+)\|([^}]+)\}/g;
  let lastIdx = 0;
  let match;
  let blankIdx = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push({ type: 'text', value: text.slice(lastIdx, match.index) });
    }
    parts.push({ type: 'blank', word: match[1], pos: match[2], idx: blankIdx++ });
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIdx) });
  }
  return parts;
}

let fillAudio = null;

function startListenFill(testKey, part) {
  const data = listenFillData[testKey];
  if (!data) return;

  let sentences = [];
  if (part === 'all') {
    if (data.part1) data.part1.forEach((s, i) => sentences.push({ data: s, part: 'part1', idx: i }));
    if (data.part2) data.part2.forEach((s, i) => sentences.push({ data: s, part: 'part2', idx: i }));
    if (data.part3) data.part3.forEach((s, i) => sentences.push({ data: s, part: 'part3', idx: i }));
    if (data.part4) data.part4.forEach((s, i) => sentences.push({ data: s, part: 'part4', idx: i }));
  } else if (data[part]) {
    data[part].forEach((s, i) => sentences.push({ data: s, part: part, idx: i }));
  }
  if (!sentences.length) return;

  fillState.testKey = testKey;
  fillState.sentences = sentences;
  fillState.currentIdx = 0;
  fillState.checked = false;
  fillState.results = [];

  // Auto-load audio for selected part
  const test = listenTests[testKey];
  autoLoadFillAudio(test, part);

  document.getElementById('listenHome').style.display = 'none';
  document.getElementById('listenPractice').style.display = 'none';
  document.getElementById('listenFillView').style.display = '';
  document.getElementById('lfTestName').textContent = data.name || 'TEST';

  renderFillSentence();
}

function autoLoadFillAudio(test, part) {
  if (!test || !test.audio) return;
  // Auto-load the correct audio based on selected part
  if (part === 'all') {
    // For "all", load part1 audio by default
    const firstPart = ['part1','part2','part3','part4'].find(p => test.audio[p]);
    if (firstPart) loadFillAudio(test.audio[firstPart]);
  } else if (test.audio[part]) {
    loadFillAudio(test.audio[part]);
  }
}

function loadFillAudio(src) {
  const audioEl = document.getElementById('fillAudioEl');
  if (!src) {
    audioEl.src = '';
    fillAudio = null;
    return;
  }
  audioEl.src = src;
  fillAudio = audioEl;
  audioEl.load();
}

function toggleFillAudioPlay() {
  const audioEl = document.getElementById('fillAudioEl');
  const btn = document.getElementById('fillPlayBtn');
  if (!audioEl.src || audioEl.src === window.location.href) return;
  if (audioEl.paused) {
    audioEl.play();
    btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
  } else {
    audioEl.pause();
    btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  }
}

function rewindFillAudio() {
  const audioEl = document.getElementById('fillAudioEl');
  if (audioEl) audioEl.currentTime = Math.max(0, audioEl.currentTime - 3);
}

function seekFillAudio(el) {
  const audioEl = document.getElementById('fillAudioEl');
  if (audioEl && audioEl.duration) audioEl.currentTime = (el.value / 100) * audioEl.duration;
}

let fillLoopEnabled = false;
function toggleFillLoop() {
  fillLoopEnabled = !fillLoopEnabled;
  const audioEl = document.getElementById('fillAudioEl');
  if (audioEl) audioEl.loop = fillLoopEnabled;
  document.getElementById('fillLoopBtn').classList.toggle('active', fillLoopEnabled);
}

let fillSpeedIdx = 2;
const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5];
function cycleFillSpeed() {
  fillSpeedIdx = (fillSpeedIdx + 1) % SPEEDS.length;
  const speed = SPEEDS[fillSpeedIdx];
  const audioEl = document.getElementById('fillAudioEl');
  if (audioEl) audioEl.playbackRate = speed;
  document.getElementById('fillSpeedBtn').textContent = speed + 'x';
}

function initFillAudioEvents() {
  const audioEl = document.getElementById('fillAudioEl');
  if (!audioEl) return;
  audioEl.addEventListener('timeupdate', () => {
    const seek = document.getElementById('fillSeekBar');
    const timeEl = document.getElementById('fillTimeDisplay');
    if (!audioEl.duration) return;
    const pct = (audioEl.currentTime / audioEl.duration) * 100;
    seek.value = pct;
    seek.style.background = `linear-gradient(90deg,#3b82f6 ${pct}%,#e2e8f0 ${pct}%)`;
    const fmt = s => { const m = Math.floor(s/60); return m + ':' + String(Math.floor(s%60)).padStart(2,'0'); };
    timeEl.textContent = fmt(audioEl.currentTime) + ' / ' + fmt(audioEl.duration);
  });
  audioEl.addEventListener('ended', () => {
    document.getElementById('fillPlayBtn').innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>';
  });
}

// Call once on page load
document.addEventListener('DOMContentLoaded', initFillAudioEvents);

function renderFillSentence() {
  if (!fillState.sentences || !fillState.sentences.length) return;
  const entry = fillState.sentences[fillState.currentIdx];
  if (!entry) return;
  const text = entry.data[0];
  const translation = entry.data[1] || '';
  const parts = parseFillSentence(text);
  const total = fillState.sentences.length;
  const idx = fillState.currentIdx;

  // Counter
  document.getElementById('fillCounter').textContent = `${idx + 1}/${total}`;

  // Build sentence with blanks
  const sentenceEl = document.getElementById('fillSentence');

  // Show image for part1
  const fillImageEl = document.getElementById('fillImage');
  const part1ImageOffset = { "2024_1": 0, "2024_2": 6 };
  if (entry.part === 'part1') {
    const imgNum = entry.idx + 1 + (part1ImageOffset[fillState.testKey] || 0);
    fillImageEl.innerHTML = `<div class="fill-image"><img src="image/${imgNum}.png" alt="Question ${imgNum}"></div>`;
    fillImageEl.style.display = '';
  } else {
    fillImageEl.innerHTML = '';
    fillImageEl.style.display = 'none';
  }
  let html = '';
  if (!fillState.checked) {
    // INPUT MODE: render input fields
    parts.forEach(p => {
      if (p.type === 'text') {
        html += `<span class="fill-text">${p.value.replace(/\n/g, '<br>')}</span>`;
      } else {
        const width = Math.max(p.word.length * 12, 80);
        html += `<span class="fill-blank-wrap"><input type="text" class="fill-input" data-idx="${p.idx}" style="width:${width}px;" autocomplete="off" spellcheck="false"></span>`;
      }
    });
  } else {
    // RESULT MODE: show correct/wrong
    parts.forEach(p => {
      if (p.type === 'text') {
        html += `<span class="fill-text">${p.value.replace(/\n/g, '<br>')}</span>`;
      } else {
        const userVal = fillState._savedValues ? (fillState._savedValues[p.idx] || '') : '';
        const isCorrect = userVal.toLowerCase() === p.word.toLowerCase();
        if (isCorrect) {
          html += `<span class="fill-blank-result fill-correct">${p.word}</span>`;
        } else {
          html += `<span class="fill-blank-result fill-wrong"><span class="fill-wrong-text">${userVal || '&emsp;&emsp;'}</span> <span class="fill-correct-word">${p.word}</span></span>`;
        }
      }
    });
  }
  sentenceEl.innerHTML = html;

  // Translation hidden - only shows after KIỂM TRA in answer section
  document.getElementById('fillTranslation').innerHTML = '';

  // Answer section
  const answerEl = document.getElementById('fillAnswer');
  if (fillState.checked) {
    // Count results
    const inputs = sentenceEl.querySelectorAll('.fill-blank-result');
    const blanks = parts.filter(p => p.type === 'blank');
    let correct = 0;
    blanks.forEach((b, i) => {
      const el = sentenceEl.querySelectorAll('.fill-blank-result')[i];
      if (el && el.classList.contains('fill-correct')) correct++;
    });

    answerEl.style.display = '';
    answerEl.innerHTML = `
      <div class="fill-answer-section">
        <div class="fill-answer-label">Đáp án đúng:</div>
        <div class="fill-answer-text">${text.replace(/\{([^|}]+)\|[^}]+\}/g, '<b>$1</b>').replace(/\n/g, '<br>')}</div>
        <div class="fill-answer-label" style="margin-top:10px;">Bản dịch:</div>
        <div class="fill-answer-text">${translation.replace(/\n/g, '<br>')}</div>
        <div class="fill-score">${correct}/${blanks.length} từ đúng</div>
      </div>`;
  } else {
    answerEl.style.display = 'none';
  }

  // Button states
  document.getElementById('fillCheckBtn').style.display = fillState.checked ? 'none' : '';
  document.getElementById('fillRetryBtn').style.display = fillState.checked ? '' : 'none';

  // Navigation
  document.getElementById('fillPrevBtn').disabled = idx === 0;
  document.getElementById('fillNextBtn').disabled = idx === total - 1;

  // Focus first input
  if (!fillState.checked) {
    setTimeout(() => {
      const firstInput = sentenceEl.querySelector('.fill-input');
      if (firstInput) firstInput.focus();
    }, 100);
  }

  // Setup keyboard navigation (Space/Tab to next blank)
  setupFillKeyboard();
}

function setupFillKeyboard() {
  const inputs = document.querySelectorAll('.fill-input');
  inputs.forEach((input, i) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Tab') {
        e.preventDefault();
        // If space is typed and input has value, move to next
        if (e.key === ' ' && input.value.trim() === '') {
          // Allow space in empty input? No - move to next
        }
        const next = inputs[i + 1];
        if (next) next.focus();
        else if (e.key === 'Tab') checkFill(); // Tab on last input -> check
      } else if (e.key === 'Enter') {
        e.preventDefault();
        checkFill();
      }
    });
  });
}

function checkFill() {
  if (fillState.checked) return;

  // Save input values before switching to checked mode
  const inputs = document.querySelectorAll('.fill-input');
  const values = {};
  inputs.forEach(inp => {
    values[inp.dataset.idx] = inp.value.trim();
  });
  fillState._savedValues = values;
  fillState.checked = true;

  // Re-render in result mode
  renderFillSentence();
}

function retryFill() {
  fillState.checked = false;
  fillState._savedValues = null;
  renderFillSentence();
}

function prevFill() {
  if (fillState.currentIdx > 0) {
    fillState.currentIdx--;
    fillState.checked = false;
    fillState._savedValues = null;
    renderFillSentence();
    window.scrollTo(0, 0);
  }
}

function nextFill() {
  if (fillState.currentIdx < fillState.sentences.length - 1) {
    fillState.currentIdx++;
    fillState.checked = false;
    fillState._savedValues = null;
    renderFillSentence();
    window.scrollTo(0, 0);
  }
}

function backFromFill() {
  const audioEl = document.getElementById('fillAudioEl');
  if (audioEl) { audioEl.pause(); audioEl.src = ''; }
  document.getElementById('listenFillView').style.display = 'none';
  document.getElementById('listenHome').style.display = '';
  window.scrollTo(0, 0);
}


/* ========== LISTENING HISTORY ========== */

function saveListenHistory() {
  const test = listenTests[listenState.currentTest];
  if (!test) return;
  let correct = 0, total = 0;
  const snapshot = [];
  listenState.questions.forEach(q => {
    const ua = listenState.userAnswers[q.id];
    const isCorrect = q.answer >= 0 && ua === q.answer;
    if (q.answer >= 0) {
      total++;
      if (isCorrect) correct++;
    }
    snapshot.push({
      id: q.id,
      question: q.question || '',
      options: q.options,
      answer: q.answer,
      part: q.part,
      passage: q.passage || null,
      questionVi: q.questionVi || '',
      optionsVi: q.optionsVi || [],
      passageVi: q.passageVi || '',
      userAns: ua !== undefined ? ua : -1,
      isCorrect: isCorrect
    });
  });
  const entry = {
    id: Date.now(),
    date: new Date().toLocaleString('vi-VN'),
    testKey: listenState.currentTest,
    testName: test.name,
    part: listenState.currentPart,
    correct: correct,
    total: total,
    questions: snapshot
  };
  try {
    const h = JSON.parse(localStorage.getItem('listen_history') || '[]');
    h.unshift(entry);
    if (h.length > 30) h.length = 30;
    localStorage.setItem('listen_history', JSON.stringify(h));
  } catch(e) {}
}

function showListenHistory() {
  document.getElementById('listenHome').style.display = 'none';
  document.getElementById('listenPractice').style.display = 'none';
  document.getElementById('listenFillView').style.display = 'none';
  document.getElementById('listenHistoryReviewView').style.display = 'none';
  document.getElementById('listenBookmarkView').style.display = 'none';
  document.getElementById('listenHistoryView').style.display = 'block';
  renderListenHistory();
  window.scrollTo(0, 0);
}

function renderListenHistory() {
  let h = [];
  try { h = JSON.parse(localStorage.getItem('listen_history') || '[]'); } catch(e) {}
  const list = document.getElementById('listenHistoryList');
  if (h.length === 0) {
    list.innerHTML = '<div class="history-empty">No listening history yet.</div>';
    return;
  }
  list.innerHTML = h.map((entry, idx) => {
    const pct = entry.total > 0 ? Math.round(entry.correct / entry.total * 100) : 0;
    const wrong = entry.total - entry.correct;
    const partLabel = entry.part === 'all' ? 'All Parts' : entry.part.replace('part', 'Part ');
    return `
      <div class="history-entry" onclick="viewListenHistory(${idx})">
        <div class="he-info">
          <span class="he-tab">${entry.testName || entry.testKey} - ${partLabel}</span>
          <span class="he-date">${entry.date}</span>
          <span class="he-score">${entry.correct}/${entry.total} (${pct}%)</span>
          ${wrong > 0 ? `<span class="he-wrong">${wrong} wrong</span>` : ''}
        </div>
        <div class="he-actions">
          <button class="he-delete" onclick="event.stopPropagation(); deleteListenHistory(${idx})">delete</button>
        </div>
      </div>`;
  }).join('');
}

function deleteListenHistory(idx) {
  try {
    const h = JSON.parse(localStorage.getItem('listen_history') || '[]');
    h.splice(idx, 1);
    localStorage.setItem('listen_history', JSON.stringify(h));
    renderListenHistory();
  } catch(e) {}
}

function viewListenHistory(idx) {
  let h = [];
  try { h = JSON.parse(localStorage.getItem('listen_history') || '[]'); } catch(e) {}
  const entry = h[idx];
  if (!entry) return;

  document.getElementById('listenHistoryView').style.display = 'none';
  document.getElementById('listenHistoryReviewView').style.display = 'flex';

  const partLabel = entry.part === 'all' ? 'All Parts' : entry.part.replace('part', 'Part ');
  document.getElementById('lhrTitle').textContent = (entry.testName || entry.testKey) + ' - ' + partLabel + ' - ' + entry.date;
  document.getElementById('lhrProgress').textContent = entry.correct + '/' + entry.total + ' correct';

  const viOn = document.getElementById('viToggle').checked;
  const viCls = viOn ? ' show-vi' : '';

  // Render questions in review mode
  const qList = document.getElementById('lhrQuestionList');
  let html = '';
  let lastPassage = null;
  let lastPart = null;

  entry.questions.forEach((q, i) => {
    if (q.part !== lastPart) {
      lastPart = q.part;
      const partLabels = { 1: 'Part 1: Photographs', 2: 'Part 2: Question-Response', 3: 'Part 3: Conversations', 4: 'Part 4: Talks' };
      html += `<div class="listen-part-header">${partLabels[q.part]}</div>`;
      lastPassage = null;
    }

    if ((q.part === 3 || q.part === 4) && q.passage && q.passage !== lastPassage) {
      lastPassage = q.passage;
      const passageHtml = q.passage.replace(/\n/g, '<br>');
      const passageVi = q.passageVi ? `<div class="q-vi-text" style="margin-top:8px;">${q.passageVi.replace(/\n/g, '<br>')}</div>` : '';
      html += `<div class="listen-passage glass">${passageHtml}${passageVi}</div>`;
    }

    const letters = q.options.length === 3 ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D'];
    html += `<div class="q-card glass${viCls}" id="lhr-${i}" style="scroll-margin-top:var(--topbar-h,160px);">`;
    html += `<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;"><span class="q-number">${q.id}</span></div>`;

    if (q.question) {
      html += `<p class="q-text">${q.question}</p>`;
      if (q.questionVi) html += `<p class="q-vi-text">${q.questionVi}</p>`;
    }

    html += '<div class="options">';
    q.options.forEach((opt, oi) => {
      let cls = 'opt disabled';
      if (q.answer >= 0 && oi === q.answer) cls += ' correct';
      if (q.userAns === oi && oi !== q.answer) cls += ' wrong';
      if (q.userAns === oi) cls += ' selected';
      const optVi = q.optionsVi && q.optionsVi[oi] ? q.optionsVi[oi] : '';
      html += `<div class="${cls}">`;
      html += `<div class="letter">${letters[oi]}</div>`;
      html += `<div style="flex:1"><div class="option-en">${opt}</div>${optVi ? `<div class="option-vi">${optVi}</div>` : ''}</div>`;
      html += `</div>`;
    });
    html += '</div></div>';
  });

  qList.innerHTML = html;

  // Grid
  const grid = document.getElementById('lhrGrid');
  grid.innerHTML = '';
  entry.questions.forEach((q, i) => {
    const dot = document.createElement('div');
    dot.className = 'q-dot' + (q.answer >= 0 ? (q.isCorrect ? ' correct' : ' wrong') : '');
    dot.textContent = q.id;
    dot.onclick = () => {
      const el = document.getElementById('lhr-' + i);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    grid.appendChild(dot);
  });

  window.scrollTo(0, 0);
}

function closeListenHistoryReview() {
  document.getElementById('listenHistoryReviewView').style.display = 'none';
  document.getElementById('listenHistoryView').style.display = 'block';
  window.scrollTo(0, 0);
}


/* ========== LISTENING BOOKMARKS ========== */

function getListenBookmarks() {
  try { return JSON.parse(localStorage.getItem('listen_bookmarks') || '[]'); } catch(e) { return []; }
}

function saveListenBookmarks(bm) {
  localStorage.setItem('listen_bookmarks', JSON.stringify(bm));
  updateListenBookmarkCount();
}

function isListenBookmarked(testKey, qId) {
  return getListenBookmarks().some(b => b.testKey === testKey && b.qId === qId);
}

function toggleListenBookmark(testKey, qId, btnEl) {
  let bm = getListenBookmarks();
  const idx = bm.findIndex(b => b.testKey === testKey && b.qId === qId);
  if (idx >= 0) {
    bm.splice(idx, 1);
    if (btnEl) { btnEl.classList.remove('active'); btnEl.textContent = '\u{1F3F7}\u{FE0F}'; }
    showToast('Removed listening bookmark');
  } else {
    // Find the question data
    const q = listenState.questions.find(q => q.id === qId);
    if (q) {
      const test = listenTests[testKey];
      bm.push({
        testKey: testKey,
        testName: test ? test.name : testKey,
        qId: qId,
        question: q.question || '',
        options: q.options,
        answer: q.answer,
        part: q.part,
        passage: q.passage || null,
        questionVi: q.questionVi || '',
        optionsVi: q.optionsVi || [],
        passageVi: q.passageVi || ''
      });
    }
    if (btnEl) { btnEl.classList.add('active'); btnEl.textContent = '\u{1F516}'; }
    showToast('Bookmarked listening question');
  }
  saveListenBookmarks(bm);
}

function updateListenBookmarkCount() {
  const bm = getListenBookmarks();
  const els = [document.getElementById('listenBookmarkCount'), document.getElementById('listenBookmarkCountHome')];
  els.forEach(el => {
    if (!el) return;
    if (bm.length > 0) {
      el.textContent = bm.length;
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
}

function showListenBookmarkView() {
  document.getElementById('listenHome').style.display = 'none';
  document.getElementById('listenPractice').style.display = 'none';
  document.getElementById('listenFillView').style.display = 'none';
  document.getElementById('listenHistoryView').style.display = 'none';
  document.getElementById('listenHistoryReviewView').style.display = 'none';
  document.getElementById('listenBookmarkView').style.display = 'flex';
  renderListenBookmarkView();
  window.scrollTo(0, 0);
}

function renderListenBookmarkView() {
  const bm = getListenBookmarks();
  const qList = document.getElementById('lbmQuestionList');
  document.getElementById('lbmProgress').textContent = bm.length + ' bookmarked';

  if (bm.length === 0) {
    qList.innerHTML = '<div class="glass q-card" style="text-align:center;color:#94a3b8;">No bookmarked listening questions.</div>';
    document.getElementById('lbmGrid').innerHTML = '';
    return;
  }

  const viOn = document.getElementById('viToggle').checked;
  const viCls = viOn ? ' show-vi' : '';

  let html = '';
  let lastPassage = null;

  bm.forEach((q, i) => {
    // Show passage if part 3/4
    if ((q.part === 3 || q.part === 4) && q.passage && q.passage !== lastPassage) {
      lastPassage = q.passage;
      const passageHtml = q.passage.replace(/\n/g, '<br>');
      const passageVi = q.passageVi ? `<div class="q-vi-text" style="margin-top:8px;">${q.passageVi.replace(/\n/g, '<br>')}</div>` : '';
      html += `<div class="listen-passage glass">${passageHtml}${passageVi}</div>`;
    }

    const letters = q.options.length === 3 ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D'];
    html += `<div class="q-card glass${viCls}" id="lbm-${i}" style="scroll-margin-top:var(--topbar-h,160px);">`;
    html += `<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">`;
    html += `<span class="q-number">${q.qId}</span>`;
    html += `<span style="font-size:0.68rem;color:#94a3b8;">Part ${q.part} - ${q.testName || q.testKey}</span>`;
    html += `<span style="margin-left:auto;"><button class="bookmark-btn active" onclick="event.stopPropagation();removeListenBookmarkAndRefresh(${i})" title="Remove Bookmark">\u{1F516}</button></span>`;
    html += `</div>`;

    if (q.question) {
      html += `<p class="q-text">${q.question}</p>`;
      if (q.questionVi) html += `<p class="q-vi-text">${q.questionVi}</p>`;
    }

    html += '<div class="options">';
    q.options.forEach((opt, oi) => {
      let cls = 'opt disabled';
      if (q.answer >= 0 && oi === q.answer) cls += ' correct';
      const optVi = q.optionsVi && q.optionsVi[oi] ? q.optionsVi[oi] : '';
      html += `<div class="${cls}">`;
      html += `<div class="letter">${letters[oi]}</div>`;
      html += `<div style="flex:1"><div class="option-en">${opt}</div>${optVi ? `<div class="option-vi">${optVi}</div>` : ''}</div>`;
      html += `</div>`;
    });
    html += '</div></div>';
  });

  qList.innerHTML = html;

  const grid = document.getElementById('lbmGrid');
  grid.innerHTML = '';
  bm.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-grid-btn';
    btn.textContent = q.qId;
    btn.onclick = () => {
      const el = document.getElementById('lbm-' + i);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    grid.appendChild(btn);
  });
}

function removeListenBookmarkAndRefresh(idx) {
  let bm = getListenBookmarks();
  bm.splice(idx, 1);
  saveListenBookmarks(bm);
  renderListenBookmarkView();
  showToast('Removed listening bookmark');
}

function closeListenBookmarkView() {
  document.getElementById('listenBookmarkView').style.display = 'none';
  document.getElementById('listenHome').style.display = '';
  window.scrollTo(0, 0);
}


/* ========== AUDIO TIMESTAMPS (Part 3/4 Replay) ========== */

function seekToPassage(partNum, groupIdx) {
  const test = listenTests[listenState.currentTest];
  if (!test || !test.timestamps) return;

  const partKey = 'part' + partNum;
  const timestamps = test.timestamps[partKey];
  if (!timestamps || timestamps.length === 0) {
    showToast('Timestamps not available yet');
    return;
  }

  const time = timestamps[groupIdx];
  if (time === undefined || time === null) {
    showToast('Timestamp not set for this group');
    return;
  }

  // Find the audio element for this part
  let audioIdx = -1;
  if (listenState.currentPart === 'all') {
    // In "all" mode, audio players are ordered by part
    const partOrder = ['part1', 'part2', 'part3', 'part4'];
    let idx = 0;
    for (const p of partOrder) {
      if (test.audio && test.audio[p]) {
        if (p === partKey) { audioIdx = idx; break; }
        idx++;
      }
    }
  } else if (listenState.currentPart === partKey) {
    audioIdx = 0;
  }

  if (audioIdx >= 0 && listenAudioEls[audioIdx]) {
    const audio = listenAudioEls[audioIdx];
    audio.currentTime = time;
    audio.play();
    // Update play button to pause icon
    const btn = document.getElementById('listenPlayBtn' + audioIdx);
    if (btn) btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
    showToast('Seeking to passage audio...');
  }
}

// Initialize bookmark count on page load
document.addEventListener('DOMContentLoaded', function() {
  updateListenBookmarkCount();
});
