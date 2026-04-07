// ═══════════════════════════════════════
//  IELTS MENTOR — All Data
// ═══════════════════════════════════════

const CURRICULUM = {
  modules: [
    {
      id: "m1", title: "IELTS Foundations", icon: "🏗️", color: "#4F86C6",
      description: "Understand the IELTS exam structure and build your base",
      lessons: [
        {
          id: "l1_1", title: "What is IELTS?", duration: 20,
          theory: `IELTS (International English Language Testing System) has two versions: **Academic** (for university) and **General Training** (for work/migration). The test has 4 sections:\n\n**1. Listening** – 30 min, 40 questions. You hear recordings and answer questions.\n**2. Reading** – 60 min, 40 questions. Read 3 long passages and answer questions.\n**3. Writing** – 60 min, 2 tasks. Task 1: describe a graph/chart (150 words). Task 2: write an essay (250 words).\n**4. Speaking** – 11–14 min, face-to-face with an examiner.\n\nYour score is a **Band Score** from 1.0 to 9.0. Most universities require Band 6.0–7.0.`,
          keyPoints: ["4 skills: Listening, Reading, Writing, Speaking", "Band score from 1 to 9", "Academic vs General Training", "Test lasts ~2 hours 45 minutes"],
          tip: "Start with Academic version if going to university. General Training is slightly easier for Reading and Writing."
        },
        {
          id: "l1_2", title: "Band Scores Explained", duration: 15,
          theory: `**Band Score Guide:**\n\n**Band 3.5–4.0** (Your current level): Very limited vocabulary, many grammar errors, basic ideas only.\n**Band 4.5–5.0:** You can communicate simple ideas but make frequent errors.\n**Band 5.0–5.5:** Partial competence, can handle basic situations.\n**Band 6.0–6.5:** Generally effective, some inaccuracies.\n**Band 7.0+:** Good user, handles complex language well.\n\n**Your Goal:** Move from 3.5 → 5.5 (beginner target) → 6.0+ (advanced target)\n\nEach 0.5 band improvement requires consistent practice for 1–3 months.`,
          keyPoints: ["Current level: ~3.5–4.0", "Target: 5.5–6.0", "Each band = months of practice", "All 4 sections averaged for final score"],
          tip: "Don't get discouraged! Every expert was once a beginner. Focus on one skill at a time."
        },
        {
          id: "l1_3", title: "Study Plan & Mindset", duration: 20,
          theory: `**The 12-Week IELTS Plan (Pre-Intermediate):**\n\n**Weeks 1–3:** Grammar foundations + Basic vocabulary (500 words)\n**Weeks 4–6:** Listening skills + Reading strategies\n**Weeks 7–9:** Writing Task 1 & 2 fundamentals\n**Weeks 10–12:** Speaking practice + Full mock tests\n\n**Daily routine (45–60 min):**\n• Morning (15 min): Vocabulary review\n• Study session (30 min): Lesson or skill practice\n• Evening (10 min): Review what you learned\n\n**Free Resources:**\n• BBC Learning English (bbc.co.uk/learningenglish)\n• British Council LearnEnglish\n• IELTS Liz, IELTS Simon (YouTube)`,
          keyPoints: ["45–60 min daily study", "12-week structured plan", "Morning vocab, evening review", "Use free BBC and British Council resources"],
          tip: "Consistency beats intensity! 45 minutes every day is better than 5 hours on weekends."
        }
      ]
    },
    {
      id: "m2", title: "Grammar Essentials", icon: "📝", color: "#E8854F",
      description: "Master the grammar structures IELTS examiners look for",
      lessons: [
        {
          id: "l2_1", title: "Tense Review: Present & Past", duration: 25,
          theory: `**Present Simple** – facts, habits\n• 'Water *boils* at 100°C.' / 'I *study* English every day.'\n\n**Present Continuous** – happening now or temporary\n• 'The graph *is showing* a sharp increase.'\n\n**Past Simple** – completed actions\n• 'The population *increased* in 2010.'\n\n**Present Perfect** – past actions connected to now\n• 'The city *has grown* significantly since 2000.'\n\n**⭐ IELTS Writing Tip:** Use Present Perfect to describe trends in graphs that continue to the present!`,
          keyPoints: ["Present Simple for facts", "Present Continuous for trends in Writing", "Past Simple for specific dates", "Present Perfect links past to present"],
          tip: "In Writing Task 1, use 'has increased', 'have risen' when the trend continues to today."
        },
        {
          id: "l2_2", title: "Conditionals", duration: 25,
          theory: `**Zero Conditional** – general truths\n• 'If you *heat* ice, it *melts*.'\n\n**First Conditional** – real future\n• 'If the government *invests*, crime *will decrease*.'\n\n**Second Conditional** – hypothetical\n• 'If I *had* more time, I *would practice* every day.'\n\n**Third Conditional** – past hypothetical\n• 'If they *had built* more hospitals, fewer people *would have died*.'\n\n**⭐ Speaking Tip:** Use 2nd conditional in Part 3: 'If I *were* the government, I *would* invest in renewable energy.'`,
          keyPoints: ["Zero: if + present, present", "First: if + present, will + verb", "Second: if + past, would + verb", "Use 2nd conditional in Speaking Part 3"],
          tip: "Common mistake: DON'T say 'If I would have...' — it should be 'If I had...'"
        },
        {
          id: "l2_3", title: "Passive Voice", duration: 20,
          theory: `The passive voice is essential for IELTS Writing Task 1 (describing processes)!\n\n**Structure:** Subject + **be** (conjugated) + **past participle**\n\n**Active:** 'The company *produces* 500 cars a day.'\n**Passive:** '500 cars *are produced* a day.'\n\n**Tense examples:**\n• Present: 'The data *is collected* monthly.'\n• Past: 'The factory *was built* in 1990.'\n• Present Perfect: 'New laws *have been introduced*.'\n\n**When to use passive:**\n✅ When the action is more important than who did it\n✅ In academic/formal writing\n✅ To describe processes (Task 1)`,
          keyPoints: ["be + past participle", "Use in formal/academic writing", "Essential for process diagrams", "Makes writing sound more academic"],
          tip: "Irregular past participles to learn: write→written, make→made, build→built, break→broken"
        },
        {
          id: "l2_4", title: "Linking Words & Cohesion", duration: 20,
          theory: `Linking words improve your **Coherence & Cohesion** score (25% of Writing)!\n\n**Adding ideas:**\nFurthermore, Moreover, In addition, Additionally\n\n**Contrasting:**\nHowever, Nevertheless, On the other hand, Although\n\n**Cause & Effect:**\nTherefore, As a result, Consequently, Due to\n\n**Sequencing (for processes):**\nFirst, Then, Next, Subsequently, Finally\n\n**Examples:**\nFor example, For instance, Such as, To illustrate\n\n**Concluding:**\nIn conclusion, To summarize, Overall\n\n**⚠️ Don't overuse 'However'! Vary your linking words.**`,
          keyPoints: ["25% of Writing score is cohesion", "Use variety — don't repeat same linkers", "Sequencing words for Task 1 processes", "Begin Task 2 conclusion with 'In conclusion'"],
          tip: "Learn 2–3 linkers from each category. Using them correctly beats using many incorrectly."
        }
      ]
    },
    {
      id: "m3", title: "IELTS Listening", icon: "🎧", color: "#5BAD8C",
      description: "Strategies to score higher in the Listening test",
      lessons: [
        {
          id: "l3_1", title: "Listening Test Structure", duration: 20,
          theory: `**4 sections, 40 questions, 30 minutes** (+ 10 min to transfer answers).\n\n**Section 1:** Everyday conversation (e.g., booking a hotel) — EASIEST\n**Section 2:** Monologue about a local topic — EASY\n**Section 3:** Academic discussion between 2–4 people — MEDIUM\n**Section 4:** Academic lecture — HARDEST\n\n**Question types:**\n• Multiple choice\n• Form/note/table completion\n• Matching\n• Labelling a map or diagram\n• Short answer questions\n\n**Key rule:** Answers appear **in order** in the audio. If you miss one, move on!`,
          keyPoints: ["4 sections, increasing difficulty", "Answers are in order", "40 questions = 40 marks", "You hear each section ONCE"],
          tip: "Sections 1 and 2 are your opportunity for easy marks. Focus hard here first!"
        },
        {
          id: "l3_2", title: "Prediction & Keywords", duration: 25,
          theory: `**The #1 strategy: Read questions BEFORE you listen!**\n\nYou always get time before each section. Use it to:\n1. **Underline keywords** in questions (nouns, verbs, adjectives)\n2. **Predict the answer type** (a number? a name? a day?)\n3. **Predict synonyms** — the recording often uses DIFFERENT words!\n\n**Example:**\nQuestion: 'The library opens at _____ on Sundays.'\n→ Predict: a TIME (9am, 10:30am)\n→ Keywords: library, opens, Sunday\n→ Synonym: Recording might say 'Sunday hours begin at...'\n\n**Spelling matters!** Check spelling for names, places, and numbers.`,
          keyPoints: ["Read questions before audio starts", "Underline keywords", "Predict answer type", "Watch for synonyms in the audio"],
          tip: "If you write 'recieve' instead of 'receive' — you lose the mark! Practice spelling common IELTS words."
        },
        {
          id: "l3_3", title: "Numbers, Dates & Spelling", duration: 20,
          theory: `**Common reasons students lose marks:**\n\n**Numbers:**\n• Write figures: 15 (not 'fifteen')\n• Prices: £45.50\n• Phone: 07700 900123 (write exactly as said)\n\n**Dates:** 15 March / March 15 — all acceptable\n\n**Commonly misspelled IELTS words:**\n• accommodation (2 c's, 2 m's)\n• necessary (one c, two s)\n• government (not goverment)\n• environment (not enviroment)\n• February (not Febuary)\n• definitely (not definately)\n\n**Practice:** BBC Sounds has free radio programs.`,
          keyPoints: ["Numbers: write digits not words", "Check spelling carefully", "Accommodation: 2 c's and 2 m's", "Dates: any clear format is ok"],
          tip: "Keep a personal list of words you misspell. Review it daily for 5 minutes!"
        }
      ]
    },
    {
      id: "m4", title: "IELTS Reading", icon: "📖", color: "#9B59B6",
      description: "Read faster and smarter — 40 questions in 60 minutes",
      lessons: [
        {
          id: "l4_1", title: "Skimming & Scanning", duration: 25,
          theory: `**60 minutes for 40 questions = 90 seconds per question!**\n\n**Skimming** = reading quickly for the MAIN IDEA\n• Read title, headings, first sentence of each paragraph\n• Takes 2–3 minutes per passage\n• Gives you a 'map' of the text\n\n**Scanning** = searching for SPECIFIC INFORMATION\n• Look for keywords, numbers, names, dates\n• Eyes move quickly, not word-by-word\n• Used to locate which paragraph has the answer\n\n**Reading strategy:**\n1. Skim the passage (2–3 min)\n2. Read the questions\n3. Scan to find the relevant paragraph\n4. Read that section carefully for the answer\n\n**Time: 20 minutes per passage**`,
          keyPoints: ["60 min, 40 questions = 90 sec each", "Skim first for main idea", "Scan for specific info", "20 minutes per passage"],
          tip: "NEVER read the whole passage word-for-word before looking at questions — you won't have time!"
        },
        {
          id: "l4_2", title: "True / False / Not Given", duration: 30,
          theory: `**True:** Statement AGREES with the text\n**False:** Statement CONTRADICTS the text (text says opposite)\n**Not Given:** Information is NOT in the text at all\n\n**Key difference — False vs Not Given:**\n• **False** = The text says something DIFFERENT or OPPOSITE\n• **Not Given** = The text doesn't mention it AT ALL\n\n**Example text:** 'The museum was built in 1890 and attracts 50,000 visitors annually.'\n\n• 'The museum was built in the 19th century.' → **TRUE** (1890 = 1800s)\n• 'The museum was built in 1895.' → **FALSE** (text says 1890)\n• 'The museum is the most popular in the city.' → **NOT GIVEN** (not mentioned)\n\n**Rule:** Only use information FROM THE TEXT. Never use outside knowledge!`,
          keyPoints: ["True = agrees with text", "False = contradicts text", "Not Given = no information", "Never use outside knowledge"],
          tip: "Ask yourself: 'Does the text say the OPPOSITE?' If yes → False. If topic isn't mentioned → Not Given."
        },
        {
          id: "l4_3", title: "Matching Headings", duration: 25,
          theory: `Match headings from a list to paragraphs in the text.\n\n**Strategy:**\n1. Read the headings list first\n2. Skim each paragraph — identify its MAIN IDEA (usually in first 1–2 sentences)\n3. Find the heading that matches the main idea\n4. Cross out the heading once used\n\n**Common traps:**\n• A heading might contain a word from the paragraph but NOT be the main idea\n• Main idea is usually in the TOPIC SENTENCE (first sentence)\n• Sometimes the last sentence summarizes the main idea\n\n**Example:**\nParagraph: 'Solar energy has seen dramatic growth. The cost of solar panels fell 90% in the last decade...'\n\nCorrect: 'The falling cost of renewable energy' ✅\nWrong: 'Problems with fossil fuels' ❌ (mentioned but not the main point)`,
          keyPoints: ["Read headings first", "Find main idea in topic sentence", "Cross out used headings", "Beware of keyword traps"],
          tip: "The longest paragraphs often have the most obvious headings. Start with those to gain confidence!"
        }
      ]
    },
    {
      id: "m5", title: "IELTS Writing", icon: "✍️", color: "#E74C3C",
      description: "Write essays and reports that impress IELTS examiners",
      lessons: [
        {
          id: "l5_1", title: "Task 1: Describing Graphs", duration: 30,
          theory: `**Task 1 (20 min, 150 words):** Describe a visual (graph, chart, diagram, map)\n\n**4-paragraph structure:**\n1. **Introduction:** Paraphrase the question (DON'T copy!)\n2. **Overview:** The 2–3 most important features (no numbers here!)\n3. **Body 1:** Key details with data\n4. **Body 2:** More details / comparisons\n\n**Vocabulary for trends:**\n📈 Increase: rose, grew, increased, went up, climbed, surged\n📉 Decrease: fell, dropped, declined, decreased, plummeted\n➡️ No change: remained stable, stayed constant, levelled off\n📊 High point: peaked at, reached a peak of\n\n**With adverbs:** sharply, dramatically, significantly, gradually, slightly\n\n**Example:** 'Sales *rose sharply* from 200 to 450 between 2010 and 2020.'`,
          keyPoints: ["150+ words, 20 minutes", "Always include an Overview paragraph", "Paraphrase the task — never copy", "Use trend vocabulary with adverbs"],
          tip: "The Overview is THE most important paragraph — it shows you can identify key trends. Many students skip it and lose marks!"
        },
        {
          id: "l5_2", title: "Task 2: Essay Writing", duration: 35,
          theory: `**Task 2 (40 min, 250 words):** Opinion/discussion/problem essay\n\n**5-paragraph structure:**\n1. **Introduction** (2–3 sentences): Background + Thesis\n2. **Body 1** (4–5 sentences): First argument + example\n3. **Body 2** (4–5 sentences): Second argument + example\n4. **Body 3** (optional): Counter-argument or third point\n5. **Conclusion** (2–3 sentences): Restate thesis + summary\n\n**Introduction template:**\n'In recent years, [topic] has become a significant issue. While some people believe [view A], others argue [view B]. This essay will discuss [what you'll argue].'\n\n**Body paragraph — PEEL:**\n• **P**oint: State your argument\n• **E**xample: Give a real-world example\n• **E**xplanation: Explain how it supports your point\n• **L**ink: Connect back to the question\n\n**Task 2 is worth TWICE as much as Task 1!**`,
          keyPoints: ["250+ words, 40 minutes", "5-paragraph structure", "Task 2 = double the marks of Task 1", "Use PEEL structure for body paragraphs"],
          tip: "Spend 5 minutes PLANNING before writing. Students who plan write better essays and don't go off-topic."
        },
        {
          id: "l5_3", title: "Common Writing Mistakes", duration: 20,
          theory: `**Top 10 IELTS Writing mistakes:**\n\n1. ❌ Copying the question → ✅ Paraphrase using synonyms\n2. ❌ Writing less than 150/250 words → ✅ Always count your words\n3. ❌ No paragraphs → ✅ Indent each new paragraph\n4. ❌ Informal language ('gonna', 'kids') → ✅ Use formal vocabulary\n5. ❌ No overview in Task 1 → ✅ Always write 'Overall...' paragraph\n6. ❌ Using 'I think' repeatedly → ✅ 'It is argued that...', 'Many people believe...'\n7. ❌ Subject-verb disagreement → ✅ 'The number of people IS' (not 'are')\n8. ❌ Starting every sentence with 'I' → ✅ Use passive and impersonal phrases\n9. ❌ Memorized phrases that don't fit → ✅ Natural, relevant language only\n10. ❌ Not checking your work → ✅ Save 2 min at end to check spelling/grammar`,
          keyPoints: ["Always paraphrase the question", "Formal language only — no contractions", "Always have an overview (Task 1)", "Check: word count, spelling, paragraphs"],
          tip: "Avoid contractions: write 'it is', 'cannot', 'will not' — NOT 'it's', 'can't', 'won't'."
        }
      ]
    },
    {
      id: "m6", title: "IELTS Speaking", icon: "🗣️", color: "#F39C12",
      description: "Speak confidently and fluently in your IELTS exam",
      lessons: [
        {
          id: "l6_1", title: "Speaking Test Structure", duration: 20,
          theory: `**11–14 minutes**, face-to-face with a real examiner.\n\n**Part 1 (4–5 min):** Everyday questions about yourself\n• Topics: home, family, work/study, hobbies, food, travel\n• Answers: 2–4 sentences — not too short, not too long!\n\n**Part 2 (3–4 min):** Long turn — speak for 1–2 minutes\n• You get a topic card and 1 minute to prepare (take notes!)\n• Speak continuously — the examiner won't ask questions\n\n**Part 3 (4–5 min):** Discussion — abstract questions\n• More complex opinions needed\n• Use conditionals, speculation, and complex structures\n\n**Scored on:**\n• Fluency & Coherence (25%)\n• Vocabulary (25%)\n• Grammar Range & Accuracy (25%)\n• Pronunciation (25%)`,
          keyPoints: ["3 parts, 11–14 minutes total", "Part 1: Simple answers", "Part 2: 1–2 min monologue", "Part 3: Opinions and discussion"],
          tip: "The examiner is NOT trying to trick you — they want you to succeed! Speak naturally."
        },
        {
          id: "l6_2", title: "Expanding Your Answers", duration: 25,
          theory: `**Biggest mistake: giving too-short answers!**\n\n**The AREA technique:**\n• **A**nswer the question directly\n• **R**eason — explain why\n• **E**xample — give a personal example\n• **A**lternative — add more detail or another view\n\n**Example:**\nQuestion: 'Do you like cooking?'\n❌ Bad: 'Yes, I like it.'\n✅ Good: 'Yes, I really enjoy cooking, especially on weekends. The main reason is that it helps me relax after a stressful week. For instance, last Saturday I made a traditional dish for my family. I also find that cooking at home is much healthier than eating out.'\n\n**Thinking time phrases:**\n• 'That's an interesting question...'\n• 'Let me think about that for a moment...'\n• 'Well, from my perspective...'`,
          keyPoints: ["Use AREA: Answer, Reason, Example, Alternative", "Aim for 3–5 sentences per answer", "Use 'buying time' phrases", "Don't give one-word answers"],
          tip: "Record yourself speaking and listen back. You'll quickly notice your most common mistakes!"
        },
        {
          id: "l6_3", title: "Pronunciation & Fluency", duration: 25,
          theory: `**Pronunciation does NOT mean a perfect British accent.** It means being understood clearly.\n\n**What examiners assess:**\n1. **Word stress:** 'phoTOgraphy' not 'PHOtography'\n2. **Sentence stress:** Content words (nouns, verbs) are stressed\n3. **Connected speech:** Natural linking between words\n4. **Intonation:** Rising for questions, falling for statements\n\n**Improving fluency:**\n• Talk to yourself in English daily (narrate what you're doing!)\n• Repeat BBC or TED Talk sentences out loud\n• Shadowing: Listen and speak simultaneously\n• Think directly in English — don't translate!\n\n**Fluency killers:**\n• Long silences (use thinking phrases instead)\n• Repeating the same word\n• Starting over when you make a mistake\n\n**Free practice:** Find language exchange partners at italki.com`,
          keyPoints: ["Clarity > perfect accent", "Word and sentence stress matter", "Practice shadowing technique", "Think in English, don't translate"],
          tip: "Watch 10 minutes of English TV with English subtitles daily. Your ear and pronunciation will improve dramatically!"
        }
      ]
    }
  ]
};

