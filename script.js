const questions = [
        {
            question: "What is symmetry in nature?",
            answers: ["A pattern that repeats", "A pattern that balances on different sides", "A random pattern", "A never-ending pattern"],
            correctAnswer: "A pattern that balances on different sides"
        },
        {
            question: "Which of the following is an example of a fractal?",
            answers: ["Snowflake", "Sea star", "Tree branches", "Hurricane"],
            correctAnswer: "Tree branches"
        },
        {
            question: "What is the Fibonacci sequence?",
            answers: [
                "A sequence where each number is the product of the two before it",
                "A sequence where each number is the sum of the two before it",
                "A pattern in nature that repeats indefinitely",
                "A symmetrical pattern with two sides"
            ],
            correctAnswer: "A sequence where each number is the sum of the two before it"
        },
        {
            question: "Which pattern is commonly found in seashells?",
            answers: ["Symmetry", "Fibonacci sequence", "Spirals", "Tessellations"],
            correctAnswer: "Spirals"
        },
        {
            question: "What is a tessellation?",
            answers: [
                "A repeating pattern of tiles or cubes",
                "A logarithmic spiral",
                "A never-ending pattern",
                "A symmetrical pattern on all sides"
            ],
            correctAnswer: "A repeating pattern of tiles or cubes"
        },
        {
            question: "In engineering, which field uses math for designing rockets and satellites?",
            answers: ["Finance", "Medicine", "Engineering", "Media"],
            correctAnswer: "Engineering"
        },
        {
            question: "Which mathematical concept is commonly used in digital music and movie graphics?",
            answers: ["Tessellations", "Fibonacci sequence", "Fractals", "Mathematical symbols"],
            correctAnswer: "Fractals"
        },
        {
            question: "How is math used in finance and business?",
            answers: [
                "To predict weather patterns",
                "For designing survey systems",
                "For supply chains, banking, and loans",
                "For creating complex media graphics"
            ],
            correctAnswer: "For supply chains, banking, and loans"
        },
    //{
    //    question: "Which planet is known as the Red Planet?",
    //    image: "path_to_image/mars.png",
    //    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    //    correctAnswer: "Mars"
    //}
    {
        question: "What kind of symmetry does a snowflake exhibit?",
        answers: ["Two-fold symmetry", "Six-fold symmetry", "Three-fold symmetry", "No symmetry"],
        correctAnswer: "Six-fold symmetry"
    },
    {
        question: "What type of spiral gets smaller as it goes?",
        answers: ["Archimedean spiral", "Fibonacci spiral", "Logarithmic spiral", "Symmetrical spiral"],
        correctAnswer: "Logarithmic spiral"
    },
    {
        question: "In what natural phenomenon can you find fractal patterns?",
        answers: ["Rivers", "Hurricanes", "Seashells", "Snowflakes"],
        correctAnswer: "Rivers"
    },
    {
        question: "Which of the following uses mathematical patterns in modern technology?",
        answers: ["Reading DVDs and CDs", "Making clothing", "Building houses", "Writing novels"],
        correctAnswer: "Reading DVDs and CDs"
    },
    {
        question: "Which field uses math to predict epidemics and analyze population dynamics?",
        answers: ["Finance", "Medicine and Health", "Media", "Engineering"],
        correctAnswer: "Medicine and Health"
    },
    {
        question: "Which pattern type is commonly seen in both living and non-living things?",
        answers: ["Fractals", "Tessellations", "Symmetry", "Spirals"],
        correctAnswer: "Tessellations"
    },
    {
        question: "What mathematical concept is used in breaking the Enigma code?",
        answers: ["Algebra", "Cryptography", "Geometry", "Fractals"],
        correctAnswer: "Cryptography"
    },
    {
        question: "Which engineering field applies math in the design of roller coasters?",
        answers: ["Surveying", "Robotics", "Construction", "Automotive Design"],
        correctAnswer: "Construction"
    },
    {
        question: "What is a prime characteristic of mathematical language?",
        answers: ["Ambiguity", "Imprecision", "Conciseness", "Lengthy explanations"],
        correctAnswer: "Conciseness"
    },
    {
        question: "In math, what is the function of the symbol ∈?",
        answers: ["Denotes equality", "Denotes less than", "Indicates set membership", "Indicates an implication"],
        correctAnswer: "Indicates set membership"
    },
    {
        question: "Which field relies on math for developing navigation systems?",
        answers: ["Finance", "Engineering", "Medicine", "Media"],
        correctAnswer: "Engineering"
    },
    {
        question: "Which pattern is less understood in nature, often seen in honeybee colonies?",
        answers: ["Symmetry", "Fractals", "Fibonacci sequence", "Spirals"],
        correctAnswer: "Fibonacci sequence"
    },
    {
        question: "Which logical connective is used to represent 'and' in mathematical sentences?",
        answers: ["~", "⋁", "⇒", "⋀"],
        correctAnswer: "⋀"
    },
    {
        question: "In which field is math used for digital music and shuffling playlists?",
        answers: ["Medicine", "Media", "Finance", "Engineering"],
        correctAnswer: "Media"
    },
    {
        question: "Which of the following patterns is present in the shape of galaxies?",
        answers: ["Symmetry", "Fractals", "Logarithmic spirals", "Tessellations"],
        correctAnswer: "Logarithmic spirals"
    },
    {
        question: "True or False: The golden ratio is often symbolized by the Greek letter phi (Φ).",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "True or False: Fractals are complex patterns that are self-similar across different scales.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "True or False: Fibonacci sequences are often used to model population growth.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "True or False: The Mandelbrot set is an example of a simple mathematical shape.",
        answers: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "True or False: A logarithmic spiral expands at a constant rate.",
        answers: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "True or False: Symmetry only exists in living organisms.",
        answers: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "True or False: Tessellations are patterns of shapes that cover a plane with no overlaps or gaps.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "True or False: Pi (π) is an irrational number.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "True or False: A fractal pattern can continue infinitely without repeating.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "True or False: A Fibonacci sequence is based on adding the previous two numbers to get the next number.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "The correct statement is: A: Fibonacci sequences are found in sunflower seeds, B: Fibonacci sequences are found in galaxies",
        answers: ["A", "B", "Both"],
        correctAnswer: "A"
    },
    {
        question: "The correct statement is: A: Logarithmic spirals are common in hurricanes, B: Logarithmic spirals are common in snail shells",
        answers: ["A", "B", "Both"],
        correctAnswer: "Both"
    },
    {
        question: "The correct statement is: A: Tessellations are used in flooring patterns, B: Tessellations are used in animal skin patterns",
        answers: ["A", "B", "Both"],
        correctAnswer: "Both"
    },
    {
        question: "The correct statement is: A: Snowflakes exhibit six-fold symmetry, B: Snowflakes exhibit four-fold symmetry",
        answers: ["A", "B", "Both"],
        correctAnswer: "A"
    },
    {
        question: "The correct statement is: A: Archimedean spirals increase in distance between their turns, B: Logarithmic spirals maintain constant distance between their turns",
        answers: ["A", "B", "Both"],
        correctAnswer: "A"
    },
    {
        question: "The correct statement is: A: Fractals are only theoretical and do not appear in nature, B: Fractals can be observed in natural phenomena like river networks",
        answers: ["A", "B", "Both"],
        correctAnswer: "B"
    },
    {
        question: "The correct statement is: A: Pi (π) is a rational number, B: Pi (π) is an irrational number",
        answers: ["A", "B", "Both"],
        correctAnswer: "B"
    },
    {
        question: "The correct statement is: A: Symmetry is common in crystals, B: Symmetry is common in chaotic systems",
        answers: ["A", "B", "Both"],
        correctAnswer: "A"
    },
    {
        question: "The correct statement is: A: Cryptography is used for encrypting data, B: Cryptography is used for building bridges",
        answers: ["A", "B", "Both"],
        correctAnswer: "A"
    },
    {
        question: "What kind of pattern is this?",
        image: "pattern.png",
        answers: ["Tessellations", "Fibonnaci", "Symmetry", "Fractals"],
        correctAnswer: "Tessellations"
    },
    {
        question: "What kind of pattern is this?",
        image: "pattern1.png",
        answers: ["Tessellations", "Fibonacci", "Symmetry", "Fractals"],
        correctAnswer: "Tessellations"
    },
    {
        question: "What kind of pattern is this?",
        image: "pattern2.png",
        answers: ["Tessellations", "Fibonacci", "Symmetry", "Fractals"],
        correctAnswer: "Fibonacci"
    },
    {
        question: "What kind of pattern is this?",
        image: "pattern3.png",
        answers: ["Tessellations", "Fibonacci", "Symmetry", "Fractals"],
        correctAnswer: "Symmetry"
    },
    {
        question: "What kind of pattern is this?",
        image: "pattern4.png",
        answers: ["Tessellations", "Fibonacci", "Symmetry", "Fractals"],
        correctAnswer: "Fractals"
    },
    {
        question: "What pattern is often used in flooring designs?",
        image: "floor.png",
        answers: ["Tessellations", "Fibonacci", "Symmetry", "Fractals"],
        correctAnswer: "Tessellations"
    },
    {
        question: "What sequence is often used to model population growth?",
        answers: ["Fibonacci Sequence", "Arithmetic Sequence", "Geometric Sequence", "None"],
        correctAnswer: "Fibonacci Sequence"
    },
    {
        question: "What fractal is commonly found in nature?",
        answers: ["Mandelbrot Set", "Sierpinski Triangle", "Tree Fractal", "None"],
        correctAnswer: "Tree Fractal"
    },
];

