let selectedSubject = "";
let selectedGrade = 0;
let currentQuestion = 0;
let score = 0;
let currentLanguage = "en";

const translations = {
  en: {
    name: "English",
    goBack: "Go Back",
    chooseSubject: "Choose a Subject",
    chooseGrade: "Choose Grade",
    grade: "Grade {grade}",
    backToGrades: "Back to Grades",
    questionsNotReady: "Questions are not ready yet",
    quizFinished: "Quiz Finished! 🎉",
    yourScore: "Your Score",
    tryAgain: "Try Again",
    anotherGrade: "Choose Another Grade",
    backToSubjects: "Back to Subjects",
    questionProgress: "Question {current} / {total}",
  },
  ar: {
    name: "العربية",
    goBack: "العودة",
    chooseSubject: "اختر مادة",
    chooseGrade: "اختر الصف",
    grade: "الصف {grade}",
    backToGrades: "العودة إلى الصفوف",
    questionsNotReady: "الأسئلة غير جاهزة بعد",
    quizFinished: "انتهى الاختبار! 🎉",
    yourScore: "نتيجتك",
    tryAgain: "أعد المحاولة",
    anotherGrade: "اختر صفًا آخر",
    backToSubjects: "العودة إلى المواد",
    questionProgress: "السؤال {current} / {total}",
  },
  de: {
    name: "Deutsch",
    goBack: "Zurück",
    chooseSubject: "Fach auswählen",
    chooseGrade: "Klasse auswählen",
    grade: "Klasse {grade}",
    backToGrades: "Zurück zur Klassenauswahl",
    questionsNotReady: "Fragen sind noch nicht verfügbar",
    quizFinished: "Quiz beendet! 🎉",
    yourScore: "Dein Ergebnis",
    tryAgain: "Erneut versuchen",
    anotherGrade: "Andere Klasse auswählen",
    backToSubjects: "Zurück zur Fächerauswahl",
    questionProgress: "Frage {current} / {total}",
  },
  fr: {
    name: "Français",
    goBack: "Retour",
    chooseSubject: "Choisissez une matière",
    chooseGrade: "Choisissez une classe",
    grade: "Classe {grade}",
    backToGrades: "Retour aux classes",
    questionsNotReady: "Les questions ne sont pas encore disponibles",
    quizFinished: "Quiz terminé ! 🎉",
    yourScore: "Votre score",
    tryAgain: "Réessayer",
    anotherGrade: "Choisir une autre classe",
    backToSubjects: "Retour aux matières",
    questionProgress: "Question {current} / {total}",
  },
  it: {
    name: "Italiano",
    goBack: "Indietro",
    chooseSubject: "Scegli una materia",
    chooseGrade: "Scegli la classe",
    grade: "Classe {grade}",
    backToGrades: "Torna alle classi",
    questionsNotReady: "Le domande non sono ancora disponibili",
    quizFinished: "Quiz completato! 🎉",
    yourScore: "Il tuo punteggio",
    tryAgain: "Riprova",
    anotherGrade: "Scegli un'altra classe",
    backToSubjects: "Torna alle materie",
    questionProgress: "Domanda {current} / {total}",
  },
  es: {
    name: "Español",
    goBack: "Volver",
    chooseSubject: "Elige una asignatura",
    chooseGrade: "Elige el curso",
    grade: "Curso {grade}",
    backToGrades: "Volver a los cursos",
    questionsNotReady: "Las preguntas aún no están disponibles",
    quizFinished: "¡Cuestionario terminado! 🎉",
    yourScore: "Tu puntuación",
    tryAgain: "Intentar de nuevo",
    anotherGrade: "Elegir otro curso",
    backToSubjects: "Volver a las asignaturas",
    questionProgress: "Pregunta {current} / {total}",
  },
};

const subjectTranslations = {
  ar: {
    math: "الرياضيات",
    science: "العلوم",
    english: "الإنجليزية",
    arabic: "العربية",
    german: "الألمانية",
    french: "الفرنسية",
    social: "الدراسات الاجتماعية",
    ict: "تكنولوجيا المعلومات",
  },
  de: {
    math: "Mathematik",
    science: "Naturwissenschaften",
    english: "Englisch",
    arabic: "Arabisch",
    german: "Deutsch",
    french: "Französisch",
    social: "Sozialkunde",
    ict: "Informatik",
  },
  fr: {
    math: "Mathématiques",
    science: "Sciences",
    english: "Anglais",
    arabic: "Arabe",
    german: "Allemand",
    french: "Français",
    social: "Sciences sociales",
    ict: "Informatique",
  },
  it: {
    math: "Matematica",
    science: "Scienze",
    english: "Inglese",
    arabic: "Arabo",
    german: "Tedesco",
    french: "Francese",
    social: "Scienze sociali",
    ict: "Informatica",
  },
  es: {
    math: "Matemáticas",
    science: "Ciencias",
    english: "Inglés",
    arabic: "Árabe",
    german: "Alemán",
    french: "Francés",
    social: "Ciencias sociales",
    ict: "Informática",
  },
};

function getText(key, values = {}) {
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, value),
    translations[currentLanguage][key],
  );
}

function getTranslatedSubject(subject) {
  const englishName = getSubjectName(subject);
  if (!englishName || currentLanguage === "en") {
    return englishName ?? subject;
  }
  return subjectTranslations[currentLanguage][englishName.toLowerCase()] ?? englishName;
}

function languageButtonMarkup() {
  return `<button id="language-toggle" class="language-toggle" type="button" onclick="cycleLanguage()" aria-label="Change language">${translations[currentLanguage].name}</button>`;
}