const EXERCISES = {
  grammar: [
    { id:"g1", type:"mcq", question:"Choose the correct tense: 'The graph shows that the population _____ dramatically since 2000.'", options:["increased","has increased","was increasing","will increase"], correct:"has increased", explanation:"We use Present Perfect ('has increased') because the trend started in the past and continues to now. The clue is 'since 2000'." },
    { id:"g2", type:"mcq", question:"Complete with the correct conditional: 'If the government _____ more in education, the economy would improve.'", options:["invests","invested","will invest","would invest"], correct:"invested", explanation:"Second Conditional (hypothetical). Structure: If + past simple, would + base verb. NEVER 'If + would'!" },
    { id:"g3", type:"mcq", question:"Which sentence uses the passive voice correctly for IELTS Writing?", options:["The data were collected in 2020.","The data was collected in 2020.","The data collected in 2020.","The data is collected in 2020."], correct:"The data were collected in 2020.", explanation:"'Data' is plural (plural of 'datum'), so it takes 'were' in formal academic writing. 'Data were' is preferred in IELTS." },
    { id:"g4", type:"mcq", question:"Select the correct linking word: 'The city has excellent transport links. _____, it has a high crime rate.'", options:["Furthermore","Therefore","However","As a result"], correct:"However", explanation:"'However' signals contrast. 'Furthermore' adds, 'Therefore/As a result' show consequence." },
    { id:"g5", type:"mcq", question:"What is the formal IELTS alternative to 'a lot of'?", options:["many / much","tons of","loads of","plenty"], correct:"many / much", explanation:"'A lot of', 'lots of', 'tons of' are all informal. Use 'many' (countable), 'much' (uncountable), or 'a great deal of'." },
    { id:"g6", type:"mcq", question:"Which sentence has CORRECT subject-verb agreement?", options:["The majority of people believes this.","The majority of people believe this.","The majority of people are believing this.","The majority of people has believed this."], correct:"The majority of people believe this.", explanation:"'The majority of + plural noun' takes a plural verb: 'believe'." },
    { id:"g7", type:"mcq", question:"'Sales _____ at 500 units in March before declining.' — Choose the correct word.", options:["peaked","peaking","peak","have peaked"], correct:"peaked", explanation:"'Peaked' (Past Simple) is correct for a specific point on a graph — like March. Use Present Perfect if no specific time is mentioned." },
    { id:"g8", type:"mcq", question:"Which is correct? 'The number of students _____ every year since 2015.'", options:["increases","has increased","increased","is increasing"], correct:"has increased", explanation:"'Since 2015' signals Present Perfect. 'The number' is singular (takes 'has'), even though 'students' is plural." }
  ],
  listening: [
    { id:"li1", type:"mcq", transcript:"Receptionist: 'Good morning, can I help you?' Customer: 'Yes, I'd like to book a room for two nights, from the 15th to the 17th of June.' Receptionist: 'Certainly. A double room is £85 per night, or a single is £60.' Customer: 'I'll take the double room please.'", question:"How much will the customer pay in total?", options:["£60","£85","£120","£170"], correct:"£170", explanation:"Double room (£85) × 2 nights (15th to 17th) = £170. Always check: number of nights × price per night!" },
    { id:"li2", type:"mcq", transcript:"Tour guide: 'The museum opens at 9am Monday to Saturday. On Sundays, we open two hours later. We close at 6pm every day except Friday, when we stay open until 9pm.'", question:"What time does the museum open on Sundays?", options:["9am","10am","11am","12pm"], correct:"11am", explanation:"Opens at 9am Mon–Sat. 'Two hours later' on Sunday = 9am + 2 hours = 11am." },
    { id:"li3", type:"mcq", transcript:"Lecturer: 'Contrary to popular belief, studies show that students who study in shorter sessions of 25 minutes perform better than those who study for hours without breaks. The Pomodoro Technique uses exactly this principle.'", question:"What is the recommended study session length?", options:["15 minutes","25 minutes","45 minutes","60 minutes"], correct:"25 minutes", explanation:"The lecturer specifically says '25 minutes'. Note 'Contrary to popular belief' — a signal that what follows contradicts common thinking." },
    { id:"li4", type:"mcq", transcript:"Student A: 'For the assignment, should we focus on economic or environmental impacts?' Student B: 'We need to cover both. But I think we should spend more time on the environmental side — that's worth 60% of the marks.' Student A: 'Really? I thought it was 40%. Let me check.'", question:"What percentage does Student B say the environmental section is worth?", options:["40%","50%","60%","Not stated"], correct:"60%", explanation:"Student B says 'the environmental side — that's worth 60%'. Student A THINKS it's 40%, but the question asks what Student B says." }
  ],
  reading: [
    { id:"r1", type:"tfng", passage:"The Great Barrier Reef, located off the coast of Queensland, Australia, is the world's largest coral reef system, stretching over 2,300 kilometres. It is composed of over 2,900 individual reefs and 900 islands. Scientists estimate that over 50% of the reef's coral has been lost since 1995.", question:"The Great Barrier Reef has lost more than half of its coral since the 1990s.", correct:"True", explanation:"The passage says 'over 50% of the reef's coral has been lost since 1995.' 1995 is in the 1990s, and 'over 50%' means 'more than half'. → TRUE." },
    { id:"r2", type:"tfng", passage:"The Great Barrier Reef is the world's largest coral reef system. The reef supports an extraordinary variety of marine life, including over 1,500 species of fish and 4,000 species of mollusc.", question:"The Great Barrier Reef is the most biodiverse marine ecosystem in the world.", correct:"Not Given", explanation:"The passage says it is the 'largest' reef system but NEVER says it is the 'most biodiverse'. That comparison is NOT in the text. → NOT GIVEN." },
    { id:"r3", type:"tfng", passage:"Remote work has grown significantly since the early 2000s. However, it was the COVID-19 pandemic of 2020 that caused a dramatic and sudden shift, forcing millions of workers to work from home. Many businesses that initially considered remote work temporary have since made it permanent.", question:"Remote work became common only because of the COVID-19 pandemic.", correct:"False", explanation:"FALSE — the passage says remote work 'has grown significantly since the early 2000s' — it existed BEFORE COVID. COVID caused a 'dramatic shift' but wasn't the starting point." },
    { id:"r4", type:"mcq", passage:"Urban farming has gained momentum as a solution to food insecurity in cities. Studies have shown that urban farms can produce up to 10 times more food per square metre than traditional farms, largely because of controlled growing conditions and innovative techniques such as hydroponics.", question:"According to the passage, why can urban farms produce more food per square metre?", options:["Because they use more fertilizer","Because of controlled conditions and innovative techniques","Because city workers are more efficient","Because urban land is more fertile"], correct:"Because of controlled conditions and innovative techniques", explanation:"The passage directly states: 'largely because of controlled growing conditions and innovative techniques such as hydroponics.'" }
  ],
  vocabulary: [
    { id:"v1", type:"mcq", question:"What does 'significant' mean: 'There was a significant increase in sales.'?", options:["small","important/large","sudden","expected"], correct:"important/large", explanation:"'Significant' means important or large enough to be noticed. Synonyms: considerable, substantial, notable, marked." },
    { id:"v2", type:"mcq", question:"Which word means 'to go down steadily' in IELTS graph writing?", options:["surge","fluctuate","decline","plateau"], correct:"decline", explanation:"'Decline' = go down steadily. 'Surge' = sudden rise. 'Fluctuate' = go up and down. 'Plateau' = stay at same level." },
    { id:"v3", type:"mcq", question:"What is the formal IELTS word for 'kids'?", options:["babies","children","youngsters","teens"], correct:"children", explanation:"'Kids' is informal. Use 'children' in IELTS Writing. Other formal options: 'young people', 'adolescents' (teens)." },
    { id:"v4", type:"mcq", question:"Choose the correct formal alternative to 'because of' for IELTS Writing:", options:["cos of","due to","coz","seeing as"], correct:"due to", explanation:"'Due to' and 'owing to' are formal alternatives to 'because of'. 'Cos' and 'coz' are very informal — never use them in IELTS!" }
  ]
};