// Shuffle questions and answers
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(questions);

// Initialize quiz
let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');

function loadQuiz() {
    quizContainer.innerHTML = ''; // Clear previous quiz
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.setAttribute('data-index', index);

        // Add question text
        const questionText = document.createElement('h2');
        questionText.textContent = q.question;
        questionDiv.appendChild(questionText);

        // Add question image if available
        if (q.image) {
            const questionImage = document.createElement('img');
            questionImage.src = q.image;
            questionImage.alt = 'question image';
            questionImage.classList.add('question-image');
            questionDiv.appendChild(questionImage);
        }

        // Add answers in random order
        shuffle(q.answers);
        q.answers.forEach((answer) => {
            const label = document.createElement('label');
            label.classList.add('answer');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = answer;

            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));
            questionDiv.appendChild(label);
        });

        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswers() {
    const questionsDivs = document.querySelectorAll('.question');
    score = 0;
    
    questionsDivs.forEach((qDiv, index) => {
        const selectedAnswer = qDiv.querySelector('input:checked');
        const correctAnswer = questions[index].correctAnswer;

        if (selectedAnswer) {
            const answerLabels = qDiv.querySelectorAll('.answer');
            answerLabels.forEach((label) => {
                const input = label.querySelector('input');
                if (input.value === correctAnswer) {
                    label.classList.add('correct');
                } else if (input.checked) {
                    label.classList.add('incorrect');
                }
            });

            if (selectedAnswer.value === correctAnswer) {
                score++;
            }
        }
    });

    resultContainer.innerHTML = `Your score: ${score} / ${questions.length}`;
    smoothScrollToTop();
    submitButton.disabled = true;
    retryButton.disabled = false;
}

