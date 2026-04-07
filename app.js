// ═══════════════════════════════════════
//  IELTS MENTOR — App Logic
//  Pure JS, no dependencies, GitHub Pages ready
// ═══════════════════════════════════════

// ── STORAGE HELPERS ──────────────────────
const STORAGE_KEY = 'ielts_mentor_v2';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    completedLessons: [],
    quizScores: {},
    vocabKnown: [],
    writingDone: 0,
    totalXP: 0,
    streak: 0,
    lastStudyDate: null,
    startedDate: new Date().toISOString().slice(0, 10),
  };
}

function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

let P = loadProgress();

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (P.lastStudyDate === today) return;
  const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  P.streak = (P.lastStudyDate === yesterday) ? P.streak + 1 : 1;
  P.lastStudyDate = today;
  saveProgress(P);
}

function estimateBand() {
  const done = P.completedLessons.length;
  const scores = Object.values(P.quizScores).flat();
  const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
  const raw = 3.5 + done * 0.05 + avg / 100 * 1.5;
  return Math.round(Math.min(raw, 9.0) * 2) / 2;
}

function addXP(amount) {
  P.totalXP += amount;
  saveProgress(P);
  showToast(`+${amount} XP 🎯`);
}

// ── NAVIGATION ───────────────────────────
const PAGES = ['dash', 'lesson', 'practice', 'vocab', 'schedule'];
let currentPage = 'dash';

function go(page) {
  PAGES.forEach(p => {
    const el = document.getElementById(`p-${p}`);
    if (el) el.classList.remove('active');
  });
  const target = document.getElementById(`p-${page}`);
  if (target) target.classList.add('active');
  currentPage = page;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  // Update nav active states
  const navMap = { dash: 0, schedule: 1, vocab: 2, practice: 3 };
  const navBtns = document.querySelectorAll('.nav-btn');
  if (navMap[page] !== undefined) navBtns[navMap[page]]?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateStreak();
  if (page === 'dash') renderDash();
  if (page === 'vocab') renderVocab();
  if (page === 'schedule') renderSchedule();
}

// Mobile nav
document.getElementById('ham').addEventListener('click', () => {
  document.getElementById('mobNav').classList.toggle('open');
});
function closeMob() { document.getElementById('mobNav').classList.remove('open'); }

// ── DASHBOARD ────────────────────────────
function renderDash() {
  P = loadProgress();
  const band = estimateBand();
  // Stats
  document.getElementById('statsRow').innerHTML = `
    <div class="stat c-blue"><div class="stat-v">${band}</div><div class="stat-l">Est. Band</div></div>
    <div class="stat c-green"><div class="stat-v">${P.completedLessons.length}</div><div class="stat-l">Lessons Done</div></div>
    <div class="stat c-orange"><div class="stat-v">${P.totalXP}</div><div class="stat-l">Total XP</div></div>
    <div class="stat c-yellow"><div class="stat-v">🔥${P.streak}</div><div class="stat-l">Day Streak</div></div>
    <div class="stat c-purple"><div class="stat-v">${P.vocabKnown.length}</div><div class="stat-l">Words Known</div></div>
  `;
  // Band progress bar
  document.getElementById('bandBadge').textContent = `Band ${band}`;
  const pct = Math.max(0, Math.min(100, (band - 3.0) / 5.0 * 100));
  document.getElementById('bandFill').style.width = pct + '%';
  const lessonsToTarget = Math.max(0, Math.round((6.0 - band) / 0.05));
  document.getElementById('bandNote').textContent = `🎯 Target: Band 6.0 · approx. ${lessonsToTarget} more lessons to reach target`;
  // Modules
  const grid = document.getElementById('modulesGrid');
  grid.innerHTML = '';
  CURRICULUM.modules.forEach(mod => {
    const total = mod.lessons.length;
    const done = mod.lessons.filter(l => P.completedLessons.includes(l.id)).length;
    const pctM = Math.round(done / total * 100);
    const lessonsHTML = mod.lessons.map((les, i) => {
      const isDone = P.completedLessons.includes(les.id);
      return `<button class="lcard ${isDone ? 'done' : ''}" onclick="openLesson('${les.id}')">
        <div class="ln">${isDone ? '✓' : i + 1}</div>
        <div style="flex:1"><div class="ltitle">${les.title}</div><div class="lmeta">⏱ ${les.duration} min</div></div>
        ${isDone ? '<span style="color:var(--green);flex-shrink:0">✅</span>' : ''}
      </button>`;
    }).join('');
    grid.innerHTML += `
      <div class="card">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <span style="font-size:1.6rem">${mod.icon}</span>
          <div><div style="font-weight:700;font-size:.95rem">${mod.title}</div>
          <div style="font-size:.72rem;color:var(--text2)">${done}/${total} lessons</div></div>
        </div>
        <p style="font-size:.8rem;color:var(--text2);margin-bottom:10px">${mod.description}</p>
        <div class="pbar" style="margin-bottom:12px"><div class="pfill" style="width:${pctM}%"></div></div>
        <div style="display:flex;flex-direction:column;gap:7px">${lessonsHTML}</div>
      </div>`;
  });
}