const VOCABULARY = [
  {word:"significant",def:"important or large enough to be noticed",example:"There was a significant increase in unemployment.",cat:"Academic"},
  {word:"contribute",def:"to give or add something to help achieve a result",example:"Many factors contribute to climate change.",cat:"Academic"},
  {word:"indicate",def:"to show or point to something",example:"The data indicates a decline in sales.",cat:"Academic"},
  {word:"decline",def:"to decrease or go down gradually",example:"The number of smokers has declined over the past decade.",cat:"Graphs"},
  {word:"increase",def:"to become larger in number or amount",example:"The population increased by 10% in five years.",cat:"Graphs"},
  {word:"proportion",def:"a part or share of a whole",example:"A large proportion of students use public transport.",cat:"Academic"},
  {word:"furthermore",def:"in addition to what has already been said",example:"The plan is expensive. Furthermore, it may not work.",cat:"Linking"},
  {word:"however",def:"used to introduce a contrast or opposite idea",example:"The results were good. However, more research is needed.",cat:"Linking"},
  {word:"therefore",def:"for that reason; as a result",example:"It was raining. Therefore, we stayed inside.",cat:"Linking"},
  {word:"nevertheless",def:"despite what has just been said; still",example:"The task was hard. Nevertheless, they completed it.",cat:"Linking"},
  {word:"approximately",def:"roughly; not exactly but close to the real number",example:"Approximately 3,000 people attended the event.",cat:"Academic"},
  {word:"alternative",def:"another possible choice or option",example:"Public transport is an alternative to driving.",cat:"Academic"},
  {word:"impact",def:"a strong effect or influence",example:"Social media has a huge impact on young people.",cat:"Academic"},
  {word:"issue",def:"an important topic or problem",example:"Climate change is a global issue.",cat:"Academic"},
  {word:"factor",def:"something that influences a result",example:"Diet is an important factor in good health.",cat:"Academic"},
  {word:"economy",def:"the system of trade and money in a country",example:"The economy grew by 3% last year.",cat:"Topic"},
  {word:"environment",def:"the natural world around us",example:"We must protect the environment for future generations.",cat:"Topic"},
  {word:"population",def:"the number of people living in an area",example:"The world population is over 8 billion.",cat:"Topic"},
  {word:"technology",def:"tools and machines created using science",example:"Technology has changed how we communicate.",cat:"Topic"},
  {word:"education",def:"the process of learning and teaching",example:"A good education opens many doors.",cat:"Topic"},
  {word:"sufficient",def:"enough for a purpose",example:"The evidence is not sufficient to prove the theory.",cat:"Academic"},
  {word:"consequence",def:"a result or effect of an action",example:"Pollution has serious consequences for health.",cat:"Academic"},
  {word:"advantage",def:"a good or useful feature; a benefit",example:"One advantage of cycling is that it's free.",cat:"Academic"},
  {word:"disadvantage",def:"a negative feature; a drawback",example:"A disadvantage of city life is the noise.",cat:"Academic"},
  {word:"overall",def:"considering everything together; in general",example:"Overall, the results were positive.",cat:"Writing"},
  {word:"whereas",def:"used to compare two contrasting things",example:"John likes coffee, whereas Mary prefers tea.",cat:"Linking"},
  {word:"despite",def:"without being affected by; in spite of",example:"Despite the rain, they went for a walk.",cat:"Linking"},
  {word:"majority",def:"more than half; the largest group",example:"The majority of people support the new law.",cat:"Academic"},
  {word:"minority",def:"a small group within a larger group",example:"Only a small minority disagree.",cat:"Academic"},
  {word:"urbanisation",def:"the process of more people moving to cities",example:"Urbanisation is happening rapidly in Asia.",cat:"Topic"},
  {word:"infrastructure",def:"basic systems like roads, electricity, and water",example:"The country needs better infrastructure.",cat:"Topic"},
  {word:"sustainable",def:"able to continue without causing harm",example:"We need sustainable energy solutions.",cat:"Topic"},
  {word:"globalization",def:"the process of countries becoming more connected",example:"Globalization has changed world trade.",cat:"Topic"},
  {word:"diversity",def:"a wide variety of different people or things",example:"London is known for its cultural diversity.",cat:"Topic"},
  {word:"consequently",def:"as a result; therefore",example:"She studied hard. Consequently, she passed.",cat:"Linking"},
  {word:"analysis",def:"a detailed examination of something",example:"The analysis showed interesting patterns.",cat:"Academic"},
  {word:"employment",def:"having paid work; a job",example:"Full employment is a goal of many governments.",cat:"Topic"},
  {word:"substantial",def:"large in size, value or importance",example:"There was a substantial improvement in scores.",cat:"Academic"},
  {word:"coherent",def:"logical and consistent; easy to understand",example:"Her argument was clear and coherent.",cat:"Academic"},
  {word:"relevant",def:"closely connected to the matter at hand",example:"Make sure all your examples are relevant to the topic.",cat:"Academic"}
];