function goBackLinkMarkup() {
  return `<div id="quiz-button"><a class="go-back-button" data-i18n="goBack" href="./index.html">${getText("goBack")}</a></div>`;
}

function cycleLanguage() {
  const languages = Object.keys(translations);
  currentLanguage = languages[(languages.indexOf(currentLanguage) + 1) % languages.length];
  updateLanguage();
}

function updateLanguage() {
  document.documentElement.lang = currentLanguage;
  document.body.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key === "grade") {
      element.textContent = getText("grade", { grade: element.dataset.grade });
    } else if (key === "gradeHeading") {
      element.textContent = `${getText("chooseGrade")} - ${getTranslatedSubject(selectedSubject)}`;
    } else if (key === "questionHeading") {
      element.textContent = `${getTranslatedSubject(selectedSubject)} - ${getText("grade", { grade: selectedGrade })}`;
    } else if (key === "questionProgress") {
      element.textContent = getText("questionProgress", {
        current: element.dataset.current,
        total: element.dataset.total,
      });
    } else {
      element.textContent = getText(key);
    }
  });

  const languageButton = document.querySelector("#language-toggle");
  if (languageButton) {
    languageButton.textContent = translations[currentLanguage].name;
  }
}

const subjects = [
  { name: "Math", handler: "math" },
  { name: "Science", handler: "science" },
  { name: "English", handler: "english" },
  { name: "Arabic", handler: "arabic" },
  { name: "German", handler: "german" },
  { name: "French", handler: "french" },
  { name: "Social", handler: "social" },
  { name: "ICT", handler: "ict" },
];

function math() {
  showGrades("Math");
}
function selectSubject(subject) {
  showGrades(subject);
}

function science() {
  showGrades("Science");
}

function english() {
  showGrades("English");
}

function arabic() {
  showGrades("Arabic");
}

function german() {
  showGrades("German");
}

function french() {
  showGrades("French");
}

function social() {
  showGrades("Social");
}

function ict() {
  showGrades("ICT");
}

function showGrades(subject) {
  selectedSubject = subject.toLowerCase();

  document.body.innerHTML = `
    ${goBackLinkMarkup()}
    ${languageButtonMarkup()}
    <h1 data-i18n="gradeHeading">Choose Grade - ${subject}</h1>

    <div id="quiz-container">
      <div id="quiz-container2">
        <div id="quiz">
          <button class="grade-choice" data-i18n="grade" data-grade="1" onclick="selectGrade(1)">Grade 1</button>
        </div>
      </div>

      <div id="quiz-container2">
        <div id="quiz">
          <button class="grade-choice" data-i18n="grade" data-grade="2" onclick="selectGrade(2)">Grade 2</button>
        </div>
      </div>

      <div id="quiz-container2">
        <div id="quiz">
          <button class="grade-choice" data-i18n="grade" data-grade="3" onclick="selectGrade(3)">Grade 3</button>
        </div>
      </div>

      <div id="quiz-container2">
        <div id="quiz">
          <button class="grade-choice" data-i18n="grade" data-grade="4" onclick="selectGrade(4)">Grade 4</button>
        </div>
      </div>

      <div id="quiz-container2">
        <div id="quiz">
          <button class="grade-choice" data-i18n="grade" data-grade="5" onclick="selectGrade(5)">Grade 5</button>
        </div>
      </div>

      <div id="quiz-container2">
        <div id="quiz">
          <button class="grade-choice" data-i18n="grade" data-grade="6" onclick="selectGrade(6)">Grade 6</button>
        </div>
      </div>

      <div id="quiz-container2">
        <div id="quiz">
          <button class="grade-choice" data-i18n="grade" data-grade="7" onclick="selectGrade(7)">Grade 7</button>
        </div>
      </div>

      <div id="quiz-container2">
        <div id="quiz">
          <button class="grade-choice" data-i18n="grade" data-grade="8" onclick="selectGrade(8)">Grade 8</button>
        </div>
      </div>

    </div>
  `;
  updateLanguage();
}

function showSubjects() {
  selectedSubject = "";
  selectedGrade = 0;
  currentQuestion = 0;
  score = 0;

  document.body.innerHTML = `
    ${goBackLinkMarkup()}
    ${languageButtonMarkup()}
    <h1 data-i18n="chooseSubject">Choose a Subject</h1>
    <div id="quiz-container">
      ${subjects
        .map(
          ({ name, handler }) => `
        <div id="quiz-container2">
          <div id="quiz">
            <button id="${handler}" onclick="selectSubject('${name}')">${name}</button>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
  updateLanguage();
}

function startGradeSelection(subject) {
  const displayName = getSubjectName(subject);

  if (!displayName) {
    throw new Error(`Unknown subject: ${subject}`);
  }

  showGrades(displayName);
}

function getSubjectName(subject) {
  return subjects.find(
    (item) => item.name.toLowerCase() === subject.toLowerCase(),
  )?.name;
}

function selectGrade(grade) {
  startQuiz(grade);
}