// ── LESSON ───────────────────────────────
function openLesson(id) {
  let found = null;
  CURRICULUM.modules.forEach(mod => {
    mod.lessons.forEach(les => {
      if (les.id === id) found = { les, mod: mod.title };
    });
  });
  if (!found) return;
  const { les, mod } = found;
  P = loadProgress();
  const isDone = P.completedLessons.includes(id);

  // Render theory with basic markdown
  let theory = les.theory
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text)">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em style="color:var(--orange);font-style:normal">$1</em>')
    .replace(/\n/g, '<br>');

  const kpHTML = les.keyPoints.map(k => `<li>${k}</li>`).join('');

  document.getElementById('lessonContent').innerHTML = `
    <div class="ph">
      <div style="font-size:.78rem;color:var(--text2);margin-bottom:8px">${mod}</div>
      <h1>${les.title}</h1>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <span class="badge bd-b">⏱ ${les.duration} min</span>
        <span class="badge bd-o">${mod}</span>
        ${isDone ? '<span class="badge bd-g">✅ Completed</span>' : ''}
      </div>
    </div>
    <div class="theory">${theory}</div>
    <div class="card" style="margin-bottom:14px">
      <div class="sec">🔑 Key Points</div>
      <ul class="kpoints">${kpHTML}</ul>
    </div>
    ${les.tip ? `<div class="tip-box" style="margin-bottom:14px">${les.tip}</div>` : ''}
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
      ${!isDone
        ? `<button class="btn btn-g" id="completeBtn" onclick="completeLesson('${id}')">✅ Mark as Complete (+50 XP)</button>`
        : `<button class="btn btn-o" disabled>✅ Already Completed</button>`}
      <button class="btn btn-o" onclick="go('dash')">← Dashboard</button>
      <button class="btn btn-o" onclick="go('practice')">✏️ Practice Now</button>
    </div>
    <div id="lessonFB" style="margin-top:14px"></div>
  `;
  go('lesson');
}

function completeLesson(id) {
  P = loadProgress();
  if (!P.completedLessons.includes(id)) {
    P.completedLessons.push(id);
    P.totalXP += 50;
    updateStreak();
    saveProgress(P);
  }
  addXP(0); // just show toast
  const btn = document.getElementById('completeBtn');
  if (btn) { btn.textContent = '✅ Completed!'; btn.disabled = true; }
  const band = estimateBand();
  document.getElementById('lessonFB').innerHTML = `
    <div class="fb ok">
      <div class="fb-t">🎉 Lesson Complete! +50 XP</div>
      <div class="fb-d">Total XP: <strong>${P.totalXP}</strong> &nbsp;|&nbsp; Est. Band: <strong>${band}</strong> &nbsp;|&nbsp; Streak: 🔥${P.streak}</div>
    </div>`;
  showToast('+50 XP 🎯');
}

// ── PRACTICE ─────────────────────────────
let currentSkill = 'grammar';
let currentEx = null;

function setSkill(skill) {
  currentSkill = skill;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach((t, i) => {
    const map = ['grammar', 'listening', 'reading', 'vocabulary'];
    if (map[i] === skill) t.classList.add('active');
  });
  renderExercise();
}

