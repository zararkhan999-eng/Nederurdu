const STORAGE_KEY = "nederurdu-progress-v3";
const chapters = window.NEDERURDU_CHAPTERS || [
  {
    id: "a0",
    title: "Chapter A0",
    subtitle: "Letters, words, tiny grammar, and first sentences",
    lessons: window.NEDERURDU_LESSONS || []
  }
];
const dutchLetters = [
  { letter: "a", speak: "a", sound: "آ", word: "appel", meaning: "سیب" },
  { letter: "b", speak: "b", sound: "بے", word: "boek", meaning: "کتاب" },
  { letter: "c", speak: "c", sound: "سے", word: "cadeau", meaning: "تحفہ" },
  { letter: "d", speak: "d", sound: "دے", word: "deur", meaning: "دروازہ" },
  { letter: "e", speak: "e", sound: "اے", word: "een", meaning: "ایک" },
  { letter: "f", speak: "f", sound: "اِف", word: "fiets", meaning: "سائیکل" },
  { letter: "g", speak: "g", sound: "خے / گلے سے", word: "goed", meaning: "اچھا" },
  { letter: "h", speak: "h", sound: "ہا", word: "huis", meaning: "گھر" },
  { letter: "i", speak: "i", sound: "ای", word: "ik", meaning: "میں" },
  { letter: "j", speak: "j", sound: "یے", word: "ja", meaning: "ہاں" },
  { letter: "k", speak: "k", sound: "کا", word: "kat", meaning: "بلی" },
  { letter: "l", speak: "l", sound: "ایل", word: "lamp", meaning: "بتی" },
  { letter: "m", speak: "m", sound: "ایم", word: "man", meaning: "آدمی" },
  { letter: "n", speak: "n", sound: "این", word: "nee", meaning: "نہیں" },
  { letter: "o", speak: "o", sound: "او", word: "oog", meaning: "آنکھ" },
  { letter: "p", speak: "p", sound: "پے", word: "pen", meaning: "قلم" },
  { letter: "q", speak: "q", sound: "کو", word: "quiz", meaning: "quiz" },
  { letter: "r", speak: "r", sound: "ایر", word: "rijst", meaning: "چاول" },
  { letter: "s", speak: "s", sound: "ایس", word: "stoel", meaning: "کرسی" },
  { letter: "t", speak: "t", sound: "تے", word: "tafel", meaning: "میز" },
  { letter: "u", speak: "u", sound: "او / اُ", word: "uur", meaning: "گھنٹہ" },
  { letter: "v", speak: "v", sound: "وے", word: "vrouw", meaning: "عورت" },
  { letter: "w", speak: "w", sound: "وے", word: "water", meaning: "پانی" },
  { letter: "x", speak: "x", sound: "اِکس", word: "taxi", meaning: "ٹیکسی" },
  { letter: "y", speak: "y", sound: "خریکسے ای", word: "yoga", meaning: "یوگا" },
  { letter: "z", speak: "z", sound: "زیت", word: "zus", meaning: "بہن" }
];

