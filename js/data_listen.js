const listenTests = {
  "2024_1": {
    name: "TOEIC 2024 - Test 1",
    audio: {
      part1: "audio/listen/PART 1 - TEST 1.mp3",
      part2: "audio/listen/PART 2 - TEST 1.mp3",
      part3: "audio/listen/PART 3 - TEST 1.mp3",
      part4: "audio/listen/PART 4 - TEST 1.mp3"
    },
    timestamps: {
      part3: [], // Fill with start times in seconds for each group, e.g. [0, 95, 180, ...]
      part4: []  // Fill with start times in seconds for each group
    },
    part1: [
      {
        id: 1,
        options: [
          "She's eating in a picnic area.",
          "She's waiting in line at a food truck.",
          "She's wiping off a bench.",
          "She's throwing away a plate."
        ],
        answer: -1
      },
      {
        id: 2,
        options: [
          "The man is brushing snow off the roof of a car.",
          "The man is standing in the snow beside a car.",
          "The man is shoveling snow from a walkway.",
          "The man is running through the snow."
        ],
        answer: -1
      },
      {
        id: 3,
        options: [
          "Some workers are hanging art in a gallery.",
          "Two of the people are having a conversation.",
          "One of the men is rearranging cushions on a sofa.",
          "One of the men is painting a picture."
        ],
        answer: -1
      },
      {
        id: 4,
        options: [
          "Vehicles are entering a parking garage.",
          "Clothes hangers are scattered on the ground.",
          "Empty racks are lined up next to a building.",
          "Clothing is being displayed under a tent."
        ],
        answer: -1
      },
      {
        id: 5,
        options: [
          "Potted plants have been suspended from a ceiling.",
          "Chairs have been stacked in front of an entryway.",
          "A computer station has been set up on a desk.",
          "A rug has been rolled up against a wall."
        ],
        answer: -1
      },
      {
        id: 6,
        options: [
          "One of the men is sweeping a patio.",
          "One of the men is replacing some flooring.",
          "A door has been taken off its frame.",
          "A light fixture has been left on the ground."
        ],
        answer: -1
      }
    ],

    part2: [
      {
        id: 7,
        question: "How old is this building?",
        options: [
          "To ship some materials.",
          "About ten years old.",
          "Company offices, I think."
        ],
        answer: 1
      },
      {
        id: 8,
        question: "Can you come to my jazz performance tonight?",
        options: [
          "I'm sorry I was late for the meeting.",
          "Mostly just local musicians.",
          "Sure, I'll be there!"
        ],
        answer: 2
      },
      {
        id: 9,
        question: "Which apartment submitted a work order?",
        options: [
          "It's what you did for a living.",
          "Submit your assignment here.",
          "It came from the tenants in B23."
        ],
        answer: 2
      },
      {
        id: 10,
        question: "Will you contact the vendor about changing our delivery date?",
        options: [
          "Of course, I'll take care of it.",
          "An e-mail receipt.",
          "Could I get change for a dollar?"
        ],
        answer: 0
      },
      {
        id: 11,
        question: "Why was the maintenance worker here?",
        options: [
          "No, he didn't.",
          "From three o'clock until four.",
          "Because a light needed to be fixed."
        ],
        answer: 2
      },
      {
        id: 12,
        question: "Did management make a hiring decision yet?",
        options: [
          "Put it on the highest shelf.",
          "The personnel department.",
          "Yes, they chose Jacob Borgman."
        ],
        answer: 2
      },
      {
        id: 13,
        question: "Do you want to eat here in our cafeteria or go out?",
        options: [
          "He went there yesterday.",
          "Well, maybe a sandwich.",
          "Let's eat here."
        ],
        answer: 2
      },
      {
        id: 14,
        question: "Didn't you e-mail the employment contract to Mr. Patel yesterday?",
        options: [
          "Yes, I would agree.",
          "No, I'll send it now.",
          "Check the employee manual."
        ],
        answer: 1
      },
      {
        id: 15,
        question: "Our division's picnic is this Saturday, right?",
        options: [
          "There's a lot of rain in the forecast.",
          "Sure, I like salad.",
          "At the end of this corridor."
        ],
        answer: 0
      },
      {
        id: 16,
        question: "Would you like coffee or tea?",
        options: [
          "Just water, please.",
          "For a few dollars more.",
          "A fifteen-minute break."
        ],
        answer: 0
      },
      {
        id: 17,
        question: "We achieved our sales targets this month.",
        options: [
          "That's excellent news!",
          "A few times a day.",
          "To the end of April."
        ],
        answer: 0
      },
      {
        id: 18,
        question: "How often do you travel for your job?",
        options: [
          "It turned out well.",
          "Yes, I did find one.",
          "About once a month."
        ],
        answer: 2
      },
      {
        id: 19,
        question: "We should hike the Wildflower Trail today.",
        options: [
          "This seat is available.",
          "I didn't bring boots.",
          "At the visitors' center."
        ],
        answer: 1
      },
      {
        id: 20,
        question: "You've booked a hotel in London, haven't you?",
        options: [
          "Very enjoyable, thanks.",
          "He usually takes the train.",
          "Yes, I made a reservation last week."
        ],
        answer: 2
      },
      {
        id: 21,
        question: "Are there any tickets left for tonight's concert?",
        options: [
          "It's sold out.",
          "He's a concert violinist.",
          "They already left."
        ],
        answer: 0
      },
      {
        id: 22,
        question: "Haven't you used this software before?",
        options: [
          "Can I take your order?",
          "I haven't had the chance.",
          "About 40 dollars."
        ],
        answer: 1
      },
      {
        id: 23,
        question: "When is the new blender going to be released?",
        options: [
          "Only with fruits and vegetables.",
          "In the kitchen cabinet.",
          "The prototype is still being tested."
        ],
        answer: 2
      },
      {
        id: 24,
        question: "Who's picking up our clients at the airport?",
        options: [
          "They decided to drive.",
          "At terminal 2.",
          "It's a marketing position."
        ],
        answer: 0
      },
      {
        id: 25,
        question: "Where are the red roses that came in this morning?",
        options: [
          "About three liters of water.",
          "No, I didn't check out the sale.",
          "I needed some for a large bouquet."
        ],
        answer: 2
      },
      {
        id: 26,
        question: "This film has been nominated for several awards.",
        options: [
          "Why don't we go see it?",
          "After the announcement.",
          "He made a great speech."
        ],
        answer: 0
      },
      {
        id: 27,
        question: "Who's interested in starting a car pool program?",
        options: [
          "Thanks, but I can't swim.",
          "Clara's already organizing one.",
          "It's a very interesting article."
        ],
        answer: 1
      },
      {
        id: 28,
        question: "Where will I teach my workshop this month?",
        options: [
          "We just sent an e-mail to all instructors.",
          "Five to seven months.",
          "Yes, it's a beautiful building."
        ],
        answer: 0
      },
      {
        id: 29,
        question: "Why are we moving these sweaters to the back of the store?",
        options: [
          "In the new shopping mall.",
          "Yes, they come in other colors.",
          "Our spring merchandise is arriving soon."
        ],
        answer: 2
      },
      {
        id: 30,
        question: "Would you be interested in working on some of these contracts?",
        options: [
          "Thank you for meeting me.",
          "A contact lens prescription.",
          "I have very limited time."
        ],
        answer: 2
      },
      {
        id: 31,
        question: "What type of job are you looking for?",
        options: [
          "No, at ten a.m.",
          "I really like working with computers.",
          "Just a r\u00e9sum\u00e9 is needed."
        ],
        answer: 1
      }
    ],

    part3: [
      {
        passage: "W: Thank you so much for organizing the annual company picnic, Jingdao. Everybody seemed to enjoy it.\nM: Well, we deserved it after working so hard this year.\nW: I agree. The food was great, by the way. Especially the peach pie you made. Would you mind sharing the recipe? It was delicious.\nM: I found the recipe online. I'll send you a link to the Web page. There's a really helpful video that walks you through all the steps. I recommend you watch it first.\nW: All right, thanks.",
        questions: [
          {
            id: 32,
            question: "What event does the woman mention?",
            options: ["A job fair", "A cooking class", "A fund-raiser", "A company picnic"],
            answer: 3
          },
          {
            id: 33,
            question: "What does the woman ask for?",
            options: ["A guest list", "A dessert recipe", "A business card", "A promotional code"],
            answer: 1
          },
          {
            id: 34,
            question: "What does the man recommend doing?",
            options: ["Returning some merchandise", "Watching a video", "Creating an account", "Reading a review"],
            answer: 1
          }
        ]
      },
      {
        passage: "M: I'd like to finish calculating the company's expense reports for the month. Have you finished reviewing the travel reimbursement forms from all the departments?\nW: I'm almost done, but I have a question about a hotel receipt from one of our employees.\nM: What's the problem?\nW: Well, our policy is for employees to stay at a hotel that's on our list of approved accommodations. This one isn't on the list.\nM: Who submitted the receipt?\nW: Moritz Ziegler, one of our sales representatives.\nM: Hmm. He's a new employee and may have forgotten the policy. As a supervisor, I can approve the expense this one time.",
        questions: [
          {
            id: 35,
            question: "What department do the speakers most likely work in?",
            options: ["Accounting", "Research and development", "Maintenance", "Marketing"],
            answer: 0
          },
          {
            id: 36,
            question: "What problem does the woman mention?",
            options: ["A report has not been submitted.", "An invoice is not accurate.", "A policy has not been followed.", "An order has not been delivered."],
            answer: 2
          },
          {
            id: 37,
            question: "What does the man say he will do?",
            options: ["Delete an electronic file", "Authorize a reimbursement", "Set up a sales meeting", "Review a spreadsheet"],
            answer: 1
          }
        ]
      },
      {
        passage: "M: Good morning, Damilola. How's everything up here on deck?\nW: Hi, Pedro. It was an uneventful night, and our cargo ship still hasn't moved yet.\nM: Hmm, I hope the fog over the harbor lifts soon.\nW: Yeah, me too. The ship won't be able to leave until the weather improves.\nM: I hope we won't get too far behind schedule. I'll be sure to call the port authority soon for an update on when we'll be cleared to leave.\nW: Sounds good.",
        questions: [
          {
            id: 38,
            question: "What industry do the speakers most likely work in?",
            options: ["Shipping", "Manufacturing", "Hospitality", "Meteorology"],
            answer: 0
          },
          {
            id: 39,
            question: "What is the reason for a delay?",
            options: ["A schedule was written incorrectly.", "Some equipment is not properly set up.", "Weather conditions are poor.", "Several staff members are absent."],
            answer: 2
          },
          {
            id: 40,
            question: "What does the man say he will do?",
            options: ["Update a shift schedule", "Clear a work space", "Complete a checklist", "Place a call"],
            answer: 3
          }
        ]
      },
      {
        passage: "W: Hi. I've made a reservation to meet with some clients for lunch today. It's under Cohen.\nM: Oh, yes. I see your reservation. Welcome, Ms. Cohen.\nW: I know I asked to be seated on your beautiful terrace, but it's very hot today.\nM: Hmm. I can seat you at table four inside. Do you mind waiting a few minutes?\nW: Not at all. By the way, your parking area's nearly full. Where can I tell my clients to park?\nM: Our customers can park for free in the garage across the street. Our cashier will stamp their parking tickets.\nW: Oh, great. Thanks. I'll call them and let them know.",
        questions: [
          {
            id: 41,
            question: "Why is the woman at the restaurant?",
            options: ["To celebrate a retirement", "To perform an inspection", "To meet with some clients", "To write an article"],
            answer: 2
          },
          {
            id: 42,
            question: "What does the woman mean when she says, \"it's very hot today\"?",
            options: ["She is unable to accept an invitation.", "A cooling system is not working.", "A meeting will end soon.", "She wants to change a seating request."],
            answer: 3
          },
          {
            id: 43,
            question: "What does the man say about a parking garage?",
            options: ["It is free for customers.", "It is under construction.", "It closes soon.", "It offers monthly contracts."],
            answer: 0
          }
        ]
      },
      {
        passage: "W: Thank you both for coming here today to demonstrate your company's new compact printer. I know the store will be busy because we're having a big sale on laptop computers and tablets.\nM1: We're happy to be here. Our printers are perfect for students or people with home offices who may have limited space. My partner, Murat, will be setting up the printer station.\nM2: Yes\u2014where can I put our demonstration table?\nW: I'll show you the area. Also, if you brought any brochures with you, it'll be helpful to put those out for people to take.",
        questions: [
          {
            id: 44,
            question: "Where does the woman most likely work?",
            options: ["At a university", "At a publishing company", "At an electronics store", "At a grocery store"],
            answer: 2
          },
          {
            id: 45,
            question: "What does Murat ask about?",
            options: ["How much an item costs", "When an event will begin", "How many people will participate", "Where to set up some equipment"],
            answer: 3
          },
          {
            id: 46,
            question: "What does the woman suggest doing?",
            options: ["Offering a discount", "Displaying informational materials", "Holding a contest", "Visiting a registration table"],
            answer: 1
          }
        ]
      },
      {
        passage: "W1: Gizem and Hector, I'm very pleased with the sales of our brands of cakes, pies, and cookies this past holiday season. Any thoughts on what we should be concentrating on going forward?\nW2: The biggest trend right now is the reduction of sugar. The public wants healthier products, but the same great taste. That'll be our biggest challenge.\nM: One of our ingredient suppliers recently started offering a sweetener made entirely from natural ingredients.\nW1: Are there similar ones on the market? And how do they compare?\nM: I'd have to do some investigation to find out more about that. I have some time available tomorrow afternoon.",
        questions: [
          {
            id: 47,
            question: "What type of industry do the speakers most likely work in?",
            options: ["Textile manufacturing", "Food production", "Health care", "Hospitality"],
            answer: 1
          },
          {
            id: 48,
            question: "What business challenge are the speakers discussing?",
            options: ["Lack of qualified personnel", "Rising production costs", "Changes in consumer preferences", "Increased competition"],
            answer: 2
          },
          {
            id: 49,
            question: "What does the man say he will do?",
            options: ["Research more information", "Negotiate a discount", "Upgrade some machinery", "Train a new employee"],
            answer: 0
          }
        ]
      },
      {
        passage: "M: Hi, Bianca. I'm calling to see if you'd have time to work on a project for my marketing firm. We've expanded a lot in the past year, and we need some help.\nW: Thanks for thinking of me. What type of work would I be doing?\nM: Well, we have a new client in Brazil who's interested in creating a marketing campaign for social media sites. You'd be overseeing the campaign.\nW: Oh, I have experience with that. Why don't you send me a detailed description of the work? That'll give me an idea of how much time this project will take.",
        questions: [
          {
            id: 50,
            question: "Why is the man calling?",
            options: ["To explain a business merger", "To describe a new company policy", "To offer the woman a work assignment", "To invite the woman to speak at a conference"],
            answer: 2
          },
          {
            id: 51,
            question: "What does the man say a client is interested in doing?",
            options: ["Purchasing another business", "Finding a new office space", "Revising a budget proposal", "Creating a marketing campaign"],
            answer: 3
          },
          {
            id: 52,
            question: "What does the woman ask the man to send?",
            options: ["A project description", "An event invitation", "Some social media links", "Some contact information"],
            answer: 0
          }
        ]
      },
      {
        passage: "W: Hey, Koji? We were about to pack van number five for the music festival when we noticed it's got a flat tire.\nM: Oh. That's not good.\nW: We're supposed to get there by eleven to set up lunch for the performers. Is there another van we can take?\nM: Let me see what's available. We've got a lot of catering jobs today. Ah, yes\u2014we can use van number three. Do you need help loading?\nW: Yes, thanks. The food's already in coolers, but everything's in the kitchen with the serving utensils and napkins. It all needs to be brought to the parking area.\nM: All right; I can help with that.",
        questions: [
          {
            id: 53,
            question: "What problem does the woman mention?",
            options: ["A vehicle is out of service.", "An employee is late.", "A shipment was damaged.", "Traffic is heavy."],
            answer: 0
          },
          {
            id: 54,
            question: "Where do the speakers most likely work?",
            options: ["At a recording studio", "At a catering company", "At a radio station", "At a car dealership"],
            answer: 1
          },
          {
            id: 55,
            question: "What does the man say he will do next?",
            options: ["Arrange for a car repair", "Order some kitchen supplies", "Carry some items", "Offer a refund"],
            answer: 2
          }
        ]
      },
      {
        passage: "M: Thanks for taking my call. As I mentioned in my e-mail, I'm interested in working in your field. But I'm talking to some professionals first so I can find out more about it.\nW: Happy to help.\nM: So how did you get your start?\nW: Oh, my family always subscribed to three newspapers. So I always thought the news was important. At my university, I joined the newspaper and eventually worked my way up to being an editor.\nM: Wow. Is it true that people in the news business work very long hours? So what's your schedule like?",
        questions: [
          {
            id: 56,
            question: "Why is the man calling the woman?",
            options: ["To plan a company event", "To confirm a work deadline", "To discuss a career path", "To accept a job offer"],
            answer: 2
          },
          {
            id: 57,
            question: "Who most likely is the woman?",
            options: ["A newspaper editor", "A university professor", "A delivery person", "A professional actor"],
            answer: 0
          },
          {
            id: 58,
            question: "What will the woman most likely do next?",
            options: ["Negotiate a contract", "Explain an office policy", "Review a r\u00e9sum\u00e9", "Describe a work schedule"],
            answer: 3
          }
        ]
      },
      {
        passage: "M: Hi, Karen! I just read the article on the company Web site about the proposed merger with QZ Corporation. It looks like we're going ahead with it.\nW: There would be a lot of advantages to merging operations, although they also talked about it last year.\nM: I remember that. But there were a lot of details to work out\u2014like whether our offices would stay in Chicago. Now it looks like we won't be relocating.\nW: Well, I really don't want to move, so that's a relief.",
        questions: [
          {
            id: 59,
            question: "What are the speakers mainly discussing?",
            options: ["A new transportation route", "A company merger", "A public relations initiative", "A medical facility design"],
            answer: 1
          },
          {
            id: 60,
            question: "Why does the woman say, \"they also talked about it last year\"?",
            options: ["To express doubt", "To explain a process", "To make a recommendation", "To update some information"],
            answer: 0
          },
          {
            id: 61,
            question: "What does the woman want to avoid?",
            options: ["Paying a certification fee", "Training additional staff", "Upgrading some technology", "Relocating to another city"],
            answer: 3
          }
        ]
      },
      {
        passage: "M: Thanks for calling Customized Concepts. How can I help you?\nW: My company wants to give every employee a gift, something useful but not too big. Since we're about to host our annual staff basketball tournament, I thought a water bottle might be good.\nM: We carry a few drink containers. If you're at our Web site, you'll see them under the Lifestyle tab.\nW: Let me pull it up now... All right.\nM: I recommend the metal bottle with the wide-mouthed lid. It's easier to clean than the one with the straw.\nW: OK, thanks. And you could put our company logo on it, right?\nM: Yes. You'll just need to send me the graphic file.\nW: I can do that.",
        questions: [
          {
            id: 62,
            question: "Who is a gift for?",
            options: ["Donors", "Volunteers", "Employees", "Clients"],
            answer: 2
          },
          {
            id: 63,
            question: "Look at the graphic. What is the price of the item the man recommends?",
            options: ["$21", "$18", "$24", "$15"],
            answer: -1,
            hasGraphic: true
          },
          {
            id: 64,
            question: "What is the woman going to send to the man?",
            options: ["A graphic file", "A list of names", "A delivery address", "An account number"],
            answer: 0
          }
        ]
      },
      {
        passage: "W: Yun, I just finished recording the audio guide for the pencil drawings that'll be included in our modern art exhibit next week. The files'll be loaded onto the audio devices tomorrow.\nM: That's great. But, unfortunately, we have to make one change. The drawing by Claudia Hoffman will no longer be in the exhibit. There was a scheduling mix-up, and it was promised to another museum starting next week.\nW: Oh, that's too bad. That was one of my favorite pieces. Will you put anything in its place?\nM: No. We'll just remove it.\nW: OK, then I'll make that change to the audio-guide recording. I'll do that right away.",
        questions: [
          {
            id: 65,
            question: "What type of art will be displayed in an exhibit?",
            options: ["Clay sculptures", "Oil paintings", "Black-and-white photographs", "Pencil drawings"],
            answer: 3
          },
          {
            id: 66,
            question: "Look at the graphic. Which piece of artwork will no longer be included?",
            options: ["A Careful Glance", "Promises", "Stormy Sea", "The Moment"],
            answer: -1,
            hasGraphic: true
          },
          {
            id: 67,
            question: "What does the woman say she will do right away?",
            options: ["Speak with an artist", "Edit a recording", "Clean a gallery space", "Greet some visitors"],
            answer: 1
          }
        ]
      },
      {
        passage: "M: I'm glad we were assigned to cover the press conference earlier today. I counted seven other major media networks there, in addition to ours.\nW: Well, the offshore wind industry is going to transform the way this region gets its power.\nM: Agreed. Let's compare our facts before we start writing.\nW: So the largest cluster of wind turbines\u2014off the coast of Winston\u2014is already built. The other sites are at different stages of construction, though Lanchester is also close to being done.\nM: Right. And I think it's crucial for us to focus on how many new jobs related to assembling and maintaining the turbines are opening up in the area as a result of this.",
        questions: [
          {
            id: 68,
            question: "Who most likely are the speakers?",
            options: ["Urban planners", "Journalists", "Engineers", "Environmental scientists"],
            answer: 1
          },
          {
            id: 69,
            question: "Look at the graphic. Which site has already been completed?",
            options: ["Site A", "Site B", "Site C", "Site D"],
            answer: -1,
            hasGraphic: true
          },
          {
            id: 70,
            question: "What does the man suggest focusing on?",
            options: ["Work opportunities", "Wind turbine costs", "Supply chain issues", "Power capacity"],
            answer: 0
          }
        ]
      }
    ],

    part4: [
      {
        passage: "You have reached the information line for the Cranbury Apartments management office. On Monday, April twelfth, maintenance work will begin to repave the entire parking area adjacent to our building's main entrance. All Cranbury residents should move their vehicles from their designated parking spots before eight A.M. on Monday. Any vehicle still in its spot after eight A.M. will be towed at the owner's expense. A map of alternate parking sites was mailed to residents last week and is also posted in the building lobby.",
        questions: [
          {
            id: 71,
            question: "Who has recorded the message?",
            options: ["A city mayor's office", "A maintenance department", "An automobile dealership", "A building management office"],
            answer: 3
          },
          {
            id: 72,
            question: "What are the listeners asked to do?",
            options: ["Move their vehicles", "Pay their parking fines", "Use an alternate entrance", "Participate in a meeting"],
            answer: 0
          },
          {
            id: 73,
            question: "What does the speaker say was mailed last week?",
            options: ["An election ballot", "A maintenance plan", "A map", "A coupon"],
            answer: 2
          }
        ]
      },
      {
        passage: "Welcome to Your House Works. On today's episode, we'll go over how you can maintain and make minor repairs to the roof of your home. The first thing to do is to invest in a few special tools, like a trowel and crowbar. It's important to choose some that are high quality because you'll use them for many years. With your trowel and some roof cement, you can seal any cracks or chips. The crowbar will help you remove loose shingles that you can then replace. Now, I highly recommend you take photos of your roof every year so that you can track its overall condition.",
        questions: [
          {
            id: 74,
            question: "What is the topic of the episode?",
            options: ["Garden landscaping", "Window installation", "Roof maintenance", "Kitchen renovations"],
            answer: 2
          },
          {
            id: 75,
            question: "What does the speaker emphasize about some tools?",
            options: ["They should be cleaned regularly.", "They should be of high quality.", "They were recently invented.", "They can be easily stored."],
            answer: 1
          },
          {
            id: 76,
            question: "What does the speaker recommend doing every year?",
            options: ["Treating some wood", "Consulting an electrician", "Taking some photos", "Draining some water"],
            answer: 2
          }
        ]
      },
      {
        passage: "Thanks again for joining me on today's tour of the beautiful Wallingford Conservatory. I hope you enjoyed seeing and learning about the many species of plants and flowers we care for here. As I mentioned at the beginning of the tour, world-renowned botanist Samantha Hughes will be giving a lecture on the care of flowering orchid plants at two o'clock in the community room. I recommend attending. Samantha's work has also been featured in a documentary film called Orchid Caretakers, which you can purchase through the conservatory's online gift shop. I watched it recently and learned many new things about the orchid species we have right here at the conservatory.",
        questions: [
          {
            id: 77,
            question: "Who most likely is the speaker?",
            options: ["A radio show host", "A tour guide", "A sales associate", "A professor"],
            answer: 1
          },
          {
            id: 78,
            question: "What will happen at two o'clock?",
            options: ["A lecture will begin.", "A demonstration will be given.", "An interview will be conducted.", "A park will close."],
            answer: 0
          },
          {
            id: 79,
            question: "What is Orchid Caretakers?",
            options: ["A book", "An album", "A film", "A magazine"],
            answer: 2
          }
        ]
      },
      {
        passage: "Before the benefit concert begins, I want to thank all of you for supporting the Hillcaster Community Center. As you know, our facilities have been in need of some repairs for quite a while. So far, we've raised 5,000 dollars in ticket sales, but we haven't quite reached our goal yet. So during the concert, I want to encourage you to buy food and drinks from the concession stand. Eighty percent of the proceeds will go to construction at the Hillcaster Community Center. Enjoy the music!",
        questions: [
          {
            id: 80,
            question: "What event is taking place?",
            options: ["A fund-raising concert", "A sports competition", "A play rehearsal", "An awards ceremony"],
            answer: 0
          },
          {
            id: 81,
            question: "What does the organization plan to do?",
            options: ["Change a policy", "Repair a building", "Select a winner", "Sponsor a team"],
            answer: 1
          },
          {
            id: 82,
            question: "What does the speaker encourage the listeners to do?",
            options: ["Order tickets early", "Visit a community center", "Purchase refreshments", "Donate clothing"],
            answer: 2
          }
        ]
      },
      {
        passage: "Thank you all for attending today's workshop. Erina Kimura and I will be conducting the session, and we'll be focusing on using time efficiently as a business owner. Planning and spending your time wisely is a key factor to business success. During the presentation, I'll be referring to documents from the packet you were handed as you arrived. If you don't have one yet, Erina's at the back of the room. OK then, to start off, we'll do an exercise to get to know one another better.",
        questions: [
          {
            id: 83,
            question: "What is the topic of the workshop?",
            options: ["Time management", "Public speaking", "Leadership skills", "Professional networking"],
            answer: 0
          },
          {
            id: 84,
            question: "What does the speaker imply when he says, \"Erina's at the back of the room\"?",
            options: ["A guest speaker has just arrived.", "Assistance is available.", "Attendees should speak clearly and loudly.", "An extra chair should be provided."],
            answer: 1
          },
          {
            id: 85,
            question: "What will the listeners do next?",
            options: ["Sign their names on a list", "Take a break", "Participate in an introductory activity", "Fill out a questionnaire"],
            answer: 2
          }
        ]
      },
      {
        passage: "At this site, archaeologists have uncovered the remains of a fifth-century marketplace with colorful mosaic tiles on the walls. You'll notice how vibrant the colors are, even after all these centuries. This is what the ruins are most famous for. You can still see intricate details in the artists' pictures of scenes from daily life. Now, to protect the mosaics, a roof has been constructed over the area, and the lights are dim. And I'm sorry, but taking photos is not allowed, as the flash would damage the tiles. As we proceed, please hold on to the handrails on either side. They'll help you stay on the path and protect the ruins around us.",
        questions: [
          {
            id: 86,
            question: "What is a historical site famous for?",
            options: ["Its defensive walls", "Its royal inhabitants", "An event that happened there", "Some artwork"],
            answer: 3
          },
          {
            id: 87,
            question: "Why does the speaker apologize?",
            options: ["The listeners cannot take pictures.", "An area is closed to the listeners.", "There is no gift shop.", "A tour started late."],
            answer: 0
          },
          {
            id: 88,
            question: "What does the speaker ask the listeners to do?",
            options: ["Show their tickets", "Put on protective clothing", "Use some handrails", "Speak quietly"],
            answer: 2
          }
        ]
      },
      {
        passage: "As you all know, our agency's just won an important contract with Parker Auto Parts Company. We'll be developing two 30-second ads for local radio stations to be released next month and two additional 20-second ads for the following month. Now, I know it's a tight schedule, but this is a priority. The client has actually started trying to work on this internally, so there's a rough ad we can start editing. Let's work on that now.",
        questions: [
          {
            id: 89,
            question: "What is the speaker mainly discussing?",
            options: ["An advertising campaign", "A market expansion", "Some contract negotiations", "Some audit procedures"],
            answer: 0
          },
          {
            id: 90,
            question: "What does the speaker imply when he says, \"this is a priority\"?",
            options: ["Overtime pay has been approved.", "A deadline must be met.", "A client expressed concern.", "A supervisor will be observing closely."],
            answer: 1
          },
          {
            id: 91,
            question: "What will the listeners do next?",
            options: ["View a presentation", "Review a budget", "Revise some work", "Do some research"],
            answer: 2
          }
        ]
      },
      {
        passage: "Excuse me, nurses. Your attention please. I've been receiving complaints about the free snacks in the hospital break rooms. Some people have mentioned that they don't like the selection of snacks, and some have said that they don't get to eat them at all because they're gone by the time the evening shift starts. So I was thinking about putting some money into each of your staff spending accounts every month so that you can buy the snacks you want at the hospital cafeteria. That will require management approval, but I'll keep you posted.",
        questions: [
          {
            id: 92,
            question: "Where do the listeners most likely work?",
            options: ["At a hospital", "At a restaurant", "At a grocery store", "At an electronics store"],
            answer: 0
          },
          {
            id: 93,
            question: "What is the main purpose of the talk?",
            options: ["To make a request", "To address staff complaints", "To present a new schedule", "To explain a technical process"],
            answer: 1
          },
          {
            id: 94,
            question: "What does the speaker imply when she says, \"That will require management approval\"?",
            options: ["A process has not been followed.", "The listeners may be asked to work extra shifts.", "The listeners should contact a manager.", "A change will not be immediate."],
            answer: 3
          }
        ]
      },
      {
        passage: "As mayor of Lakeville, I'm pleased to welcome you to the celebration for our town's newly renovated Lakeville Park. There are a lot of new areas to explore, so we've planned a short hike. We'll be walking around the pond and along the renovated walking trail. We'll end our walk on the hill on the north side of the park. There we'll be having some free snacks and ice cream. For those of you taking photos, don't forget to post them on the city's Web site. We'd like to commemorate this special day.",
        questions: [
          {
            id: 95,
            question: "According to the speaker, what was recently completed?",
            options: ["A company reorganization", "A park renovation", "A volunteer training", "A conservation project"],
            answer: 1
          },
          {
            id: 96,
            question: "Look at the graphic. Where does the speaker say refreshments will be served?",
            options: ["Location 1", "Location 2", "Location 3", "Location 4"],
            answer: 0,
            hasGraphic: true
          },
          {
            id: 97,
            question: "What are the listeners reminded to do?",
            options: ["Complete a survey", "Donate some money", "Join an organization", "Post some photographs"],
            answer: 3
          }
        ]
      },
      {
        passage: "Thanks, everyone, for attending today's free public lecture, sponsored by the Springfield Farmers' Association. So, we've received lots of requests for information on growing a vegetable garden. People want to know how to keep their garden healthy and get the vegetables they want. The first thing we recommend is regular soil testing. Since this is September, all soil samples in the next six weeks should be taken from the same depth, as seen on this chart. Oh, and before you leave today, please sign up for our mailing list to stay informed of future lectures.",
        questions: [
          {
            id: 98,
            question: "What is the topic of today's lecture?",
            options: ["When to harvest crops", "Where to plant trees", "How to grow vegetables", "Which flowers need more sun"],
            answer: 2
          },
          {
            id: 99,
            question: "Look at the graphic. At what depth should samples be collected this month?",
            options: ["12 inches", "4 inches", "6 inches", "8 inches"],
            answer: 0,
            hasGraphic: true
          },
          {
            id: 100,
            question: "What does the speaker encourage the listeners to do?",
            options: ["Turn off mobile phones", "Have some refreshments", "Purchase some seeds", "Sign up for a mailing list"],
            answer: 3
          }
        ]
      }
    ]
  },
  "2024_2": {
    name: "TOEIC 2024 - Test 2",
    audio: {
      part1: "audio/listen/PART 1 - TEST 2.mp3",
      part2: "audio/listen/PART 2 - TEST 2.mp3",
      part3: "audio/listen/PART 3 - TEST 2.mp3",
      part4: "audio/listen/PART 4 - TEST 2.mp3"
    },
    timestamps: {
      part3: [], // Fill with start times in seconds for each group
      part4: []  // Fill with start times in seconds for each group
    },
    part1: [
      { id: 1, options: ["She's inserting a cord into an outlet.", "She's pressing a button on a machine.", "She's gripping the handle of a drawer.", "She's tacking a notice onto the wall."], answer: -1 },
      { id: 2, options: ["Some window shutters are being replaced.", "A pillow is being arranged on a seat.", "An outdoor table is being cleared off.", "Some wooden boards are being painted."], answer: -1 },
      { id: 3, options: ["Some utensils have been discarded in a bin.", "Some bottles are being emptied into a sink.", "A rolling chair has been placed next to a counter.", "Some drawers have been left open."], answer: -1 },
      { id: 4, options: ["A man is chopping some wood into pieces.", "Leaves are scattered across the grass.", "A man is closing a window.", "Wood is piled near a fence."], answer: -1 },
      { id: 5, options: ["People are standing in line in a lobby.", "Items are being loaded into shopping bags.", "Tents have been set up in a parking area.", "A worker is putting up a canopy."], answer: -1 },
      { id: 6, options: ["Some luggage is stacked next to an escalator.", "A suitcase is being lifted onto a shuttle bus.", "Some suitcases are displayed in a shop window.", "A luggage rack has two levels."], answer: -1 }
    ],
    part2: [
      { id: 7, question: "Have the machines on the factory floor been cleaned?", options: ["No, not yet.", "It's in the shipping container.", "I just put it in the trash bin."], answer: 0 },
      { id: 8, question: "How much will the budget increase next year?", options: ["About 10 percent.", "Three hours, I think.", "At the bank's main branch."], answer: 0 },
      { id: 9, question: "You're going to water the plants before you leave, aren't you?", options: ["I walked the whole way.", "Yes, right after lunch.", "In the breakroom."], answer: 1 },
      { id: 10, question: "Aren't you going to schedule an eye doctor appointment?", options: ["Those glasses look nice on you.", "I already scheduled one.", "The seminar is three days long."], answer: 1 },
      { id: 11, question: "I'm going to try to fix this printer.", options: ["You're right, it doesn't fit.", "Double-sided copies.", "Are you sure it can be repaired?"], answer: 2 },
      { id: 12, question: "What should we do with these brochures?", options: ["A trip to the seashore.", "Yes, I found it already.", "I'll leave them at the front desk."], answer: 2 },
      { id: 13, question: "Has the policy meeting been rescheduled?", options: ["We have lots of desk calendar designs.", "Yes, it's happening tomorrow instead.", "This soup I ordered is delicious."], answer: 1 },
      { id: 14, question: "Why don't we stop by the office cafeteria on our way to the workshop?", options: ["Sure, we have time for that.", "A full-service buffet.", "The topic is professional networking."], answer: 0 },
      { id: 15, question: "Have you tried our famous pasta dish?", options: ["We need a table for five.", "Yes, it was delicious.", "I'll try to make it on time."], answer: 1 },
      { id: 16, question: "Who's the opening act at tonight's concert?", options: ["Could you turn up the volume?", "A jazz singer from France.", "The position has been filled."], answer: 1 },
      { id: 17, question: "When do the product demonstrations start?", options: ["The schedule was e-mailed last Friday.", "Some innovative features.", "In room 202, I think."], answer: 0 },
      { id: 18, question: "I tried updating the Web site, but it didn't work.", options: ["That date works for me.", "Usually our online reviews.", "Just send me the changes you want."], answer: 2 },
      { id: 19, question: "Did you hire a new welding specialist?", options: ["The part's back-ordered.", "Yes, he starts tomorrow.", "No, it should be higher."], answer: 1 },
      { id: 20, question: "How was the color palette for the lobby chosen?", options: ["Blue and orange.", "It was fine, thanks.", "I wasn't involved."], answer: 2 },
      { id: 21, question: "When are we ordering more supplies for the office?", options: ["In the storage closet.", "Next week on Monday.", "The new desk looks great!"], answer: 1 },
      { id: 22, question: "The battery for the water pump is going to be solar powered, right?", options: ["We're still in the planning stages.", "A hundred and forty dollars per year.", "Yes, I'd love a glass of water."], answer: 0 },
      { id: 23, question: "Where can I buy a charger for this laptop?", options: ["Around three o'clock.", "I can order one for you.", "A limited return policy."], answer: 1 },
      { id: 24, question: "Do I need to reserve a meeting room?", options: ["Yes, let me show you how.", "The service is good.", "My slide presentation."], answer: 0 },
      { id: 25, question: "When's the new department director supposed to start?", options: ["It's an hour long.", "Ms. Pavlova isn't retiring for several weeks.", "No, that department's upstairs."], answer: 1 },
      { id: 26, question: "Should I deliver these pizzas, or will you?", options: ["No thanks. I'm not hungry.", "Ten dollars for two.", "They're being picked up."], answer: 2 },
      { id: 27, question: "This month's shipment schedule has been revised.", options: ["I couldn't find them either.", "Which dates have been changed?", "Two dollars per pound."], answer: 1 },
      { id: 28, question: "How much will the repairs cost?", options: ["The work is covered under the warranty plan.", "Yes, it's also available in red.", "In about two weeks."], answer: 0 },
      { id: 29, question: "Why don't we provide more samples of the wallpaper patterns?", options: ["The newspaper is delivered daily.", "An interior design course.", "There are plenty in the binders."], answer: 2 },
      { id: 30, question: "Can you give me a tour of the property this afternoon?", options: ["Sorry, I won't have time until tomorrow.", "It has a very modern design.", "A house on Maple Street."], answer: 0 },
      { id: 31, question: "Who's scheduled to test the product today?", options: ["We're waiting for confirmation.", "It's a great album, right?", "About six weeks ago."], answer: 0 }
    ],
    part3: [
      {
        passage: "M: Good morning, captain. We'll be docking at the port in Kolkata this evening, right?\nW: Actually, we had to change course overnight to avoid a storm, so we're running behind schedule. But we should arrive early tomorrow.\nM: Well, that's not too bad.\nW: Oh, Hector has the day off today, so I'll need you to do the morning rounds — starting with checking the machinery in the engine room.\nM: Of course - I'll head there now.",
        questions: [
          { id: 32, question: "Where do the speakers most likely work?", options: ["At a hospital", "On a ship", "At a factory", "At an airport"], answer: 1 },
          { id: 33, question: "What does the woman say about the schedule?", options: ["It has been delayed", "It was sent by e-mail", "It needs to be approved", "It will be posted online"], answer: 0 },
          { id: 34, question: "What does the woman ask the man to do?", options: ["Check some machinery", "Contact a client", "Review a report", "Train a new employee"], answer: 0 }
        ]
      },
      {
        passage: "M: Hi. I'm here to schedule some personal training sessions.\nW: OK. What are your fitness goals?\nM: I'd like to lift weights and build strength.\nW: I can work with you on that. Are you currently a member here?\nM: No, I'll also need to sign up for a membership. I saw online that you're running a special for new members — fifty percent off the first month's membership. Can I sign up for that?\nW: Absolutely. But before I get you signed up, let me show you around our facility.",
        questions: [
          { id: 35, question: "What does the man want to do?", options: ["Renew a membership", "Schedule training sessions", "Cancel a class", "Return some equipment"], answer: 1 },
          { id: 36, question: "What did the man see online?", options: ["A class schedule", "A discount offer", "A facility tour video", "A customer review"], answer: 1 },
          { id: 37, question: "What does the woman offer to do?", options: ["Waive a fee", "Show the facility", "Provide a free session", "Check availability"], answer: 1 }
        ]
      },
      {
        passage: "W: As you can see, this Renaissance landscape painting we acquired is in bad condition. We can't display it yet.\nM: Hmm, yes. This painting will need significant restoration work.\nW: I'll begin by investigating the artist's color palette and style to see how we should repair the damaged areas.",
        questions: [
          { id: 38, question: "Where do the speakers most likely work?", options: ["At a museum", "At a library", "At a photography studio", "At a construction site"], answer: 0 },
          { id: 39, question: "What problem do the speakers discuss?", options: ["A painting is damaged", "A schedule is delayed", "An order is incorrect", "A budget is too small"], answer: 0 },
          { id: 40, question: "What will the woman do first?", options: ["Order supplies", "Research the artist's techniques", "Contact an expert", "Write a report"], answer: 1 }
        ]
      },
      {
        passage: "W: Hi, Ozan. Do you have time to review some slides I'm presenting at a meeting on Thursday?\nM1: Oh. Is that the meeting with Smith Incorporated?\nW: Yes. I'm presenting them with our updated marketing plan for their chain of bookstores.\nM1: You know, Smith Incorporated prefers informal meetings. I think just a handout highlighting how our marketing plan will positively impact their book sales would be enough.\nW: Really? Thilo, you've worked with this client before. What do you think?\nM2: Ozan is right. I think they'd prefer a meeting that was more of a conversation than a presentation.",
        questions: [
          { id: 41, question: "What is the woman preparing for?", options: ["A job interview", "A client meeting", "A training workshop", "A product launch"], answer: 1 },
          { id: 42, question: "What type of business is Smith Incorporated?", options: ["A bookstore chain", "A marketing firm", "A publishing house", "A technology company"], answer: 0 },
          { id: 43, question: "What do the men suggest?", options: ["Using a less formal approach", "Hiring more staff", "Changing the meeting date", "Requesting more data"], answer: 0 }
        ]
      },
      {
        passage: "W: I heard that the results of your experiment were better than you expected. Congratulations!\nM: Thanks! I thought we'd have to run that reaction ten times before we got a positive result. But we got it on the third try.\nW: You'll have to write up your results and submit them to the research director. That's Esra, right?\nM: Oh, Esra's leaving the company next week.\nW: Oh, I didn't know that. I wonder if you'll be promoted to fill her position.\nM: I don't think so. I've never managed an entire research group. I hope to get some experience doing that next quarter.",
        questions: [
          { id: 44, question: "What are the speakers discussing?", options: ["A product launch", "An experiment result", "A budget proposal", "A hiring decision"], answer: 1 },
          { id: 45, question: "What does the woman learn about Esra?", options: ["She received an award", "She is leaving the company", "She was promoted", "She finished a project"], answer: 1 },
          { id: 46, question: "Why does the man say he is not ready for a promotion?", options: ["He lacks management experience", "He has not finished his degree", "He is planning to relocate", "He prefers laboratory work"], answer: 0 }
        ]
      },
      {
        passage: "W: Now we'll move on to a special segment of our news program where we highlight new local businesses for our viewers. Today I'm talking with Dhruv Bajaj— a personal trainer and gym owner. Thanks for coming into the studio today, Dhruv!\nM: Thanks for having me! I'm excited to tell you about the gym I just opened last month. It has state-of-the-art equipment, and my trainers can work with clients at any stage in their fitness journey.\nW: Sounds great. How did you get started in this line of work?\nM: Well, I was an athlete in school, and when I stopped competing, I wanted to continue doing something fitness-related. So I started working as a trainer.",
        questions: [
          { id: 47, question: "What type of program are the speakers on?", options: ["A news show", "A cooking show", "A radio talk show", "A documentary"], answer: 0 },
          { id: 48, question: "What does the man say about his gym?", options: ["It has modern equipment", "It offers free classes", "It is expanding soon", "It has low membership fees"], answer: 0 },
          { id: 49, question: "What did the man do before becoming a trainer?", options: ["He was a doctor", "He was an athlete", "He was a teacher", "He managed a restaurant"], answer: 1 }
        ]
      },
      {
        passage: "M1: As director, I'm delighted to welcome you to the Redmond Aquatic Institute. We're happy you'll be producing content for our Web site.\nW: I'm looking forward to writing about Redmond's initiatives in marine biology.\nM1: Yes, the more articles the public can read about threats to aquatic ecosystems, the better. Public awareness will help us get funding to meet our aim of preserving these ecosystems. This is Roberto. He's working on our mangrove research project, which is the first one you'll cover.\nM2: It's an interesting project. And what's exciting is that we've started using drones to photograph the area with the mangroves. So we have some great images you could use.",
        questions: [
          { id: 50, question: "What will the woman do at the institute?", options: ["Conduct research", "Write web content", "Manage funding", "Train new staff"], answer: 1 },
          { id: 51, question: "What is the institute's goal?", options: ["To preserve aquatic ecosystems", "To develop new technology", "To train marine biologists", "To build a new facility"], answer: 0 },
          { id: 52, question: "What does Roberto offer?", options: ["Research assistance", "Drone photographs", "A laboratory tour", "Funding information"], answer: 1 }
        ]
      },
      {
        passage: "W: Matthew, you're not planning to cancel Wednesday's budget meeting, are you?\nM: I haven't sent out the cancellation yet, but our research partners in China are off this week for a national holiday, so there's no point in meeting. Why?\nW: Well, I've been looking at the draft budget, and we didn't allocate funds for a project leader.\nM: Uh-oh. I wonder how that happened. You're right. We need to discuss how to fix that.\nW: You know, we allocated money for a trip to Singapore to present our preliminary findings. We don't really need to do that.",
        questions: [
          { id: 53, question: "What does the woman imply when she says they didn't allocate funds for a project leader?", options: ["A mistake was made", "A meeting should be postponed", "A new employee should be hired", "A scheduled meeting should take place"], answer: 3 },
          { id: 54, question: "Why was the man going to cancel the meeting?", options: ["Partners are on holiday", "The budget is not ready", "A speaker is unavailable", "The room is booked"], answer: 0 },
          { id: 55, question: "What does the woman suggest?", options: ["Hiring a consultant", "Eliminating a trip expense", "Postponing the project", "Requesting more funding"], answer: 1 }
        ]
      },
      {
        passage: "M: Hello, you've reached tech support.\nW: I'm calling from Rubin Restaurant Equipment. I recently purchased your software to keep track of my warehouse inventory, and I have a question about setting alerts.\nM: Sure. How can I help?\nW: Well, we've been getting an alert whenever the inventory for our deep fryers drops below ten. But we usually don't stock many of those because restaurants don't often need to replace them. So, can I lower the alert level for just those items?\nM: Yes. In the system, if you click on that product, you'll see a link that says, \"Set Custom Alert.\" And you can set it to any number from there.\nW: I see it. Thanks for your help.",
        questions: [
          { id: 56, question: "What type of business does the woman work for?", options: ["A restaurant", "An equipment company", "A software firm", "A delivery service"], answer: 1 },
          { id: 57, question: "What problem does the woman describe?", options: ["Unnecessary alerts", "Missing inventory", "Slow software", "Incorrect pricing"], answer: 0 },
          { id: 58, question: "What does the man tell the woman to do?", options: ["Click on the product to set a custom alert", "Call back later", "Update the software", "Send an e-mail request"], answer: 0 }
        ]
      },
      {
        passage: "M: I just spoke to the garden director. He wants us to install an irrigation system in the rose garden as well as the magnolia grove. He wants to be sure the flowers get plenty of water during the hot summer months.\nW: OK, let's walk over there now and take some measurements. Then we can figure out what materials we'll need.\nM: Sure. We have some extra parts left over from when we worked on the cherry trees. I'll check what we have left after we finish measuring the rose garden.",
        questions: [
          { id: 59, question: "What project are the speakers working on?", options: ["Installing an irrigation system", "Building a greenhouse", "Planting new trees", "Designing a park"], answer: 0 },
          { id: 60, question: "What will the speakers do next?", options: ["Take measurements", "Order materials", "Meet with the director", "Review a budget"], answer: 0 },
          { id: 61, question: "What does the man mention about extra parts?", options: ["They were left over from a previous job", "They need to be returned", "They were recently ordered", "They are too expensive"], answer: 0 }
        ]
      },
      {
        passage: "M: Good morning, Ms. Aljohani. Sorry I'm a little late. Traffic was terrible.\nW: That's OK, but our rental office will be very busy this morning. There's a big education convention in town starting today, and a lot of attendees from out of town have reserved cars to get to the conference center.\nM: Right. What do you want me to do first?\nW: I'd like you to start by checking the batteries in our electric cars. We want to be sure they're all fully charged.",
        questions: [
          { id: 62, question: "Where do the speakers work?", options: ["At a car rental office", "At a hotel", "At a convention center", "At a car dealership"], answer: 0 },
          { id: 63, question: "Why will the office be busy?", options: ["A convention is starting", "A holiday sale is happening", "New cars have arrived", "The office is relocating"], answer: 0 },
          { id: 64, question: "What does the woman ask the man to do first?", options: ["Check car batteries", "Greet customers", "Update the reservation system", "Clean the vehicles"], answer: 0 }
        ]
      },
      {
        passage: "M: I've been on vacation, so I missed our department's meeting. Can you give me an update?\nW: Well, all our public programs and community events are on schedule.\nM: Great! How about the Jannis Park project? We're still planning on planting trees best suited for residential areas, right?\nW: That's right. I'm working on the public education part now. There'll be a children's poster competition next month, which the city mayor will judge.\nM: Interesting. Is there a prize?\nW: The winner will get a ribbon. But all participants will get a seedling to plant at home. We'll be giving away the tallest of these four varieties, since it was the most popular in a survey of our residents.",
        questions: [
          { id: 65, question: "What department do the speakers most likely work in?", options: ["Parks and recreation", "Finance", "Human resources", "Marketing"], answer: 0 },
          { id: 66, question: "What will happen next month?", options: ["A poster competition", "A tree planting event", "A department meeting", "A community survey"], answer: 0 },
          { id: 67, question: "How was the seedling variety chosen?", options: ["Through a resident survey", "By the city mayor", "Based on cost", "By a committee vote"], answer: 0 }
        ]
      },
      {
        passage: "M: Hi, I'd like a large black coffee and an egg-and-cheese croissant, please.\nW: Sure. That'll be eight dollars. Are you a Shelby's preferred customer?\nM: Uh, no I'm not. But I do have an EZ-Cash card.\nW: Great. Let me ring that up for you.\nM: By the way, I'd like to order breakfast for my team tomorrow morning. Can I place that order ahead of time?\nW: Sure. Would you like to do that now?\nM: No, I'll call you later today when I know what everyone wants. Thanks for the information.",
        questions: [
          { id: 68, question: "Where does the conversation take place?", options: ["At a café", "At a grocery store", "At a hotel", "At an office"], answer: 0 },
          { id: 69, question: "What does the man want to do for tomorrow?", options: ["Order breakfast for his team", "Reserve a table", "Schedule a delivery", "Pick up a cake"], answer: 0 },
          { id: 70, question: "What will the man do later today?", options: ["Call to place an order", "Send an e-mail", "Visit another location", "Meet with his team"], answer: 0 }
        ]
      }
    ],
    part4: [
      {
        passage: "Hi, Amina. This is Sabine calling from Blue Drop Creations. I just put the earrings and necklaces that you ordered from me in the mail. Because you've been a customer for over ten years, I've also included a special gift in the package for you. It's a case for your jewelry. This is a new product that I'm starting to offer, so please call me back after you receive it. I'd really like to hear your thoughts on it.",
        questions: [
          { id: 71, question: "What type of products does the speaker sell?", options: ["Jewelry", "Clothing", "Electronics", "Furniture"], answer: 0 },
          { id: 72, question: "Why did the speaker include a gift?", options: ["The customer has been loyal for years", "It is a holiday promotion", "The order was delayed", "It is a new customer welcome gift"], answer: 0 },
          { id: 73, question: "What does the speaker ask the listener to do?", options: ["Provide feedback", "Visit a store", "Place another order", "Update contact information"], answer: 0 }
        ]
      },
      {
        passage: "Good morning, this is Brandon from Dakota Framing Company, returning your call. We received your voicemail about wanting to frame a wedding picture. There is no need to print the photo yourself. We prefer that you e-mail us a digital copy. So, to answer your question, you can complete the whole order online. Just visit our Web site, where you'll fill in your choices for photo size and the frame and upload your photo. And for a small extra cost, we'll guarantee to replace your frame in case of damage. Please be sure to check that box when you order.",
        questions: [
          { id: 74, question: "Why is the speaker calling?", options: ["To return a call", "To confirm an order", "To schedule a delivery", "To offer a discount"], answer: 0 },
          { id: 75, question: "What does the speaker say about the photo?", options: ["A digital copy should be e-mailed", "It must be a certain size", "It should be printed on special paper", "It needs to be dropped off in person"], answer: 0 },
          { id: 76, question: "What does the speaker recommend?", options: ["Purchasing damage protection", "Choosing a larger frame", "Visiting the store", "Using a coupon code"], answer: 0 }
        ]
      },
      {
        passage: "Welcome all to this week's training in our series of patient care programs. Our physical therapy center is known for the excellent care we provide to our patients, and that's because of you, our staff. The training today will be about ways to engage the patients who reside in our facility through playing games. I've prepared different types of activities for us to try out, including some games that involve mental stimulation as well as physical exercises. But, I have to let you know that today I must leave at noon. Next week we'll try out more of the games.",
        questions: [
          { id: 77, question: "Where does the speaker most likely work?", options: ["At a physical therapy center", "At a school", "At a gym", "At a hospital emergency room"], answer: 0 },
          { id: 78, question: "What is today's training about?", options: ["Engaging patients through games", "New medical procedures", "Safety protocols", "Customer service skills"], answer: 0 },
          { id: 79, question: "What does the speaker imply when she says she must leave at noon?", options: ["Some materials will not be covered", "The listeners should arrive early", "A schedule change has been made", "The training was extended"], answer: 0 }
        ]
      },
      {
        passage: "Are you a certified commercial truck driver? Hoffman Oversized Haulers is currently looking for experienced truck drivers to join our team. As our name suggests, we transport oversized cargo throughout the region. With Hoffman, drivers enjoy flexible scheduling. In fact, we're the only company in the region that allows employees to determine their own work hours. If you don't have experience working with oversized loads, training is available. Please check out our Web site to learn more about our open positions. We can't wait to work with you.",
        questions: [
          { id: 80, question: "What is being advertised?", options: ["Truck driving jobs", "A delivery service", "A training program", "A vehicle sale"], answer: 0 },
          { id: 81, question: "What benefit does the company offer?", options: ["Flexible scheduling", "Free meals", "Company housing", "Health insurance"], answer: 0 },
          { id: 82, question: "What is available for inexperienced drivers?", options: ["Training", "A mentor program", "A reduced workload", "A signing bonus"], answer: 0 }
        ]
      },
      {
        passage: "Hi, Jinyu. I have some exciting news! The Farmer's Table television program wants to feature our restaurant in an upcoming episode. They'll be coming on Wednesday to film everyone at work in the kitchen during our dinner service. Since you're the executive chef, I'll need you to come in earlier than usual to get everything prepped and set up. And just as a reminder, I'm still planning to be out of town next week for the Springdale Pastry and Dessert Festival. Thanks!",
        questions: [
          { id: 83, question: "What is the exciting news?", options: ["A TV show will feature the restaurant", "A new menu is launching", "A famous chef is visiting", "The restaurant won an award"], answer: 0 },
          { id: 84, question: "What does the speaker ask Jinyu to do?", options: ["Arrive early on Wednesday", "Prepare a special menu", "Contact the TV crew", "Train new staff"], answer: 0 },
          { id: 85, question: "What will the speaker do next week?", options: ["Attend a festival", "Open a new location", "Take a cooking class", "Meet with investors"], answer: 0 }
        ]
      },
      {
        passage: "Good evening and thank you for watching Channel Four News. I'm here in Rockville, a suburb in the metropolitan area. Rockville was recently chosen as the site of a multimillion-dollar electric vehicle battery factory. This project promises to bring thousands of jobs, both directly and indirectly, to the surrounding community. At a recent well-attended public comment meeting, residents had a chance to voice any opposition to the project. No one made any comments. To learn more about this exciting development, artists-rendered images of the project are on display at the city hall building.",
        questions: [
          { id: 86, question: "What is being reported?", options: ["A new factory is planned", "A road is being built", "A park is opening", "An election result"], answer: 0 },
          { id: 87, question: "What happened at the public comment meeting?", options: ["No one opposed the project", "The project was delayed", "Residents requested changes", "A vote was held"], answer: 0 },
          { id: 88, question: "Where can people view images of the project?", options: ["At city hall", "On a Web site", "At the factory site", "In a newspaper"], answer: 0 }
        ]
      },
      {
        passage: "Tired of losing things on your desk because it's too cluttered? If so, the Optimum Space Organizer is the perfect product for you. Designed with office employees like you in mind, this product can make even the messiest of desks look neat again. Best of all, the organizer adjusts to any sized space you may have on your desk. It can be as narrow or as wide as you need it to be — within seconds! If you call in the next ten minutes, you'll receive a 30 percent discount!",
        questions: [
          { id: 89, question: "What is being advertised?", options: ["A desk organizer", "An office chair", "A filing cabinet", "A computer monitor"], answer: 0 },
          { id: 90, question: "What feature does the product have?", options: ["It adjusts to any size", "It comes in many colors", "It includes a lamp", "It is made of wood"], answer: 0 },
          { id: 91, question: "What special offer is mentioned?", options: ["A 30 percent discount", "Free shipping", "A buy-one-get-one deal", "A free trial period"], answer: 0 }
        ]
      },
      {
        passage: "Thanks for listening to this episode of Fabulous Foods. Every week, we discuss a different vegetable and ways to cook with it to maximize flavor. Now, before we get started, I'm excited to announce that I've been collaborating with Cartwell Kitchen Supplies to develop a new line of cookware. It'll be released in November, but it's available for pre-order right now. Keep in mind, this product line will not be available for long. OK, let's move on to our program. With us today is renowned chef Rebecca Murray to talk about this week's vegetable: eggplant! Rebecca recently launched a vegetarian restaurant in New York that is getting rave reviews so far.",
        questions: [
          { id: 92, question: "What type of program is Fabulous Foods?", options: ["A cooking show", "A travel show", "A news program", "A science podcast"], answer: 0 },
          { id: 93, question: "What is available for pre-order?", options: ["Cookware", "A cookbook", "Kitchen appliances", "Meal kits"], answer: 0 },
          { id: 94, question: "What has Rebecca Murray recently done?", options: ["Opened a restaurant", "Published a book", "Won a competition", "Started a food blog"], answer: 0 }
        ]
      },
      {
        passage: "Attention passengers. Renovation work to upgrade and modernize our train station is underway. We apologize for the inconvenience the construction noise may cause. Please note that regional train schedules are not affected. Train 133 with service to Washington, D.C., will be arriving shortly. All passengers to Washington, please proceed to Track 26B. If you need assistance handling your baggage, please speak to a ticket agent immediately. Train 133's next stop will be Wilmington, followed by Baltimore and then Washington, D.C.",
        questions: [
          { id: 95, question: "What is happening at the train station?", options: ["Renovation work", "A schedule change", "A security check", "A special event"], answer: 0 },
          { id: 96, question: "What should passengers to Washington do?", options: ["Go to Track 26B", "Wait in the lobby", "Check the schedule board", "Contact customer service"], answer: 0 },
          { id: 97, question: "What is Train 133's next stop?", options: ["Wilmington", "Baltimore", "Washington, D.C.", "Rockville"], answer: 0 }
        ]
      },
      {
        passage: "Hello, everyone. I'm Carmen Salazar, the airport operations director, and I wanted to thank you for attending this press conference. As of this week, construction on the new regional airport is proceeding on schedule for two of the three terminals. Minor design adjustments to terminal A have put the project slightly behind schedule, and we anticipate about two months will be added to the construction time frame as a result. I'd also like to mention that we now have a 3-D printed model of this project! Please feel free to visit our Web site so you can view it.",
        questions: [
          { id: 98, question: "Who is the speaker?", options: ["An airport operations director", "A city council member", "A construction worker", "A travel agent"], answer: 0 },
          { id: 99, question: "What problem is mentioned about terminal A?", options: ["Design changes caused a delay", "Construction costs increased", "Materials were unavailable", "Workers went on strike"], answer: 0 },
          { id: 100, question: "What is available on the Web site?", options: ["A 3-D model of the project", "Flight schedules", "Job applications", "Ticket prices"], answer: 0 }
        ]
      }
    ]
  }
};