function renderExercise() {
  const exList = EXERCISES[currentSkill] || [];
  if (!exList.length) {
    document.getElementById('exerciseContent').innerHTML = `<div class="card" style="text-align:center"><div style="font-size:2rem;margin-bottom:10px">🚧</div><div style="font-weight:700">Coming soon!</div><p style="color:var(--text2);margin-top:6px">Try another skill for now.</p></div>`;
    return;
  }
  currentEx = exList[Math.floor(Math.random() * exList.length)];
  let html = `<div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:6px">
      <span class="badge bd-o">${currentSkill.charAt(0).toUpperCase() + currentSkill.slice(1)}</span>
      <span class="badge bd-b">+10 XP per correct answer</span>
    </div>`;

  if (currentEx.transcript) {
    html += `<div style="background:var(--bg3);border:1px solid var(--border);border-radius:9px;padding:14px;margin-bottom:14px">
      <div style="font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:var(--text2);margin-bottom:8px;font-weight:700">🎧 Audio Transcript (Read as if you heard this)</div>
      <p style="font-size:.86rem;line-height:1.7">${currentEx.transcript}</p>
    </div>`;
  }
  if (currentEx.passage) {
    html += `<div style="background:var(--bg3);border:1px solid var(--border);border-radius:9px;padding:14px;margin-bottom:14px">
      <div style="font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:var(--text2);margin-bottom:8px;font-weight:700">📄 Reading Passage</div>
      <p style="font-size:.86rem;line-height:1.7">${currentEx.passage}</p>
    </div>`;
  }

  html += `<div style="font-size:.95rem;font-weight:600;margin-bottom:14px;line-height:1.5">${currentEx.question}</div>`;

  if (currentEx.type === 'mcq') {
    html += `<div class="opts">` + currentEx.options.map(o =>
      `<button class="opt" onclick="checkAnswer(this,'${o.replace(/'/g,"\\'")}','${currentEx.correct.replace(/'/g,"\\'")}','${(currentEx.explanation||'').replace(/'/g,"\\'")}')">${o}</button>`
    ).join('') + `</div>`;
  } else if (currentEx.type === 'tfng') {
    const tfng = ['True', 'False', 'Not Given'];
    const icons = { True: '✅', False: '❌', 'Not Given': '❓' };
    html += `<div class="opts">` + tfng.map(o =>
      `<button class="opt" onclick="checkAnswer(this,'${o}','${currentEx.correct}','${(currentEx.explanation||'').replace(/'/g,"\\'")}')">${icons[o]} ${o}</button>`
    ).join('') + `</div>`;
  }

  html += `<div id="exFB" class="hidden"></div>
    <div id="exNext" class="hidden" style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn btn-o" onclick="renderExercise()">Next Question →</button>
      <button class="btn btn-o" onclick="go('dash')">🏠 Dashboard</button>
    </div>
  </div>
  <div class="card" style="margin-top:12px">
    <div style="display:flex;gap:18px;flex-wrap:wrap;font-size:.84rem">
      <span style="color:var(--text2)">XP: <strong>${P.totalXP}</strong></span>
      <span style="color:var(--text2)">Lessons: <strong>${P.completedLessons.length}</strong></span>
      <span style="color:var(--text2)">Est. Band: <strong>${estimateBand()}</strong></span>
    </div>
  </div>`;

  document.getElementById('exerciseContent').innerHTML = html;
}

function checkAnswer(btn, answer, correct, explanation) {
  document.querySelectorAll('.opt').forEach(b => b.disabled = true);
  const isCorrect = answer.trim().toLowerCase() === correct.trim().toLowerCase();
  btn.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    document.querySelectorAll('.opt').forEach(b => {
      if (b.textContent.trim().toLowerCase().includes(correct.trim().toLowerCase())) b.classList.add('correct');
    });
  }
  P = loadProgress();
  if (!P.quizScores[currentSkill]) P.quizScores[currentSkill] = [];
  P.quizScores[currentSkill].push(isCorrect ? 100 : 0);
  if (isCorrect) P.totalXP += 10;
  saveProgress(P);

  const fb = document.getElementById('exFB');
  fb.className = `fb ${isCorrect ? 'ok' : 'bad'}`;
  fb.innerHTML = `<div class="fb-t">${isCorrect ? '✅ Correct!' : '❌ Not quite!'}</div>
    <div class="fb-d">${!isCorrect ? `<strong>Correct answer: ${correct}</strong><br>` : ''}${explanation}</div>`;
  document.getElementById('exNext').classList.remove('hidden');
  if (isCorrect) showToast('+10 XP 🎉');
}