const questions = {
  // =========================
  // MATH
  // =========================
  math: {
    1: [
      { question: "What is 2 + 3?", choices: ["4", "5", "6"], answer: "5" },
      { question: "What is 5 - 2?", choices: ["2", "3", "4"], answer: "3" },
      {
        question: "How many sides does a triangle have?",
        choices: ["2", "3", "4"],
        answer: "3",
      },
    ],

    2: [
      { question: "What is 7 + 8?", choices: ["14", "15", "16"], answer: "15" },
      { question: "What is 12 - 5?", choices: ["6", "7", "8"], answer: "7" },
      { question: "What is 3 × 4?", choices: ["10", "12", "14"], answer: "12" },
    ],

    3: [
      {
        question: "What is 25 + 17?",
        choices: ["40", "42", "44"],
        answer: "42",
      },
      { question: "What is 36 ÷ 6?", choices: ["5", "6", "7"], answer: "6" },
      { question: "What is 7 × 8?", choices: ["54", "56", "58"], answer: "56" },
    ],

    4: [
      {
        question: "What is 125 + 275?",
        choices: ["300", "400", "500"],
        answer: "400",
      },
      { question: "What is 9 × 7?", choices: ["56", "63", "72"], answer: "63" },
      {
        question: "What is 144 ÷ 12?",
        choices: ["10", "12", "14"],
        answer: "12",
      },
    ],

    5: [
      {
        question: "What is 3/4 as a decimal?",
        choices: ["0.25", "0.5", "0.75"],
        answer: "0.75",
      },
      {
        question: "What is 15% of 100?",
        choices: ["10", "15", "20"],
        answer: "15",
      },
      {
        question: "What is 12 × 12?",
        choices: ["124", "144", "154"],
        answer: "144",
      },
    ],

    6: [
      { question: "What is 2³?", choices: ["6", "8", "9"], answer: "8" },
      {
        question: "What is 25% of 80?",
        choices: ["15", "20", "25"],
        answer: "20",
      },
      { question: "What is -5 + 8?", choices: ["2", "3", "4"], answer: "3" },
    ],

    7: [
      { question: "Solve: 2x + 4 = 10", choices: ["2", "3", "4"], answer: "3" },
      { question: "What is √49?", choices: ["6", "7", "8"], answer: "7" },
      { question: "What is 5²?", choices: ["10", "20", "25"], answer: "25" },
    ],

    8: [
      { question: "Solve: 3x = 21", choices: ["6", "7", "8"], answer: "7" },
      {
        question: "What is the value of 2⁴?",
        choices: ["8", "16", "24"],
        answer: "16",
      },
      {
        question: "What is the slope of y = 2x + 3?",
        choices: ["2", "3", "5"],
        answer: "2",
      },
    ],
  },

  // =========================
  // SCIENCE
  // =========================
  science: {
    1: [
      {
        question: "Which is a living thing?",
        choices: ["Rock", "Cat", "Chair"],
        answer: "Cat",
      },
      {
        question: "What do plants need to grow?",
        choices: ["Sunlight", "Plastic", "Glass"],
        answer: "Sunlight",
      },
      {
        question: "Which animal can fly?",
        choices: ["Bird", "Dog", "Fish"],
        answer: "Bird",
      },
    ],

    2: [
      {
        question: "Which organ helps us see?",
        choices: ["Eye", "Ear", "Hand"],
        answer: "Eye",
      },
      {
        question: "What do humans breathe?",
        choices: ["Oxygen", "Sand", "Water"],
        answer: "Oxygen",
      },
      {
        question: "Which is a source of light?",
        choices: ["Sun", "Rock", "Chair"],
        answer: "Sun",
      },
    ],

    3: [
      {
        question: "Which planet do we live on?",
        choices: ["Mars", "Earth", "Venus"],
        answer: "Earth",
      },
      {
        question: "What do plants use to make food?",
        choices: ["Sunlight", "Plastic", "Metal"],
        answer: "Sunlight",
      },
      {
        question: "Which state of matter is water?",
        choices: ["Liquid", "Solid", "Gas"],
        answer: "Liquid",
      },
    ],

    4: [
      {
        question: "Which organ pumps blood?",
        choices: ["Heart", "Lung", "Brain"],
        answer: "Heart",
      },
      {
        question: "What force pulls objects toward Earth?",
        choices: ["Gravity", "Light", "Sound"],
        answer: "Gravity",
      },
      {
        question: "Which gas do humans need to breathe?",
        choices: ["Oxygen", "Helium", "Hydrogen"],
        answer: "Oxygen",
      },
    ],

    5: [
      {
        question: "What is the center of an atom called?",
        choices: ["Nucleus", "Cell", "Shell"],
        answer: "Nucleus",
      },
      {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Jupiter", "Earth"],
        answer: "Mars",
      },
      {
        question: "What process do plants use to make food?",
        choices: ["Photosynthesis", "Digestion", "Evaporation"],
        answer: "Photosynthesis",
      },
    ],

    6: [
      {
        question: "What is the basic unit of life?",
        choices: ["Cell", "Atom", "Organ"],
        answer: "Cell",
      },
      {
        question: "Which gas do plants take in?",
        choices: ["Carbon dioxide", "Oxygen", "Helium"],
        answer: "Carbon dioxide",
      },
      {
        question: "What is H₂O?",
        choices: ["Water", "Oxygen", "Hydrogen"],
        answer: "Water",
      },
    ],

    7: [
      {
        question: "Which organelle produces most cellular energy?",
        choices: ["Mitochondria", "Nucleus", "Ribosome"],
        answer: "Mitochondria",
      },
      {
        question: "What is the pH of pure water?",
        choices: ["5", "7", "9"],
        answer: "7",
      },
      {
        question: "Which force opposes motion between surfaces?",
        choices: ["Friction", "Gravity", "Magnetism"],
        answer: "Friction",
      },
    ],

    8: [
      {
        question: "What carries genetic information?",
        choices: ["DNA", "Water", "Glucose"],
        answer: "DNA",
      },
      {
        question: "What is the chemical symbol for sodium?",
        choices: ["Na", "So", "S"],
        answer: "Na",
      },
      {
        question: "What type of energy is stored in food?",
        choices: ["Chemical", "Sound", "Light"],
        answer: "Chemical",
      },
    ],
  },

  // =========================
  // ENGLISH
  // =========================
  english: {
    1: [
      {
        question: "Which word is an animal?",
        choices: ["Cat", "Table", "Book"],
        answer: "Cat",
      },
      {
        question: "What is the opposite of big?",
        choices: ["Small", "Tall", "Fast"],
        answer: "Small",
      },
      {
        question: "Which word is a color?",
        choices: ["Red", "Run", "Dog"],
        answer: "Red",
      },
    ],

    2: [
      {
        question: "What is the plural of cat?",
        choices: ["Cats", "Cates", "Cat"],
        answer: "Cats",
      },
      {
        question: "Which word is a verb?",
        choices: ["Run", "Blue", "Table"],
        answer: "Run",
      },
      {
        question: "What is the opposite of hot?",
        choices: ["Cold", "Big", "Fast"],
        answer: "Cold",
      },
    ],

    3: [
      {
        question: "Which word is a noun?",
        choices: ["School", "Run", "Quickly"],
        answer: "School",
      },
      {
        question: "What is the past tense of go?",
        choices: ["Goed", "Went", "Going"],
        answer: "Went",
      },
      {
        question: "Choose the correct word: She ___ happy.",
        choices: ["is", "are", "am"],
        answer: "is",
      },
    ],

    4: [
      {
        question: "What is the past tense of eat?",
        choices: ["Ate", "Eated", "Eating"],
        answer: "Ate",
      },
      {
        question: "Which word is an adjective?",
        choices: ["Beautiful", "Run", "Quickly"],
        answer: "Beautiful",
      },
      {
        question: "Choose: They ___ playing.",
        choices: ["is", "are", "am"],
        answer: "are",
      },
    ],

    5: [
      {
        question: "Which is a synonym for happy?",
        choices: ["Joyful", "Angry", "Sad"],
        answer: "Joyful",
      },
      {
        question: "Which is a pronoun?",
        choices: ["They", "School", "Run"],
        answer: "They",
      },
      {
        question: "What is the opposite of ancient?",
        choices: ["Modern", "Old", "Past"],
        answer: "Modern",
      },
    ],

    6: [
      {
        question: "Which sentence is correct?",
        choices: ["He goes to school.", "He go school.", "He going school."],
        answer: "He goes to school.",
      },
      {
        question: "What is a synonym for fast?",
        choices: ["Quick", "Slow", "Late"],
        answer: "Quick",
      },
      {
        question: "Which word is an adverb?",
        choices: ["Quickly", "Quick", "Run"],
        answer: "Quickly",
      },
    ],

    7: [
      {
        question: "Which is the correct conditional?",
        choices: [
          "If I study, I will learn.",
          "If I studied, I learn.",
          "If study, I learned.",
        ],
        answer: "If I study, I will learn.",
      },
      {
        question: "What is the opposite of generous?",
        choices: ["Selfish", "Kind", "Helpful"],
        answer: "Selfish",
      },
      {
        question: "Which is a conjunction?",
        choices: ["Although", "Quickly", "Beautiful"],
        answer: "Although",
      },
    ],

    8: [
      {
        question: "What is a metaphor?",
        choices: ["A direct comparison", "A question", "A command"],
        answer: "A direct comparison",
      },
      {
        question: "Which is passive voice?",
        choices: [
          "The ball was kicked.",
          "Ali kicked the ball.",
          "Ali kicks the ball.",
        ],
        answer: "The ball was kicked.",
      },
      {
        question: "What is the synonym of essential?",
        choices: ["Necessary", "Optional", "Unimportant"],
        answer: "Necessary",
      },
    ],
  },

  // =========================
  // ARABIC
  // =========================
  arabic: {
    1: [
      {
        question: "ما هو أول حرف في اللغة العربية؟",
        choices: ["أ", "ب", "ت"],
        answer: "أ",
      },
      {
        question: "أي كلمة تدل على حيوان؟",
        choices: ["قطة", "كتاب", "قلم"],
        answer: "قطة",
      },
      {
        question: "ما عكس كلمة كبير؟",
        choices: ["طويل", "صغير", "سريع"],
        answer: "صغير",
      },
    ],

    2: [
      {
        question: "ما جمع كلمة كتاب؟",
        choices: ["كتب", "كاتب", "مكتب"],
        answer: "كتب",
      },
      {
        question: "ما مفرد كلمة مدارس؟",
        choices: ["مدرسة", "مدرس", "دراسة"],
        answer: "مدرسة",
      },
      {
        question: "أي كلمة فعل؟",
        choices: ["يكتب", "كتاب", "قلم"],
        answer: "يكتب",
      },
    ],

    3: [
      {
        question: "ما ضد كلمة سريع؟",
        choices: ["بطيء", "كبير", "قوي"],
        answer: "بطيء",
      },
      {
        question: "ما جمع كلمة ولد؟",
        choices: ["أولاد", "ولدات", "والد"],
        answer: "أولاد",
      },
      {
        question: "أي كلمة اسم؟",
        choices: ["مدرسة", "يكتب", "اذهب"],
        answer: "مدرسة",
      },
    ],

    4: [
      {
        question: "ما نوع كلمة 'يكتب'؟",
        choices: ["فعل", "اسم", "حرف"],
        answer: "فعل",
      },
      {
        question: "ما مفرد كلمة أشجار؟",
        choices: ["شجرة", "شجير", "شجرات"],
        answer: "شجرة",
      },
      {
        question: "ما عكس كلمة جميل؟",
        choices: ["قبيح", "طويل", "سعيد"],
        answer: "قبيح",
      },
    ],

    5: [
      {
        question: "ما نوع الجملة 'الولد مجتهد'؟",
        choices: ["جملة اسمية", "جملة فعلية", "جملة استفهامية"],
        answer: "جملة اسمية",
      },
      {
        question: "ما جمع كلمة مهندس؟",
        choices: ["مهندسون", "مهندسات", "هندسة"],
        answer: "مهندسون",
      },
      {
        question: "ما مرادف كلمة سعيد؟",
        choices: ["فرح", "حزين", "غاضب"],
        answer: "فرح",
      },
    ],

    6: [
      {
        question: "ما الفاعل في جملة 'كتب الطالب الدرس'؟",
        choices: ["الطالب", "كتب", "الدرس"],
        answer: "الطالب",
      },
      {
        question: "ما المفعول به في الجملة نفسها؟",
        choices: ["الطالب", "كتب", "الدرس"],
        answer: "الدرس",
      },
      {
        question: "ما ضد كلمة شجاع؟",
        choices: ["جبان", "قوي", "كريم"],
        answer: "جبان",
      },
    ],

    7: [
      {
        question: "ما نوع كلمة 'في'؟",
        choices: ["حرف جر", "فعل", "اسم"],
        answer: "حرف جر",
      },
      {
        question: "ما إعراب كلمة 'الطالب' في 'جاء الطالب'؟",
        choices: ["فاعل", "مفعول به", "مبتدأ"],
        answer: "فاعل",
      },
      {
        question: "ما مرادف كلمة شجاع؟",
        choices: ["جريء", "جبان", "ضعيف"],
        answer: "جريء",
      },
    ],

    8: [
      {
        question: "ما نوع الأسلوب في 'لا تهمل واجبك'؟",
        choices: ["نهي", "أمر", "استفهام"],
        answer: "نهي",
      },
      {
        question: "ما المفعول به في 'قرأ أحمد الكتاب'؟",
        choices: ["أحمد", "قرأ", "الكتاب"],
        answer: "الكتاب",
      },
      {
        question: "ما ضد كلمة النجاح؟",
        choices: ["الفشل", "التقدم", "التفوق"],
        answer: "الفشل",
      },
    ],
  },

  // =========================
  // GERMAN
  // =========================
  german: {
    1: [
      {
        question: "Was bedeutet 'Hallo'?",
        choices: ["Hello", "Goodbye", "Thanks"],
        answer: "Hello",
      },
      {
        question: "Was bedeutet 'Katze'?",
        choices: ["Cat", "Dog", "Bird"],
        answer: "Cat",
      },
      {
        question: "Was bedeutet 'Danke'?",
        choices: ["Hello", "Thank you", "Goodbye"],
        answer: "Thank you",
      },
    ],

    2: [
      {
        question: "Was bedeutet 'Haus'?",
        choices: ["House", "Car", "School"],
        answer: "House",
      },
      {
        question: "Was bedeutet 'Hund'?",
        choices: ["Cat", "Dog", "Fish"],
        answer: "Dog",
      },
      {
        question: "Welche Zahl ist 'zwei'?",
        choices: ["1", "2", "3"],
        answer: "2",
      },
    ],

    3: [
      {
        question: "Was bedeutet 'Schule'?",
        choices: ["School", "House", "Book"],
        answer: "School",
      },
      {
        question: "Wie sagt man 'Good morning'?",
        choices: ["Guten Morgen", "Gute Nacht", "Danke"],
        answer: "Guten Morgen",
      },
      {
        question: "Was bedeutet 'Buch'?",
        choices: ["Book", "Pen", "Chair"],
        answer: "Book",
      },
    ],

    4: [
      {
        question: "Was bedeutet 'Freund'?",
        choices: ["Friend", "Teacher", "Brother"],
        answer: "Friend",
      },
      {
        question: "Was bedeutet 'Wasser'?",
        choices: ["Water", "Milk", "Juice"],
        answer: "Water",
      },
      {
        question: "Welche Zahl ist 'zehn'?",
        choices: ["8", "9", "10"],
        answer: "10",
      },
    ],

    5: [
      {
        question: "Was bedeutet 'Ich bin müde'?",
        choices: ["I am tired", "I am happy", "I am hungry"],
        answer: "I am tired",
      },
      {
        question: "Was bedeutet 'Apfel'?",
        choices: ["Apple", "Orange", "Banana"],
        answer: "Apple",
      },
      {
        question: "Was bedeutet 'klein'?",
        choices: ["Small", "Big", "Fast"],
        answer: "Small",
      },
    ],

    6: [
      {
        question: "Was ist die richtige Form? 'Ich ___ Deutsch.'",
        choices: ["spreche", "sprich", "sprechen"],
        answer: "spreche",
      },
      {
        question: "Was bedeutet 'groß'?",
        choices: ["Big", "Small", "Cold"],
        answer: "Big",
      },
      {
        question: "Was bedeutet 'Montag'?",
        choices: ["Monday", "Sunday", "Friday"],
        answer: "Monday",
      },
    ],

    7: [
      {
        question: "Was ist das Gegenteil von 'alt'?",
        choices: ["jung", "klein", "lang"],
        answer: "jung",
      },
      {
        question: "Was bedeutet 'weil'?",
        choices: ["because", "but", "and"],
        answer: "because",
      },
      {
        question: "Was bedeutet 'schnell'?",
        choices: ["Fast", "Slow", "Heavy"],
        answer: "Fast",
      },
    ],

    8: [
      {
        question: "Was bedeutet 'Ich habe keine Zeit'?",
        choices: ["I have no time", "I have a car", "I am happy"],
        answer: "I have no time",
      },
      {
        question: "Was ist das Gegenteil von 'schwer'?",
        choices: ["leicht", "groß", "lang"],
        answer: "leicht",
      },
      {
        question: "Was bedeutet 'obwohl'?",
        choices: ["although", "because", "before"],
        answer: "although",
      },
    ],
  },

  // =========================
  // FRENCH
  // =========================
  french: {
    1: [
      {
        question: "Que signifie 'Bonjour' ?",
        choices: ["Hello", "Goodbye", "Thank you"],
        answer: "Hello",
      },
      {
        question: "Que signifie 'Chat' ?",
        choices: ["Cat", "Dog", "Bird"],
        answer: "Cat",
      },
      {
        question: "Que signifie 'Merci' ?",
        choices: ["Hello", "Thank you", "Goodbye"],
        answer: "Thank you",
      },
    ],

    2: [
      {
        question: "Que signifie 'Maison' ?",
        choices: ["House", "School", "Car"],
        answer: "House",
      },
      {
        question: "Que signifie 'Chien' ?",
        choices: ["Cat", "Dog", "Fish"],
        answer: "Dog",
      },
      {
        question: "Quel nombre est 'deux' ?",
        choices: ["1", "2", "3"],
        answer: "2",
      },
    ],

    3: [
      {
        question: "Que signifie 'École' ?",
        choices: ["School", "House", "Book"],
        answer: "School",
      },
      {
        question: "Comment dit-on 'Good morning' ?",
        choices: ["Bonjour", "Bonne nuit", "Merci"],
        answer: "Bonjour",
      },
      {
        question: "Que signifie 'Livre' ?",
        choices: ["Book", "Pen", "Chair"],
        answer: "Book",
      },
    ],

    4: [
      {
        question: "Que signifie 'Ami' ?",
        choices: ["Friend", "Teacher", "Brother"],
        answer: "Friend",
      },
      {
        question: "Que signifie 'Eau' ?",
        choices: ["Water", "Milk", "Juice"],
        answer: "Water",
      },
      {
        question: "Quel nombre est 'dix' ?",
        choices: ["8", "9", "10"],
        answer: "10",
      },
    ],

    5: [
      {
        question: "Que signifie 'Je suis fatigué' ?",
        choices: ["I am tired", "I am happy", "I am hungry"],
        answer: "I am tired",
      },
      {
        question: "Que signifie 'Pomme' ?",
        choices: ["Apple", "Orange", "Banana"],
        answer: "Apple",
      },
      {
        question: "Que signifie 'Petit' ?",
        choices: ["Small", "Big", "Fast"],
        answer: "Small",
      },
    ],

    6: [
      {
        question: "Choisissez : Je ___ français.",
        choices: ["parle", "parles", "parler"],
        answer: "parle",
      },
      {
        question: "Que signifie 'Grand' ?",
        choices: ["Big", "Small", "Cold"],
        answer: "Big",
      },
      {
        question: "Que signifie 'Lundi' ?",
        choices: ["Monday", "Sunday", "Friday"],
        answer: "Monday",
      },
    ],

    7: [
      {
        question: "Quel est le contraire de 'vieux' ?",
        choices: ["jeune", "petit", "long"],
        answer: "jeune",
      },
      {
        question: "Que signifie 'parce que' ?",
        choices: ["because", "but", "and"],
        answer: "because",
      },
      {
        question: "Que signifie 'rapide' ?",
        choices: ["Fast", "Slow", "Heavy"],
        answer: "Fast",
      },
    ],

    8: [
      {
        question: "Que signifie 'Je n'ai pas le temps' ?",
        choices: ["I have no time", "I have a car", "I am happy"],
        answer: "I have no time",
      },
      {
        question: "Quel est le contraire de 'difficile' ?",
        choices: ["facile", "grand", "long"],
        answer: "facile",
      },
      {
        question: "Que signifie 'bien que' ?",
        choices: ["although", "because", "before"],
        answer: "although",
      },
    ],
  },

  // =========================
  // SOCIAL STUDIES
  // =========================
  social: {
    1: [
      {
        question: "Where do you live?",
        choices: ["Home", "Moon", "Ocean"],
        answer: "Home",
      },
      {
        question: "Who teaches students?",
        choices: ["Teacher", "Pilot", "Doctor"],
        answer: "Teacher",
      },
      {
        question: "What do we use to tell time?",
        choices: ["Clock", "Chair", "Book"],
        answer: "Clock",
      },
    ],

    2: [
      {
        question: "What is a map used for?",
        choices: ["Finding places", "Cooking", "Sleeping"],
        answer: "Finding places",
      },
      {
        question: "Who helps sick people?",
        choices: ["Doctor", "Farmer", "Driver"],
        answer: "Doctor",
      },
      {
        question: "What is a family?",
        choices: ["People related to each other", "A building", "A road"],
        answer: "People related to each other",
      },
    ],

    3: [
      {
        question: "What is the capital of Egypt?",
        choices: ["Cairo", "Alexandria", "Giza"],
        answer: "Cairo",
      },
      {
        question: "Which is a continent?",
        choices: ["Africa", "Nile", "Cairo"],
        answer: "Africa",
      },
      {
        question: "What is a community?",
        choices: [
          "A group of people living together",
          "A single house",
          "A river",
        ],
        answer: "A group of people living together",
      },
    ],

    4: [
      {
        question: "Which river is famous in Egypt?",
        choices: ["Nile", "Amazon", "Thames"],
        answer: "Nile",
      },
      {
        question: "What is a desert?",
        choices: ["A very dry area", "A large lake", "A forest"],
        answer: "A very dry area",
      },
      {
        question: "Which direction is opposite north?",
        choices: ["South", "East", "West"],
        answer: "South",
      },
    ],

    5: [
      {
        question: "Which ancient civilization built the pyramids of Giza?",
        choices: ["Ancient Egyptians", "Romans", "Vikings"],
        answer: "Ancient Egyptians",
      },
      {
        question: "What is democracy?",
        choices: ["Government by the people", "A type of food", "A mountain"],
        answer: "Government by the people",
      },
      {
        question: "Which is an ocean?",
        choices: ["Atlantic", "Nile", "Sahara"],
        answer: "Atlantic",
      },
    ],

    6: [
      {
        question: "What is a civilization?",
        choices: [
          "An organized human society",
          "A type of animal",
          "A weather event",
        ],
        answer: "An organized human society",
      },
      {
        question: "Which ancient civilization used hieroglyphics?",
        choices: ["Egyptians", "Vikings", "Aztecs"],
        answer: "Egyptians",
      },
      {
        question: "What is a natural resource?",
        choices: ["Water", "Computer", "Car"],
        answer: "Water",
      },
    ],

    7: [
      {
        question: "What is a primary source?",
        choices: [
          "Original historical evidence",
          "A modern summary",
          "A fictional story",
        ],
        answer: "Original historical evidence",
      },
      {
        question: "What is migration?",
        choices: ["Movement of people", "Building a house", "Growing plants"],
        answer: "Movement of people",
      },
      {
        question: "What is an economy?",
        choices: [
          "System of producing and exchanging goods",
          "A mountain",
          "A language",
        ],
        answer: "System of producing and exchanging goods",
      },
    ],

    8: [
      {
        question: "What is globalization?",
        choices: [
          "Increasing worldwide connection",
          "A type of weather",
          "A local festival",
        ],
        answer: "Increasing worldwide connection",
      },
      {
        question: "What is a constitution?",
        choices: ["A set of fundamental laws", "A map", "A newspaper"],
        answer: "A set of fundamental laws",
      },
      {
        question: "What is an empire?",
        choices: [
          "A group of territories ruled by one authority",
          "A small village",
          "A river",
        ],
        answer: "A group of territories ruled by one authority",
      },
    ],
  },

  // =========================
  // ICT
  // =========================
  ict: {
    1: [
      {
        question: "Which device shows pictures?",
        choices: ["Monitor", "Keyboard", "Mouse"],
        answer: "Monitor",
      },
      {
        question: "Which device is used to type?",
        choices: ["Keyboard", "Speaker", "Monitor"],
        answer: "Keyboard",
      },
      {
        question: "Which device moves the pointer?",
        choices: ["Mouse", "Printer", "Speaker"],
        answer: "Mouse",
      },
    ],

    2: [
      {
        question: "What does a computer use to store files?",
        choices: ["Storage", "Monitor", "Speaker"],
        answer: "Storage",
      },
      {
        question: "Which device prints documents?",
        choices: ["Printer", "Mouse", "Keyboard"],
        answer: "Printer",
      },
      {
        question: "Which device produces sound?",
        choices: ["Speaker", "Monitor", "Scanner"],
        answer: "Speaker",
      },
    ],

    3: [
      {
        question: "What is software?",
        choices: ["Computer programs", "A keyboard", "A cable"],
        answer: "Computer programs",
      },
      {
        question: "What is hardware?",
        choices: ["Physical computer parts", "A website", "A password"],
        answer: "Physical computer parts",
      },
      {
        question: "What does a browser open?",
        choices: ["Websites", "Doors", "Books"],
        answer: "Websites",
      },
    ],

    4: [
      {
        question: "What is the Internet?",
        choices: ["A worldwide network", "A computer mouse", "A printer"],
        answer: "A worldwide network",
      },
      {
        question: "What is an email used for?",
        choices: ["Sending messages", "Cooking", "Printing money"],
        answer: "Sending messages",
      },
      {
        question: "What is a password?",
        choices: ["A secret security code", "A computer screen", "A printer"],
        answer: "A secret security code",
      },
    ],

    5: [
      {
        question: "What does CPU stand for?",
        choices: [
          "Central Processing Unit",
          "Computer Power Unit",
          "Central Program User",
        ],
        answer: "Central Processing Unit",
      },
      {
        question: "What is a file?",
        choices: ["Stored digital information", "A keyboard", "A monitor"],
        answer: "Stored digital information",
      },
      {
        question: "What is a search engine?",
        choices: [
          "A tool for finding information online",
          "A printer",
          "A keyboard",
        ],
        answer: "A tool for finding information online",
      },
    ],

    6: [
      {
        question: "What is an operating system?",
        choices: [
          "Software that manages a computer",
          "A keyboard",
          "A website",
        ],
        answer: "Software that manages a computer",
      },
      {
        question: "What is cloud storage?",
        choices: ["Online file storage", "A physical box", "A printer"],
        answer: "Online file storage",
      },
      {
        question: "What does URL mean?",
        choices: [
          "Uniform Resource Locator",
          "Universal Reading List",
          "User Router Link",
        ],
        answer: "Uniform Resource Locator",
      },
    ],

    7: [
      {
        question: "What is HTML used for?",
        choices: [
          "Creating web page structure",
          "Editing photos only",
          "Playing music",
        ],
        answer: "Creating web page structure",
      },
      {
        question: "What is a computer virus?",
        choices: ["Malicious software", "A keyboard", "A website"],
        answer: "Malicious software",
      },
      {
        question: "What is a database?",
        choices: ["Organized collection of data", "A monitor", "A mouse"],
        answer: "Organized collection of data",
      },
    ],

    8: [
      {
        question: "What is JavaScript commonly used for?",
        choices: [
          "Adding interactivity to websites",
          "Printing documents",
          "Cleaning computers",
        ],
        answer: "Adding interactivity to websites",
      },
      {
        question: "What is cybersecurity?",
        choices: [
          "Protecting systems and data",
          "Making websites colorful",
          "Printing files",
        ],
        answer: "Protecting systems and data",
      },
      {
        question: "What is an algorithm?",
        choices: [
          "A step-by-step procedure",
          "A computer screen",
          "A type of cable",
        ],
        answer: "A step-by-step procedure",
      },
    ],
  },
};