const listenFillData = {
  "2024_1": {
    name: "TOEIC 2024 - Test 1",
    part1: [
      ["(A) She's {eating|v} in a {picnic|n} {area|n}.\n(B) She's {waiting|v} in {line|n} at a {food|n} {truck|n}.\n(C) She's {wiping|v} off a {bench|n}.\n(D) She's {throwing|v} away a {plate|n}.", "(A) Cô ấy đang ăn trong khu vực dã ngoại.\n(B) Cô ấy đang đợi xếp hàng tại xe bán đồ ăn.\n(C) Cô ấy đang lau ghế dài.\n(D) Cô ấy đang vứt đĩa đi."],
      ["(A) The {man|n} is {brushing|v} {snow|n} off the {roof|n} of a {car|n}.\n(B) The {man|n} is {standing|v} in the {snow|n} {beside|adv} a {car|n}.\n(C) The {man|n} is {shoveling|v} {snow|n} from a {walkway|n}.\n(D) The {man|n} is {running|v} through the {snow|n}.", "(A) Người đàn ông đang phủi tuyết khỏi nóc xe.\n(B) Người đàn ông đang đứng trong tuyết bên cạnh xe.\n(C) Người đàn ông đang xúc tuyết khỏi lối đi.\n(D) Người đàn ông đang chạy qua tuyết."],
      ["(A) Some {workers|n} are {hanging|v} {art|n} in a {gallery|n}.\n(B) Two of the {people|n} are having a {conversation|n}.\n(C) One of the {men|n} is {rearranging|v} {cushions|n} on a {sofa|n}.\n(D) One of the {men|n} is {painting|v} a {picture|n}.", "(A) Một số công nhân đang treo tranh trong phòng triển lãm.\n(B) Hai người đang nói chuyện.\n(C) Một người đàn ông đang sắp xếp lại đệm trên ghế sofa.\n(D) Một người đàn ông đang vẽ tranh."],
      ["(A) {Vehicles|n} are {entering|v} a {parking|n} {garage|n}.\n(B) {Clothes|n} {hangers|n} are {scattered|v} on the {ground|n}.\n(C) {Empty|adj} {racks|n} are {lined|v} up next to a {building|n}.\n(D) {Clothing|n} is being {displayed|v} under a {tent|n}.", "(A) Xe cộ đang đi vào bãi đậu xe.\n(B) Móc quần áo nằm rải rác trên mặt đất.\n(C) Các giá trống xếp hàng bên cạnh tòa nhà.\n(D) Quần áo đang được trưng bày dưới lều."],
      ["(A) {Potted|adj} {plants|n} have been {suspended|v} from a {ceiling|n}.\n(B) {Chairs|n} have been {stacked|v} in front of an {entryway|n}.\n(C) A {computer|n} {station|n} has been set up on a {desk|n}.\n(D) A {rug|n} has been {rolled|v} up against a {wall|n}.", "(A) Cây trồng trong chậu được treo từ trần nhà.\n(B) Ghế được xếp chồng trước lối vào.\n(C) Máy tính đã được lắp đặt trên bàn.\n(D) Tấm thảm được cuộn lại dựa vào tường."],
      ["(A) One of the {men|n} is {sweeping|v} a {patio|n}.\n(B) One of the {men|n} is {replacing|v} some {flooring|n}.\n(C) A {door|n} has been {taken|v} off its {frame|n}.\n(D) A {light|n} {fixture|n} has been left on the {ground|n}.", "(A) Một người đàn ông đang quét sân.\n(B) Một người đàn ông đang thay sàn.\n(C) Cánh cửa đã được tháo khỏi khung.\n(D) Đèn bị để dưới đất."]
    ],
    part2: [
      ["How {old|adj} is this {building|n}?\n(A) To {ship|v} some {materials|n}.\n(B) About ten {years|n} {old|adj}.\n(C) {Company|n} {offices|n}, I think.", "Tòa nhà này bao nhiêu tuổi?\n(A) Để vận chuyển vật liệu.\n(B) Khoảng mười năm tuổi.\n(C) Văn phòng công ty, tôi nghĩ vậy."],
      ["Can you {come|v} to my {jazz|n} {performance|n} {tonight|adv}?\n(A) I'm {sorry|adj} I was {late|adj} for the {meeting|n}.\n(B) {Mostly|adv} just {local|adj} {musicians|n}.\n(C) {Sure|adv}, I'll be there!", "Bạn có thể đến buổi biểu diễn jazz tối nay không?\n(A) Tôi xin lỗi tôi đến muộn cuộc họp.\n(B) Chủ yếu là nhạc sĩ địa phương.\n(C) Chắc chắn, tôi sẽ có mặt!"],
      ["Which {apartment|n} {submitted|v} a {work|n} {order|n}?\n(A) It's what you did for a {living|n}.\n(B) {Submit|v} your {assignment|n} here.\n(C) It {came|v} from the {tenants|n} in B23.", "Căn hộ nào đã gửi yêu cầu sửa chữa?\n(A) Đó là công việc bạn làm để kiếm sống.\n(B) Nộp bài tập của bạn ở đây.\n(C) Nó đến từ người thuê ở B23."],
      ["Will you {contact|v} the {vendor|n} about {changing|v} our {delivery|n} {date|n}?\n(A) Of {course|n}, I'll {take|v} {care|n} of it.\n(B) An {e-mail|n} {receipt|n}.\n(C) Could I get {change|n} for a {dollar|n}?", "Bạn sẽ liên hệ nhà cung cấp về việc thay đổi ngày giao hàng chứ?\n(A) Tất nhiên, tôi sẽ lo.\n(B) Biên nhận email.\n(C) Tôi đổi một đô la được không?"],
      ["Why was the {maintenance|n} {worker|n} here?\n(A) No, he didn't.\n(B) From three o'clock until four.\n(C) Because a {light|n} {needed|v} to be {fixed|v}.", "Tại sao nhân viên bảo trì lại ở đây?\n(A) Không, anh ấy không.\n(B) Từ ba giờ đến bốn giờ.\n(C) Vì một bóng đèn cần được sửa."],
      ["Did {management|n} {make|v} a {hiring|n} {decision|n} yet?\n(A) {Put|v} it on the {highest|adj} {shelf|n}.\n(B) The {personnel|n} {department|n}.\n(C) Yes, they {chose|v} Jacob Borgman.", "Ban quản lý đã đưa ra quyết định tuyển dụng chưa?\n(A) Đặt nó lên kệ cao nhất.\n(B) Phòng nhân sự.\n(C) Rồi, họ đã chọn Jacob Borgman."],
      ["Do you want to {eat|v} here in our {cafeteria|n} or go out?\n(A) He {went|v} there {yesterday|adv}.\n(B) Well, maybe a {sandwich|n}.\n(C) Let's {eat|v} here.", "Bạn muốn ăn ở căng tin hay ra ngoài?\n(A) Anh ấy đến đó hôm qua.\n(B) Ừ, có lẽ một chiếc bánh mì.\n(C) Ăn ở đây đi."],
      ["Didn't you {e-mail|v} the {employment|n} {contract|n} to Mr. Patel {yesterday|adv}?\n(A) Yes, I would {agree|v}.\n(B) No, I'll {send|v} it now.\n(C) {Check|v} the {employee|n} {manual|n}.", "Bạn đã gửi email hợp đồng lao động cho ông Patel hôm qua chưa?\n(A) Vâng, tôi đồng ý.\n(B) Chưa, tôi sẽ gửi ngay.\n(C) Kiểm tra sổ tay nhân viên."],
      ["Our {division|n}'s {picnic|n} is this {Saturday|n}, right?\n(A) There's a lot of {rain|n} in the {forecast|n}.\n(B) {Sure|adv}, I like {salad|n}.\n(C) At the end of this {corridor|n}.", "Buổi dã ngoại của bộ phận là thứ Bảy này, đúng không?\n(A) Dự báo có nhiều mưa.\n(B) Chắc chắn, tôi thích salad.\n(C) Ở cuối hành lang này."],
      ["Would you like {coffee|n} or {tea|n}?\n(A) Just {water|n}, please.\n(B) For a few {dollars|n} more.\n(C) A fifteen-minute {break|n}.", "Bạn muốn cà phê hay trà?\n(A) Chỉ cần nước, xin cảm ơn.\n(B) Thêm vài đô la nữa.\n(C) Nghỉ mười lăm phút."],
      ["We {achieved|v} our {sales|n} {targets|n} this {month|n}.\n(A) That's {excellent|adj} {news|n}!\n(B) A few {times|n} a day.\n(C) To the end of April.", "Chúng ta đã đạt mục tiêu doanh số tháng này.\n(A) Tin tuyệt vời!\n(B) Vài lần một ngày.\n(C) Đến cuối tháng Tư."],
      ["How {often|adv} do you {travel|v} for your {job|n}?\n(A) It {turned|v} out {well|adv}.\n(B) Yes, I did {find|v} one.\n(C) About {once|adv} a {month|n}.", "Bạn đi công tác thường xuyên như thế nào?\n(A) Kết quả tốt.\n(B) Vâng, tôi đã tìm được một cái.\n(C) Khoảng mỗi tháng một lần."],
      ["We should {hike|v} the Wildflower {Trail|n} today.\n(A) This {seat|n} is {available|adj}.\n(B) I didn't {bring|v} {boots|n}.\n(C) At the {visitors|n}' {center|n}.", "Chúng ta nên đi bộ đường mòn Wildflower hôm nay.\n(A) Ghế này trống.\n(B) Tôi không mang giày ống.\n(C) Ở trung tâm du khách."],
      ["You've {booked|v} a {hotel|n} in London, haven't you?\n(A) Very {enjoyable|adj}, thanks.\n(B) He {usually|adv} {takes|v} the {train|n}.\n(C) Yes, I {made|v} a {reservation|n} last week.", "Bạn đã đặt khách sạn ở London rồi, phải không?\n(A) Rất thú vị, cảm ơn.\n(B) Anh ấy thường đi tàu.\n(C) Vâng, tôi đã đặt chỗ tuần trước."],
      ["Are there any {tickets|n} left for {tonight|adv}'s {concert|n}?\n(A) It's {sold|v} out.\n(B) He's a {concert|n} {violinist|n}.\n(C) They {already|adv} {left|v}.", "Còn vé nào cho buổi hòa nhạc tối nay không?\n(A) Đã bán hết.\n(B) Anh ấy là nghệ sĩ violin.\n(C) Họ đã rời đi rồi."],
      ["Haven't you {used|v} this {software|n} before?\n(A) Can I {take|v} your {order|n}?\n(B) I haven't had the {chance|n}.\n(C) About 40 {dollars|n}.", "Bạn chưa sử dụng phần mềm này trước đây à?\n(A) Tôi ghi order cho bạn nhé?\n(B) Tôi chưa có dịp.\n(C) Khoảng 40 đô la."],
      ["When is the {new|adj} {blender|n} going to be {released|v}?\n(A) {Only|adv} with {fruits|n} and {vegetables|n}.\n(B) In the {kitchen|n} {cabinet|n}.\n(C) The {prototype|n} is {still|adv} being {tested|v}.", "Khi nào máy xay sinh tố mới sẽ được ra mắt?\n(A) Chỉ với trái cây và rau.\n(B) Trong tủ bếp.\n(C) Mẫu thử vẫn đang được kiểm tra."],
      ["Who's {picking|v} up our {clients|n} at the {airport|n}?\n(A) They {decided|v} to {drive|v}.\n(B) At {terminal|n} 2.\n(C) It's a {marketing|n} {position|n}.", "Ai sẽ đón khách hàng ở sân bay?\n(A) Họ quyết định tự lái xe.\n(B) Ở nhà ga 2.\n(C) Đó là vị trí marketing."],
      ["Where are the {red|adj} {roses|n} that {came|v} in this {morning|n}?\n(A) About three {liters|n} of {water|n}.\n(B) No, I didn't {check|v} out the {sale|n}.\n(C) I {needed|v} some for a {large|adj} {bouquet|n}.", "Những bông hồng đỏ đến sáng nay ở đâu?\n(A) Khoảng ba lít nước.\n(B) Không, tôi không xem đợt giảm giá.\n(C) Tôi cần một ít cho bó hoa lớn."],
      ["This {film|n} has been {nominated|v} for {several|adj} {awards|n}.\n(A) Why don't we go {see|v} it?\n(B) After the {announcement|n}.\n(C) He {made|v} a {great|adj} {speech|n}.", "Bộ phim đã được đề cử cho nhiều giải thưởng.\n(A) Sao mình không đi xem?\n(B) Sau thông báo.\n(C) Anh ấy đã phát biểu tuyệt vời."],
      ["Who's {interested|adj} in {starting|v} a car {pool|n} {program|n}?\n(A) Thanks, but I can't {swim|v}.\n(B) Clara's {already|adv} {organizing|v} one.\n(C) It's a very {interesting|adj} {article|n}.", "Ai quan tâm đến việc bắt đầu chương trình đi chung xe?\n(A) Cảm ơn, nhưng tôi không biết bơi.\n(B) Clara đang tổ chức rồi.\n(C) Đó là bài báo rất thú vị."],
      ["Where will I {teach|v} my {workshop|n} this {month|n}?\n(A) We just {sent|v} an {e-mail|n} to all {instructors|n}.\n(B) Five to seven {months|n}.\n(C) Yes, it's a {beautiful|adj} {building|n}.", "Tôi sẽ dạy hội thảo ở đâu tháng này?\n(A) Chúng tôi vừa gửi email cho tất cả giảng viên.\n(B) Năm đến bảy tháng.\n(C) Vâng, đó là tòa nhà đẹp."],
      ["Why are we {moving|v} these {sweaters|n} to the back of the {store|n}?\n(A) In the {new|adj} {shopping|n} {mall|n}.\n(B) Yes, they {come|v} in other {colors|n}.\n(C) Our {spring|n} {merchandise|n} is {arriving|v} {soon|adv}.", "Tại sao chúng ta chuyển áo len ra phía sau cửa hàng?\n(A) Ở trung tâm mua sắm mới.\n(B) Vâng, chúng có màu khác.\n(C) Hàng hóa mùa xuân sắp đến."],
      ["Would you be {interested|adj} in {working|v} on some of these {contracts|n}?\n(A) Thank you for {meeting|v} me.\n(B) A {contact|n} {lens|n} {prescription|n}.\n(C) I have very {limited|adj} {time|n}.", "Bạn có quan tâm đến việc làm một số hợp đồng này không?\n(A) Cảm ơn đã gặp tôi.\n(B) Đơn thuốc kính áp tròng.\n(C) Tôi có rất ít thời gian."],
      ["What type of {job|n} are you {looking|v} for?\n(A) No, at ten a.m.\n(B) I {really|adv} like {working|v} with {computers|n}.\n(C) Just a résumé is {needed|v}.", "Bạn đang tìm kiếm loại công việc gì?\n(A) Không, lúc mười giờ sáng.\n(B) Tôi thực sự thích làm việc với máy tính.\n(C) Chỉ cần một bản lý lịch."]
    ],

    part3: [
      ["Thank you so {much|adv} for {organizing|v} the {annual|adj} company {picnic|n}.", "Cảm ơn bạn rất nhiều vì đã tổ chức buổi dã ngoại hàng năm của công ty."],
      ["{Everybody|n} {seemed|v} to {enjoy|v} it.", "Mọi người dường như đều thích nó."],
      ["We {deserved|v} it after {working|v} so {hard|adv} this year.", "Chúng ta xứng đáng sau khi làm việc vất vả năm nay."],
      ["The {food|n} was {great|adj}, by the way.", "Nhân tiện, đồ ăn rất tuyệt."],
      ["{Especially|adv} the {peach|n} {pie|n} you {made|v}.", "Đặc biệt là bánh đào bạn làm."],
      ["Would you {mind|v} {sharing|v} the {recipe|n}?", "Bạn có phiền chia sẻ công thức không?"],
      ["It was {delicious|adj}.", "Nó rất ngon."],
      ["I {found|v} the {recipe|n} {online|adv}.", "Tôi tìm thấy công thức trên mạng."],
      ["I'll {send|v} you a {link|n} to the Web {page|n}.", "Tôi sẽ gửi cho bạn đường link đến trang web."],
      ["There's a {really|adv} {helpful|adj} {video|n} that {walks|v} you through all the {steps|n}.", "Có một video rất hữu ích hướng dẫn bạn qua tất cả các bước."],
      ["I {recommend|v} you {watch|v} it {first|adv}.", "Tôi khuyên bạn nên xem nó trước."],

      ["I'd like to {finish|v} {calculating|v} the company's {expense|n} {reports|n} for the {month|n}.", "Tôi muốn hoàn thành việc tính toán báo cáo chi phí của công ty trong tháng."],
      ["Have you {finished|v} {reviewing|v} the {travel|n} {reimbursement|n} {forms|n} from all the {departments|n}?", "Bạn đã hoàn thành việc xem xét các mẫu đơn hoàn trả chi phí đi lại từ tất cả các phòng ban chưa?"],
      ["I'm {almost|adv} {done|adj}, but I have a {question|n} about a {hotel|n} {receipt|n}.", "Tôi gần xong rồi, nhưng tôi có câu hỏi về biên nhận khách sạn."],
      ["Our {policy|n} is for {employees|n} to {stay|v} at a {hotel|n} on our {list|n} of {approved|adj} {accommodations|n}.", "Chính sách là nhân viên phải ở tại khách sạn trong danh sách chỗ ở được phê duyệt."],
      ["This one isn't on the {list|n}.", "Cái này không có trong danh sách."],
      ["He's a {new|adj} {employee|n} and may have {forgotten|v} the {policy|n}.", "Anh ấy là nhân viên mới và có thể đã quên chính sách."],
      ["As a {supervisor|n}, I can {approve|v} the {expense|n} this one {time|n}.", "Với tư cách giám sát viên, tôi có thể phê duyệt chi phí lần này."],

      ["{Good|adj} {morning|n}, Damilola. How's {everything|n} up here on {deck|n}?", "Chào buổi sáng, Damilola. Mọi thứ ở trên boong thế nào?"],
      ["It was an {uneventful|adj} {night|n}, and our {cargo|n} {ship|n} {still|adv} hasn't {moved|v} yet.", "Đêm qua yên tĩnh, và tàu chở hàng vẫn chưa di chuyển."],
      ["I {hope|v} the {fog|n} over the {harbor|n} {lifts|v} {soon|adv}.", "Tôi hy vọng sương mù trên bến cảng sớm tan."],
      ["The {ship|n} won't be {able|adj} to {leave|v} until the {weather|n} {improves|v}.", "Con tàu sẽ không thể rời đi cho đến khi thời tiết cải thiện."],
      ["I {hope|v} we won't get too far behind {schedule|n}.", "Tôi hy vọng chúng ta sẽ không bị trễ lịch trình quá nhiều."],
      ["I'll be {sure|adj} to {call|v} the {port|n} {authority|n} {soon|adv} for an {update|n}.", "Tôi sẽ chắc chắn gọi cho cơ quan cảng sớm để cập nhật."],

      ["I've {made|v} a {reservation|n} to {meet|v} with some {clients|n} for {lunch|n} today.", "Tôi đã đặt chỗ để gặp một số khách hàng ăn trưa hôm nay."],
      ["I {know|v} I {asked|v} to be {seated|v} on your {beautiful|adj} {terrace|n}, but it's very {hot|adj} today.", "Tôi biết tôi đã yêu cầu ngồi ở sân thượng đẹp của bạn, nhưng hôm nay rất nóng."],
      ["I can {seat|v} you at {table|n} four {inside|adv}.", "Tôi có thể xếp chỗ cho bạn ở bàn bốn bên trong."],
      ["Your {parking|n} {area|n}'s {nearly|adv} {full|adj}.", "Bãi đậu xe gần đầy rồi."],
      ["Our {customers|n} can {park|v} for {free|adv} in the {garage|n} across the {street|n}.", "Khách hàng có thể đậu xe miễn phí trong nhà xe bên kia đường."],
      ["Our {cashier|n} will {stamp|v} their {parking|n} {tickets|n}.", "Thu ngân sẽ đóng dấu vé đậu xe."],

      ["Thank you both for {coming|v} here today to {demonstrate|v} your company's {new|adj} {compact|adj} {printer|n}.", "Cảm ơn cả hai đã đến đây hôm nay để giới thiệu máy in nhỏ gọn mới của công ty bạn."],
      ["I {know|v} the {store|n} will be {busy|adj} because we're having a {big|adj} {sale|n} on {laptop|n} {computers|n}.", "Tôi biết cửa hàng sẽ đông vì chúng tôi đang giảm giá lớn laptop."],
      ["Our {printers|n} are {perfect|adj} for {students|n} or {people|n} with {home|n} {offices|n} who may have {limited|adj} {space|n}.", "Máy in hoàn hảo cho sinh viên hoặc người có văn phòng tại nhà với không gian hạn chế."],
      ["Where can I {put|v} our {demonstration|n} {table|n}?", "Tôi có thể đặt bàn trình diễn ở đâu?"],
      ["If you {brought|v} any {brochures|n} with you, it'll be {helpful|adj} to {put|v} those out for {people|n} to {take|v}.", "Nếu bạn mang theo tờ rơi nào, sẽ hữu ích khi đặt ra cho mọi người lấy."],

      ["I'm very {pleased|adj} with the {sales|n} of our {brands|n} of {cakes|n}, {pies|n}, and {cookies|n}.", "Tôi rất hài lòng với doanh số các thương hiệu bánh ngọt, bánh nướng và bánh quy."],
      ["The {biggest|adj} {trend|n} right now is the {reduction|n} of {sugar|n}.", "Xu hướng lớn nhất hiện nay là giảm đường."],
      ["The {public|n} {wants|v} {healthier|adj} {products|n}, but the same {great|adj} {taste|n}.", "Công chúng muốn sản phẩm lành mạnh hơn, nhưng vẫn ngon."],
      ["One of our {ingredient|n} {suppliers|n} {recently|adv} {started|v} {offering|v} a {sweetener|n} from {natural|adj} {ingredients|n}.", "Một nhà cung cấp nguyên liệu gần đây bắt đầu cung cấp chất tạo ngọt từ nguyên liệu tự nhiên."],
      ["I'd have to do some {investigation|n} to {find|v} out {more|adv} about that.", "Tôi sẽ phải nghiên cứu để tìm hiểu thêm về điều đó."],

      ["I'm {calling|v} to see if you'd have {time|n} to {work|v} on a {project|n} for my {marketing|n} {firm|n}.", "Tôi gọi để xem bạn có thời gian làm dự án cho công ty marketing của tôi không."],
      ["We've {expanded|v} a lot in the past year, and we {need|v} some {help|n}.", "Chúng tôi đã mở rộng nhiều trong năm qua và cần sự giúp đỡ."],
      ["We have a {new|adj} {client|n} in Brazil who's {interested|adj} in {creating|v} a {marketing|n} {campaign|n}.", "Chúng tôi có khách hàng mới ở Brazil quan tâm đến việc tạo chiến dịch marketing."],
      ["You'd be {overseeing|v} the {campaign|n}.", "Bạn sẽ giám sát chiến dịch."],
      ["Why don't you {send|v} me a {detailed|adj} {description|n} of the {work|n}?", "Tại sao bạn không gửi cho tôi mô tả chi tiết về công việc?"],
      ["That'll {give|v} me an {idea|n} of how {much|adj} {time|n} this {project|n} will {take|v}.", "Điều đó sẽ cho tôi biết dự án này mất bao nhiêu thời gian."],

      ["We were about to {pack|v} {van|n} number five for the {music|n} {festival|n} when we {noticed|v} it's got a {flat|adj} {tire|n}.", "Chúng tôi sắp chất hàng lên xe van cho lễ hội âm nhạc thì nhận ra nó bị xẹp lốp."],
      ["We're {supposed|v} to get there by eleven to {set|v} up {lunch|n} for the {performers|n}.", "Chúng tôi phải đến trước mười một giờ để chuẩn bị bữa trưa cho nghệ sĩ."],
      ["We've got a lot of {catering|n} {jobs|n} today.", "Chúng ta có nhiều đơn hàng tiệc hôm nay."],
      ["We can {use|v} {van|n} number three.", "Chúng ta có thể dùng xe van số ba."],
      ["The {food|n}'s {already|adv} in {coolers|n}, but {everything|n}'s in the {kitchen|n} with the {serving|adj} {utensils|n} and {napkins|n}.", "Thức ăn đã ở trong thùng lạnh, nhưng mọi thứ đang ở bếp cùng dụng cụ và khăn ăn."],
      ["It all {needs|v} to be {brought|v} to the {parking|n} {area|n}.", "Tất cả cần được mang ra bãi đậu xe."],

      ["I'm {interested|adj} in {working|v} in your {field|n}.", "Tôi quan tâm đến việc làm trong lĩnh vực của bạn."],
      ["I'm {talking|v} to some {professionals|n} {first|adv} so I can {find|v} out {more|adv} about it.", "Tôi đang nói chuyện với một số chuyên gia trước để tìm hiểu thêm."],
      ["How did you get your {start|n}?", "Bạn bắt đầu sự nghiệp như thế nào?"],
      ["My {family|n} {always|adv} {subscribed|v} to three {newspapers|n}.", "Gia đình tôi luôn đặt mua ba tờ báo."],
      ["At my {university|n}, I {joined|v} the {newspaper|n} and {eventually|adv} {worked|v} my way up to being an {editor|n}.", "Ở đại học, tôi tham gia tờ báo và cuối cùng trở thành biên tập viên."],
      ["Is it {true|adj} that {people|n} in the {news|n} {business|n} {work|v} very {long|adj} {hours|n}?", "Có đúng là người trong ngành tin tức làm việc rất nhiều giờ không?"],
      ["What's your {schedule|n} like?", "Lịch trình của bạn như thế nào?"],

      ["I just {read|v} the {article|n} on the company Web {site|n} about the {proposed|adj} {merger|n} with QZ Corporation.", "Tôi vừa đọc bài báo trên trang web công ty về đề xuất sáp nhập với Tập đoàn QZ."],
      ["It {looks|v} like we're going ahead with it.", "Có vẻ như chúng ta sẽ tiến hành."],
      ["There would be a lot of {advantages|n} to {merging|v} {operations|n}.", "Sẽ có nhiều lợi ích khi sáp nhập hoạt động."],
      ["They {also|adv} {talked|v} about it last year.", "Họ cũng đã nói về điều này năm ngoái."],
      ["There were a lot of {details|n} to {work|v} out.", "Có rất nhiều chi tiết cần giải quyết."],
      ["Now it {looks|v} like we won't be {relocating|v}.", "Bây giờ có vẻ chúng ta sẽ không phải di dời."],
      ["I {really|adv} don't want to {move|v}, so that's a {relief|n}.", "Tôi thực sự không muốn chuyển đi, nên đó là sự nhẹ nhõm."],

      ["My {company|n} {wants|v} to {give|v} every {employee|n} a {gift|n}.", "Công ty tôi muốn tặng mỗi nhân viên một món quà."],
      ["Since we're about to {host|v} our {annual|adj} {staff|n} {basketball|n} {tournament|n}, I {thought|v} a {water|n} {bottle|n} might be {good|adj}.", "Vì sắp tổ chức giải bóng rổ nhân viên, tôi nghĩ chai nước là ý hay."],
      ["I {recommend|v} the {metal|adj} {bottle|n} with the {wide|adj}-mouthed {lid|n}.", "Tôi khuyên dùng chai kim loại có nắp miệng rộng."],
      ["It's {easier|adj} to {clean|v} than the one with the {straw|n}.", "Nó dễ rửa hơn loại có ống hút."],
      ["You could {put|v} our company {logo|n} on it, right?", "Bạn có thể in logo công ty lên đó, đúng không?"],
      ["You'll just {need|v} to {send|v} me the {graphic|n} {file|n}.", "Bạn chỉ cần gửi cho tôi file hình ảnh."],

      ["I just {finished|v} {recording|v} the {audio|n} {guide|n} for the {pencil|n} {drawings|n}.", "Tôi vừa hoàn thành thu âm hướng dẫn cho các bức vẽ bút chì."],
      ["They'll be {included|v} in our {modern|adj} {art|n} {exhibit|n} next week.", "Chúng sẽ có trong triển lãm nghệ thuật hiện đại tuần tới."],
      ["The {files|n} will be {loaded|v} onto the {audio|n} {devices|n} tomorrow.", "Các file sẽ được tải lên thiết bị âm thanh ngày mai."],
      ["The {drawing|n} by Claudia Hoffman will no {longer|adv} be in the {exhibit|n}.", "Bức vẽ của Claudia Hoffman sẽ không còn trong triển lãm."],
      ["There was a {scheduling|n} mix-up, and it was {promised|v} to another {museum|n}.", "Đã có sự nhầm lẫn lịch trình, và nó đã được hứa cho bảo tàng khác."],
      ["I'll {make|v} that {change|n} to the {audio|n}-guide {recording|n} right {away|adv}.", "Tôi sẽ thay đổi bản thu hướng dẫn âm thanh ngay."],

      ["I'm {glad|adj} we were {assigned|v} to {cover|v} the {press|n} {conference|n} {earlier|adv} today.", "Tôi vui vì được phân công đưa tin buổi họp báo hôm nay."],
      ["I {counted|v} seven other {major|adj} {media|n} {networks|n} there, in {addition|n} to ours.", "Tôi đếm được bảy mạng truyền thông lớn khác, ngoài chúng ta."],
      ["The {offshore|adj} {wind|n} {industry|n} is going to {transform|v} the way this {region|n} gets its {power|n}.", "Ngành điện gió ngoài khơi sẽ thay đổi cách vùng này nhận năng lượng."],
      ["The {largest|adj} {cluster|n} of {wind|n} {turbines|n} is {already|adv} {built|v}.", "Cụm tuabin gió lớn nhất đã được xây xong."],
      ["The other {sites|n} are at {different|adj} {stages|n} of {construction|n}.", "Các địa điểm khác đang ở các giai đoạn xây dựng khác nhau."],
      ["I think it's {crucial|adj} for us to {focus|v} on how many {new|adj} {jobs|n} are {opening|v} up.", "Tôi nghĩ điều quan trọng là tập trung vào có bao nhiêu việc làm mới đang mở ra."],
    ],

    part4: [
      ["You have {reached|v} the {information|n} {line|n} for the Cranbury {Apartments|n} {management|n} {office|n}.", "Bạn đã kết nối đến đường dây thông tin của văn phòng quản lý căn hộ Cranbury."],
      ["{Maintenance|n} {work|n} will {begin|v} to {repave|v} the {entire|adj} {parking|n} {area|n}.", "Công việc bảo trì sẽ bắt đầu lát lại toàn bộ khu vực đậu xe."],
      ["All {residents|n} should {move|v} their {vehicles|n} from their {designated|adj} {parking|n} {spots|n} before eight A.M.", "Tất cả cư dân nên di chuyển xe khỏi chỗ đậu được chỉ định trước 8 giờ sáng."],
      ["Any {vehicle|n} {still|adv} in its {spot|n} will be {towed|v} at the {owner|n}'s {expense|n}.", "Bất kỳ xe nào vẫn còn ở chỗ sẽ bị kéo đi với chi phí của chủ xe."],
      ["A {map|n} of {alternate|adj} {parking|n} {sites|n} was {mailed|v} to {residents|n} last week.", "Một bản đồ các bãi đậu xe thay thế đã được gửi cho cư dân tuần trước."],

      ["On today's {episode|n}, we'll go over how you can {maintain|v} and {make|v} {minor|adj} {repairs|n} to the {roof|n} of your {home|n}.", "Trong tập hôm nay, chúng ta sẽ xem cách bảo trì và sửa chữa nhỏ mái nhà."],
      ["The {first|adj} thing to do is to {invest|v} in a few {special|adj} {tools|n}, like a {trowel|n} and {crowbar|n}.", "Việc đầu tiên là đầu tư vào một vài dụng cụ đặc biệt, như bay và xà beng."],
      ["It's {important|adj} to {choose|v} some that are {high|adj} {quality|n} because you'll {use|v} them for {many|adj} years.", "Điều quan trọng là chọn những thứ chất lượng cao vì bạn sẽ dùng chúng nhiều năm."],
      ["The {crowbar|n} will {help|v} you {remove|v} {loose|adj} {shingles|n} that you can then {replace|v}.", "Xà beng sẽ giúp bạn gỡ các tấm lợp bị lỏng để thay thế."],
      ["I {highly|adv} {recommend|v} you {take|v} {photos|n} of your {roof|n} every year to {track|v} its {overall|adj} {condition|n}.", "Tôi rất khuyên bạn nên chụp ảnh mái nhà hàng năm để theo dõi tình trạng tổng thể."],

      ["Thanks {again|adv} for {joining|v} me on today's {tour|n} of the {beautiful|adj} Wallingford {Conservatory|n}.", "Cảm ơn một lần nữa vì đã tham gia chuyến tham quan nhà kính Wallingford xinh đẹp."],
      ["I {hope|v} you {enjoyed|v} {seeing|v} and {learning|v} about the many {species|n} of {plants|n} and {flowers|n}.", "Tôi hy vọng bạn đã thích việc xem và tìm hiểu về nhiều loài thực vật và hoa."],
      ["{World|n}-{renowned|adj} {botanist|n} Samantha Hughes will be {giving|v} a {lecture|n} on the {care|n} of {flowering|adj} {orchid|n} {plants|n}.", "Nhà thực vật học nổi tiếng thế giới Samantha Hughes sẽ thuyết trình về cách chăm sóc cây lan ra hoa."],
      ["Samantha's {work|n} has {also|adv} been {featured|v} in a {documentary|n} {film|n} called Orchid Caretakers.", "Công trình của Samantha cũng đã được giới thiệu trong bộ phim tài liệu Orchid Caretakers."],

      ["Before the {benefit|n} {concert|n} {begins|v}, I want to {thank|v} all of you for {supporting|v} the Hillcaster {Community|n} {Center|n}.", "Trước khi buổi hòa nhạc từ thiện bắt đầu, tôi muốn cảm ơn tất cả các bạn đã ủng hộ Trung tâm Cộng đồng Hillcaster."],
      ["Our {facilities|n} have been in {need|n} of some {repairs|n} for {quite|adv} a while.", "Cơ sở vật chất của chúng tôi đã cần sửa chữa khá lâu rồi."],
      ["I want to {encourage|v} you to {buy|v} {food|n} and {drinks|n} from the {concession|n} {stand|n}.", "Tôi muốn khuyến khích bạn mua đồ ăn và thức uống từ quầy bán hàng."],
      ["{Eighty|adj} {percent|n} of the {proceeds|n} will go to {construction|n} at the Hillcaster {Community|n} {Center|n}.", "Tám mươi phần trăm số tiền thu được sẽ dành cho việc xây dựng Trung tâm Cộng đồng Hillcaster."],

      ["We'll be {focusing|v} on {using|v} {time|n} {efficiently|adv} as a {business|n} {owner|n}.", "Chúng ta sẽ tập trung vào việc sử dụng thời gian hiệu quả với tư cách chủ doanh nghiệp."],
      ["{Planning|v} and {spending|v} your {time|n} {wisely|adv} is a {key|adj} {factor|n} to {business|n} {success|n}.", "Lên kế hoạch và sử dụng thời gian khôn ngoan là yếu tố then chốt cho thành công kinh doanh."],
      ["I'll be {referring|v} to {documents|n} from the {packet|n} you were {handed|v} as you {arrived|v}.", "Tôi sẽ tham khảo các tài liệu từ gói bạn được phát khi đến."],
      ["To {start|v} off, we'll do an {exercise|n} to get to {know|v} one another {better|adv}.", "Để bắt đầu, chúng ta sẽ làm một bài tập để hiểu nhau hơn."],

      ["{Archaeologists|n} have {uncovered|v} the {remains|n} of a fifth-century {marketplace|n} with {colorful|adj} {mosaic|n} {tiles|n}.", "Các nhà khảo cổ đã khai quật tàn tích của khu chợ thế kỷ thứ năm với gạch mosaic đầy màu sắc."],
      ["You'll {notice|v} how {vibrant|adj} the {colors|n} are, even after all these {centuries|n}.", "Bạn sẽ nhận thấy màu sắc rực rỡ như thế nào, dù đã qua nhiều thế kỷ."],
      ["You can {still|adv} {see|v} {intricate|adj} {details|n} in the {artists|n}' {pictures|n} of {scenes|n} from {daily|adj} {life|n}.", "Bạn vẫn có thể thấy các chi tiết tinh xảo trong tranh của các nghệ sĩ về cảnh sinh hoạt hàng ngày."],
      ["I'm {sorry|adj}, but {taking|v} {photos|n} is not {allowed|v}, as the {flash|n} would {damage|v} the {tiles|n}.", "Tôi xin lỗi, nhưng chụp ảnh không được phép, vì đèn flash sẽ làm hỏng gạch."],
      ["Please {hold|v} on to the {handrails|n} on either side.", "Vui lòng bám vào lan can hai bên."],

      ["Our {agency|n}'s just {won|v} an {important|adj} {contract|n} with Parker Auto Parts {Company|n}.", "Công ty quảng cáo của chúng ta vừa giành được hợp đồng quan trọng với Công ty Parker Auto Parts."],
      ["We'll be {developing|v} two 30-second {ads|n} for {local|adj} {radio|n} {stations|n}.", "Chúng ta sẽ phát triển hai quảng cáo 30 giây cho các đài phát thanh địa phương."],
      ["I {know|v} it's a {tight|adj} {schedule|n}, but this is a {priority|n}.", "Tôi biết lịch trình gấp, nhưng đây là ưu tiên."],
      ["There's a {rough|adj} {ad|n} we can {start|v} {editing|v}.", "Có một bản quảng cáo thô chúng ta có thể bắt đầu chỉnh sửa."],

      ["I've been {receiving|v} {complaints|n} about the {free|adj} {snacks|n} in the {hospital|n} {break|n} {rooms|n}.", "Tôi đã nhận được phàn nàn về đồ ăn nhẹ miễn phí trong phòng nghỉ bệnh viện."],
      ["Some {people|n} have {mentioned|v} that they don't like the {selection|n} of {snacks|n}.", "Một số người đã đề cập rằng họ không thích sự lựa chọn đồ ăn nhẹ."],
      ["I was {thinking|v} about {putting|v} some {money|n} into each of your {staff|n} {spending|n} {accounts|n} every {month|n}.", "Tôi đang nghĩ về việc bỏ một ít tiền vào mỗi tài khoản chi tiêu nhân viên hàng tháng."],
      ["That will {require|v} {management|n} {approval|n}, but I'll {keep|v} you {posted|v}.", "Điều đó sẽ cần sự phê duyệt của ban quản lý, nhưng tôi sẽ thông báo cho bạn."],

      ["I'm {pleased|adj} to {welcome|v} you to the {celebration|n} for our {town|n}'s {newly|adv} {renovated|v} Lakeville {Park|n}.", "Tôi vui mừng chào đón bạn đến lễ kỷ niệm công viên Lakeville mới được cải tạo."],
      ["We'll be {walking|v} around the {pond|n} and along the {renovated|adj} {walking|n} {trail|n}.", "Chúng ta sẽ đi bộ quanh hồ và dọc đường đi bộ đã được cải tạo."],
      ["We'll {end|v} our {walk|n} on the {hill|n} on the {north|adj} side of the {park|n}.", "Chúng ta sẽ kết thúc chuyến đi bộ trên đồi phía bắc công viên."],
      ["For those of you {taking|v} {photos|n}, don't {forget|v} to {post|v} them on the {city|n}'s Web {site|n}.", "Những ai chụp ảnh, đừng quên đăng lên trang web thành phố."],

      ["We've {received|v} lots of {requests|n} for {information|n} on {growing|v} a {vegetable|n} {garden|n}.", "Chúng tôi đã nhận được nhiều yêu cầu về thông tin trồng vườn rau."],
      ["{People|n} want to {know|v} how to {keep|v} their {garden|n} {healthy|adj} and get the {vegetables|n} they want.", "Mọi người muốn biết cách giữ vườn khỏe mạnh và có được rau họ muốn."],
      ["The {first|adj} thing we {recommend|v} is {regular|adj} {soil|n} {testing|n}.", "Điều đầu tiên chúng tôi khuyến nghị là kiểm tra đất định kỳ."],
      ["All {soil|n} {samples|n} in the next six weeks should be {taken|v} from the same {depth|n}.", "Tất cả mẫu đất trong sáu tuần tới nên được lấy từ cùng một độ sâu."],
      ["Please {sign|v} up for our {mailing|n} {list|n} to {stay|v} {informed|adj} of {future|adj} {lectures|n}.", "Vui lòng đăng ký danh sách gửi thư để cập nhật các bài giảng trong tương lai."]
    ]
  },
  "2024_2": {
    name: "TOEIC 2024 - Test 2",
    part1: [
      ["(A) She's {inserting|v} a {cord|n} into an {outlet|n}.\n(B) She's {pressing|v} a {button|n} on a {machine|n}.\n(C) She's {gripping|v} the {handle|n} of a {drawer|n}.\n(D) She's {tacking|v} a {notice|n} onto the {wall|n}.", "(A) Cô ấy đang cắm phích vào ổ điện.\n(B) Cô ấy đang nhấn nút trên máy.\n(C) Cô ấy đang nắm tay cầm ngăn kéo.\n(D) Cô ấy đang đính thông báo lên tường."],
      ["(A) Some {window|n} {shutters|n} are being {replaced|v}.\n(B) A {pillow|n} is being {arranged|v} on a {seat|n}.\n(C) An {outdoor|adj} {table|n} is being {cleared|v} off.\n(D) Some {wooden|adj} {boards|n} are being {painted|v}.", "(A) Một số cửa sổ chớp đang được thay thế.\n(B) Gối đang được sắp xếp trên ghế.\n(C) Bàn ngoài trời đang được dọn sạch.\n(D) Một số tấm ván gỗ đang được sơn."],
      ["(A) Some {utensils|n} have been {discarded|v} in a {bin|n}.\n(B) Some {bottles|n} are being {emptied|v} into a {sink|n}.\n(C) A {rolling|adj} {chair|n} has been {placed|v} next to a {counter|n}.\n(D) Some {drawers|n} have been left {open|adj}.", "(A) Một số dụng cụ đã bị vứt vào thùng.\n(B) Một số chai đang được đổ vào bồn rửa.\n(C) Ghế xoay đã được đặt cạnh quầy.\n(D) Một số ngăn kéo đã được để mở."],
      ["(A) A {man|n} is {chopping|v} some {wood|n} into {pieces|n}.\n(B) {Leaves|n} are {scattered|v} across the {grass|n}.\n(C) A {man|n} is {closing|v} a {window|n}.\n(D) {Wood|n} is {piled|v} near a {fence|n}.", "(A) Một người đàn ông đang chặt gỗ thành từng mảnh.\n(B) Lá rơi vương vãi khắp bãi cỏ.\n(C) Một người đàn ông đang đóng cửa sổ.\n(D) Gỗ được chất đống gần hàng rào."],
      ["(A) {People|n} are {standing|v} in {line|n} in a {lobby|n}.\n(B) {Items|n} are being {loaded|v} into {shopping|n} {bags|n}.\n(C) {Tents|n} have been set up in a {parking|n} {area|n}.\n(D) A {worker|n} is {putting|v} up a {canopy|n}.", "(A) Mọi người đang xếp hàng trong sảnh.\n(B) Đồ đang được chất vào túi mua sắm.\n(C) Lều đã được dựng trong khu vực đậu xe.\n(D) Một công nhân đang lắp mái che."],
      ["(A) Some {luggage|n} is {stacked|v} next to an {escalator|n}.\n(B) A {suitcase|n} is being {lifted|v} onto a {shuttle|n} {bus|n}.\n(C) Some {suitcases|n} are {displayed|v} in a {shop|n} {window|n}.\n(D) A {luggage|n} {rack|n} has two {levels|n}.", "(A) Hành lý được xếp chồng cạnh thang cuốn.\n(B) Vali đang được nâng lên xe buýt trung chuyển.\n(C) Một số vali được trưng bày trong tủ kính cửa hàng.\n(D) Ngăn đựng hành lý có hai tầng."]
    ],
    part2: [
      ["Have the {machines|n} on the {factory|n} {floor|n} been {cleaned|v}?\n(A) No, not yet.\n(B) It's in the {shipping|n} {container|n}.\n(C) I just put it in the {trash|n} {bin|n}.", "Máy móc trên sàn nhà máy đã được lau chưa?\n(A) Chưa.\n(B) Nó ở trong cont vận chuyển.\n(C) Tôi vừa bỏ nó vào thùng rác."],
      ["How much will the {budget|n} {increase|v} next year?\n(A) About 10 {percent|n}.\n(B) Three {hours|n}, I think.\n(C) At the {bank|n}'s main {branch|n}.", "Ngân sách sẽ tăng bao nhiêu cho năm sau?\n(A) Khoảng 10 phần trăm.\n(B) Ba tiếng, tôi nghĩ.\n(C) Ở chi nhánh chính của ngân hàng."],
      ["You're going to {water|v} the {plants|n} before you {leave|v}, aren't you?\n(A) I {walked|v} the whole way.\n(B) Yes, right after {lunch|n}.\n(C) In the {breakroom|n}.", "Bạn sẽ tưới cây trước khi đi, đúng không?\n(A) Tôi đã đi bộ nguyên đoạn đường.\n(B) Vâng, ngay sau bữa trưa.\n(C) Trong phòng nghỉ."],
      ["Aren't you going to {schedule|v} an eye {doctor|n} {appointment|n}?\n(A) Those {glasses|n} look {nice|adj} on you.\n(B) I {already|adv} {scheduled|v} one.\n(C) The {seminar|n} is three days long.", "Bạn không định đặt lịch hẹn bác sĩ mắt à?\n(A) Bạn đeo kính này rất đẹp.\n(B) Tôi đã đặt lịch rồi.\n(C) Buổi học chuyên đề kéo dài ba ngày."],
      ["I'm going to try to {fix|v} this {printer|n}.\n(A) You're right, it doesn't {fit|v}.\n(B) {Double-sided|adj} {copies|n}.\n(C) Are you sure it can be {repaired|v}?", "Tôi sẽ cố gắng sửa cái máy in này.\n(A) Bạn đúng rồi, nó không vừa.\n(B) In hai mặt.\n(C) Bạn có chắc là nó sửa được không?"],
      ["What should we do with these {brochures|n}?\n(A) A {trip|n} to the {seashore|n}.\n(B) Yes, I {found|v} it {already|adv}.\n(C) I'll {leave|v} them at the {front|adj} {desk|n}.", "Chúng ta nên làm gì với những tờ rơi này?\n(A) Một chuyến đi đến bờ biển.\n(B) Vâng, tôi đã tìm ra nó rồi.\n(C) Tôi sẽ để chúng ở bàn lễ tân."],
      ["Has the {policy|n} {meeting|n} been {rescheduled|v}?\n(A) We have lots of {desk|n} {calendar|n} {designs|n}.\n(B) Yes, it's {happening|v} {tomorrow|adv} instead.\n(C) This {soup|n} I {ordered|v} is {delicious|adj}.", "Cuộc họp chính sách đã được dời lịch chưa?\n(A) Chúng tôi có rất nhiều thiết kế lịch để bàn.\n(B) Vâng, nó sẽ diễn ra vào ngày mai.\n(C) Món súp tôi gọi rất ngon."],
      ["Why don't we stop by the {office|n} {cafeteria|n} on our way to the {workshop|n}?\n(A) Sure, we have {time|n} for that.\n(B) A {full-service|adj} {buffet|n}.\n(C) The {topic|n} is {professional|adj} {networking|n}.", "Sao mình không ghé căng tin trên đường đi đến hội thảo?\n(A) Được, chúng ta có thời gian.\n(B) Buffet trọn gói.\n(C) Chủ đề là kết nối kinh doanh chuyên nghiệp."],
      ["Have you {tried|v} our {famous|adj} {pasta|n} {dish|n}?\n(A) We need a {table|n} for five.\n(B) Yes, it was {delicious|adj}.\n(C) I'll try to make it on {time|n}.", "Bạn đã thử món pasta nổi tiếng của chúng tôi chưa?\n(A) Chúng tôi cần bàn cho năm người.\n(B) Rồi, nó rất ngon.\n(C) Tôi sẽ cố đến đúng giờ."],
      ["Who's the {opening|adj} {act|n} at {tonight|adv}'s {concert|n}?\n(A) Could you turn up the {volume|n}?\n(B) A {jazz|n} {singer|n} from France.\n(C) The {position|n} has been {filled|v}.", "Ai là người biểu diễn mở màn tại buổi hòa nhạc tối nay?\n(A) Bạn có thể tăng âm lượng không?\n(B) Một ca sĩ jazz từ Pháp.\n(C) Vị trí đã được lấp đầy."],
      ["When do the {product|n} {demonstrations|n} start?\n(A) The {schedule|n} was {e-mailed|v} last Friday.\n(B) Some {innovative|adj} {features|n}.\n(C) In {room|n} 202, I think.", "Khi nào thuyết minh sản phẩm bắt đầu?\n(A) Lịch trình đã được gửi email thứ Sáu tuần trước.\n(B) Một số tính năng sáng tạo.\n(C) Ở phòng 202, tôi nghĩ."],
      ["I {tried|v} {updating|v} the Web {site|n}, but it didn't {work|v}.\n(A) That {date|n} works for me.\n(B) {Usually|adv} our {online|adj} {reviews|n}.\n(C) Just {send|v} me the {changes|n} you want.", "Tôi cố gắng cập nhật trang web nhưng không được.\n(A) Ngày đó phù hợp với tôi.\n(B) Thường là đánh giá trực tuyến.\n(C) Gửi cho tôi những thay đổi bạn muốn."],
      ["Did you {hire|v} a new {welding|n} {specialist|n}?\n(A) The {part|n}'s {back-ordered|v}.\n(B) Yes, he {starts|v} {tomorrow|adv}.\n(C) No, it should be {higher|adj}.", "Bạn đã thuê chuyên gia hàn mới chưa?\n(A) Linh kiện đã đặt hàng chờ.\n(B) Rồi, anh ấy bắt đầu ngày mai.\n(C) Không, nó nên cao hơn."],
      ["How was the {color|n} {palette|n} for the {lobby|n} {chosen|v}?\n(A) Blue and {orange|n}.\n(B) It was fine, thanks.\n(C) I wasn't {involved|v}.", "Bảng màu cho sảnh đã được chọn như thế nào?\n(A) Xanh và cam.\n(B) Tốt, cảm ơn.\n(C) Tôi không liên quan."],
      ["When are we {ordering|v} more {supplies|n} for the {office|n}?\n(A) In the {storage|n} {closet|n}.\n(B) Next week on Monday.\n(C) The new {desk|n} looks great!", "Khi nào chúng ta đặt thêm đồ dùng cho văn phòng?\n(A) Trong tủ kho.\n(B) Tuần sau vào thứ Hai.\n(C) Bàn mới trông tuyệt!"],
      ["The {battery|n} for the {water|n} {pump|n} is going to be {solar|adj} {powered|v}, right?\n(A) We're still in the {planning|n} {stages|n}.\n(B) A hundred and forty {dollars|n} per year.\n(C) Yes, I'd love a glass of {water|n}.", "Pin cho máy bơm nước sẽ chạy bằng năng lượng mặt trời, đúng không?\n(A) Chúng tôi vẫn đang trong giai đoạn lên kế hoạch.\n(B) Một trăm bốn mươi đô la mỗi năm.\n(C) Vâng, tôi muốn một ly nước."],
      ["Where can I buy a {charger|n} for this {laptop|n}?\n(A) Around three o'clock.\n(B) I can {order|v} one for you.\n(C) A {limited|adj} {return|n} {policy|n}.", "Tôi có thể mua sạc cho laptop ở đâu?\n(A) Khoảng ba giờ.\n(B) Tôi có thể đặt cho bạn.\n(C) Chính sách trả hàng hạn chế."],
      ["Do I need to {reserve|v} a {meeting|n} {room|n}?\n(A) Yes, let me show you how.\n(B) The {service|n} is good.\n(C) My {slide|n} {presentation|n}.", "Tôi có cần đặt trước phòng họp không?\n(A) Có, để tôi chỉ bạn cách.\n(B) Dịch vụ tốt.\n(C) Bài thuyết trình slide của tôi."],
      ["When's the new {department|n} {director|n} {supposed|v} to start?\n(A) It's an {hour|n} long.\n(B) Ms. Pavlova isn't {retiring|v} for {several|adj} weeks.\n(C) No, that {department|n}'s {upstairs|adv}.", "Khi nào giám đốc bộ phận mới bắt đầu?\n(A) Nó kéo dài một giờ.\n(B) Bà Pavlova không nghỉ hưu tới vài tuần nữa.\n(C) Không, bộ phận đó ở tầng trên."],
      ["Should I {deliver|v} these {pizzas|n}, or will you?\n(A) No thanks. I'm not {hungry|adj}.\n(B) Ten {dollars|n} for two.\n(C) They're being {picked|v} up.", "Tôi nên giao mấy cái pizza này hay bạn?\n(A) Không, cảm ơn. Tôi không đói.\n(B) Mười đô la hai cái.\n(C) Sẽ có người đến lấy."],
      ["This {month|n}'s {shipment|n} {schedule|n} has been {revised|v}.\n(A) I couldn't {find|v} them either.\n(B) Which {dates|n} have been {changed|v}?\n(C) Two {dollars|n} per {pound|n}.", "Lịch giao hàng tháng này đã được sửa lại.\n(A) Tôi cũng không tìm thấy chúng.\n(B) Ngày nào bị thay đổi?\n(C) Hai đô la mỗi pound."],
      ["How much will the {repairs|n} {cost|v}?\n(A) The {work|n} is {covered|v} under the {warranty|n} {plan|n}.\n(B) Yes, it's also {available|adj} in red.\n(C) In about two weeks.", "Chi phí sửa chữa bao nhiêu?\n(A) Công việc này được bao gồm trong kế hoạch bảo hành.\n(B) Vâng, nó cũng có màu đỏ.\n(C) Khoảng hai tuần nữa."],
      ["Why don't we {provide|v} more {samples|n} of the {wallpaper|n} {patterns|n}?\n(A) The {newspaper|n} is {delivered|v} {daily|adv}.\n(B) An {interior|adj} {design|n} {course|n}.\n(C) There are {plenty|n} in the {binders|n}.", "Sao chúng ta không cung cấp thêm mẫu giấy dán tường?\n(A) Báo được giao hàng ngày.\n(B) Khóa học thiết kế nội thất.\n(C) Có rất nhiều trong bìa còng."],
      ["Can you give me a {tour|n} of the {property|n} this {afternoon|n}?\n(A) Sorry, I won't have {time|n} until {tomorrow|adv}.\n(B) It has a very {modern|adj} {design|n}.\n(C) A {house|n} on Maple Street.", "Bạn có thể dẫn tôi tham quan bất động sản chiều nay không?\n(A) Xin lỗi, tôi không có thời gian cho đến ngày mai.\n(B) Nó có thiết kế rất hiện đại.\n(C) Một ngôi nhà trên đường Maple."],
      ["Who's {scheduled|v} to {test|v} the {product|n} today?\n(A) We're {waiting|v} for {confirmation|n}.\n(B) It's a great {album|n}, right?\n(C) About six weeks ago.", "Ai được lên lịch kiểm nghiệm sản phẩm hôm nay?\n(A) Chúng tôi đang đợi xác nhận.\n(B) Đó là album tuyệt vời, phải không?\n(C) Khoảng sáu tuần trước."]
    ],
    part3: [
      ["Good {morning|n}, {captain|n}.", "Chào buổi sáng, thuyền trưởng."],
      ["We'll be {docking|v} at the {port|n} in Kolkata this {evening|n}, right?", "Chúng ta sẽ cập cảng ở Kolkata tối nay, đúng không?"],
      ["{Actually|adv}, we had to {change|v} {course|n} {overnight|adv} to {avoid|v} a {storm|n}, so we're {running|v} behind {schedule|n}.", "Thực ra, chúng ta phải đổi hướng qua đêm để tránh bão, nên chúng ta đang chậm hơn lịch."],
      ["But we should {arrive|v} {early|adv} {tomorrow|adv}.", "Nhưng chúng ta sẽ đến sớm vào ngày mai."],
      ["Well, that's not too bad.", "Ờ, cũng không tệ lắm."],
      ["Oh, Hector has the day off today, so I'll need you to do the {morning|n} {rounds|n} — {starting|v} with {checking|v} the {machinery|n} in the {engine|n} {room|n}.", "Hector hôm nay nghỉ, nên tôi cần bạn đi kiểm tra buổi sáng — bắt đầu với kiểm tra máy móc trong phòng động cơ."],
      ["Of {course|n} — I'll {head|v} there now.", "Tất nhiên — tôi sẽ đi ngay."],

      ["Hi, I'm here to {schedule|v} some {personal|adj} {training|n} {sessions|n}.", "Xin chào, tôi đến để đặt lịch các buổi tập cá nhân."],
      ["OK. What are your {fitness|n} {goals|n}?", "OK. Mục tiêu thể hình của bạn là gì?"],
      ["I'd like to {lift|v} {weights|n} and {build|v} {strength|n}.", "Tôi muốn nâng tạ và tăng sức mạnh."],
      ["I can {work|v} with you on that. Are you {currently|adv} a {member|n} here?", "Tôi có thể giúp bạn việc đó. Bạn hiện tại là thành viên ở đây chưa?"],
      ["No, I'll also need to sign up for a {membership|n}.", "Chưa, tôi cũng cần đăng ký thành viên."],
      ["I saw {online|adv} that you're {running|v} a {special|n} for new {members|n} — fifty {percent|n} off the first {month|n}'s {membership|n}.", "Tôi thấy trên mạng là bạn đang có ưu đãi cho thành viên mới — giảm năm mươi phần trăm tháng đầu tiên."],
      ["Can I sign up for that?", "Tôi có thể đăng ký được không?"],
      ["{Absolutely|adv}. But before I get you {signed|v} up, let me show you around our {facility|n}.", "Chắc chắn rồi. Nhưng trước khi đăng ký, để tôi dẫn bạn tham quan cơ sở."],

      ["As you can see, this {Renaissance|n} {landscape|n} {painting|n} we {acquired|v} is in bad {condition|n}.", "Như bạn thấy, bức tranh phong cảnh thời Phục Hưng chúng ta mua được đang trong tình trạng tệ."],
      ["We can't {display|v} it yet.", "Chúng ta chưa thể trưng bày nó."],
      ["This {painting|n} will need {significant|adj} {restoration|n} {work|n}.", "Bức tranh này sẽ cần công việc phục hồi đáng kể."],
      ["I'll {begin|v} by {investigating|v} the {artist|n}'s {color|n} {palette|n} and {style|n} to see how we should {repair|v} the {damaged|adj} {areas|n}.", "Tôi sẽ bắt đầu bằng việc tìm hiểu bảng màu và phong cách của họa sĩ để xem cách sửa chữa các vùng bị hỏng."],

      ["Hi, Ozan. Do you have {time|n} to {review|v} some {slides|n} I'm {presenting|v} at a {meeting|n} on Thursday?", "Chào Ozan. Bạn có thời gian xem lại slide tôi sẽ trình bày tại cuộc họp thứ Năm không?"],
      ["Oh. Is that the {meeting|n} with Smith {Incorporated|n}?", "Ồ. Đó là cuộc họp với tập đoàn Smith phải không?"],
      ["Yes. I'm {presenting|v} them with our {updated|adj} {marketing|n} {plan|n} for their {chain|n} of {bookstores|n}.", "Vâng. Tôi đang trình bày cho họ kế hoạch marketing cập nhật cho chuỗi nhà sách của họ."],
      ["You know, Smith {Incorporated|n} {prefers|v} {informal|adj} {meetings|n}.", "Bạn biết đấy, tập đoàn Smith thích các cuộc họp không trang trọng."],
      ["I think just a {handout|n} {highlighting|v} how our {marketing|n} {plan|n} will {positively|adv} {impact|v} their {book|n} {sales|n} would be enough.", "Tôi nghĩ chỉ cần một tài liệu phát tay nhấn mạnh kế hoạch marketing sẽ tác động tích cực đến doanh số sách của họ là đủ."],
      ["Really? Thilo, you've {worked|v} with this {client|n} before. What do you think?", "Thật sao? Thilo, bạn đã làm việc với khách hàng này trước đây. Bạn nghĩ sao?"],
      ["Ozan is right. I think they'd {prefer|v} a {meeting|n} that was more of a {conversation|n} than a {presentation|n}.", "Ozan đúng. Tôi nghĩ họ sẽ thích cuộc họp giống một cuộc trò chuyện hơn là thuyết trình."],

      ["I {heard|v} that the {results|n} of your {experiment|n} were better than you {expected|v}. {Congratulations|n}!", "Tôi nghe kết quả thí nghiệm của bạn tốt hơn mong đợi. Chúc mừng!"],
      ["Thanks! I {thought|v} we'd have to {run|v} that {reaction|n} ten times before we got a {positive|adj} {result|n}.", "Cảm ơn! Tôi cứ tưởng phải chạy phản ứng đó mười lần mới có kết quả tốt."],
      ["But we got it on the third try.", "Nhưng chúng tôi đã được ngay lần thứ ba."],
      ["You'll have to {write|v} up your {results|n} and {submit|v} them to the {research|n} {director|n}. That's Esra, right?", "Bạn sẽ phải viết báo cáo kết quả và nộp cho giám đốc nghiên cứu. Đó là Esra, đúng không?"],
      ["Oh, Esra's {leaving|v} the {company|n} next week.", "Ồ, Esra sẽ rời công ty tuần tới."],
      ["Oh, I didn't know that. I {wonder|v} if you'll be {promoted|v} to {fill|v} her {position|n}.", "Ồ, tôi không biết. Tôi tự hỏi liệu bạn có được thăng chức để lấp vị trí của cô ấy không."],
      ["I don't think so. I've never {managed|v} an {entire|adj} {research|n} {group|n}.", "Tôi không nghĩ vậy. Tôi chưa bao giờ quản lý cả một nhóm nghiên cứu."],
      ["I hope to get some {experience|n} doing that next {quarter|n}.", "Tôi hy vọng sẽ có kinh nghiệm làm việc đó vào quý tới."],

      ["Now we'll move on to a {special|adj} {segment|n} of our {news|n} {program|n} where we {highlight|v} new {local|adj} {businesses|n} for our {viewers|n}.", "Bây giờ chúng ta sẽ chuyển sang phần đặc biệt của chương trình tin tức nơi chúng tôi giới thiệu các doanh nghiệp địa phương mới cho khán giả."],
      ["Today I'm {talking|v} with Dhruv Bajaj — a {personal|adj} {trainer|n} and {gym|n} {owner|n}.", "Hôm nay tôi nói chuyện với Dhruv Bajaj — một huấn luyện viên cá nhân và chủ phòng tập."],
      ["Thanks for {coming|v} into the {studio|n} today, Dhruv!", "Cảm ơn đã đến phòng thu hôm nay, Dhruv!"],
      ["Thanks for having me! I'm {excited|adj} to tell you about the {gym|n} I just {opened|v} last {month|n}.", "Cảm ơn đã mời tôi! Tôi rất hào hứng kể về phòng tập tôi vừa mở tháng trước."],
      ["It has {state-of-the-art|adj} {equipment|n}, and my {trainers|n} can {work|v} with {clients|n} at any {stage|n} in their {fitness|n} {journey|n}.", "Nó có thiết bị hiện đại nhất, và huấn luyện viên của tôi có thể làm việc với khách hàng ở bất kỳ giai đoạn nào trong hành trình thể hình."],
      ["Sounds great. How did you get {started|v} in this {line|n} of {work|n}?", "Nghe tuyệt. Bạn bắt đầu công việc này như thế nào?"],
      ["Well, I was an {athlete|n} in {school|n}, and when I {stopped|v} {competing|v}, I wanted to {continue|v} doing something {fitness-related|adj}.", "Tôi từng là vận động viên ở trường, và khi tôi ngừng thi đấu, tôi muốn tiếp tục làm gì đó liên quan đến thể hình."],
      ["So I {started|v} {working|v} as a {trainer|n}.", "Vì vậy tôi bắt đầu làm huấn luyện viên."],

      ["As {director|n}, I'm {delighted|adj} to {welcome|v} you to the Redmond {Aquatic|adj} {Institute|n}.", "Với tư cách giám đốc, tôi rất vui chào đón bạn đến Viện Nghiên cứu Thủy sinh Redmond."],
      ["We're {happy|adj} you'll be {producing|v} {content|n} for our Web {site|n}.", "Chúng tôi vui vì bạn sẽ sản xuất nội dung cho trang web."],
      ["I'm looking {forward|adv} to {writing|v} about Redmond's {initiatives|n} in {marine|adj} {biology|n}.", "Tôi mong được viết về các sáng kiến sinh học biển của Redmond."],
      ["Yes, the more {articles|n} the {public|n} can {read|v} about {threats|n} to {aquatic|adj} {ecosystems|n}, the better.", "Đúng, càng nhiều bài báo công chúng đọc về mối đe dọa với hệ sinh thái thủy sinh, càng tốt."],
      ["{Public|adj} {awareness|n} will help us get {funding|n} to meet our {aim|n} of {preserving|v} these {ecosystems|n}.", "Nhận thức cộng đồng sẽ giúp chúng tôi có kinh phí để bảo tồn các hệ sinh thái này."],
      ["This is Roberto. He's {working|v} on our {mangrove|n} {research|n} {project|n}, which is the first one you'll {cover|v}.", "Đây là Roberto. Anh ấy đang nghiên cứu dự án rừng ngập mặn, là dự án đầu tiên bạn sẽ viết về."],
      ["It's an {interesting|adj} {project|n}. And what's {exciting|adj} is that we've {started|v} using {drones|n} to {photograph|v} the {area|n} with the {mangroves|n}.", "Đó là dự án thú vị. Và điều hào hứng là chúng tôi đã bắt đầu dùng drone để chụp ảnh khu vực rừng ngập mặn."],
      ["So we have some great {images|n} you could use.", "Nên chúng tôi có những hình ảnh tuyệt vời bạn có thể sử dụng."],

      ["Matthew, you're not {planning|v} to {cancel|v} Wednesday's {budget|n} {meeting|n}, are you?", "Matthew, bạn không định hủy cuộc họp ngân sách thứ Tư chứ?"],
      ["I haven't {sent|v} out the {cancellation|n} yet, but our {research|n} {partners|n} in China are off this week for a {national|adj} {holiday|n}, so there's no {point|n} in {meeting|v}.", "Tôi chưa gửi thông báo hủy, nhưng đối tác nghiên cứu ở Trung Quốc nghỉ tuần này vì ngày lễ quốc gia, nên không có ý nghĩa gì khi họp."],
      ["Why?", "Tại sao?"],
      ["Well, I've been looking at the {draft|n} {budget|n}, and we didn't {allocate|v} {funds|n} for a {project|n} {leader|n}.", "Tôi đã xem bản ngân sách dự thảo, và chúng ta không phân bổ kinh phí cho trưởng dự án."],
      ["Uh-oh. I {wonder|v} how that {happened|v}. You're right. We need to {discuss|v} how to {fix|v} that.", "Ối. Tôi tự hỏi sao lại thế. Bạn đúng. Chúng ta cần thảo luận cách khắc phục."],
      ["You know, we {allocated|v} {money|n} for a {trip|n} to Singapore to {present|v} our {preliminary|adj} {findings|n}. We don't {really|adv} need to do that.", "Bạn biết đấy, chúng ta đã phân bổ tiền cho chuyến đi Singapore để trình bày kết quả sơ bộ. Chúng ta thực sự không cần làm vậy."],

      ["Hello, you've {reached|v} {tech|n} {support|n}.", "Xin chào, bạn đã liên hệ bộ phận hỗ trợ kỹ thuật."],
      ["I'm {calling|v} from Rubin {Restaurant|n} {Equipment|n}.", "Tôi gọi từ Rubin Restaurant Equipment."],
      ["I {recently|adv} {purchased|v} your {software|n} to keep {track|n} of my {warehouse|n} {inventory|n}, and I have a {question|n} about {setting|v} {alerts|n}.", "Tôi mới mua phần mềm của bạn để theo dõi hàng tồn kho, và tôi có câu hỏi về cài đặt cảnh báo."],
      ["We've been getting an {alert|n} whenever the {inventory|n} for our {deep|adj} {fryers|n} {drops|v} below ten.", "Chúng tôi nhận được cảnh báo mỗi khi tồn kho nồi chiên sâu lòng giảm dưới mười."],
      ["But we {usually|adv} don't {stock|v} many of those because {restaurants|n} don't often need to {replace|v} them.", "Nhưng chúng tôi thường không trữ nhiều vì nhà hàng không thường xuyên cần thay thế."],
      ["So, can I {lower|v} the {alert|n} {level|n} for just those {items|n}?", "Vậy, tôi có thể hạ mức cảnh báo cho riêng những mặt hàng đó không?"],
      ["Yes. In the {system|n}, if you {click|v} on that {product|n}, you'll see a {link|n} that says, \"Set {Custom|adj} {Alert|n}.\"", "Có. Trong hệ thống, nếu bạn nhấp vào sản phẩm đó, bạn sẽ thấy liên kết \"Đặt Cảnh Báo Tùy Chỉnh.\""],
      ["And you can set it to any {number|n} from there.", "Và bạn có thể đặt bất kỳ số nào từ đó."],
      ["I see it. Thanks for your help.", "Tôi thấy rồi. Cảm ơn sự giúp đỡ."],

      ["I just {spoke|v} to the {garden|n} {director|n}.", "Tôi vừa nói chuyện với giám đốc vườn."],
      ["He wants us to {install|v} an {irrigation|n} {system|n} in the {rose|n} {garden|n} as well as the {magnolia|n} {grove|n}.", "Ông ấy muốn chúng ta lắp hệ thống tưới nước trong vườn hồng cũng như khu vườn mộc lan."],
      ["He wants to be sure the {flowers|n} get {plenty|n} of {water|n} during the hot {summer|n} {months|n}.", "Ông ấy muốn chắc chắn hoa được tưới đủ nước trong những tháng hè nóng."],
      ["OK, let's {walk|v} over there now and take some {measurements|n}.", "OK, hãy đi đến đó và đo đạc."],
      ["Then we can {figure|v} out what {materials|n} we'll need.", "Rồi chúng ta có thể biết được cần vật liệu gì."],
      ["Sure. We have some {extra|adj} {parts|n} left over from when we {worked|v} on the {cherry|n} {trees|n}.", "Chắc chắn. Chúng ta còn dư một số phụ tùng từ lúc làm cây anh đào."],
      ["I'll {check|v} what we have left after we {finish|v} {measuring|v} the {rose|n} {garden|n}.", "Tôi sẽ kiểm tra còn gì sau khi đo xong vườn hồng."],

      ["Good {morning|n}, Ms. Aljohani. Sorry I'm a little {late|adj}. {Traffic|n} was {terrible|adj}.", "Chào buổi sáng, cô Aljohani. Xin lỗi tôi hơi trễ. Giao thông rất tệ."],
      ["That's OK, but our {rental|n} {office|n} will be very {busy|adj} this {morning|n}.", "Không sao, nhưng văn phòng cho thuê sẽ rất bận sáng nay."],
      ["There's a big {education|n} {convention|n} in {town|n} starting today, and a lot of {attendees|n} from out of {town|n} have {reserved|v} {cars|n} to get to the {conference|n} {center|n}.", "Có một hội nghị giáo dục lớn bắt đầu hôm nay, và nhiều người tham dự từ ngoài thành phố đã đặt xe để đến trung tâm hội nghị."],
      ["Right. What do you want me to do first?", "Đúng rồi. Bạn muốn tôi làm gì trước?"],
      ["I'd like you to start by {checking|v} the {batteries|n} in our {electric|adj} {cars|n}.", "Tôi muốn bạn bắt đầu bằng việc kiểm tra pin xe điện."],
      ["We want to be sure they're all {fully|adv} {charged|v}.", "Chúng ta muốn chắc chắn tất cả đều được sạc đầy."],

      ["I've been on {vacation|n}, so I {missed|v} our {department|n}'s {meeting|n}. Can you give me an {update|n}?", "Tôi đi nghỉ nên bỏ lỡ cuộc họp phòng ban. Bạn có thể cập nhật cho tôi không?"],
      ["Well, all our {public|adj} {programs|n} and {community|n} {events|n} are on {schedule|n}.", "Tất cả chương trình công cộng và sự kiện cộng đồng đều đúng lịch."],
      ["Great! How about the Jannis Park {project|n}? We're still {planning|v} on {planting|v} {trees|n} best {suited|v} for {residential|adj} {areas|n}, right?", "Tuyệt! Còn dự án Jannis Park thì sao? Chúng ta vẫn lên kế hoạch trồng cây phù hợp cho khu dân cư, đúng không?"],
      ["That's right. I'm {working|v} on the {public|adj} {education|n} part now.", "Đúng vậy. Tôi đang làm phần giáo dục cộng đồng."],
      ["There'll be a {children|n}'s {poster|n} {competition|n} next {month|n}, which the {city|n} {mayor|n} will {judge|v}.", "Sẽ có cuộc thi vẽ poster cho trẻ em vào tháng tới, thị trưởng thành phố sẽ chấm."],
      ["Interesting. Is there a {prize|n}?", "Thú vị. Có giải thưởng không?"],
      ["The {winner|n} will get a {ribbon|n}. But all {participants|n} will get a {seedling|n} to {plant|v} at home.", "Người thắng sẽ nhận một dải ruy băng. Nhưng tất cả người tham gia sẽ nhận một cây con để trồng ở nhà."],
      ["We'll be giving away the {tallest|adj} of these four {varieties|n}, since it was the most {popular|adj} in a {survey|n} of our {residents|n}.", "Chúng tôi sẽ tặng loại cao nhất trong bốn loại, vì nó được ưa thích nhất trong khảo sát cư dân."],

      ["Hi, I'd like a large {black|adj} {coffee|n} and an egg-and-cheese {croissant|n}, please.", "Xin chào, tôi muốn một ly cà phê đen lớn và một chiếc croissant trứng phô mai."],
      ["Sure. That'll be eight {dollars|n}. Are you a Shelby's {preferred|adj} {customer|n}?", "Được. Tổng cộng tám đô la. Bạn là khách hàng thân thiết của Shelby's không?"],
      ["Uh, no I'm not. But I do have an EZ-Cash {card|n}.", "Ờ, không. Nhưng tôi có thẻ EZ-Cash."],
      ["Great. Let me {ring|v} that up for you.", "Tuyệt. Để tôi tính tiền cho bạn."],
      ["By the way, I'd like to {order|v} {breakfast|n} for my {team|n} {tomorrow|adv} {morning|n}.", "Nhân tiện, tôi muốn đặt bữa sáng cho nhóm tôi sáng mai."],
      ["Can I {place|v} that {order|n} {ahead|adv} of {time|n}?", "Tôi có thể đặt trước không?"],
      ["Sure. Would you like to do that now?", "Được. Bạn muốn đặt ngay bây giờ không?"],
      ["No, I'll {call|v} you {later|adv} today when I know what everyone wants. Thanks for the {information|n}.", "Không, tôi sẽ gọi lại hôm nay khi tôi biết mọi người muốn gì. Cảm ơn thông tin."]
    ],
    part4: [
      ["Hi, Amina. This is Sabine {calling|v} from Blue Drop Creations.", "Chào Amina. Đây là Sabine gọi từ Blue Drop Creations."],
      ["I just put the {earrings|n} and {necklaces|n} that you {ordered|v} from me in the {mail|n}.", "Tôi vừa gửi bưu điện bông tai và vòng cổ bạn đặt."],
      ["Because you've been a {customer|n} for over ten years, I've also {included|v} a {special|adj} {gift|n} in the {package|n} for you.", "Vì bạn đã là khách hàng hơn mười năm, tôi đã thêm một món quà đặc biệt trong gói hàng cho bạn."],
      ["It's a {case|n} for your {jewelry|n}.", "Đó là hộp đựng trang sức."],
      ["This is a new {product|n} that I'm {starting|v} to {offer|v}, so please {call|v} me back after you {receive|v} it.", "Đây là sản phẩm mới tôi bắt đầu cung cấp, nên hãy gọi lại cho tôi sau khi nhận được."],
      ["I'd {really|adv} like to hear your {thoughts|n} on it.", "Tôi thực sự muốn nghe ý kiến của bạn về nó."],

      ["Good {morning|n}, this is Brandon from Dakota {Framing|n} {Company|n}, {returning|v} your {call|n}.", "Chào buổi sáng, đây là Brandon từ Dakota Framing Company, gọi lại cho bạn."],
      ["We {received|v} your {voicemail|n} about wanting to {frame|v} a {wedding|n} {picture|n}.", "Chúng tôi nhận được tin nhắn thoại về việc bạn muốn đóng khung ảnh cưới."],
      ["There is no need to {print|v} the {photo|n} yourself.", "Bạn không cần tự in ảnh."],
      ["We {prefer|v} that you {e-mail|v} us a {digital|adj} {copy|n}.", "Chúng tôi muốn bạn gửi email bản kỹ thuật số cho chúng tôi."],
      ["So, to {answer|v} your {question|n}, you can {complete|v} the whole {order|n} {online|adv}.", "Vậy, để trả lời câu hỏi, bạn có thể hoàn thành đơn hàng trực tuyến."],
      ["Just {visit|v} our Web {site|n}, where you'll {fill|v} in your {choices|n} for {photo|n} {size|n} and the {frame|n} and {upload|v} your {photo|n}.", "Chỉ cần truy cập trang web, bạn sẽ điền lựa chọn kích thước ảnh và khung rồi tải ảnh lên."],
      ["And for a small {extra|adj} {cost|n}, we'll {guarantee|v} to {replace|v} your {frame|n} in case of {damage|n}.", "Và với một ít chi phí thêm, chúng tôi đảm bảo thay thế khung ảnh trong trường hợp hư hỏng."],
      ["Please be sure to {check|v} that {box|n} when you {order|v}.", "Hãy chắc chắn đánh dấu ô đó khi đặt hàng."],

      ["{Welcome|v} all to this week's {training|n} in our {series|n} of {patient|n} {care|n} {programs|n}.", "Chào mừng tất cả đến buổi đào tạo tuần này trong chuỗi chương trình chăm sóc bệnh nhân."],
      ["Our {physical|adj} {therapy|n} {center|n} is {known|v} for the {excellent|adj} {care|n} we {provide|v} to our {patients|n}, and that's because of you, our {staff|n}.", "Trung tâm vật lý trị liệu của chúng tôi nổi tiếng với sự chăm sóc tuyệt vời cho bệnh nhân, và đó là nhờ các bạn, nhân viên của chúng tôi."],
      ["The {training|n} today will be about ways to {engage|v} the {patients|n} who {reside|v} in our {facility|n} through {playing|v} {games|n}.", "Buổi đào tạo hôm nay sẽ về cách thu hút bệnh nhân cư trú tại cơ sở thông qua chơi trò chơi."],
      ["I've {prepared|v} {different|adj} types of {activities|n} for us to try out, {including|v} some {games|n} that {involve|v} {mental|adj} {stimulation|n} as well as {physical|adj} {exercises|n}.", "Tôi đã chuẩn bị các loại hoạt động khác nhau để thử, bao gồm trò chơi kích thích tinh thần cũng như bài tập thể dục."],
      ["But, I have to let you know that today I must {leave|v} at {noon|n}.", "Nhưng tôi phải cho các bạn biết hôm nay tôi phải rời đi vào buổi trưa."],
      ["Next week we'll try out more of the {games|n}.", "Tuần tới chúng ta sẽ thử thêm nhiều trò chơi."],

      ["Are you a {certified|adj} {commercial|adj} {truck|n} {driver|n}?", "Bạn có phải tài xế xe tải thương mại được cấp phép không?"],
      ["Hoffman {Oversized|adj} Haulers is {currently|adv} looking for {experienced|adj} {truck|n} {drivers|n} to join our {team|n}.", "Hoffman Oversized Haulers đang tìm kiếm tài xế xe tải có kinh nghiệm để gia nhập đội ngũ."],
      ["As our name {suggests|v}, we {transport|v} {oversized|adj} {cargo|n} throughout the {region|n}.", "Như tên gợi ý, chúng tôi vận chuyển hàng hóa cỡ lớn khắp khu vực."],
      ["With Hoffman, {drivers|n} enjoy {flexible|adj} {scheduling|n}.", "Với Hoffman, tài xế được hưởng lịch làm việc linh hoạt."],
      ["In fact, we're the only {company|n} in the {region|n} that allows {employees|n} to {determine|v} their own {work|n} {hours|n}.", "Thực tế, chúng tôi là công ty duy nhất trong khu vực cho phép nhân viên tự quyết định giờ làm việc."],
      ["If you don't have {experience|n} working with {oversized|adj} {loads|n}, {training|n} is {available|adj}.", "Nếu bạn chưa có kinh nghiệm với hàng cỡ lớn, có chương trình đào tạo."],
      ["Please check out our Web {site|n} to learn more about our {open|adj} {positions|n}.", "Hãy truy cập trang web để tìm hiểu thêm về các vị trí đang tuyển."],
      ["We can't wait to {work|v} with you.", "Chúng tôi rất mong được làm việc với bạn."],

      ["Hi, Jinyu. I have some {exciting|adj} {news|n}!", "Chào Jinyu. Tôi có tin hào hứng!"],
      ["The Farmer's Table {television|n} {program|n} wants to {feature|v} our {restaurant|n} in an {upcoming|adj} {episode|n}.", "Chương trình TV Farmer's Table muốn ghi hình nhà hàng chúng ta trong tập sắp tới."],
      ["They'll be {coming|v} on Wednesday to {film|v} everyone at {work|n} in the {kitchen|n} during our {dinner|n} {service|n}.", "Họ sẽ đến vào thứ Tư để quay hình mọi người làm việc trong bếp trong giờ phục vụ bữa tối."],
      ["Since you're the {executive|adj} {chef|n}, I'll need you to come in {earlier|adv} than {usual|adj} to get everything {prepped|v} and set up.", "Vì bạn là bếp trưởng, tôi cần bạn đến sớm hơn bình thường để chuẩn bị mọi thứ."],
      ["And just as a {reminder|n}, I'm still {planning|v} to be out of {town|n} next week for the Springdale {Pastry|n} and {Dessert|n} {Festival|n}.", "Và nhắc lại, tôi vẫn dự định đi khỏi thành phố tuần tới để tham dự Lễ hội Bánh ngọt Springdale."],

      ["Good {evening|n} and thank you for {watching|v} Channel Four {News|n}.", "Chào buổi tối và cảm ơn đã xem tin tức Channel Four."],
      ["I'm here in Rockville, a {suburb|n} in the {metropolitan|adj} {area|n}.", "Tôi ở đây tại Rockville, một vùng ngoại ô trong khu vực đô thị."],
      ["Rockville was {recently|adv} {chosen|v} as the {site|n} of a {multimillion-dollar|adj} {electric|adj} {vehicle|n} {battery|n} {factory|n}.", "Rockville gần đây được chọn làm địa điểm nhà máy pin xe điện trị giá hàng triệu đô la."],
      ["This {project|n} {promises|v} to bring {thousands|n} of {jobs|n}, both {directly|adv} and {indirectly|adv}, to the {surrounding|adj} {community|n}.", "Dự án này hứa hẹn mang lại hàng nghìn việc làm, trực tiếp và gián tiếp, cho cộng đồng xung quanh."],
      ["At a {recent|adj} {well-attended|adj} {public|adj} {comment|n} {meeting|n}, {residents|n} had a {chance|n} to {voice|v} any {opposition|n} to the {project|n}.", "Tại cuộc họp ý kiến cộng đồng nhiều người tham dự gần đây, cư dân đã có cơ hội bày tỏ phản đối."],
      ["No one made any {comments|n}.", "Không ai bình luận gì."],
      ["To learn more about this {exciting|adj} {development|n}, {artists-rendered|adj} {images|n} of the {project|n} are on {display|n} at the {city|n} {hall|n} {building|n}.", "Để tìm hiểu thêm, hình ảnh phối cảnh của dự án đang được trưng bày tại tòa thị chính."],

      ["{Tired|adj} of {losing|v} things on your {desk|n} because it's too {cluttered|adj}?", "Mệt mỏi vì mất đồ trên bàn vì quá bừa bộn?"],
      ["If so, the Optimum Space {Organizer|n} is the {perfect|adj} {product|n} for you.", "Nếu vậy, Optimum Space Organizer là sản phẩm hoàn hảo cho bạn."],
      ["{Designed|v} with {office|n} {employees|n} like you in mind, this {product|n} can make even the {messiest|adj} of {desks|n} look {neat|adj} again.", "Được thiết kế dành cho nhân viên văn phòng như bạn, sản phẩm này có thể làm bàn bừa bộn nhất trông gọn gàng lại."],
      ["Best of all, the {organizer|n} {adjusts|v} to any {sized|adj} {space|n} you may have on your {desk|n}.", "Tốt nhất là, sản phẩm điều chỉnh được theo bất kỳ kích thước nào trên bàn bạn."],
      ["It can be as {narrow|adj} or as {wide|adj} as you need it to be — within {seconds|n}!", "Nó có thể hẹp hoặc rộng tùy bạn cần — chỉ trong vài giây!"],
      ["If you {call|v} in the next ten {minutes|n}, you'll {receive|v} a 30 {percent|n} {discount|n}!", "Nếu bạn gọi trong mười phút tới, bạn sẽ nhận được giảm giá 30 phần trăm!"],

      ["Thanks for {listening|v} to this {episode|n} of Fabulous Foods.", "Cảm ơn đã nghe tập này của Fabulous Foods."],
      ["Every week, we {discuss|v} a {different|adj} {vegetable|n} and ways to {cook|v} with it to {maximize|v} {flavor|n}.", "Mỗi tuần, chúng tôi thảo luận về một loại rau khác nhau và cách nấu để tối đa hương vị."],
      ["Now, before we get {started|v}, I'm {excited|adj} to {announce|v} that I've been {collaborating|v} with Cartwell Kitchen {Supplies|n} to {develop|v} a new {line|n} of {cookware|n}.", "Trước khi bắt đầu, tôi hào hứng thông báo tôi đang hợp tác với Cartwell Kitchen Supplies để phát triển dòng dụng cụ nấu ăn mới."],
      ["It'll be {released|v} in November, but it's {available|adj} for {pre-order|n} right now.", "Nó sẽ ra mắt vào tháng 11, nhưng có thể đặt trước ngay bây giờ."],
      ["Keep in mind, this {product|n} {line|n} will not be {available|adj} for long.", "Lưu ý, dòng sản phẩm này sẽ không có sẵn lâu."],
      ["OK, let's move on to our {program|n}.", "OK, hãy chuyển sang chương trình."],
      ["With us today is {renowned|adj} {chef|n} Rebecca Murray to talk about this week's {vegetable|n}: {eggplant|n}!", "Cùng chúng tôi hôm nay là đầu bếp nổi tiếng Rebecca Murray để nói về rau tuần này: cà tím!"],
      ["Rebecca {recently|adv} {launched|v} a {vegetarian|adj} {restaurant|n} in New York that is getting {rave|adj} {reviews|n} so far.", "Rebecca gần đây đã mở nhà hàng chay ở New York và đang nhận được nhiều đánh giá tuyệt vời."],

      ["{Attention|n} {passengers|n}.", "Chú ý hành khách."],
      ["{Renovation|n} {work|n} to {upgrade|v} and {modernize|v} our {train|n} {station|n} is {underway|adj}.", "Công việc cải tạo để nâng cấp và hiện đại hóa nhà ga đang được tiến hành."],
      ["We {apologize|v} for the {inconvenience|n} the {construction|n} {noise|n} may cause.", "Chúng tôi xin lỗi vì sự bất tiện do tiếng ồn xây dựng."],
      ["Please note that {regional|adj} {train|n} {schedules|n} are not {affected|v}.", "Xin lưu ý lịch tàu khu vực không bị ảnh hưởng."],
      ["{Train|n} 133 with {service|n} to Washington, D.C., will be {arriving|v} {shortly|adv}.", "Tàu 133 đi Washington, D.C., sẽ đến trong ít phút."],
      ["All {passengers|n} to Washington, please {proceed|v} to {Track|n} 26B.", "Tất cả hành khách đi Washington, vui lòng đến đường ray 26B."],
      ["If you need {assistance|n} {handling|v} your {baggage|n}, please speak to a {ticket|n} {agent|n} {immediately|adv}.", "Nếu bạn cần hỗ trợ xử lý hành lý, vui lòng nói với nhân viên bán vé ngay."],
      ["{Train|n} 133's next {stop|n} will be Wilmington, {followed|v} by Baltimore and then Washington, D.C.", "Trạm tiếp theo của tàu 133 là Wilmington, tiếp theo là Baltimore và sau đó Washington, D.C."],

      ["Hello, everyone. I'm Carmen Salazar, the {airport|n} {operations|n} {director|n}, and I wanted to thank you for {attending|v} this {press|n} {conference|n}.", "Xin chào mọi người. Tôi là Carmen Salazar, giám đốc vận hành sân bay, và tôi muốn cảm ơn các bạn đã tham dự họp báo này."],
      ["As of this week, {construction|n} on the new {regional|adj} {airport|n} is {proceeding|v} on {schedule|n} for two of the three {terminals|n}.", "Tính đến tuần này, xây dựng sân bay khu vực mới đang tiến hành đúng lịch cho hai trong ba nhà ga."],
      ["{Minor|adj} {design|n} {adjustments|n} to {terminal|n} A have put the {project|n} {slightly|adv} behind {schedule|n}.", "Các điều chỉnh thiết kế nhỏ đối với nhà ga A đã đẩy dự án chậm hơn lịch một chút."],
      ["And we {anticipate|v} about two {months|n} will be {added|v} to the {construction|n} time {frame|n} as a {result|n}.", "Và chúng tôi dự kiến sẽ thêm khoảng hai tháng vào khung thời gian xây dựng."],
      ["I'd also like to {mention|v} that we now have a 3-D {printed|v} {model|n} of this {project|n}!", "Tôi cũng muốn đề cập rằng bây giờ chúng tôi đã có mô hình in 3D của dự án!"],
      ["Please feel free to {visit|v} our Web {site|n} so you can {view|v} it.", "Vui lòng truy cập trang web để xem nó."]
    ]
  }
};