// ── VOCABULARY ───────────────────────────
let vocabBatch = [];

function renderVocab() {
  P = loadProgress();
  const total = VOCABULARY.length;
  const known = P.vocabKnown.length;
  const pct = Math.round(known / total * 100);
  document.getElementById('vKnown').textContent = known;
  document.getElementById('vTotal').textContent = total;
  document.getElementById('vPct').textContent = pct + '%';
  document.getElementById('vProgLabel').textContent = `${known}/${total} words`;
  document.getElementById('vFill').style.width = pct + '%';

  const unknown = VOCABULARY.filter(w => !P.vocabKnown.includes(w.word));
  const shuffled = [...unknown].sort(() => Math.random() - .5);
  vocabBatch = shuffled.slice(0, 20);

  const grid = document.getElementById('vocabGrid');
  if (!vocabBatch.length) {
    grid.innerHTML = `<div class="card" style="grid-column:1/-1;text-align:center">
      <div style="font-size:2rem;margin-bottom:10px">🎉</div>
      <div style="font-weight:700">You've learned all ${total} words!</div>
      <p style="color:var(--text2);margin-top:6px">Amazing! Try the vocabulary quiz to test yourself.</p>
      <button class="btn btn-p" style="margin-top:12px" onclick="go('practice');setSkill('vocabulary')">Take Vocab Quiz</button>
    </div>`;
    return;
  }
  grid.innerHTML = vocabBatch.map(w => `
    <div class="vcard" id="vc-${w.word.replace(/\s/g,'_')}">
      <div class="vword">${w.word}</div>
      <div class="vdef">${w.def}</div>
      <div class="vex">"${w.example}"</div>
      <span class="vtag">${w.cat}</span>
      <button class="vknow ${P.vocabKnown.includes(w.word)?'known':''}" 
        onclick="markKnown('${w.word}')"
        ${P.vocabKnown.includes(w.word)?'disabled':''}>
        ${P.vocabKnown.includes(w.word)?'✓ Known':'✓ I know this'}
      </button>
    </div>`).join('');
}

function markKnown(word) {
  P = loadProgress();
  if (!P.vocabKnown.includes(word)) {
    P.vocabKnown.push(word);
    P.totalXP += 2;
    saveProgress(P);
  }
  const id = 'vc-' + word.replace(/\s/g, '_');
  const btn = document.querySelector(`#${id} .vknow`);
  if (btn) { btn.textContent = '✓ Known'; btn.classList.add('known'); btn.disabled = true; }
  document.getElementById('vKnown').textContent = P.vocabKnown.length;
  document.getElementById('vPct').textContent = Math.round(P.vocabKnown.length / VOCABULARY.length * 100) + '%';
  document.getElementById('vFill').style.width = Math.round(P.vocabKnown.length / VOCABULARY.length * 100) + '%';
  showToast('+2 XP 📚');
}