const additionalSubjectNames = {
  math: "Math",
  science: "Science",
  english: "English",
  arabic: "Arabic",
  german: "German",
  french: "French",
  social: "Social",
  ict: "ICT",
};

for (const [subject, grades] of Object.entries(questions)) {
  const additionalGrades = additionalQuestions[additionalSubjectNames[subject]];
  if (!additionalGrades) {
    throw new Error(`Missing additional questions for ${subject}.`);
  }

  for (const [grade, gradeQuestions] of Object.entries(grades)) {
    const additions = additionalGrades[grade];
    if (!Array.isArray(additions) || additions.length !== 7) {
      throw new Error(
        `Expected 7 additional questions for ${subject}, grade ${grade}.`,
      );
    }

    gradeQuestions.push(...additions);
  }
}

// ===============================
// START QUIZ
// ===============================

function startQuiz(grade) {
  selectedGrade = grade;
  currentQuestion = 0;
  score = 0;

  const quizQuestions = questions[selectedSubject]?.[selectedGrade];

  if (!Array.isArray(quizQuestions) || quizQuestions.length !== 10) {
    document.body.innerHTML = `
      ${languageButtonMarkup()}
      <div id="quiz-container">
        <div id="quiz-container2">
          <div id="quiz">

            <h1 data-i18n="questionsNotReady">Questions are not ready yet</h1>

            <p>
              ${getSubjectName(selectedSubject)} - Grade ${selectedGrade} must have 10 questions.
            </p>

            <button data-i18n="backToGrades" onclick="startGradeSelection('${selectedSubject}')">
              Back to Grades
            </button>

          </div>
        </div>
      </div>
    `;

    updateLanguage();
    return;
  }

  // Start directly with question 1
  showQuestion();
}

// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {
  const quizQuestions = questions[selectedSubject][selectedGrade];

  const question = quizQuestions[currentQuestion];

  document.body.innerHTML = `

    <h1 data-i18n="questionHeading">
      ${getSubjectName(selectedSubject)} - Grade ${selectedGrade}
    </h1>

    <div id="quiz-container" class="question-layout">

      <div id="quiz-container2">

        <div id="quiz">

          <h2>
            ${question.question}
          </h2>

          <div id="answers">

            ${question.choices
              .map(
                (choice, index) => `

              <button
                class="answer"
                onclick="checkAnswer(${index})"
              >
                ${choice}
              </button>

            `,
              )
              .join("")}

          </div>

          <p data-i18n="questionProgress" data-current="${currentQuestion + 1}" data-total="10">
            Question ${currentQuestion + 1} / 10
          </p>

        </div>

      </div>

    </div>
  `;
  updateLanguage();
}

// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(choiceIndex) {
  const quizQuestions = questions[selectedSubject][selectedGrade];

  const question = quizQuestions[currentQuestion];

  const selectedAnswer = question.choices[choiceIndex];

  // Stop multiple clicks
  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;
  });

  // Check answer
  if (selectedAnswer === question.answer) {
    score++;
  }

  // Next question
  currentQuestion++;

  if (currentQuestion < 10) {
    showQuestion();
  } else {
    showResult();
  }
}