const wordHelpGlossary = {
  aan: "پر / شروع",
  aanbieden: "پیش کرنا",
  aanbieding: "offer / رعایت",
  afspraak: "appointment",
  adres: "پتہ",
  apotheek: "pharmacy",
  appel: "سیب",
  aanvragen: "درخواست دینا",
  als: "اگر",
  alstublieft: "برائے مہربانی",
  achter: "پیچھے",
  badkamer: "bathroom",
  baan: "job",
  bellen: "فون کرنا",
  ben: "ہوں",
  bent: "ہو / ہیں",
  betalen: "pay کرنا",
  begrijp: "سمجھتا / سمجھتی ہوں",
  boek: "کتاب",
  bsn: "Dutch citizen number",
  cadeau: "تحفہ",
  collega: "colleague",
  contract: "contract",
  dank: "شکریہ",
  dat: "کہ",
  de: "the",
  deur: "دروازہ",
  dokter: "doctor",
  docent: "teacher",
  een: "ایک / a",
  eten: "کھانا",
  fiets: "سائیکل",
  formulier: "form",
  ga: "جاتا / جاتی ہوں",
  gaan: "جانا",
  gegaan: "گیا / گئی",
  gaat: "جاتا / جاتی ہے",
  gemeente: "municipality",
  gisteren: "کل / yesterday",
  goed: "اچھا",
  goedemiddag: "good afternoon",
  goedemorgen: "good morning",
  goedenavond: "good evening",
  garantie: "guarantee",
  gehad: "تھا / had",
  gewerkt: "کام کیا",
  gekookt: "کھانا پکایا",
  gekomen: "آیا / آئی",
  gebleven: "رہا / رہی",
  gezegd: "کہا",
  graag: "خوشی سے / please",
  had: "تھا / تھی",
  haar: "اس کا عورت / her",
  heb: "ہے / have",
  hebt: "تمہارے پاس ہے",
  hebben: "رکھنا / have",
  heeft: "ہے / has",
  helpen: "مدد کرنا",
  herhalen: "repeat کرنا",
  het: "the / یہ",
  hij: "وہ مرد",
  hoi: "hi",
  huisarts: "family doctor",
  huis: "گھر",
  huiswerk: "homework",
  huur: "rent",
  ik: "میں",
  in: "میں",
  inschrijven: "register کرنا",
  is: "ہے",
  ja: "ہاں",
  jij: "تم informal",
  jongen: "لڑکا",
  jouw: "تمہارا",
  kan: "کر سکتا / سکتی ہے",
  kat: "بلی",
  kind: "بچہ",
  kom: "آتا / آتی ہوں",
  koken: "کھانا پکانا",
  komt: "آتا / آتی ہے",
  kunt: "کر سکتے ہیں",
  lamp: "بتی",
  land: "country",
  langzaam: "آہستہ",
  leren: "سیکھنا",
  lekkage: "leakage",
  maken: "بنانا / کرنا",
  man: "آدمی",
  mag: "اجازت ہے",
  meisje: "لڑکی",
  met: "ساتھ",
  mijn: "میرا",
  morgen: "tomorrow / صبح",
  moet: "ضروری ہے",
  moeten: "ضروری ہونا",
  mogen: "اجازت ہونا",
  naar: "کی طرف / کو",
  naam: "نام",
  naast: "ساتھ / next to",
  nee: "نہیں",
  nemen: "لینا",
  niet: "نہیں / not",
  oog: "آنکھ",
  omdat: "کیونکہ",
  onder: "نیچے",
  op: "پر / up",
  opbellen: "فون کرنا",
  opstaan: "اٹھنا",
  overstappen: "change کرنا",
  ov: "public transport",
  paspoort: "passport",
  pen: "قلم",
  pijn: "درد",
  reparatie: "repair",
  rijst: "چاول",
  rust: "آرام",
  ruilen: "exchange کرنا",
  salaris: "salary",
  schoonmaken: "صفائی کرنا",
  school: "school",
  sollicitatie: "job application",
  stad: "شہر",
  stoel: "کرسی",
  supermarkt: "supermarket",
  tafel: "میز",
  taxi: "taxi",
  telefoon: "فون",
  telefoonnummer: "phone number",
  tot: "تک / until",
  trein: "train",
  terugkomen: "واپس آنا",
  u: "آپ formal",
  uit: "سے / out of",
  uur: "گھنٹہ / time",
  vertraging: "delay",
  verzekering: "insurance",
  verwarming: "heating",
  vandaag: "آج",
  voor: "سامنے / before",
  vrouw: "عورت",
  water: "پانی",
  weg: "ختم / away",
  wel: "زور دینے والا لفظ",
  werk: "work",
  werken: "کام کرنا",
  wij: "ہم",
  willen: "چاہنا",
  woon: "رہتا / رہتی ہوں",
  wonen: "رہنا",
  yoga: "yoga",
  ziek: "بیمار",
  ziekenhuis: "hospital",
  zijn: "اس کا / ہونا",
  zij: "وہ عورت / وہ لوگ",
  ziens: "دیکھنا / see",
  zus: "بہن"
};

const defaultProgress = {
  completedLessons: [],
  scores: {},
  totalXp: 0,
  practiceDays: [],
  mistakes: [],
  settings: {
    soundEffects: true,
    pronunciation: true
  },
  selectedChapterId: "a0",
  lastLessonId: "a0-letters-1"
};