// ── SCHEDULE ─────────────────────────────
function renderSchedule() {
  P = loadProgress();
  const currentWeek = Math.min(12, Math.max(1, Math.floor(P.completedLessons.length / 5) + 1));
  document.getElementById('schedWeekLabel').textContent = `📍 You are on Week ${currentWeek}`;
  document.getElementById('schedStats').textContent = `Completed lessons: ${P.completedLessons.length} · Est. Band: ${estimateBand()} · Streak: 🔥${P.streak} days`;

  // Build flat list of lessons
  const lessonsList = [];
  CURRICULUM.modules.forEach(mod => mod.lessons.forEach(l => lessonsList.push({ mod: mod.title, les: l })));

  const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  let li = 0;
  const grid = document.getElementById('schedGrid');
  grid.innerHTML = '';
  for (let w = 1; w <= 12; w++) {
    const isCurrent = w === currentWeek;
    const status = w < currentWeek ? '✓ Done' : isCurrent ? '← Current' : 'Upcoming';
    let daysHTML = '';
    for (let d = 0; d < 5; d++) {
      let chips = '';
      if (li < lessonsList.length) {
        const item = lessonsList[li++];
        chips += `<button class="chip chip-l" onclick="openLesson('${item.les.id}')" title="Open lesson">📖 ${item.les.title.length > 22 ? item.les.title.slice(0,22)+'…' : item.les.title}</button>`;
      }
      if (d % 2 === 0) {
        chips += `<button class="chip chip-v" onclick="go('vocab')">📚 Vocab (20 words)</button>`;
      } else {
        chips += `<button class="chip chip-e" onclick="go('practice')">✏️ Skills Practice</button>`;
      }
      daysHTML += `<div class="drow"><div class="dlbl">${DAY_NAMES[d]}</div><div class="dchips">${chips}</div></div>`;
    }
    grid.innerHTML += `
      <div class="wcard">
        <div class="whead" onclick="toggleWeek(this)">
          <div>
            <strong>Week ${w}</strong>
            <span style="font-size:.76rem;color:var(--text2);margin-left:8px">
              ${w <= 4 ? '📚 Grammar & Foundations' : w <= 8 ? '🎯 Skills Development' : '🏆 Test Preparation'}
            </span>
          </div>
          <span style="font-size:.72rem;font-family:var(--mono);padding:2px 10px;border-radius:20px;background:var(--bg);border:1px solid var(--border);color:${isCurrent?'var(--accent)':'var(--text2)'}">
            ${status}
          </span>
        </div>
        <div class="wbody ${isCurrent ? '' : 'hidden'}">${daysHTML}</div>
      </div>`;
  }
}

function toggleWeek(header) {
  const body = header.nextElementSibling;
  const isHidden = body.classList.contains('hidden');
  document.querySelectorAll('.wbody').forEach(b => b.classList.add('hidden'));
  if (isHidden) body.classList.remove('hidden');
}

// ── AI CHAT ───────────────────────────────
const chatFab   = document.getElementById('chatFab');
const chatPanel = document.getElementById('chatPanel');
const chatX     = document.getElementById('chatX');
const chatIn    = document.getElementById('chatIn');
const chatSend  = document.getElementById('chatSend');
const chatMsgs  = document.getElementById('chatMsgs');

chatFab.addEventListener('click', () => chatPanel.classList.toggle('open'));
chatX.addEventListener('click', () => chatPanel.classList.remove('open'));

async function sendChat() {
  const msg = chatIn.value.trim();
  if (!msg) return;
  appendMsg(msg, 'u');
  chatIn.value = '';
  const typing = appendMsg('Thinking... 🤔', 'b', true);
  const reply = getSmartReply(msg);
  await new Promise(r => setTimeout(r, 600 + Math.random() * 600));
  typing.remove();
  appendMsg(reply, 'b');
}

chatSend.addEventListener('click', sendChat);
chatIn.addEventListener('keydown', e => { if (e.key === 'Enter') sendChat(); });

function appendMsg(text, role, isTyping = false) {
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  div.innerHTML = `<span class="mavt">${role === 'b' ? '🤖' : '👤'}</span><div class="mbub" style="${isTyping?'color:var(--text2);font-style:italic':''}"> ${text}</div>`;
  chatMsgs.appendChild(div);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
  return div;
}

