const additionalQuestions = {
  Math: {
    1: [
      { question: "What is 4 + 2?", choices: ["5", "6", "7"], answer: "6" },
      { question: "What is 8 - 3?", choices: ["4", "5", "6"], answer: "5" },
      {
        question: "How many sides does a square have?",
        choices: ["3", "4", "5"],
        answer: "4",
      },
      {
        question: "Which number comes after 14?",
        choices: ["13", "15", "16"],
        answer: "15",
      },
      { question: "What is 1 + 7?", choices: ["7", "8", "9"], answer: "8" },
      {
        question: "Which shape is round?",
        choices: ["Circle", "Triangle", "Square"],
        answer: "Circle",
      },
      {
        question: "How many fingers are on one hand?",
        choices: ["4", "5", "6"],
        answer: "5",
      },
    ],
    2: [
      { question: "What is 9 + 6?", choices: ["14", "15", "16"], answer: "15" },
      { question: "What is 18 - 9?", choices: ["8", "9", "10"], answer: "9" },
      { question: "What is 5 × 2?", choices: ["8", "10", "12"], answer: "10" },
      {
        question: "How many sides do two triangles have altogether?",
        choices: ["5", "6", "7"],
        answer: "6",
      },
      {
        question: "What number has 3 tens and 4 ones?",
        choices: ["34", "43", "30"],
        answer: "34",
      },
      {
        question: "Which is the greatest number?",
        choices: ["27", "72", "52"],
        answer: "72",
      },
      {
        question: "What is 20 + 15?",
        choices: ["25", "35", "45"],
        answer: "35",
      },
    ],
    3: [
      {
        question: "What is 48 + 26?",
        choices: ["64", "74", "84"],
        answer: "74",
      },
      {
        question: "What is 63 - 28?",
        choices: ["25", "35", "45"],
        answer: "35",
      },
      { question: "What is 9 × 4?", choices: ["32", "36", "40"], answer: "36" },
      { question: "What is 45 ÷ 5?", choices: ["8", "9", "10"], answer: "9" },
      {
        question: "How many centimeters are in one meter?",
        choices: ["10", "100", "1,000"],
        answer: "100",
      },
      {
        question: "What fraction shows one part out of four equal parts?",
        choices: ["1/2", "1/3", "1/4"],
        answer: "1/4",
      },
      {
        question: "What is the perimeter of a square with sides of 3 cm?",
        choices: ["9 cm", "12 cm", "15 cm"],
        answer: "12 cm",
      },
    ],
    4: [
      {
        question: "What is 2,408 + 1,375?",
        choices: ["3,683", "3,783", "3,883"],
        answer: "3,783",
      },
      {
        question: "What is 8 × 12?",
        choices: ["84", "96", "108"],
        answer: "96",
      },
      {
        question: "What is 96 ÷ 8?",
        choices: ["10", "12", "14"],
        answer: "12",
      },
      {
        question: "Which fraction is equal to one half?",
        choices: ["2/4", "2/3", "3/5"],
        answer: "2/4",
      },
      {
        question: "How many minutes are in 2 hours?",
        choices: ["100", "120", "140"],
        answer: "120",
      },
      {
        question: "What is the area of a rectangle 5 cm long and 3 cm wide?",
        choices: ["8 cm²", "15 cm²", "16 cm²"],
        answer: "15 cm²",
      },
      {
        question: "What is the value of the digit 6 in 4,625?",
        choices: ["6", "60", "600"],
        answer: "600",
      },
    ],
    5: [
      {
        question: "What is 2/5 + 1/5?",
        choices: ["3/5", "3/10", "1/5"],
        answer: "3/5",
      },
      {
        question: "What is 4.6 + 2.3?",
        choices: ["6.9", "6.8", "7.1"],
        answer: "6.9",
      },
      {
        question: "What is 30% of 200?",
        choices: ["30", "60", "90"],
        answer: "60",
      },
      {
        question: "What is 15 × 14?",
        choices: ["200", "210", "220"],
        answer: "210",
      },
      {
        question: "What is the perimeter of a rectangle 8 cm by 3 cm?",
        choices: ["11 cm", "22 cm", "24 cm"],
        answer: "22 cm",
      },
      {
        question: "Which number is a multiple of 9?",
        choices: ["54", "56", "58"],
        answer: "54",
      },
      {
        question: "What is 3.5 written as a fraction?",
        choices: ["3 1/2", "3 1/5", "3 2/5"],
        answer: "3 1/2",
      },
    ],
    6: [
      { question: "What is -4 + 9?", choices: ["4", "5", "6"], answer: "5" },
      {
        question: "What is 3/4 of 20?",
        choices: ["12", "15", "16"],
        answer: "15",
      },
      {
        question: "Simplify the ratio 6:9.",
        choices: ["2:3", "3:2", "6:3"],
        answer: "2:3",
      },
      {
        question:
          "What is the area of a triangle with base 8 cm and height 5 cm?",
        choices: ["20 cm²", "40 cm²", "13 cm²"],
        answer: "20 cm²",
      },
      {
        question: "What is 1.2 × 5?",
        choices: ["5.2", "6", "6.2"],
        answer: "6",
      },
      {
        question: "Which is the prime number?",
        choices: ["21", "23", "25"],
        answer: "23",
      },
      {
        question: "What is the mean of 4, 6, and 8?",
        choices: ["6", "7", "8"],
        answer: "6",
      },
    ],
    7: [
      { question: "Solve: 5x - 2 = 18", choices: ["3", "4", "5"], answer: "4" },
      {
        question: "What is the value of 3³?",
        choices: ["9", "18", "27"],
        answer: "27",
      },
      {
        question:
          "What is the circumference of a circle with diameter 10 cm? Use π ≈ 3.14.",
        choices: ["31.4 cm", "20 cm", "15.7 cm"],
        answer: "31.4 cm",
      },
      {
        question:
          "What is the probability of rolling an even number on a fair six-sided die?",
        choices: ["1/3", "1/2", "2/3"],
        answer: "1/2",
      },
      {
        question: "Which value is equivalent to 0.4?",
        choices: ["2/5", "1/4", "4/5"],
        answer: "2/5",
      },
      {
        question: "What is the sum of the angles in a triangle?",
        choices: ["90°", "180°", "360°"],
        answer: "180°",
      },
      {
        question:
          "A jacket costs $40 and is reduced by 10%. What is the sale price?",
        choices: ["$34", "$36", "$38"],
        answer: "$36",
      },
    ],
    8: [
      {
        question: "Solve: 4(x - 2) = 20",
        choices: ["5", "7", "9"],
        answer: "7",
      },
      {
        question: "What is the y-intercept of y = 3x - 5?",
        choices: ["3", "-5", "5"],
        answer: "-5",
      },
      {
        question:
          "What is the hypotenuse of a right triangle with legs 6 and 8?",
        choices: ["10", "12", "14"],
        answer: "10",
      },
      {
        question: "What is the median of 3, 7, 8, 10, and 12?",
        choices: ["7", "8", "10"],
        answer: "8",
      },
      {
        question: "Factor x² + 5x.",
        choices: ["x(x + 5)", "(x + 5)²", "5(x + 1)"],
        answer: "x(x + 5)",
      },
      {
        question: "What is the volume of a cube with side length 3 cm?",
        choices: ["9 cm³", "18 cm³", "27 cm³"],
        answer: "27 cm³",
      },
      {
        question: "What is the slope between (1, 2) and (3, 8)?",
        choices: ["2", "3", "4"],
        answer: "3",
      },
    ],
  },
  Science: {
    1: [
      {
        question: "Which body part helps you hear?",
        choices: ["Ear", "Nose", "Foot"],
        answer: "Ear",
      },
      {
        question: "Which animal lives in water?",
        choices: ["Fish", "Rabbit", "Horse"],
        answer: "Fish",
      },
      {
        question: "What do we wear when it rains?",
        choices: ["Raincoat", "Swimsuit", "Pajamas"],
        answer: "Raincoat",
      },
      {
        question: "Which plant part is usually under the soil?",
        choices: ["Root", "Flower", "Leaf"],
        answer: "Root",
      },
      {
        question: "Which is a source of heat?",
        choices: ["Fire", "Ice", "Snow"],
        answer: "Fire",
      },
      {
        question: "Which animal has a shell?",
        choices: ["Turtle", "Lion", "Duck"],
        answer: "Turtle",
      },
      {
        question: "What do people use to smell?",
        choices: ["Nose", "Elbow", "Knee"],
        answer: "Nose",
      },
    ],
    2: [
      {
        question: "Which material is attracted to a magnet?",
        choices: ["Iron", "Paper", "Wood"],
        answer: "Iron",
      },
      {
        question: "Which season is usually the coldest?",
        choices: ["Winter", "Summer", "Spring"],
        answer: "Winter",
      },
      {
        question: "What do bees collect from flowers?",
        choices: ["Nectar", "Sand", "Seeds"],
        answer: "Nectar",
      },
      {
        question: "Which animal is a mammal?",
        choices: ["Whale", "Frog", "Eagle"],
        answer: "Whale",
      },
      {
        question: "What does a thermometer measure?",
        choices: ["Temperature", "Distance", "Weight"],
        answer: "Temperature",
      },
      {
        question: "Which object lets most light pass through it?",
        choices: ["Clear glass", "Cardboard", "Stone"],
        answer: "Clear glass",
      },
      {
        question: "What do we call water falling from clouds?",
        choices: ["Rain", "Smoke", "Dust"],
        answer: "Rain",
      },
    ],
    3: [
      {
        question: "What is the young one of a frog called?",
        choices: ["Tadpole", "Cub", "Chick"],
        answer: "Tadpole",
      },
      {
        question: "Which material is a good electrical conductor?",
        choices: ["Copper", "Rubber", "Cotton"],
        answer: "Copper",
      },
      {
        question: "What is the change from liquid water to water vapor called?",
        choices: ["Evaporation", "Freezing", "Melting"],
        answer: "Evaporation",
      },
      {
        question: "Which part of a plant takes in most water?",
        choices: ["Roots", "Petals", "Fruit"],
        answer: "Roots",
      },
      {
        question: "Which object is a natural source of light at night?",
        choices: ["Moon", "Mirror", "Window"],
        answer: "Moon",
      },
      {
        question: "Which force helps a ball roll downhill?",
        choices: ["Gravity", "Electricity", "Sound"],
        answer: "Gravity",
      },
      {
        question: "Which animal is an herbivore?",
        choices: ["Cow", "Tiger", "Eagle"],
        answer: "Cow",
      },
    ],
    4: [
      {
        question: "Which part of the digestive system absorbs nutrients?",
        choices: ["Small intestine", "Lung", "Heart"],
        answer: "Small intestine",
      },
      {
        question: "What is the main source of energy for Earth's weather?",
        choices: ["The Sun", "The Moon", "The ocean floor"],
        answer: "The Sun",
      },
      {
        question: "Which material is most likely to float in water?",
        choices: ["Cork", "Steel", "Glass"],
        answer: "Cork",
      },
      {
        question: "What is a habitat?",
        choices: [
          "A place where an organism lives",
          "A type of cloud",
          "A body part",
        ],
        answer: "A place where an organism lives",
      },
      {
        question: "Which simple machine is a ramp?",
        choices: ["Inclined plane", "Pulley", "Wheel and axle"],
        answer: "Inclined plane",
      },
      {
        question: "What is the solid form of water called?",
        choices: ["Ice", "Steam", "Mist"],
        answer: "Ice",
      },
      {
        question: "Which planet has rings that are easy to see?",
        choices: ["Saturn", "Mercury", "Mars"],
        answer: "Saturn",
      },
    ],
    5: [
      {
        question: "Which system carries blood around the body?",
        choices: ["Circulatory system", "Digestive system", "Skeletal system"],
        answer: "Circulatory system",
      },
      {
        question: "What is the process of liquid changing into gas called?",
        choices: ["Evaporation", "Condensation", "Freezing"],
        answer: "Evaporation",
      },
      {
        question: "Which layer of Earth is the outermost solid layer?",
        choices: ["Crust", "Outer core", "Inner core"],
        answer: "Crust",
      },
      {
        question: "Which type of rock forms when magma cools?",
        choices: ["Igneous", "Sedimentary", "Metamorphic"],
        answer: "Igneous",
      },
      {
        question: "What is the role of a producer in a food chain?",
        choices: ["Make its own food", "Hunt every animal", "Break down rocks"],
        answer: "Make its own food",
      },
      {
        question: "Which object is a renewable energy source?",
        choices: ["Wind", "Coal", "Natural gas"],
        answer: "Wind",
      },
      {
        question:
          "What do we call an animal that eats both plants and animals?",
        choices: ["Omnivore", "Herbivore", "Carnivore"],
        answer: "Omnivore",
      },
    ],
    6: [
      {
        question:
          "Which cell structure controls what enters and leaves the cell?",
        choices: ["Cell membrane", "Nucleus", "Vacuole"],
        answer: "Cell membrane",
      },
      {
        question: "What is the SI unit of force?",
        choices: ["Newton", "Joule", "Watt"],
        answer: "Newton",
      },
      {
        question: "Which particle has a negative electric charge?",
        choices: ["Electron", "Proton", "Neutron"],
        answer: "Electron",
      },
      {
        question: "What happens to particles when a solid melts?",
        choices: [
          "They move more freely",
          "They disappear",
          "They stop existing",
        ],
        answer: "They move more freely",
      },
      {
        question: "Which organ filters waste from the blood to make urine?",
        choices: ["Kidney", "Stomach", "Liver"],
        answer: "Kidney",
      },
      {
        question: "What is the name for an organism's role in its ecosystem?",
        choices: ["Niche", "Orbit", "Mineral"],
        answer: "Niche",
      },
      {
        question: "Which type of eclipse occurs when the Moon blocks the Sun?",
        choices: ["Solar eclipse", "Lunar eclipse", "Seasonal eclipse"],
        answer: "Solar eclipse",
      },
    ],
    7: [
      {
        question:
          "What is the movement of water across a selectively permeable membrane called?",
        choices: ["Osmosis", "Combustion", "Erosion"],
        answer: "Osmosis",
      },
      {
        question: "Which blood cells help fight infection?",
        choices: ["White blood cells", "Red blood cells", "Platelets"],
        answer: "White blood cells",
      },
      {
        question: "What is the unit of electrical resistance?",
        choices: ["Ohm", "Ampere", "Volt"],
        answer: "Ohm",
      },
      {
        question: "Which process breaks down rocks at Earth's surface?",
        choices: ["Weathering", "Condensation", "Photosynthesis"],
        answer: "Weathering",
      },
      {
        question: "Which type of wave can travel through empty space?",
        choices: ["Electromagnetic wave", "Sound wave", "Water wave"],
        answer: "Electromagnetic wave",
      },
      {
        question:
          "What do we call a change in a species over many generations?",
        choices: ["Evolution", "Digestion", "Reflection"],
        answer: "Evolution",
      },
      {
        question: "What is the independent variable in an experiment?",
        choices: [
          "The factor deliberately changed",
          "The result measured",
          "A fact kept secret",
        ],
        answer: "The factor deliberately changed",
      },
    ],
    8: [
      {
        question:
          "What is the name for the energy needed to start a chemical reaction?",
        choices: ["Activation energy", "Sound energy", "Nuclear charge"],
        answer: "Activation energy",
      },
      {
        question: "Which type of bond involves sharing electrons?",
        choices: ["Covalent bond", "Ionic bond", "Magnetic bond"],
        answer: "Covalent bond",
      },
      {
        question:
          "What happens to a population when its birth rate exceeds its death rate?",
        choices: [
          "It tends to grow",
          "It becomes a mineral",
          "It stops reproducing",
        ],
        answer: "It tends to grow",
      },
      {
        question:
          "Which law states that energy cannot be created or destroyed?",
        choices: [
          "Conservation of energy",
          "Law of reflection",
          "Law of motion",
        ],
        answer: "Conservation of energy",
      },
      {
        question:
          "What is the bending of light as it enters a new material called?",
        choices: ["Refraction", "Evaporation", "Diffusion"],
        answer: "Refraction",
      },
      {
        question: "Which part of a neuron receives signals from other cells?",
        choices: ["Dendrite", "Axon", "Myelin sheath"],
        answer: "Dendrite",
      },
      {
        question: "What is the pH of an acidic solution?",
        choices: ["Less than 7", "Exactly 7", "Greater than 7"],
        answer: "Less than 7",
      },
    ],
  },
  English: {
    1: [
      {
        question: "Which word names a fruit?",
        choices: ["Apple", "Chair", "Shoe"],
        answer: "Apple",
      },
      {
        question: "Which word rhymes with sun?",
        choices: ["Run", "Bed", "Cup"],
        answer: "Run",
      },
      {
        question: "What is the opposite of up?",
        choices: ["Down", "Near", "Open"],
        answer: "Down",
      },
      {
        question: "Which word begins with the letter B?",
        choices: ["Ball", "Fish", "Moon"],
        answer: "Ball",
      },
      {
        question: "Choose the missing word: I ___ a book.",
        choices: ["have", "has", "had"],
        answer: "have",
      },
      {
        question: "Which word names a person?",
        choices: ["Doctor", "Window", "Apple"],
        answer: "Doctor",
      },
      {
        question: "Which word describes something that is not loud?",
        choices: ["Quiet", "Round", "Wet"],
        answer: "Quiet",
      },
    ],
    2: [
      {
        question: "What is the plural of box?",
        choices: ["Boxes", "Boxs", "Box"],
        answer: "Boxes",
      },
      {
        question: "Choose the correct word: The birds ___ in the sky.",
        choices: ["fly", "flies", "flying"],
        answer: "fly",
      },
      {
        question: "Which word means the same as begin?",
        choices: ["Start", "Finish", "Sleep"],
        answer: "Start",
      },
      {
        question: "Which word is an adjective in 'a yellow bus'?",
        choices: ["Yellow", "Bus", "A"],
        answer: "Yellow",
      },
      {
        question: "Choose the correct pronoun: ___ are my friends.",
        choices: ["They", "She", "It"],
        answer: "They",
      },
      {
        question: "What is the opposite of early?",
        choices: ["Late", "Soon", "First"],
        answer: "Late",
      },
      {
        question: "Which punctuation mark ends a question?",
        choices: ["Question mark", "Full stop", "Comma"],
        answer: "Question mark",
      },
    ],
    3: [
      {
        question: "Choose the correct past tense: Yesterday, we ___ soccer.",
        choices: ["played", "play", "plays"],
        answer: "played",
      },
      {
        question: "Which word is an adverb in 'Mia sings softly'?",
        choices: ["Softly", "Sings", "Mia"],
        answer: "Softly",
      },
      {
        question: "What is the plural of child?",
        choices: ["Children", "Childs", "Childes"],
        answer: "Children",
      },
      {
        question: "Choose the correct article: I saw ___ elephant.",
        choices: ["an", "a", "thee"],
        answer: "an",
      },
      {
        question: "Which word is a conjunction?",
        choices: ["Because", "Under", "Bright"],
        answer: "Because",
      },
      {
        question: "What is the opposite of empty?",
        choices: ["Full", "Wide", "Short"],
        answer: "Full",
      },
      {
        question: "Which sentence uses a capital letter correctly?",
        choices: [
          "We visited London.",
          "we visited London.",
          "We visited london.",
        ],
        answer: "We visited London.",
      },
    ],
    4: [
      {
        question: "Choose the correct comparative form of tall.",
        choices: ["Taller", "Tallest", "More tall"],
        answer: "Taller",
      },
      {
        question: "Which sentence is in the future tense?",
        choices: [
          "She will visit tomorrow.",
          "She visited yesterday.",
          "She visits often.",
        ],
        answer: "She will visit tomorrow.",
      },
      {
        question: "What is the subject in 'The little dog barked loudly'?",
        choices: ["The little dog", "Barked", "Loudly"],
        answer: "The little dog",
      },
      {
        question: "Which word is a preposition?",
        choices: ["Between", "Careful", "Laugh"],
        answer: "Between",
      },
      {
        question: "Choose the correct possessive: That is ___ pencil.",
        choices: ["Liam's", "Liams", "Liams'"],
        answer: "Liam's",
      },
      {
        question: "What does the prefix 'un-' mean in 'unhappy'?",
        choices: ["Not", "Again", "Before"],
        answer: "Not",
      },
      {
        question: "Which sentence is punctuated correctly?",
        choices: [
          "After lunch, we read.",
          "After lunch we, read.",
          "After, lunch we read.",
        ],
        answer: "After lunch, we read.",
      },
    ],
    5: [
      {
        question: "Which word is a homophone of 'their'?",
        choices: ["There", "These", "Three"],
        answer: "There",
      },
      {
        question: "Choose the correct verb: Neither answer ___ correct.",
        choices: ["is", "are", "were"],
        answer: "is",
      },
      {
        question: "What is the superlative form of bright?",
        choices: ["Brightest", "Brighter", "More bright"],
        answer: "Brightest",
      },
      {
        question: "Which sentence contains a simile?",
        choices: [
          "Her smile was like sunshine.",
          "The wind whispered.",
          "The desk is wooden.",
        ],
        answer: "Her smile was like sunshine.",
      },
      {
        question: "What does the suffix '-less' mean in 'careless'?",
        choices: ["Without", "Full of", "Able to"],
        answer: "Without",
      },
      {
        question:
          "Which word is a conjunction in 'I stayed inside because it rained'?",
        choices: ["Because", "Inside", "Rained"],
        answer: "Because",
      },
      {
        question: "Choose the correct contraction for 'they are'.",
        choices: ["They're", "Their", "There"],
        answer: "They're",
      },
    ],
    6: [
      {
        question: "Which sentence uses the present perfect tense?",
        choices: [
          "They have finished the project.",
          "They finished the project.",
          "They are finishing the project.",
        ],
        answer: "They have finished the project.",
      },
      {
        question:
          "What is the main clause in 'Although it was cold, we went outside'?",
        choices: ["We went outside", "Although it was cold", "It was cold"],
        answer: "We went outside",
      },
      {
        question: "Which word is an abstract noun?",
        choices: ["Courage", "Bicycle", "Window"],
        answer: "Courage",
      },
      {
        question:
          "Choose the correct word: The coach gave the award to Sam and ___.",
        choices: ["me", "I", "my"],
        answer: "me",
      },
      {
        question: "What does the idiom 'break the ice' mean?",
        choices: [
          "Make people feel comfortable",
          "Crack frozen water",
          "End a friendship",
        ],
        answer: "Make people feel comfortable",
      },
      {
        question: "Which transition word shows contrast?",
        choices: ["However", "Therefore", "Next"],
        answer: "However",
      },
      {
        question: "Which sentence uses a semicolon correctly?",
        choices: [
          "The sky darkened; rain began to fall.",
          "The sky; darkened rain began.",
          "The sky darkened rain; began to fall.",
        ],
        answer: "The sky darkened; rain began to fall.",
      },
    ],
    7: [
      {
        question: "Which sentence uses the past perfect tense?",
        choices: [
          "She had left before noon.",
          "She leaves before noon.",
          "She will leave before noon.",
        ],
        answer: "She had left before noon.",
      },
      {
        question:
          "What is the tone of a passage that gently makes fun of a mistake?",
        choices: ["Humorous", "Terrified", "Formal"],
        answer: "Humorous",
      },
      {
        question: "Which phrase is an example of personification?",
        choices: [
          "The leaves danced in the wind.",
          "The leaves were green.",
          "The leaves fell yesterday.",
        ],
        answer: "The leaves danced in the wind.",
      },
      {
        question: "What is the function of a thesis statement?",
        choices: [
          "Present the main claim",
          "List every source",
          "End each paragraph",
        ],
        answer: "Present the main claim",
      },
      {
        question: "Choose the correct word: The new rule may ___ everyone.",
        choices: ["affect", "effect", "effects"],
        answer: "affect",
      },
      {
        question: "Which sentence has a misplaced modifier?",
        choices: [
          "Walking to school, the rain soaked Nina.",
          "Nina walked to school in the rain.",
          "Nina carried an umbrella to school.",
        ],
        answer: "Walking to school, the rain soaked Nina.",
      },
      {
        question: "What does the word 'reluctant' mean?",
        choices: ["Unwilling", "Excited", "Careless"],
        answer: "Unwilling",
      },
    ],
    8: [
      {
        question: "Which sentence uses the subjunctive mood?",
        choices: [
          "If I were taller, I could reach it.",
          "I am taller than my brother.",
          "I will reach it soon.",
        ],
        answer: "If I were taller, I could reach it.",
      },
      {
        question: "What is dramatic irony?",
        choices: [
          "The audience knows something a character does not",
          "A character tells a joke",
          "A story ends unexpectedly",
        ],
        answer: "The audience knows something a character does not",
      },
      {
        question:
          "Which revision removes a vague pronoun reference? 'When Maya met Sara, she smiled.'",
        choices: [
          "Maya smiled when she met Sara.",
          "When they met, she smiled.",
          "She smiled when Maya met Sara.",
        ],
        answer: "Maya smiled when she met Sara.",
      },
      {
        question: "What does 'ambiguous' mean?",
        choices: [
          "Having more than one possible meaning",
          "Easy to prove",
          "Written in the past",
        ],
        answer: "Having more than one possible meaning",
      },
      {
        question: "Which sentence contains an appositive?",
        choices: [
          "Mr. Lee, our new coach, greeted us.",
          "Mr. Lee greeted us quickly.",
          "Our new coach greeted us outside.",
        ],
        answer: "Mr. Lee, our new coach, greeted us.",
      },
      {
        question: "What is the purpose of a counterclaim in an argument?",
        choices: [
          "Address an opposing viewpoint",
          "Repeat the title",
          "Describe the setting",
        ],
        answer: "Address an opposing viewpoint",
      },
      {
        question: "Which sentence uses a colon correctly?",
        choices: [
          "Bring three items: a pen, paper, and a ruler.",
          "Bring: three items a pen, paper, and a ruler.",
          "Bring three: items a pen, paper, and a ruler.",
        ],
        answer: "Bring three items: a pen, paper, and a ruler.",
      },
    ],
  },
  Arabic: {
    1: [
      {
        question: "ما الحرف الذي تبدأ به كلمة «بيت»؟",
        choices: ["ب", "ت", "م"],
        answer: "ب",
      },
      {
        question: "أي كلمة تدل على طعام؟",
        choices: ["خبز", "باب", "شارع"],
        answer: "خبز",
      },
      {
        question: "ما عكس كلمة «فوق»؟",
        choices: ["تحت", "أمام", "قريب"],
        answer: "تحت",
      },
      {
        question: "أي كلمة تدل على لون؟",
        choices: ["أزرق", "يجري", "قلم"],
        answer: "أزرق",
      },
      {
        question: "أكمل: أنا ___ إلى المدرسة.",
        choices: ["أذهب", "كرسي", "كتاب"],
        answer: "أذهب",
      },
      {
        question: "أي كلمة تدل على مكان؟",
        choices: ["حديقة", "سعيد", "يلعب"],
        answer: "حديقة",
      },
      {
        question: "ما الحرف الأخير في كلمة «قمر»؟",
        choices: ["ر", "ق", "م"],
        answer: "ر",
      },
    ],
    2: [
      {
        question: "ما جمع كلمة «قلم»؟",
        choices: ["أقلام", "قلمان", "قالم"],
        answer: "أقلام",
      },
      {
        question: "ما مفرد كلمة «أبواب»؟",
        choices: ["باب", "بواب", "أب"],
        answer: "باب",
      },
      {
        question: "أي كلمة تدل على صفة؟",
        choices: ["نظيف", "يلعب", "مدرسة"],
        answer: "نظيف",
      },
      {
        question: "أكمل: الطفلة ___ الدرس.",
        choices: ["تقرأ", "قلم", "جميلة"],
        answer: "تقرأ",
      },
      {
        question: "ما عكس كلمة «قريب»؟",
        choices: ["بعيد", "واسع", "قصير"],
        answer: "بعيد",
      },
      {
        question: "أي كلمة تبدأ بحرف «ش»؟",
        choices: ["شمس", "قمر", "نهر"],
        answer: "شمس",
      },
      {
        question: "ما جمع كلمة «ولد»؟",
        choices: ["أولاد", "والد", "ولدان"],
        answer: "أولاد",
      },
    ],
    3: [
      {
        question: "ما مرادف كلمة «فرح»؟",
        choices: ["سرور", "حزن", "تعب"],
        answer: "سرور",
      },
      {
        question: "أي جملة تبدأ بفعل؟",
        choices: ["كتب التلميذ", "الجو جميل", "الحديقة واسعة"],
        answer: "كتب التلميذ",
      },
      {
        question: "ما نوع كلمة «إلى»؟",
        choices: ["حرف جر", "اسم", "فعل"],
        answer: "حرف جر",
      },
      {
        question: "ما جمع كلمة «مدينة»؟",
        choices: ["مدن", "مدين", "مدينتان"],
        answer: "مدن",
      },
      {
        question: "أكمل: نحن ___ في الحديقة.",
        choices: ["نلعب", "يلعب", "ألعب"],
        answer: "نلعب",
      },
      {
        question: "ما ضد كلمة «نظيف»؟",
        choices: ["متسخ", "مرتب", "جميل"],
        answer: "متسخ",
      },
      {
        question: "أي كلمة تدل على مثنى؟",
        choices: ["كتابان", "كتب", "كتاب"],
        answer: "كتابان",
      },
    ],
    4: [
      {
        question: "ما الفاعل في جملة «زرع الفلاح القمح»؟",
        choices: ["الفلاح", "زرع", "القمح"],
        answer: "الفلاح",
      },
      {
        question: "ما جمع كلمة «نافذة»؟",
        choices: ["نوافذ", "نافذون", "نافذتان"],
        answer: "نوافذ",
      },
      {
        question: "أي جملة اسمية؟",
        choices: ["السماء صافية", "أشرقت الشمس", "يلعب الطفل"],
        answer: "السماء صافية",
      },
      {
        question: "ما ضد كلمة «واسع»؟",
        choices: ["ضيق", "طويل", "مرتفع"],
        answer: "ضيق",
      },
      {
        question: "ما الفعل الماضي من «يشرب»؟",
        choices: ["شرب", "اشرب", "شارب"],
        answer: "شرب",
      },
      {
        question: "أي كلمة مؤنثة؟",
        choices: ["معلمة", "معلم", "مهندس"],
        answer: "معلمة",
      },
      {
        question: "ما علامة الترقيم المناسبة لنهاية السؤال؟",
        choices: ["؟", "،", "."],
        answer: "؟",
      },
    ],
    5: [
      {
        question: "ما المبتدأ في جملة «الحديقة أزهارها جميلة»؟",
        choices: ["الحديقة", "أزهارها", "جميلة"],
        answer: "الحديقة",
      },
      {
        question: "ما جمع كلمة «طبيب»؟",
        choices: ["أطباء", "طبابة", "طبيبتان"],
        answer: "أطباء",
      },
      {
        question: "ما مرادف كلمة «سريع»؟",
        choices: ["عاجل", "بطيء", "هادئ"],
        answer: "عاجل",
      },
      {
        question: "أي كلمة تحتوي على همزة قطع؟",
        choices: ["أحمد", "ابن", "استخرج"],
        answer: "أحمد",
      },
      {
        question: "ما المفعول به في جملة «رسمت مريم لوحة»؟",
        choices: ["لوحة", "مريم", "رسمت"],
        answer: "لوحة",
      },
      {
        question: "أي أداة استفهام نسأل بها عن المكان؟",
        choices: ["أين", "متى", "كيف"],
        answer: "أين",
      },
      {
        question: "ما نوع الفعل «اكتب»؟",
        choices: ["فعل أمر", "فعل ماضٍ", "فعل مضارع"],
        answer: "فعل أمر",
      },
    ],
    6: [
      {
        question: "ما المبتدأ في جملة «العلم نور»؟",
        choices: ["العلم", "نور", "في"],
        answer: "العلم",
      },
      {
        question: "ما علامة رفع المثنى؟",
        choices: ["الألف", "الواو", "الياء"],
        answer: "الألف",
      },
      {
        question: "أي كلمة جمع مؤنث سالم؟",
        choices: ["معلمات", "معلمون", "طلاب"],
        answer: "معلمات",
      },
      {
        question: "ما نوع الأسلوب في «ما أجمل الربيع!»؟",
        choices: ["تعجب", "استفهام", "نهي"],
        answer: "تعجب",
      },
      {
        question: "ما الفاعل في جملة «تشرق الشمس صباحًا»؟",
        choices: ["الشمس", "تشرق", "صباحًا"],
        answer: "الشمس",
      },
      {
        question: "ما ضد كلمة «التواضع»؟",
        choices: ["الغرور", "الكرم", "الصبر"],
        answer: "الغرور",
      },
      {
        question: "أي حرف من حروف العطف؟",
        choices: ["لكن", "على", "من"],
        answer: "لكن",
      },
    ],
    7: [
      {
        question: "ما إعراب كلمة «الكتاب» في «قرأ الطالب الكتاب»؟",
        choices: ["مفعول به منصوب", "فاعل مرفوع", "مبتدأ مرفوع"],
        answer: "مفعول به منصوب",
      },
      {
        question: "أي كلمة اسم فاعل من الفعل «كتب»؟",
        choices: ["كاتب", "مكتوب", "كتاب"],
        answer: "كاتب",
      },
      {
        question: "ما علامة نصب جمع المذكر السالم؟",
        choices: ["الياء", "الواو", "الألف"],
        answer: "الياء",
      },
      {
        question: "ما نوع الأسلوب في «هل قرأت القصة؟»؟",
        choices: ["استفهام", "نداء", "تعجب"],
        answer: "استفهام",
      },
      {
        question: "أي كلمة همزتها متوسطة على نبرة؟",
        choices: ["سُئِل", "سأل", "سماء"],
        answer: "سُئِل",
      },
      {
        question: "ما مرادف كلمة «يؤازر»؟",
        choices: ["يساعد", "يعارض", "يهمل"],
        answer: "يساعد",
      },
      {
        question: "ما الخبر في جملة «الزهرتان متفتحتان»؟",
        choices: ["متفتحتان", "الزهرتان", "أل"],
        answer: "متفتحتان",
      },
    ],
    8: [
      {
        question: "ما إعراب كلمة «المعلم» في «إن المعلم مخلص»؟",
        choices: ["اسم إن منصوب", "خبر إن مرفوع", "فاعل مرفوع"],
        answer: "اسم إن منصوب",
      },
      {
        question: "أي أداة تجزم الفعل المضارع؟",
        choices: ["لم", "لن", "سوف"],
        answer: "لم",
      },
      {
        question: "ما نوع الصورة في «ابتسم الصباح»؟",
        choices: ["استعارة مكنية", "تشبيه مفصل", "كناية عن العدد"],
        answer: "استعارة مكنية",
      },
      {
        question: "أي كلمة اسم مفعول من الفعل «احترم»؟",
        choices: ["مُحترَم", "مُحترِم", "احترام"],
        answer: "مُحترَم",
      },
      {
        question: "ما علامة رفع الأسماء الخمسة؟",
        choices: ["الواو", "الألف", "الياء"],
        answer: "الواو",
      },
      {
        question: "أي جملة تحتوي على أسلوب شرط؟",
        choices: ["إن تجتهد تنجح", "ما أجمل النجاح", "هل حضرت اليوم؟"],
        answer: "إن تجتهد تنجح",
      },
      {
        question: "ما مرادف كلمة «شاسع»؟",
        choices: ["واسع", "ضيق", "قصير"],
        answer: "واسع",
      },
    ],
  },
  German: {
    1: [
      {
        question: "Was bedeutet 'Guten Morgen'?",
        choices: ["Good morning", "Good night", "Goodbye"],
        answer: "Good morning",
      },
      {
        question: "Was bedeutet 'Brot'?",
        choices: ["Bread", "Milk", "Apple"],
        answer: "Bread",
      },
      {
        question: "Welche Farbe hat eine Zitrone?",
        choices: ["Yellow", "Blue", "Black"],
        answer: "Yellow",
      },
      {
        question: "Was bedeutet 'Mutter'?",
        choices: ["Mother", "Sister", "Friend"],
        answer: "Mother",
      },
      {
        question: "Was bedeutet 'drei'?",
        choices: ["Three", "Two", "Five"],
        answer: "Three",
      },
      {
        question: "Was bedeutet 'Tschüss'?",
        choices: ["Goodbye", "Please", "Welcome"],
        answer: "Goodbye",
      },
      {
        question: "Was bedeutet 'Hund' auf Englisch?",
        choices: ["Dog", "Cat", "Horse"],
        answer: "Dog",
      },
    ],
    2: [
      {
        question: "Was bedeutet 'Schwester'?",
        choices: ["Sister", "Brother", "Grandmother"],
        answer: "Sister",
      },
      {
        question: "Was bedeutet 'rot'?",
        choices: ["Red", "Green", "White"],
        answer: "Red",
      },
      {
        question: "Welche Zahl ist 'fünf'?",
        choices: ["5", "4", "6"],
        answer: "5",
      },
      {
        question: "Was bedeutet 'Milch'?",
        choices: ["Milk", "Water", "Juice"],
        answer: "Milk",
      },
      {
        question: "Was bedeutet 'Guten Abend'?",
        choices: ["Good evening", "Good morning", "See you"],
        answer: "Good evening",
      },
      {
        question: "Was bedeutet 'Tisch'?",
        choices: ["Table", "Door", "Window"],
        answer: "Table",
      },
      {
        question: "Was bedeutet 'bitte'?",
        choices: ["Please", "Sorry", "Never"],
        answer: "Please",
      },
    ],
    3: [
      {
        question: "Was bedeutet 'Ich heiße Anna'?",
        choices: ["My name is Anna", "I see Anna", "Anna is here"],
        answer: "My name is Anna",
      },
      {
        question: "Was bedeutet 'Bleistift'?",
        choices: ["Pencil", "Notebook", "School"],
        answer: "Pencil",
      },
      {
        question: "Was bedeutet 'der Vater'?",
        choices: ["The father", "The mother", "The uncle"],
        answer: "The father",
      },
      {
        question: "Welche Zahl ist 'acht'?",
        choices: ["8", "7", "9"],
        answer: "8",
      },
      {
        question: "Was bedeutet 'Gute Nacht'?",
        choices: ["Good night", "Good afternoon", "Good luck"],
        answer: "Good night",
      },
      {
        question: "Was bedeutet 'grün'?",
        choices: ["Green", "Grey", "Brown"],
        answer: "Green",
      },
      {
        question: "Was bedeutet 'spielen'?",
        choices: ["To play", "To read", "To sleep"],
        answer: "To play",
      },
    ],
    4: [
      {
        question: "Was bedeutet 'Ich wohne in Berlin'?",
        choices: ["I live in Berlin", "I work in Berlin", "I visit Berlin"],
        answer: "I live in Berlin",
      },
      {
        question: "Was bedeutet 'die Schwester'?",
        choices: ["The sister", "The daughter", "The aunt"],
        answer: "The sister",
      },
      {
        question: "Was bedeutet 'Apfelsaft'?",
        choices: ["Apple juice", "Orange juice", "Apple cake"],
        answer: "Apple juice",
      },
      {
        question: "Was bedeutet 'zwölf'?",
        choices: ["Twelve", "Twenty", "Two"],
        answer: "Twelve",
      },
      {
        question: "Was bedeutet 'Das Wetter ist schön'?",
        choices: ["The weather is nice", "The day is long", "The sky is dark"],
        answer: "The weather is nice",
      },
      {
        question: "Was bedeutet 'links'?",
        choices: ["Left", "Right", "Straight"],
        answer: "Left",
      },
      {
        question: "Was bedeutet 'Fenster'?",
        choices: ["Window", "Wall", "Floor"],
        answer: "Window",
      },
    ],
    5: [
      {
        question: "Was bedeutet 'Ich habe einen Bruder'?",
        choices: ["I have a brother", "I see my brother", "I am a brother"],
        answer: "I have a brother",
      },
      {
        question: "Was bedeutet 'Küche'?",
        choices: ["Kitchen", "Bedroom", "Garden"],
        answer: "Kitchen",
      },
      {
        question: "Was bedeutet 'der Frühling'?",
        choices: ["Spring", "Autumn", "Winter"],
        answer: "Spring",
      },
      {
        question: "Was bedeutet 'Ich esse gern Obst'?",
        choices: [
          "I like eating fruit",
          "I buy some bread",
          "I drink cold water",
        ],
        answer: "I like eating fruit",
      },
      {
        question: "Was bedeutet 'teuer'?",
        choices: ["Expensive", "Cheap", "Clean"],
        answer: "Expensive",
      },
      {
        question: "Was bedeutet 'um halb acht'?",
        choices: [
          "At half past seven",
          "At half past eight",
          "At seven o'clock",
        ],
        answer: "At half past seven",
      },
      {
        question: "Was bedeutet 'Kleidung'?",
        choices: ["Clothing", "Food", "Furniture"],
        answer: "Clothing",
      },
    ],
    6: [
      {
        question: "Was bedeutet 'Wir fahren mit dem Bus'?",
        choices: ["We travel by bus", "We wait for the bus", "We drive a car"],
        answer: "We travel by bus",
      },
      {
        question: "Was bedeutet 'die Gesundheit'?",
        choices: ["Health", "Happiness", "Holiday"],
        answer: "Health",
      },
      {
        question: "Was bedeutet 'Ich kann gut schwimmen'?",
        choices: ["I can swim well", "I want to swim", "I am learning to walk"],
        answer: "I can swim well",
      },
      {
        question: "Was bedeutet 'gestern'?",
        choices: ["Yesterday", "Tomorrow", "Today"],
        answer: "Yesterday",
      },
      {
        question: "Was bedeutet 'Der Film beginnt um sechs'?",
        choices: [
          "The film starts at six",
          "The film ends at six",
          "The film is six hours long",
        ],
        answer: "The film starts at six",
      },
      {
        question: "Was bedeutet 'freundlich'?",
        choices: ["Friendly", "Angry", "Tired"],
        answer: "Friendly",
      },
      {
        question: "Was bedeutet 'Ich muss meine Hausaufgaben machen'?",
        choices: [
          "I have to do my homework",
          "I finished my exam",
          "I can go outside",
        ],
        answer: "I have to do my homework",
      },
    ],
    7: [
      {
        question: "Was bedeutet 'Wenn es regnet, bleiben wir zu Hause'?",
        choices: [
          "If it rains, we will stay home",
          "When it stops, we will go home",
          "We walked home in the rain",
        ],
        answer: "If it rains, we will stay home",
      },
      {
        question: "Was bedeutet 'die Umwelt'?",
        choices: ["The environment", "The neighborhood", "The weather"],
        answer: "The environment",
      },
      {
        question: "Was bedeutet 'Er interessiert sich für Musik'?",
        choices: [
          "He is interested in music",
          "He plays music loudly",
          "He teaches music",
        ],
        answer: "He is interested in music",
      },
      {
        question: "Was bedeutet 'trotzdem'?",
        choices: ["Nevertheless", "Therefore", "Because"],
        answer: "Nevertheless",
      },
      {
        question: "Was bedeutet 'die Einladung'?",
        choices: ["The invitation", "The decision", "The experience"],
        answer: "The invitation",
      },
      {
        question: "Was bedeutet 'Ich habe mein Zimmer aufgeräumt'?",
        choices: ["I tidied my room", "I painted my room", "I left my room"],
        answer: "I tidied my room",
      },
      {
        question: "Was bedeutet 'gefährlich'?",
        choices: ["Dangerous", "Useful", "Boring"],
        answer: "Dangerous",
      },
    ],
    8: [
      {
        question: "Was bedeutet 'Obwohl sie müde war, lernte sie weiter'?",
        choices: [
          "Although she was tired, she kept studying",
          "She studied before she became tired",
          "She stopped studying and went to sleep",
        ],
        answer: "Although she was tired, she kept studying",
      },
      {
        question: "Was bedeutet 'die Voraussetzung'?",
        choices: ["The requirement", "The suggestion", "The surprise"],
        answer: "The requirement",
      },
      {
        question: "Was bedeutet 'Er wurde gestern ins Krankenhaus gebracht'?",
        choices: [
          "He was taken to the hospital yesterday",
          "He left the hospital yesterday",
          "He visited a doctor tomorrow",
        ],
        answer: "He was taken to the hospital yesterday",
      },
      {
        question: "Was bedeutet 'sich entscheiden'?",
        choices: [
          "To make a decision",
          "To remember something",
          "To introduce someone",
        ],
        answer: "To make a decision",
      },
      {
        question: "Was bedeutet 'Die Ausstellung wird nächste Woche eröffnet'?",
        choices: [
          "The exhibition will be opened next week",
          "The exhibition closed last week",
          "The exhibition is far away",
        ],
        answer: "The exhibition will be opened next week",
      },
      {
        question: "Was bedeutet 'zuverlässig'?",
        choices: ["Reliable", "Unusual", "Impatient"],
        answer: "Reliable",
      },
      {
        question: "Was bedeutet 'je ... desto ...'?",
        choices: [
          "The ... the ...",
          "Either ... or ...",
          "Not only ... but also ...",
        ],
        answer: "The ... the ...",
      },
    ],
  },
  French: {
    1: [
      {
        question: "Que signifie « Au revoir » ?",
        choices: ["Goodbye", "Hello", "Please"],
        answer: "Goodbye",
      },
      {
        question: "Que signifie « lait » ?",
        choices: ["Milk", "Bread", "Water"],
        answer: "Milk",
      },
      {
        question: "Quelle couleur est « bleu » ?",
        choices: ["Blue", "Red", "Yellow"],
        answer: "Blue",
      },
      {
        question: "Que signifie « père » ?",
        choices: ["Father", "Brother", "Friend"],
        answer: "Father",
      },
      {
        question: "Quel nombre est « quatre » ?",
        choices: ["4", "3", "5"],
        answer: "4",
      },
      {
        question: "Que signifie « s'il vous plaît » ?",
        choices: ["Please", "Thank you", "Good night"],
        answer: "Please",
      },
      {
        question: "Que signifie « poisson » en anglais ?",
        choices: ["Fish", "Bird", "Horse"],
        answer: "Fish",
      },
    ],
    2: [
      {
        question: "Que signifie « frère » ?",
        choices: ["Brother", "Sister", "Father"],
        answer: "Brother",
      },
      {
        question: "Quelle couleur est « vert » ?",
        choices: ["Green", "Orange", "Black"],
        answer: "Green",
      },
      {
        question: "Quel nombre est « sept » ?",
        choices: ["7", "6", "8"],
        answer: "7",
      },
      {
        question: "Que signifie « fromage » ?",
        choices: ["Cheese", "Chicken", "Fruit"],
        answer: "Cheese",
      },
      {
        question: "Que signifie « Bonsoir » ?",
        choices: ["Good evening", "Good morning", "Goodbye"],
        answer: "Good evening",
      },
      {
        question: "Que signifie « porte » ?",
        choices: ["Door", "Window", "Table"],
        answer: "Door",
      },
      {
        question: "Que signifie « pardon » ?",
        choices: ["Sorry", "Welcome", "Never"],
        answer: "Sorry",
      },
    ],
    3: [
      {
        question: "Que signifie « Je m'appelle Paul » ?",
        choices: ["My name is Paul", "I see Paul", "Paul is my friend"],
        answer: "My name is Paul",
      },
      {
        question: "Que signifie « cahier » ?",
        choices: ["Notebook", "Pencil", "School"],
        answer: "Notebook",
      },
      {
        question: "Que signifie « la mère » ?",
        choices: ["The mother", "The sister", "The aunt"],
        answer: "The mother",
      },
      {
        question: "Quel nombre est « neuf » ?",
        choices: ["9", "8", "10"],
        answer: "9",
      },
      {
        question: "Que signifie « Bonne nuit » ?",
        choices: ["Good night", "Good afternoon", "Good luck"],
        answer: "Good night",
      },
      {
        question: "Que signifie « noir » ?",
        choices: ["Black", "White", "Brown"],
        answer: "Black",
      },
      {
        question: "Que signifie « chanter » ?",
        choices: ["To sing", "To dance", "To write"],
        answer: "To sing",
      },
    ],
    4: [
      {
        question: "Que signifie « J'habite à Lyon » ?",
        choices: ["I live in Lyon", "I work in Lyon", "I visit Lyon"],
        answer: "I live in Lyon",
      },
      {
        question: "Que signifie « le grand-père » ?",
        choices: ["The grandfather", "The grandmother", "The cousin"],
        answer: "The grandfather",
      },
      {
        question: "Que signifie « jus d'orange » ?",
        choices: ["Orange juice", "Apple juice", "Orange cake"],
        answer: "Orange juice",
      },
      {
        question: "Quel nombre est « quinze » ?",
        choices: ["15", "50", "5"],
        answer: "15",
      },
      {
        question: "Que signifie « Il fait froid » ?",
        choices: ["It is cold", "It is hot", "It is sunny"],
        answer: "It is cold",
      },
      {
        question: "Que signifie « tout droit » ?",
        choices: ["Straight ahead", "To the left", "Behind"],
        answer: "Straight ahead",
      },
      {
        question: "Que signifie « la fenêtre » ?",
        choices: ["The window", "The floor", "The roof"],
        answer: "The window",
      },
    ],
    5: [
      {
        question: "Que signifie « J'ai deux cousins » ?",
        choices: [
          "I have two cousins",
          "I see my two friends",
          "I am their cousin",
        ],
        answer: "I have two cousins",
      },
      {
        question: "Que signifie « salle de bains » ?",
        choices: ["Bathroom", "Kitchen", "Living room"],
        answer: "Bathroom",
      },
      {
        question: "Que signifie « l'automne » ?",
        choices: ["Autumn", "Spring", "Summer"],
        answer: "Autumn",
      },
      {
        question: "Que signifie « Elle aime lire des romans » ?",
        choices: [
          "She likes reading novels",
          "She writes short poems",
          "She buys new books",
        ],
        answer: "She likes reading novels",
      },
      {
        question: "Que signifie « bon marché » ?",
        choices: ["Cheap", "Expensive", "Dirty"],
        answer: "Cheap",
      },
      {
        question: "Que signifie « à huit heures et demie » ?",
        choices: [
          "At half past eight",
          "At half past seven",
          "At eight o'clock",
        ],
        answer: "At half past eight",
      },
      {
        question: "Que signifie « les chaussures » ?",
        choices: ["Shoes", "Shirts", "Socks"],
        answer: "Shoes",
      },
    ],
    6: [
      {
        question: "Que signifie « Nous allons à l'école à pied » ?",
        choices: [
          "We walk to school",
          "We go to school by bus",
          "We leave school early",
        ],
        answer: "We walk to school",
      },
      {
        question: "Que signifie « le voyage » ?",
        choices: ["The journey", "The lesson", "The meal"],
        answer: "The journey",
      },
      {
        question: "Que signifie « Je peux jouer du piano » ?",
        choices: [
          "I can play the piano",
          "I want to buy a piano",
          "I hear the piano",
        ],
        answer: "I can play the piano",
      },
      {
        question: "Que signifie « demain » ?",
        choices: ["Tomorrow", "Yesterday", "Today"],
        answer: "Tomorrow",
      },
      {
        question: "Que signifie « Le magasin ferme à neuf heures » ?",
        choices: [
          "The shop closes at nine",
          "The shop opens at nine",
          "The shop is nine years old",
        ],
        answer: "The shop closes at nine",
      },
      {
        question: "Que signifie « courageux » ?",
        choices: ["Brave", "Shy", "Hungry"],
        answer: "Brave",
      },
      {
        question: "Que signifie « Je dois ranger ma chambre » ?",
        choices: [
          "I must tidy my room",
          "I want to paint my room",
          "I left my room",
        ],
        answer: "I must tidy my room",
      },
    ],
    7: [
      {
        question: "Que signifie « S'il fait beau, nous irons au parc » ?",
        choices: [
          "If the weather is nice, we will go to the park",
          "We went to the park in bad weather",
          "We are waiting inside the park",
        ],
        answer: "If the weather is nice, we will go to the park",
      },
      {
        question: "Que signifie « la bibliothèque » ?",
        choices: ["The library", "The bookstore", "The classroom"],
        answer: "The library",
      },
      {
        question: "Que signifie « Elle s'intéresse à l'histoire » ?",
        choices: [
          "She is interested in history",
          "She teaches history",
          "She studies history tomorrow",
        ],
        answer: "She is interested in history",
      },
      {
        question: "Que signifie « pourtant » ?",
        choices: ["However", "Because", "Before"],
        answer: "However",
      },
      {
        question: "Que signifie « le conseil » ?",
        choices: ["The advice", "The meeting", "The letter"],
        answer: "The advice",
      },
      {
        question: "Que signifie « J'ai oublié mon parapluie » ?",
        choices: [
          "I forgot my umbrella",
          "I found a new umbrella",
          "I opened the window",
        ],
        answer: "I forgot my umbrella",
      },
      {
        question: "Que signifie « dangereux » ?",
        choices: ["Dangerous", "Delicious", "Quiet"],
        answer: "Dangerous",
      },
    ],
    8: [
      {
        question: "Que signifie « Même s'il pleut, ils joueront dehors » ?",
        choices: [
          "Even if it rains, they will play outside",
          "They played outside before the rain",
          "They stayed inside because it rained",
        ],
        answer: "Even if it rains, they will play outside",
      },
      {
        question: "Que signifie « la recherche » ?",
        choices: ["The research", "The invitation", "The result"],
        answer: "The research",
      },
      {
        question: "Que signifie « Le pont a été construit en 1990 » ?",
        choices: [
          "The bridge was built in 1990",
          "The bridge will be built in 1990",
          "The bridge was crossed in 1990",
        ],
        answer: "The bridge was built in 1990",
      },
      {
        question: "Que signifie « se rendre compte » ?",
        choices: ["To realize", "To get dressed", "To take a trip"],
        answer: "To realize",
      },
      {
        question: "Que signifie « La décision sera annoncée demain » ?",
        choices: [
          "The decision will be announced tomorrow",
          "The decision was made yesterday",
          "The announcement is difficult",
        ],
        answer: "The decision will be announced tomorrow",
      },
      {
        question: "Que signifie « soigneusement » ?",
        choices: ["Carefully", "Suddenly", "Rarely"],
        answer: "Carefully",
      },
      {
        question: "Que signifie « ni ... ni ... » ?",
        choices: [
          "Neither ... nor ...",
          "Both ... and ...",
          "Either ... or ...",
        ],
        answer: "Neither ... nor ...",
      },
    ],
  },
  Social: {
    1: [
      {
        question: "Which person helps put out fires?",
        choices: ["Firefighter", "Baker", "Artist"],
        answer: "Firefighter",
      },
      {
        question: "Where can you borrow a book?",
        choices: ["Library", "Airport", "Farm"],
        answer: "Library",
      },
      {
        question: "Which sign tells people to stop?",
        choices: ["Red stop sign", "Green leaf", "Blue circle"],
        answer: "Red stop sign",
      },
      {
        question: "What should you do before crossing a street?",
        choices: ["Look both ways", "Close your eyes", "Run without looking"],
        answer: "Look both ways",
      },
      {
        question: "Which place is used for learning with classmates?",
        choices: ["School", "Bakery", "Garage"],
        answer: "School",
      },
      {
        question: "Who grows crops on a farm?",
        choices: ["Farmer", "Dentist", "Sailor"],
        answer: "Farmer",
      },
      {
        question: "What do we call a drawing that shows places from above?",
        choices: ["Map", "Song", "Recipe"],
        answer: "Map",
      },
    ],
    2: [
      {
        question: "Which direction does the Sun appear to rise?",
        choices: ["East", "West", "North"],
        answer: "East",
      },
      {
        question: "Why do communities have rules?",
        choices: [
          "To help people live safely together",
          "To stop people learning",
          "To make roads disappear",
        ],
        answer: "To help people live safely together",
      },
      {
        question: "Which place would you visit to send a letter?",
        choices: ["Post office", "Playground", "Museum"],
        answer: "Post office",
      },
      {
        question: "What is a citizen?",
        choices: [
          "A member of a community or country",
          "A kind of vehicle",
          "A type of weather",
        ],
        answer: "A member of a community or country",
      },
      {
        question: "Which service collects household rubbish?",
        choices: ["Sanitation service", "Library service", "Fire service"],
        answer: "Sanitation service",
      },
      {
        question: "What is a neighborhood?",
        choices: [
          "An area where people live near one another",
          "A single classroom",
          "A faraway planet",
        ],
        answer: "An area where people live near one another",
      },
      {
        question: "Which is a way to help keep a park clean?",
        choices: [
          "Put litter in a bin",
          "Leave wrappers on the grass",
          "Break the benches",
        ],
        answer: "Put litter in a bin",
      },
    ],
    3: [
      {
        question: "Which continent is the largest by area?",
        choices: ["Asia", "Europe", "Australia"],
        answer: "Asia",
      },
      {
        question: "What is a compass used to find?",
        choices: ["Directions", "Temperature", "Time"],
        answer: "Directions",
      },
      {
        question: "Which is an example of a human-made feature on a map?",
        choices: ["Bridge", "Mountain", "River"],
        answer: "Bridge",
      },
      {
        question: "What do we call people who move to live in a new place?",
        choices: ["Migrants", "Tourists", "Inventors"],
        answer: "Migrants",
      },
      {
        question: "Which resource can people use for drinking and washing?",
        choices: ["Fresh water", "Coal", "Granite"],
        answer: "Fresh water",
      },
      {
        question: "Why do people use a calendar?",
        choices: [
          "To keep track of dates",
          "To measure height",
          "To find directions",
        ],
        answer: "To keep track of dates",
      },
      {
        question: "Which is a responsibility of a good community member?",
        choices: [
          "Respect shared spaces",
          "Damage public signs",
          "Ignore safety rules",
        ],
        answer: "Respect shared spaces",
      },
    ],
    4: [
      {
        question: "Which ocean lies between Africa and Australia?",
        choices: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean"],
        answer: "Indian Ocean",
      },
      {
        question: "What is a peninsula?",
        choices: [
          "Land surrounded by water on three sides",
          "Land completely surrounded by water",
          "A flat area with no land",
        ],
        answer: "Land surrounded by water on three sides",
      },
      {
        question: "Which tool shows the height and shape of land?",
        choices: ["Topographic map", "Menu", "Calendar"],
        answer: "Topographic map",
      },
      {
        question: "What is trade?",
        choices: [
          "The exchange of goods and services",
          "The study of clouds",
          "A type of mountain",
        ],
        answer: "The exchange of goods and services",
      },
      {
        question: "Which is a natural resource used to make paper?",
        choices: ["Trees", "Plastic toys", "Glass bottles"],
        answer: "Trees",
      },
      {
        question: "What does a scale on a map help you calculate?",
        choices: ["Real distances", "Population ages", "Weather changes"],
        answer: "Real distances",
      },
      {
        question: "Which ancient structure was built as a tomb for a pharaoh?",
        choices: ["Egyptian pyramid", "Roman road", "Greek theater"],
        answer: "Egyptian pyramid",
      },
    ],
    5: [
      {
        question:
          "Which ancient civilization developed along the Tigris and Euphrates rivers?",
        choices: ["Mesopotamia", "Maya", "Inca"],
        answer: "Mesopotamia",
      },
      {
        question: "What is an artifact?",
        choices: [
          "An object made or used by people in the past",
          "A modern weather report",
          "A type of river",
        ],
        answer: "An object made or used by people in the past",
      },
      {
        question: "What does a physical map mainly show?",
        choices: [
          "Natural features of the land",
          "Only political leaders",
          "A country's laws",
        ],
        answer: "Natural features of the land",
      },
      {
        question: "What is a good produced by a farmer?",
        choices: ["Wheat", "Haircut", "Bus ride"],
        answer: "Wheat",
      },
      {
        question: "What is a government?",
        choices: [
          "A group that organizes and leads a community",
          "A kind of mountain",
          "A family celebration",
        ],
        answer: "A group that organizes and leads a community",
      },
      {
        question:
          "Which line divides Earth into the Northern and Southern Hemispheres?",
        choices: ["Equator", "Prime Meridian", "Arctic Circle"],
        answer: "Equator",
      },
      {
        question: "Why do historians compare different sources?",
        choices: [
          "To check information and perspectives",
          "To make every source identical",
          "To avoid studying the past",
        ],
        answer: "To check information and perspectives",
      },
    ],
    6: [
      {
        question: "What is a peninsula connected to?",
        choices: ["A larger area of land", "The center of Earth", "The sky"],
        answer: "A larger area of land",
      },
      {
        question: "What is a primary source about the past?",
        choices: [
          "A letter written at the time",
          "A textbook written centuries later",
          "A fictional story set in the past",
        ],
        answer: "A letter written at the time",
      },
      {
        question:
          "Which form of government gives citizens a voice through voting?",
        choices: ["Democracy", "Monarchy", "Dictatorship"],
        answer: "Democracy",
      },
      {
        question: "What is a country's import?",
        choices: [
          "A good brought in from another country",
          "A good sent abroad",
          "A law passed locally",
        ],
        answer: "A good brought in from another country",
      },
      {
        question: "What is climate?",
        choices: [
          "The usual weather pattern over a long time",
          "The weather this afternoon",
          "The height of a mountain",
        ],
        answer: "The usual weather pattern over a long time",
      },
      {
        question: "Which is an example of a cultural tradition?",
        choices: [
          "A festival celebrated each year",
          "A traffic light",
          "A river's current",
        ],
        answer: "A festival celebrated each year",
      },
      {
        question: "What is a scale model of Earth called?",
        choices: ["Globe", "Compass", "Timeline"],
        answer: "Globe",
      },
    ],
    7: [
      {
        question: "What is a secondary source?",
        choices: [
          "A later account that explains past events",
          "A diary written during an event",
          "A tool used to measure distance",
        ],
        answer: "A later account that explains past events",
      },
      {
        question: "What does scarcity mean in economics?",
        choices: [
          "Resources are limited compared with wants",
          "Everyone has unlimited goods",
          "Prices never change",
        ],
        answer: "Resources are limited compared with wants",
      },
      {
        question: "What is an urban area?",
        choices: [
          "A densely populated town or city",
          "An uninhabited desert",
          "A small farming field",
        ],
        answer: "A densely populated town or city",
      },
      {
        question:
          "Which imaginary line runs from the North Pole to the South Pole at zero degrees longitude?",
        choices: ["Prime Meridian", "Equator", "Tropic of Cancer"],
        answer: "Prime Meridian",
      },
      {
        question: "What is a legislature responsible for?",
        choices: ["Making laws", "Predicting earthquakes", "Growing crops"],
        answer: "Making laws",
      },
      {
        question: "What is an example of cultural diffusion?",
        choices: [
          "A food tradition spreading between regions",
          "A mountain getting taller overnight",
          "A river changing its name",
        ],
        answer: "A food tradition spreading between regions",
      },
      {
        question: "Why do people form alliances between countries?",
        choices: [
          "To cooperate on shared goals",
          "To remove all borders",
          "To prevent communication",
        ],
        answer: "To cooperate on shared goals",
      },
    ],
    8: [
      {
        question: "What is the purpose of a separation of powers?",
        choices: [
          "To divide government authority among branches",
          "To give one person every power",
          "To remove the need for laws",
        ],
        answer: "To divide government authority among branches",
      },
      {
        question: "What does GDP measure?",
        choices: [
          "The value of goods and services produced in a country",
          "The number of rivers in a country",
          "The age of a country's oldest building",
        ],
        answer: "The value of goods and services produced in a country",
      },
      {
        question: "What is urbanization?",
        choices: [
          "The growth of towns and cities",
          "The movement of clouds",
          "The decline of all trade",
        ],
        answer: "The growth of towns and cities",
      },
      {
        question: "What is a constitutional right?",
        choices: [
          "A freedom or protection established by a constitution",
          "A rule chosen by one shop",
          "A temporary weather warning",
        ],
        answer: "A freedom or protection established by a constitution",
      },
      {
        question: "What is a trade-off?",
        choices: [
          "Giving up one option to gain another",
          "Getting every choice without cost",
          "A map of ocean currents",
        ],
        answer: "Giving up one option to gain another",
      },
      {
        question: "What is the main role of the judicial branch?",
        choices: ["Interpret laws", "Collect crops", "Print newspapers"],
        answer: "Interpret laws",
      },
      {
        question: "What is a consequence of deforestation?",
        choices: [
          "Loss of wildlife habitat",
          "More forest habitat",
          "A change in Earth's orbit",
        ],
        answer: "Loss of wildlife habitat",
      },
    ],
  },
  ICT: {
    1: [
      {
        question: "Which part of a computer lets you hear sound?",
        choices: ["Speakers", "Keyboard", "Webcam"],
        answer: "Speakers",
      },
      {
        question: "Which device can take a picture for a computer?",
        choices: ["Camera", "Printer", "Mouse pad"],
        answer: "Camera",
      },
      {
        question: "What should you do before using someone else's computer?",
        choices: ["Ask permission", "Change its settings", "Unplug it"],
        answer: "Ask permission",
      },
      {
        question: "Which key makes a space between words?",
        choices: ["Space bar", "Shift key", "Escape key"],
        answer: "Space bar",
      },
      {
        question: "Which device can make a paper copy of a picture?",
        choices: ["Printer", "Mouse", "Microphone"],
        answer: "Printer",
      },
      {
        question:
          "What should you do with a computer when you finish using it at school?",
        choices: [
          "Follow the teacher's instructions",
          "Pour water on it",
          "Hide the keyboard",
        ],
        answer: "Follow the teacher's instructions",
      },
      {
        question: "Which tool lets you record your voice?",
        choices: ["Microphone", "Monitor", "Printer"],
        answer: "Microphone",
      },
    ],
    2: [
      {
        question: "Which key moves the cursor to a new line?",
        choices: ["Enter", "Caps Lock", "Shift"],
        answer: "Enter",
      },
      {
        question: "What is a computer file?",
        choices: ["Saved information", "A computer chair", "A power cable"],
        answer: "Saved information",
      },
      {
        question: "Which device can make a paper copy of a document?",
        choices: ["Printer", "Webcam", "Speaker"],
        answer: "Printer",
      },
      {
        question: "What is a safe thing to share online?",
        choices: [
          "A made-up character's name",
          "Your home address",
          "Your secret password",
        ],
        answer: "A made-up character's name",
      },
      {
        question: "Which icon often opens a program?",
        choices: ["App icon", "Battery symbol", "Volume bar"],
        answer: "App icon",
      },
      {
        question: "What does the backspace key usually do?",
        choices: [
          "Delete the character before the cursor",
          "Make the screen brighter",
          "Print the page",
        ],
        answer: "Delete the character before the cursor",
      },
      {
        question: "Which device can move a pointer on a screen?",
        choices: ["Touchpad", "Headphones", "Microphone"],
        answer: "Touchpad",
      },
    ],
    3: [
      {
        question: "What is an operating system?",
        choices: [
          "Software that manages a computer",
          "A type of keyboard",
          "A paper folder",
        ],
        answer: "Software that manages a computer",
      },
      {
        question: "Which key is often used to make a capital letter?",
        choices: ["Shift", "Enter", "Backspace"],
        answer: "Shift",
      },
      {
        question: "What is a search engine used for?",
        choices: [
          "Finding information online",
          "Drawing on paper",
          "Charging a tablet",
        ],
        answer: "Finding information online",
      },
      {
        question: "Which file type is commonly used for a picture?",
        choices: [".jpg", ".mp3", ".txt"],
        answer: ".jpg",
      },
      {
        question: "What should you do if a strange pop-up appears?",
        choices: [
          "Tell a trusted adult",
          "Click every button",
          "Share your password",
        ],
        answer: "Tell a trusted adult",
      },
      {
        question: "What does the Save command do?",
        choices: [
          "Keeps your work for later",
          "Deletes the whole program",
          "Turns off the keyboard",
        ],
        answer: "Keeps your work for later",
      },
      {
        question:
          "Which device is used to scan a paper picture into a computer?",
        choices: ["Scanner", "Speaker", "Router"],
        answer: "Scanner",
      },
    ],
    4: [
      {
        question: "What is a hyperlink?",
        choices: [
          "A link that opens another page or resource",
          "A type of computer battery",
          "A printed photograph",
        ],
        answer: "A link that opens another page or resource",
      },
      {
        question: "What is the safest password?",
        choices: [
          "A long mix of words and characters kept private",
          "Your first name",
          "The word password",
        ],
        answer: "A long mix of words and characters kept private",
      },
      {
        question:
          "Which program is best for arranging numbers in rows and columns?",
        choices: ["Spreadsheet", "Music player", "Web browser"],
        answer: "Spreadsheet",
      },
      {
        question: "What does the undo command usually do?",
        choices: [
          "Reverses the last action",
          "Sends an email",
          "Opens the printer",
        ],
        answer: "Reverses the last action",
      },
      {
        question: "What is a folder used for on a computer?",
        choices: [
          "Organizing files",
          "Increasing screen size",
          "Typing a password",
        ],
        answer: "Organizing files",
      },
      {
        question: "Which device shares an internet connection with computers?",
        choices: ["Router", "Scanner", "Projector"],
        answer: "Router",
      },
      {
        question: "What does copyright protect?",
        choices: [
          "A creator's original work",
          "A computer's screen",
          "Every public fact",
        ],
        answer: "A creator's original work",
      },
    ],
    5: [
      {
        question: "What is a cell in a spreadsheet?",
        choices: [
          "A box where a row and column meet",
          "A computer's power button",
          "A web page address",
        ],
        answer: "A box where a row and column meet",
      },
      {
        question: "What does CC mean in an email?",
        choices: [
          "Send a visible copy to another recipient",
          "Delete the message",
          "Encrypt the computer",
        ],
        answer: "Send a visible copy to another recipient",
      },
      {
        question: "Which is an example of personal information?",
        choices: [
          "Your home address",
          "A public weather report",
          "A book's title",
        ],
        answer: "Your home address",
      },
      {
        question: "What is a database used for?",
        choices: [
          "Storing and organizing information",
          "Playing only one song",
          "Changing a monitor's color",
        ],
        answer: "Storing and organizing information",
      },
      {
        question: "Which chart is useful for comparing amounts in categories?",
        choices: ["Bar chart", "Map legend", "Text paragraph"],
        answer: "Bar chart",
      },
      {
        question: "What does plagiarism mean?",
        choices: [
          "Using someone else's work without giving credit",
          "Saving your own work twice",
          "Correcting a spelling mistake",
        ],
        answer: "Using someone else's work without giving credit",
      },
      {
        question: "Why should you log out of a shared account?",
        choices: [
          "To help protect your account",
          "To make the screen larger",
          "To erase the keyboard",
        ],
        answer: "To help protect your account",
      },
    ],
    6: [
      {
        question: "What is one benefit of cloud storage?",
        choices: [
          "Accessing files from different connected devices",
          "Making a keyboard wireless",
          "Printing without paper",
        ],
        answer: "Accessing files from different connected devices",
      },
      {
        question: "What is two-factor authentication?",
        choices: [
          "Using two kinds of proof to sign in",
          "Having two usernames",
          "Changing a screen twice",
        ],
        answer: "Using two kinds of proof to sign in",
      },
      {
        question: "Which number system uses only 0 and 1?",
        choices: ["Binary", "Decimal", "Roman"],
        answer: "Binary",
      },
      {
        question: "What does a spreadsheet formula usually begin with?",
        choices: ["An equals sign", "A question mark", "A comma"],
        answer: "An equals sign",
      },
      {
        question: "What is the purpose of a software update?",
        choices: [
          "Fix problems and improve software",
          "Remove all files",
          "Make the keyboard wireless",
        ],
        answer: "Fix problems and improve software",
      },
      {
        question: "What is a reliable way to check an online claim?",
        choices: [
          "Compare it with trustworthy sources",
          "Believe the first post",
          "Forward it without reading",
        ],
        answer: "Compare it with trustworthy sources",
      },
      {
        question: "What does a file extension usually tell you?",
        choices: [
          "The file type or format",
          "Who owns the computer",
          "How heavy the device is",
        ],
        answer: "The file type or format",
      },
    ],
    7: [
      {
        question: "What is an algorithm?",
        choices: [
          "A step-by-step method for solving a problem",
          "A computer screen setting",
          "A type of internet cable",
        ],
        answer: "A step-by-step method for solving a problem",
      },
      {
        question: "What is a variable in a program?",
        choices: [
          "A named place to store a value",
          "A fixed picture on a screen",
          "A computer's fan",
        ],
        answer: "A named place to store a value",
      },
      {
        question: "What does an if statement do in a program?",
        choices: [
          "Runs instructions when a condition is true",
          "Always deletes the program",
          "Changes the computer's language",
        ],
        answer: "Runs instructions when a condition is true",
      },
      {
        question: "What is phishing?",
        choices: [
          "A deceptive attempt to steal private information",
          "A method of backing up files",
          "A safe way to format text",
        ],
        answer: "A deceptive attempt to steal private information",
      },
      {
        question: "What is an IP address used for?",
        choices: [
          "Identifying a device on a network",
          "Measuring a computer's weight",
          "Naming a spreadsheet column",
        ],
        answer: "Identifying a device on a network",
      },
      {
        question: "Why is open-source software useful?",
        choices: [
          "Its source code can be examined and modified under its license",
          "It never needs testing",
          "It cannot be shared",
        ],
        answer:
          "Its source code can be examined and modified under its license",
      },
      {
        question: "What is a loop in programming?",
        choices: [
          "Instructions repeated while a rule is met",
          "A cable tied in a circle",
          "A password reset",
        ],
        answer: "Instructions repeated while a rule is met",
      },
    ],
    8: [
      {
        question: "What is encryption?",
        choices: [
          "Converting information into a coded form",
          "Deleting information permanently",
          "Compressing a keyboard",
        ],
        answer: "Converting information into a coded form",
      },
      {
        question: "What is an API?",
        choices: [
          "A defined way for software systems to communicate",
          "A type of computer monitor",
          "A paper filing system",
        ],
        answer: "A defined way for software systems to communicate",
      },
      {
        question: "What is the purpose of a Boolean value?",
        choices: [
          "Representing true or false",
          "Storing a photograph",
          "Measuring network speed",
        ],
        answer: "Representing true or false",
      },
      {
        question: "What does version control help developers do?",
        choices: [
          "Track changes to files over time",
          "Increase a laptop's battery size",
          "Translate every webpage",
        ],
        answer: "Track changes to files over time",
      },
      {
        question: "Which practice helps reduce the risk of malware?",
        choices: [
          "Install updates from trusted sources",
          "Open every unknown attachment",
          "Reuse one password everywhere",
        ],
        answer: "Install updates from trusted sources",
      },
      {
        question: "What is a digital footprint?",
        choices: [
          "The trail of information left by online activity",
          "A mark made by a mouse",
          "A printed computer manual",
        ],
        answer: "The trail of information left by online activity",
      },
      {
        question: "What does an HTML tag generally do?",
        choices: [
          "Marks the structure or meaning of webpage content",
          "Stores electricity for a computer",
          "Connects a printer to paper",
        ],
        answer: "Marks the structure or meaning of webpage content",
      },
    ],
  },
};