let progress = loadProgress();
let selectedChapterId = progress.selectedChapterId || chapters[0].id;
let screen = "home";
let activeLessonId = progress.lastLessonId || getCurrentLessons()[0].id;
let previewLessonId = activeLessonId;
let activeQuestionIndex = 0;
let selectedAnswer = "";
let checked = false;
let lessonResult = null;
let sessionAnswers = [];
let sessionQuestions = [];
let lessonProgressSteps = 0;
let activeWordHelp = null;
let audioContext = null;

function loadProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...defaultProgress,
      ...stored,
      settings: {
        ...defaultProgress.settings,
        ...(stored?.settings || {})
      }
    };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress(nextProgress = progress) {
  progress = nextProgress;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getLesson(id) {
  return getAllLessons().find((lesson) => lesson.id === id) || getCurrentLessons()[0];
}

function getAllLessons() {
  return chapters.flatMap((chapter) => chapter.lessons);
}

function getSelectedChapter() {
  return chapters.find((chapter) => chapter.id === selectedChapterId) || chapters[0];
}

function getCurrentLessons() {
  return getSelectedChapter().lessons;
}

function getChapterForLesson(id) {
  return chapters.find((chapter) => chapter.lessons.some((lesson) => lesson.id === id)) || getSelectedChapter();
}

function isLessonUnlocked(index) {
  const lessons = getCurrentLessons();
  if (index === 0) return true;
  return progress.completedLessons.includes(lessons[index - 1].id);
}

function completedCount() {
  return getCurrentLessons().filter((lesson) => progress.completedLessons.includes(lesson.id)).length;
}

function chapterCompletedCount(chapter) {
  return chapter.lessons.filter((lesson) => progress.completedLessons.includes(lesson.id)).length;
}

function getNextLessonForChapter(chapter = getSelectedChapter()) {
  return chapter.lessons.find((lesson, index) => {
    const previousDone = index === 0 || progress.completedLessons.includes(chapter.lessons[index - 1].id);
    return previousDone && !progress.completedLessons.includes(lesson.id);
  }) || chapter.lessons[0];
}

function getLessonIndexInChapter(lessonId, chapter = getSelectedChapter()) {
  return chapter.lessons.findIndex((lesson) => lesson.id === lessonId);
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    ${screen === "home" ? renderHome() : ""}
    ${screen === "preview" ? renderLessonPreview() : ""}
    ${screen === "lesson" ? renderLesson() : ""}
    ${screen === "complete" ? renderComplete() : ""}
    ${screen === "letters" ? renderLetters() : ""}
    ${screen === "progress" ? renderProgress() : ""}
    ${screen === "settings" ? renderSettings() : ""}
    ${renderBottomNav()}
  `;
  bindEvents();
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark"><span>NU</span></div>
        <div>
          <p class="brand-title">NederUrdu</p>
          <p class="brand-subtitle">Dutch سیکھیں، Urdu میں</p>
        </div>
      </div>
    </header>
  `;
}

function renderHome() {
  const chapter = getSelectedChapter();
  const lessons = getCurrentLessons();
  const nextLesson = getNextLessonForChapter(chapter);
  const percent = Math.round((completedCount() / lessons.length) * 100);
  activeLessonId = nextLesson.id;

  return `
    ${renderTopbar()}
    <section class="chapter-strip" aria-label="Course chapters">
      ${chapters.map(renderChapterButton).join("")}
    </section>
    <section class="hero-panel">
      <div class="hero-copy">
        <p class="eyeline">${chapter.title} · ${percent}% complete</p>
        <h1>${nextLesson.title}</h1>
        <p class="lead">${nextLesson.description} ہر جواب کے بعد چھوٹی Urdu وضاحت ملے گی۔</p>
      </div>
      <div class="dashboard-progress">
        <div class="progress-track"><div class="progress-fill" style="width: ${percent}%"></div></div>
        <span class="latin">${completedCount()}/${lessons.length}</span>
      </div>
      <div class="summary-grid">
        <div class="summary-item">
          <span class="summary-value">${completedCount()}/${lessons.length}</span>
          <span class="summary-label">سبق مکمل</span>
        </div>
        <div class="summary-item">
          <span class="summary-value">${progress.totalXp}</span>
          <span class="summary-label">پوائنٹس</span>
        </div>
        <div class="summary-item">
          <span class="summary-value">${progress.practiceDays.length}</span>
          <span class="summary-label">Practice دن</span>
        </div>
      </div>
      <button class="primary-button" data-action="preview" data-lesson="${nextLesson.id}">سبق دیکھیں</button>
    </section>
    <section class="quick-actions" aria-label="App actions">
      <button class="quick-action" data-action="letters">
        <span class="quick-icon">Aa</span>
        <strong>Letters</strong>
        <small>alphabet</small>
      </button>
      <button class="quick-action" data-action="settings">
        <span class="quick-icon">Set</span>
        <strong>Settings</strong>
        <small>sound</small>
      </button>
    </section>
    <section class="section">
      <h2>Chapter progress</h2>
      <div class="chapter-progress-list">
        ${chapters.map(renderChapterProgressRow).join("")}
      </div>
    </section>
    <section class="section">
      <h2>${chapter.title} کا راستہ</h2>
      <div class="unit-list">
        ${lessons.map(renderUnitRow).join("")}
      </div>
    </section>
  `;
}

function renderChapterButton(chapter) {
  const completed = chapterCompletedCount(chapter);
  const active = chapter.id === selectedChapterId;
  return `
    <button class="chapter-button ${active ? "active" : ""}" data-action="chapter" data-chapter="${chapter.id}">
      <span class="chapter-name">${chapter.title}</span>
      <span class="chapter-subtitle">${chapter.subtitle}</span>
      <span class="chapter-count">${completed}/${chapter.lessons.length}</span>
    </button>
  `;
}

function renderChapterProgressRow(chapter) {
  const completed = chapterCompletedCount(chapter);
  const percent = Math.round((completed / chapter.lessons.length) * 100);
  return `
    <button class="chapter-progress-row" data-action="chapter" data-chapter="${chapter.id}">
      <span>
        <strong>${chapter.title}</strong>
        <small>${chapter.subtitle}</small>
      </span>
      <span class="chapter-progress-meter">
        <span class="progress-track"><span class="progress-fill" style="width: ${percent}%"></span></span>
        <b class="latin">${completed}/${chapter.lessons.length}</b>
      </span>
    </button>
  `;
}

function renderUnitRow(lesson, index) {
  const locked = !isLessonUnlocked(index);
  const done = progress.completedLessons.includes(lesson.id);
  const icon = done ? "✓" : locked ? "·" : index + 1;
  return `
    <button class="unit-row ${locked ? "locked" : ""}" data-action="preview" data-lesson="${lesson.id}" ${locked ? "disabled" : ""}>
      <span class="unit-number">${icon}</span>
      <span>
        <strong class="unit-title">${lesson.unit}</strong>
        <p class="unit-meta">${lesson.questions.length} سوالات · ${lesson.xp} points</p>
      </span>
      <span class="status-dot ${done ? "done" : ""}"></span>
    </button>
  `;
}

function renderLessonPreview() {
  const lesson = getLesson(previewLessonId);
  const chapter = getChapterForLesson(lesson.id);
  const lessonIndex = getLessonIndexInChapter(lesson.id, chapter);
  const done = progress.completedLessons.includes(lesson.id);
  const score = progress.scores[lesson.id] || 0;
  const sampleWords = lesson.questions
    .filter((question) => isDutchText(question.prompt))
    .slice(0, 5)
    .map((question) => question.prompt);

  return `
    ${renderTopbar()}
    <section class="preview-panel">
      <button class="back-button" data-action="home">واپس</button>
      <div class="preview-hero">
        <span class="unit-number">${done ? "✓" : lessonIndex + 1}</span>
        <p class="eyeline">${chapter.title} · lesson ${lessonIndex + 1}</p>
        <h1>${lesson.title}</h1>
        <p class="lead">${lesson.description}</p>
      </div>
      <div class="summary-grid">
        <div class="summary-item">
          <span class="summary-value">${lesson.questions.length}</span>
          <span class="summary-label">سوالات</span>
        </div>
        <div class="summary-item">
          <span class="summary-value">${lesson.xp}</span>
          <span class="summary-label">points</span>
        </div>
        <div class="summary-item">
          <span class="summary-value">${score}</span>
          <span class="summary-label">best score</span>
        </div>
      </div>
      <div class="preview-words">
        ${sampleWords.length ? sampleWords.map((word) => `<span>${renderTextWithWordHelp(word, `preview-${lesson.id}`)}</span>`).join("") : "<span>Urdu practice</span>"}
      </div>
      <button class="primary-button" data-action="start" data-lesson="${lesson.id}">${done ? "دوبارہ practice کریں" : "سبق شروع کریں"}</button>
    </section>
  `;
}

function renderLesson() {
  const lesson = getLesson(activeLessonId);
  const questions = sessionQuestions.length ? sessionQuestions : lesson.questions;
  const question = questions[activeQuestionIndex];
  const percentage = Math.round((lessonProgressSteps / questions.length) * 100);
  const correctCount = sessionAnswers.filter((answer) => answer.correct).length;
  const wrongCount = sessionAnswers.filter((answer) => !answer.correct).length;
  const canSpeakPrompt = isDutchText(question.prompt);

  return `
    <section class="lesson-panel">
      <div class="lesson-header">
        <button class="back-button" data-action="home">واپس</button>
        <div class="lesson-header-main">
          <strong>${lesson.unit}</strong>
          <span>${activeQuestionIndex + 1}/${questions.length}</span>
        </div>
      </div>
      <div class="lesson-status">
        <div class="progress-track"><div class="progress-fill" style="width: ${percentage}%"></div></div>
        <div class="lesson-counters latin">
          <span class="counter-good">${correctCount}</span>
          <span class="counter-bad">${wrongCount}</span>
        </div>
      </div>
      <div class="prompt-card">
        <div class="prompt-label">${question.label}</div>
        <div class="prompt-row">
          ${canSpeakPrompt ? renderSpeakButton(question.prompt, "prompt") : ""}
          <div class="prompt-main ${question.type === "reverse" ? "" : "latin"}">${renderTextWithWordHelp(question.prompt, `prompt-${activeQuestionIndex}`)}</div>
        </div>
        ${question.note ? `<div class="prompt-note">${question.note}</div>` : ""}
      </div>
      <div class="choices">
        ${question.options.map((option, index) => renderChoice(option, question, index)).join("")}
      </div>
      <p class="feedback ${checked ? (selectedAnswer === question.answer ? "good" : "bad") : ""}">
        ${checked ? (selectedAnswer === question.answer ? `درست۔ ${question.explain}` : `یہ جواب درست نہیں۔ صحیح جواب: ${question.answer}۔ ${question.explain}`) : ""}
      </p>
      <button class="primary-button" data-action="${checked ? "next" : "check"}" ${selectedAnswer ? "" : "disabled"}>
        ${checked ? "اگلا سوال" : "جواب چیک کریں"}
      </button>
    </section>
  `;
}

function renderChoice(option, question, index) {
  let state = "";
  if (selectedAnswer === option) state = "selected";
  if (checked && option === question.answer) state = "correct";
  if (checked && selectedAnswer === option && option !== question.answer) state = "wrong";
  const choiceText = isDutchText(option) ? renderTextWithWordHelp(option, `choice-${activeQuestionIndex}-${index}`) : option;

  return `
    <div class="choice-wrap ${isDutchText(option) ? "has-sound" : ""}">
      <button class="choice-button ${state}" data-action="choose" data-answer="${escapeAttr(option)}">
        <span class="choice-text">${choiceText}</span>
        ${checked && selectedAnswer === question.answer && option === question.answer ? renderChoiceConfetti() : ""}
      </button>
      ${isDutchText(option) ? renderSpeakButton(option, "choice") : ""}
    </div>
  `;
}

function renderChoiceConfetti() {
  return `
    <span class="choice-confetti" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span>
    </span>
  `;
}

function renderTextWithWordHelp(text, context) {
  if (!isDutchText(text)) return escapeHtml(text);

  let wordIndex = 0;
  return text.split(/([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'-]*)/g).map((token) => {
    const meaning = wordHelpGlossary[normalizeWord(token)];
    if (!meaning) return escapeHtml(token);

    const id = `${context}-${wordIndex}-${normalizeWord(token)}`;
    wordIndex += 1;
    const open = activeWordHelp && activeWordHelp.id === id;
    return `
      <span class="word-help-wrap">
        <span
          class="word-help-token"
          role="button"
          tabindex="0"
          data-action="word-help"
          data-help-id="${escapeAttr(id)}"
          data-term="${escapeAttr(token)}"
          data-meaning="${escapeAttr(meaning)}"
        >${escapeHtml(token)}</span>
        ${open ? `<span class="word-help-popover">${escapeHtml(meaning)}</span>` : ""}
      </span>
    `;
  }).join("");
}

function renderSpeakButton(text, variant) {
  if (!progress.settings.pronunciation) return "";
  return `
    <span
      class="speak-button ${variant === "prompt" ? "prompt-speak" : ""}"
      role="button"
      tabindex="0"
      data-action="speak"
      data-speak="${escapeAttr(text)}"
      title="Dutch pronunciation"
      aria-label="Dutch pronunciation"
    >▶</span>
  `;
}

function renderComplete() {
  const result = lessonResult || { correct: 0, total: 1, xp: 0 };
  const percent = Math.round((result.correct / result.total) * 100);
  return `
    ${renderTopbar()}
    <section class="result-panel">
      <div class="celebration-dots" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <h1>سبق مکمل ہو گیا</h1>
      <div class="result-score">${percent}%</div>
      <p class="lead">آپ نے ${result.correct} میں سے ${result.total} جواب درست دیے۔ ${result.xp} points محفوظ ہو گئے۔</p>
      <button class="primary-button" data-action="home">Home پر جائیں</button>
    </section>
  `;
}

function renderLetters() {
  return `
    ${renderTopbar()}
    <section class="letters-panel">
      <div class="letters-heading">
        <button class="circle-action" data-action="home" title="Home">←</button>
        <div>
          <h1>Dutch حروف اور تلفظ</h1>
          <p class="lead">ہر حرف کے ساتھ ایک آسان مثال دی گئی ہے۔ speaker دبانے سے صرف حرف کا Dutch نام سنائی دے گا۔</p>
        </div>
      </div>
      <h2>حروف تہجی</h2>
      <div class="letters-grid">
        ${dutchLetters.map(renderLetterCard).join("")}
      </div>
    </section>
  `;
}

function renderLetterCard(item) {
  return `
    <article class="letter-card">
      <div class="letter-dot latin">${item.letter}</div>
      <div class="letter-info">
        <strong>${item.sound}</strong>
        <span>مثال: <b class="latin">${item.word}</b> — ${item.meaning}</span>
      </div>
      ${renderSpeakButton(item.speak, "choice")}
    </article>
  `;
}

function renderProgress() {
  const lessons = getCurrentLessons();
  return `
    ${renderTopbar()}
    <section class="progress-panel">
      <h1>آپ کی Progress</h1>
      <div class="summary-grid">
        <div class="summary-item">
          <span class="summary-value">${completedCount()}</span>
          <span class="summary-label">مکمل lessons</span>
        </div>
        <div class="summary-item">
          <span class="summary-value">${progress.totalXp}</span>
          <span class="summary-label">points</span>
        </div>
        <div class="summary-item">
          <span class="summary-value">${progress.mistakes.length}</span>
          <span class="summary-label">mistakes</span>
        </div>
      </div>
      <div class="unit-list">
        ${lessons.map(renderUnitRow).join("")}
      </div>
      <button class="secondary-button" data-action="reset">Progress reset کریں</button>
    </section>
  `;
}

function renderSettings() {
  return `
    ${renderTopbar()}
    <section class="settings-panel">
      <h1>Settings</h1>
      <p class="lead">یہ settings اسی browser میں محفوظ رہتی ہیں۔ ابھی accounts نہیں ہیں۔</p>
      <div class="settings-list">
        ${renderToggleRow("soundEffects", "Correct/wrong sound effects", "جواب چیک کرتے وقت چھوٹی آوازیں")}
        ${renderToggleRow("pronunciation", "Dutch pronunciation buttons", "speaker buttons اور word pronunciation")}
      </div>
      <button class="secondary-button danger-button" data-action="reset">Progress reset کریں</button>
    </section>
  `;
}

function renderToggleRow(key, title, subtitle) {
  const enabled = progress.settings[key];
  return `
    <button class="setting-row" data-action="toggle-setting" data-setting="${key}" aria-pressed="${enabled}">
      <span>
        <strong>${title}</strong>
        <small>${subtitle}</small>
      </span>
      <span class="toggle ${enabled ? "on" : ""}"><span></span></span>
    </button>
  `;
}

function renderBottomNav() {
  return `
    <nav class="bottom-nav" aria-label="Main navigation">
      <button class="nav-button ${screen === "home" ? "active" : ""}" data-action="home">Home</button>
      <button class="nav-button ${screen === "letters" ? "active" : ""}" data-action="letters">Letters</button>
      <button class="nav-button ${screen === "settings" ? "active" : ""}" data-action="settings">Settings</button>
    </nav>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", (event) => {
      const action = element.dataset.action;
      if (action === "word-help") {
        event.preventDefault();
        event.stopPropagation();
        toggleWordHelp(element.dataset.helpId, element.dataset.term, element.dataset.meaning);
      }
      if (action === "speak") {
        event.preventDefault();
        event.stopPropagation();
        speakDutch(element.dataset.speak);
      }
      if (action === "home") goHome();
      if (action === "progress") goProgress();
      if (action === "letters") goLetters();
      if (action === "settings") goSettings();
      if (action === "chapter") selectChapter(element.dataset.chapter);
      if (action === "preview") showLessonPreview(element.dataset.lesson);
      if (action === "start") startLesson(element.dataset.lesson);
      if (action === "choose") chooseAnswer(element.dataset.answer);
      if (action === "check") checkAnswer();
      if (action === "next") nextQuestion();
      if (action === "reset") resetProgress();
      if (action === "toggle-setting") toggleSetting(element.dataset.setting);
    });
  });

  document.querySelectorAll('[data-action="speak"]').forEach((element) => {
    element.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      speakDutch(element.dataset.speak);
    });
  });

  document.querySelectorAll('[data-action="word-help"]').forEach((element) => {
    element.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      toggleWordHelp(element.dataset.helpId, element.dataset.term, element.dataset.meaning);
    });
  });
}

function goHome() {
  activeWordHelp = null;
  screen = "home";
  render();
}

function goProgress() {
  activeWordHelp = null;
  screen = "progress";
  render();
}

function goLetters() {
  activeWordHelp = null;
  screen = "letters";
  render();
}

function goSettings() {
  activeWordHelp = null;
  screen = "settings";
  render();
}

function showLessonPreview(id) {
  const lesson = getLesson(id);
  const chapter = getChapterForLesson(lesson.id);
  selectedChapterId = chapter.id;
  previewLessonId = lesson.id;
  activeWordHelp = null;
  saveProgress({ ...progress, selectedChapterId: selectedChapterId, lastLessonId: lesson.id });
  screen = "preview";
  render();
}

function selectChapter(id) {
  const chapter = chapters.find((item) => item.id === id);
  if (!chapter) return;
  selectedChapterId = chapter.id;
  const nextLesson = getNextLessonForChapter(chapter);
  activeLessonId = nextLesson.id;
  previewLessonId = nextLesson.id;
  saveProgress({ ...progress, selectedChapterId: selectedChapterId, lastLessonId: activeLessonId });
  screen = "home";
  render();
}

function startLesson(id) {
  const chapter = getChapterForLesson(id);
  selectedChapterId = chapter.id;
  activeLessonId = id;
  activeQuestionIndex = 0;
  selectedAnswer = "";
  checked = false;
  lessonProgressSteps = 0;
  activeWordHelp = null;
  sessionAnswers = [];
  sessionQuestions = buildSessionQuestions(getLesson(id));
  saveProgress({ ...progress, selectedChapterId: selectedChapterId, lastLessonId: id });
  screen = "lesson";
  render();
}

function chooseAnswer(answer) {
  if (checked) return;
  activeWordHelp = null;
  selectedAnswer = answer;
  render();
}

function checkAnswer() {
  if (!selectedAnswer) return;
  activeWordHelp = null;
  const question = getActiveQuestion();
  const correct = selectedAnswer === question.answer;
  lessonProgressSteps = correct
    ? Math.max(lessonProgressSteps, activeQuestionIndex + 1)
    : Math.max(0, lessonProgressSteps - 1);
  sessionAnswers.push({
    prompt: question.prompt,
    answer: question.answer,
    selected: selectedAnswer,
    correct
  });
  playAnswerSound(correct ? "correct" : "wrong");
  checked = true;
  render();
}

function nextQuestion() {
  const lesson = getLesson(activeLessonId);
  const questions = sessionQuestions.length ? sessionQuestions : lesson.questions;
  if (activeQuestionIndex < questions.length - 1) {
    activeQuestionIndex += 1;
    selectedAnswer = "";
    checked = false;
    activeWordHelp = null;
    render();
    return;
  }

  completeLesson(lesson);
}

function completeLesson(lesson) {
  const questions = sessionQuestions.length ? sessionQuestions : lesson.questions;
  lessonProgressSteps = questions.length;
  const correct = sessionAnswers.filter((answer) => answer.correct).length;
  const alreadyCompleted = progress.completedLessons.includes(lesson.id);
  const earnedXp = alreadyCompleted ? 0 : lesson.xp;
  const practiceDays = progress.practiceDays.includes(todayKey())
    ? progress.practiceDays
    : [...progress.practiceDays, todayKey()];
  const newMistakes = sessionAnswers
    .filter((answer) => !answer.correct)
    .map((answer) => ({
      lessonId: lesson.id,
      prompt: answer.prompt,
      answer: answer.answer,
      selected: answer.selected,
      date: todayKey()
    }));

  lessonResult = {
    correct,
    total: questions.length,
    xp: earnedXp
  };

  saveProgress({
    ...progress,
    completedLessons: alreadyCompleted ? progress.completedLessons : [...progress.completedLessons, lesson.id],
    scores: {
      ...progress.scores,
      [lesson.id]: Math.max(progress.scores[lesson.id] || 0, correct)
    },
    totalXp: progress.totalXp + earnedXp,
    practiceDays,
    mistakes: [...progress.mistakes, ...newMistakes],
    lastLessonId: lesson.id
  });

  screen = "complete";
  render();
}

function resetProgress() {
  const confirmed = window.confirm("کیا آپ واقعی progress reset کرنا چاہتے ہیں؟");
  if (!confirmed) return;
  saveProgress({ ...defaultProgress });
  activeWordHelp = null;
  screen = "home";
  render();
}

function toggleSetting(key) {
  if (!(key in progress.settings)) return;
  saveProgress({
    ...progress,
    settings: {
      ...progress.settings,
      [key]: !progress.settings[key]
    }
  });
  render();
}

function toggleWordHelp(id, term, meaning) {
  activeWordHelp = activeWordHelp && activeWordHelp.id === id ? null : { id, term, meaning };
  render();
}

function escapeAttr(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function normalizeWord(value) {
  return value.toLowerCase().replace(/^'+|'+$/g, "");
}

function buildSessionQuestions(lesson) {
  return lesson.questions.map((question) => ({
    ...question,
    options: shuffleArray(question.options)
  }));
}

function getActiveQuestion() {
  const lesson = getLesson(activeLessonId);
  const questions = sessionQuestions.length ? sessionQuestions : lesson.questions;
  return questions[activeQuestionIndex];
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function isDutchText(value) {
  return /[A-Za-zÀ-ÿ]/.test(value) && !/[\u0600-\u06ff]/.test(value);
}

function speakDutch(text) {
  if (!progress.settings.pronunciation || !("speechSynthesis" in window) || !text) return;

  const utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const dutchVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("nl"));
  utterance.lang = "nl-NL";
  utterance.rate = text.length === 1 ? 0.72 : 0.88;
  utterance.pitch = 1;
  if (dutchVoice) utterance.voice = dutchVoice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioContext) audioContext = new AudioContextClass();
  return audioContext;
}

function playTone(context, frequency, startTime, duration, volume, type = "sine") {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.03);
}

function playAnswerSound(kind) {
  if (!progress.settings.soundEffects) return;
  const context = getAudioContext();
  if (!context) return;

  if (context.state === "suspended") {
    context.resume().catch(() => {});
  }

  const now = context.currentTime;
  if (kind === "correct") {
    playTone(context, 660, now, 0.11, 0.13, "triangle");
    playTone(context, 880, now + 0.1, 0.14, 0.12, "triangle");
    return;
  }

  playTone(context, 210, now, 0.16, 0.12, "sine");
  playTone(context, 165, now + 0.12, 0.18, 0.1, "sine");
}

render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