function getSmartReply(msg) {
  const m = msg.toLowerCase();
  P = loadProgress();
  const band = estimateBand();

  if (m.includes('band') && (m.includes('improv') || m.includes('increas') || m.includes('higher')))
    return `At Band ${band}, the fastest way to improve is: (1) Complete all lessons here daily, (2) Practice writing essays 3x/week and review your mistakes, (3) Listen to BBC Learning English for 15 min/day. Consistency over 8–12 weeks = 0.5–1 band improvement. You can do it! 💪`;
  if (m.includes('writing') && m.includes('task 1'))
    return `For Writing Task 1: Always write 4 paragraphs — Introduction (paraphrase), Overview (main trends, no numbers!), Body 1, Body 2. Use trend vocabulary: rose, fell, peaked, plateaued. Minimum 150 words in 20 minutes. The Overview paragraph is worth the most marks!`;
  if (m.includes('writing') && m.includes('task 2'))
    return `For Writing Task 2: Use 5 paragraphs — Intro + 2-3 body paragraphs + Conclusion. Use PEEL for each body paragraph (Point, Example, Explanation, Link). Plan for 5 minutes before writing. 250+ words in 40 minutes. Task 2 is worth DOUBLE the marks of Task 1!`;
  if (m.includes('reading'))
    return `IELTS Reading: 60 minutes, 40 questions = 90 seconds each! Strategy: (1) Skim the passage (2–3 min), (2) Read questions and underline keywords, (3) Scan for those keywords in the text, (4) Read that paragraph carefully. NEVER read word-by-word from the start!`;
  if (m.includes('listening'))
    return `For IELTS Listening: Read ALL questions BEFORE the audio starts. Underline keywords. Predict the answer type (number, name, place?). Remember answers appear IN ORDER. If you miss one, move on immediately! Check your spelling carefully — one mistake = one lost mark.`;
  if (m.includes('speaking'))
    return `For IELTS Speaking: Use the AREA technique — Answer, Reason, Example, Alternative. Aim for 4–5 sentences per answer. Use thinking-time phrases: "That's an interesting question...", "Well, from my perspective..." Your accent doesn't matter — clarity does! Record yourself to improve.`;
  if (m.includes('vocabulary') || m.includes('words'))
    return `Build IELTS vocabulary by learning words IN CONTEXT, not lists. Focus on: (1) Academic Word List (AWL), (2) Topic vocabulary (environment, technology, health), (3) Linking words (However, Furthermore, Therefore). Use the Vocab section of this app daily — even 10 minutes per day adds up to 300+ words in a month!`;
  if (m.includes('grammar'))
    return `Key grammar for IELTS: (1) Tenses — especially Present Perfect ('has increased since 2000'), (2) Passive voice for Task 1 ('was produced', 'has been introduced'), (3) Conditionals for Speaking Part 3 ('If I were the government...'), (4) Complex sentences with linkers. Complete the Grammar module in the app!`;
  if (m.includes('nervou') || m.includes('scared') || m.includes('anxious'))
    return `Feeling nervous is completely normal! Here's what helps: (1) Prepare so well that you feel confident, (2) On exam day, arrive 30 minutes early, (3) In Speaking, remember the examiner WANTS you to succeed — they're not trying to trick you, (4) In Reading, if stuck on a question, skip it and come back. You've got this! 🎯`;
  if (m.includes('schedule') || m.includes('plan') || m.includes('how long'))
    return `Your 12-week plan: Weeks 1–4 = Grammar + Vocabulary, Weeks 5–8 = Listening + Reading skills, Weeks 9–12 = Writing + Speaking + Mock tests. Study 45–60 minutes daily. Morning: vocabulary (15 min). Main session: lesson + practice (30 min). Evening: review + write 3 sentences with new words (10 min).`;
  if (m.includes('hello') || m.includes('hi') || m.includes('привет') || m.includes('салам'))
    return `Hello! 👋 Welcome to your IELTS Mentor! You're currently at estimated Band ${band}. Today I recommend: (1) Complete the next lesson in your module, (2) Practice 5 vocabulary words, (3) Do one reading exercise. What would you like help with? Grammar, writing, speaking, or study strategies? 🎯`;
  return `Great question! At your level (Band ${band}), here's my advice: Focus on the fundamentals first — grammar accuracy, essential vocabulary (especially Academic Word List words), and reading strategies. Complete the lessons in order, do at least one practice exercise daily, and use BBC Learning English for free audio practice. What specific skill would you like to work on? 📚`;
}

// ── XP TOAST ─────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

// ── RESET ─────────────────────────────────
function resetProgress() {
  if (!confirm('Reset ALL progress? This cannot be undone.')) return;
  localStorage.removeItem(STORAGE_KEY);
  P = loadProgress();
  go('dash');
}

// ── INIT ──────────────────────────────────
updateStreak();
P = loadProgress();
renderDash();
renderExercise();