function retryQuiz() {
    shuffle(questions);
    loadQuiz();
    resultContainer.innerHTML = '';
    submitButton.disabled = false;
    retryButton.disabled = true;
}

// Smooth scroll to top
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

submitButton.addEventListener('click', checkAnswers);
retryButton.addEventListener('click', retryQuiz);

// Initialize quiz on page load
retryQuiz();

// Smooth scroll back to top
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Shuffle questions and answers
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Load quiz questions
function loadQuiz() {
    quizContainer.innerHTML = ''; // Clear previous quiz
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.setAttribute('data-index', index);

        // Add question text
        const questionText = document.createElement('h2');
        questionText.textContent = q.question;
        questionDiv.appendChild(questionText);

        // Add question image if available
        if (q.image) {
            const questionImage = document.createElement('img');
            questionImage.src = q.image;
            questionImage.alt = 'question image';
            questionImage.classList.add('question-image');
            questionDiv.appendChild(questionImage);
        }

        // Add answers in random order
        shuffle(q.answers);
        q.answers.forEach((answer) => {
            const label = document.createElement('label');
            label.classList.add('answer');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = answer;

            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));
            questionDiv.appendChild(label);
        });

        quizContainer.appendChild(questionDiv);
    });
}

// Check and highlight answers
function checkAnswers() {
    const questionsDivs = document.querySelectorAll('.question');
    score = 0;
    
    questionsDivs.forEach((qDiv, index) => {
        const selectedAnswer = qDiv.querySelector('input:checked');
        const correctAnswer = questions[index].correctAnswer;

        if (selectedAnswer) {
            const answerLabels = qDiv.querySelectorAll('.answer');
            answerLabels.forEach((label) => {
                const input = label.querySelector('input');
                if (input.value === correctAnswer) {
                    label.classList.add('correct');
                } else if (input.checked) {
                    label.classList.add('incorrect');
                }
            });

            if (selectedAnswer.value === correctAnswer) {
                score++;
            }
        }
    });

    resultContainer.innerHTML = `Your score: ${score} / ${questions.length}`;
    smoothScrollToTop();
    submitButton.disabled = true;
    retryButton.disabled = false;
}

function retryQuiz() {
    shuffle(questions);
    loadQuiz();
    resultContainer.innerHTML = '';
    submitButton.disabled = false;
    retryButton.disabled = true;
}

// Event listeners for buttons
submitButton.addEventListener('click', checkAnswers);
retryButton.addEventListener('click', retryQuiz);

// Initialize quiz on page load
retryQuiz();