// ===============================
// FINAL RESULT
// ===============================

function showResult() {
  const percentage = Math.round((score / 10) * 100);

  document.body.innerHTML = `

    <div id="quiz-container" class="question-layout result-layout">

      <div id="quiz-container2" class="result-card">

        <div id="quiz">

          <h1 class="result-content" data-i18n="quizFinished">Quiz Finished! 🎉</h1>

          <h2 class="result-content" data-i18n="yourScore">Your Score</h2>

          <h1 class="final-score result-content">
            ${score} / 10
          </h1>

          <h2 class="result-content">${percentage}%</h2>

          <p class="result-content">
            ${getResultMessage(score)}
          </p>

          <button class="result-content" onclick="startQuiz(${selectedGrade})">
            Try Again
          </button>

          <button class="result-content" data-i18n="anotherGrade"
            onclick="startGradeSelection('${selectedSubject}')"
          >
            Choose Another Grade
          </button>

          <button class="result-content back-to-subjects" data-i18n="backToSubjects" onclick="showSubjects()">
            Back to Subjects
          </button>

        </div>

      </div>

    </div>
  `;
  updateLanguage();
}

// ===============================
// RESULT MESSAGE
// ===============================

function getResultMessage(score) {
  if (score === 10) {
    return "Perfect! 🌟";
  }

  if (score >= 8) {
    return "Excellent! 🎉";
  }

  if (score >= 6) {
    return "Good Job! 👍";
  }

  if (score >= 4) {
    return "Keep Practicing! 💪";
  }

  return "Keep Learning! 📚";
}
