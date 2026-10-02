
// ===============================
// START STUDYING
// ===============================

function startStudying() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}


// ===============================
// FEATURE BUTTON
// ===============================

function openFeature(feature) {

    if (feature === "quiz") {

        document.getElementById("quiz").scrollIntoView({
            behavior: "smooth"
        });

    }

    else if (feature === "planner") {

        document.getElementById("planner").scrollIntoView({
            behavior: "smooth"
        });

    }

    else if (feature === "timer") {

        document.getElementById("timer").scrollIntoView({
            behavior: "smooth"
        });

    }

    else {

        alert(
            feature.charAt(0).toUpperCase() +
            feature.slice(1) +
            " feature will be added soon! 🚀"
        );

    }

}


// ===============================
// DARK / LIGHT THEME
// ===============================

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}


// ===============================
// STUDY PLANNER
// ===============================

let tasks = [];
// Load saved tasks
const savedTasks = localStorage.getItem("studyTasks");

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
}


// ADD TASK
function addTask() {

    const input = document.getElementById("taskInput");

    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a study task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
    

    input.value = "";

    displayTasks();
}
displayTasks();
// ===============================
// QUIZ ZONE
// ===============================

const quizQuestions = [

    {
        subject: "java",
        question: "Which keyword is used to inherit a class in Java?",

        options: [
            "extends",
            "implements",
            "inherit",
            "super"
        ],

        answer: 0
    },


    {
        subject: "daa",
        question: "Which data structure follows LIFO principle?",

        options: [
            "Queue",
            "Stack",
            "Array",
            "Linked List"
        ],

        answer: 1
    },


    {
        subject: "java",
question: "Which keyword is used to create an object in Java?",

options: [
    "class",
    "new",
    "this",
    "static"
],

answer: 1
    },

    {
    subject: "java",
    question: "Which method is the entry point of a Java program?",
    options: [
        "start()",
        "main()",
        "run()",
        "execute()"
    ],
    answer: 1
},

{
    subject: "java",
    question: "Which keyword is used to define a constant in Java?",
    options: [
        "const",
        "final",
        "static",
        "constant"
    ],
    answer: 1
},

{
    subject: "java",
    question: "Which of these is not a primitive data type in Java?",
    options: [
        "int",
        "float",
        "String",
        "boolean"
    ],
    answer: 2
},

{
    subject: "java",
    question: "Which keyword is used to create a subclass in Java?",
    options: [
        "extends",
        "inherits",
        "super",
        "implements"
    ],
    answer: 0
},

{
    subject: "java",
    question: "Which collection does not allow duplicate elements?",
    options: [
        "List",
        "Set",
        "ArrayList",
        "LinkedList"
    ],
    answer: 1
},

{
    subject: "java",
    question: "Which keyword is used to handle exceptions?",
    options: [
        "try",
        "throwing",
        "error",
        "catching"
    ],
    answer: 0
},

{
    subject: "java",
    question: "Which concept allows the same method name with different parameters?",
    options: [
        "Inheritance",
        "Encapsulation",
        "Method Overloading",
        "Abstraction"
    ],
    answer: 2
},

{
    subject: "java",
    question: "Which keyword refers to the current object in Java?",
    options: [
        "self",
        "current",
        "this",
        "object"
    ],
    answer: 2
},


    {
       subject: "os",
        question: "What does CPU stand for?",

        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing User"
        ],

        answer: 0
    },

    {
    subject: "os",
    question: "Which part of the operating system manages processes?",
    options: [
        "Process Manager",
        "File Manager",
        "Device Manager",
        "Memory Manager"
    ],
    answer: 0
},

{
    subject: "os",
    question: "Which scheduling algorithm executes processes in the order they arrive?",
    options: [
        "SJF",
        "FCFS",
        "Round Robin",
        "Priority"
    ],
    answer: 1
},

{
    subject: "os",
    question: "Which scheduling algorithm uses a time quantum?",
    options: [
        "FCFS",
        "SJF",
        "Round Robin",
        "Priority"
    ],
    answer: 2
},

{
    subject: "os",
    question: "What is a process?",
    options: [
        "A program in execution",
        "A file stored on disk",
        "A hardware device",
        "A compiler"
    ],
    answer: 0
},

{
    subject: "os",
    question: "Which memory management technique divides memory into fixed-size blocks?",
    options: [
        "Segmentation",
        "Paging",
        "Compaction",
        "Spooling"
    ],
    answer: 1
},

{
    subject: "os",
    question: "Which of the following is a necessary condition for deadlock?",
    options: [
        "Circular Wait",
        "Compilation",
        "Paging",
        "Scheduling"
    ],
    answer: 0
},

{
    subject: "os",
    question: "Which algorithm is commonly used for page replacement?",
    options: [
        "FIFO",
        "DFS",
        "Dijkstra",
        "Kruskal"
    ],
    answer: 0
},

{
    subject: "os",
    question: "What does PCB stand for?",
    options: [
        "Process Control Block",
        "Program Control Bus",
        "Process Communication Buffer",
        "Program Control Block"
    ],
    answer: 0
},

{
    subject: "os",
    question: "Which component of an operating system handles hardware devices?",
    options: [
        "Device Driver",
        "Compiler",
        "Loader",
        "Shell"
    ],
    answer: 0
},


    {
       subject: "daa",
        question: "Which algorithm is commonly used to find the shortest path?",

        options: [
            "Dijkstra's Algorithm",
            "Bubble Sort",
            "Binary Search",
            "Selection Sort"
        ],

        answer: 0
    }
    ,

{
    subject: "daa",
    question: "Which sorting algorithm uses the divide and conquer technique?",
    options: [
        "Bubble Sort",
        "Merge Sort",
        "Selection Sort",
        "Insertion Sort"
    ],
    answer: 1
},

{
    subject: "daa",
    question: "What is the worst-case time complexity of Bubble Sort?",
    options: [
        "O(n)",
        "O(log n)",
        "O(n²)",
        "O(n log n)"
    ],
    answer: 2
},

{
    subject: "daa",
    question: "Which searching algorithm requires a sorted array?",
    options: [
        "Linear Search",
        "Binary Search",
        "DFS",
        "BFS"
    ],
    answer: 1
},

{
    subject: "daa",
    question: "Which algorithm is used to find a minimum spanning tree?",
    options: [
        "Dijkstra's Algorithm",
        "Kruskal's Algorithm",
        "Binary Search",
        "Merge Sort"
    ],
    answer: 1
},

{
    subject: "daa",
    question: "Which algorithm is used to find the shortest path from a source vertex?",
    options: [
        "Dijkstra's Algorithm",
        "Kruskal's Algorithm",
        "Prim's Algorithm",
        "Merge Sort"
    ],
    answer: 0
},

{
    subject: "daa",
    question: "Which sorting algorithm has an average time complexity of O(n log n)?",
    options: [
        "Bubble Sort",
        "Merge Sort",
        "Linear Search",
        "Selection Sort"
    ],
    answer: 1
},

{
    subject: "daa",
    question: "Which data structure is commonly used in BFS?",
    options: [
        "Stack",
        "Queue",
        "Heap",
        "Tree"
    ],
    answer: 1
},




{
    subject: "daa",
    question: "What is the main idea behind the Greedy algorithm?",
    options: [
        "Choose the locally best option",
        "Try every possible solution",
        "Always divide the problem",
        "Use only recursion"
    ],
    answer: 0
},
{
    subject: "dbms",
    question: "What does DBMS stand for?",
    options: [
        "Database Management System",
        "Data Backup Management System",
        "Database Monitoring System",
        "Data Management Software"
    ],
    answer: 0
},

{
    subject: "dbms",
    question: "Which key uniquely identifies each record in a table?",
    options: [
        "Foreign Key",
        "Primary Key",
        "Candidate Key",
        "Composite Key"
    ],
    answer: 1
},
{
    subject: "dbms",
    question: "Which SQL command is used to retrieve data from a database?",
    options: [
        "INSERT",
        "UPDATE",
        "SELECT",
        "DELETE"
    ],
    answer: 2
},

{
    subject: "dbms",
    question: "Which command is used to remove a table from a database?",
    options: [
        "DELETE",
        "REMOVE",
        "DROP",
        "CLEAR"
    ],
    answer: 2
},
{
    subject: "dbms",
    question: "Which normal form removes repeating groups?",
    options: [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    answer: 0
},

{
    subject: "dbms",
    question: "Which key is used to establish a relationship between two tables?",
    options: [
        "Primary Key",
        "Foreign Key",
        "Super Key",
        "Alternate Key"
    ],
    answer: 1
},
{
    subject: "dbms",
    question: "Which SQL clause is used to filter records?",
    options: [
        "ORDER BY",
        "WHERE",
        "GROUP BY",
        "HAVING"
    ],
    answer: 1
},

{
    subject: "dbms",
    question: "Which command is used to add a new record to a table?",
    options: [
        "INSERT",
        "UPDATE",
        "CREATE",
        "ALTER"
    ],
    answer: 0
},
{
    subject: "dbms",
    question: "Which SQL command is used to change the structure of a table?",
    options: [
        "UPDATE",
        "ALTER",
        "MODIFY",
        "CHANGE"
    ],
    answer: 1
},

{
    subject: "dbms",
    question: "Which normal form removes partial dependency?",
    options: [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    answer: 1
},
{
    subject: "cn",
    question: "What does LAN stand for?",
    options: [
        "Local Area Network",
        "Large Area Network",
        "Long Area Network",
        "Local Access Network"
    ],
    answer: 0
},

{
    subject: "cn",
    question: "Which device is used to connect different networks?",
    options: [
        "Hub",
        "Switch",
        "Router",
        "Repeater"
    ],
    answer: 2
},
{
    subject: "cn",
    question: "Which protocol is used to send emails?",
    options: [
        "HTTP",
        "FTP",
        "SMTP",
        "DNS"
    ],
    answer: 2
},

{
    subject: "cn",
    question: "What does IP stand for?",
    options: [
        "Internet Protocol",
        "Internal Protocol",
        "Internet Process",
        "Information Protocol"
    ],
    answer: 0
},

{
    subject: "cn",
    question: "Which layer of the OSI model is responsible for routing?",
    options: [
        "Transport Layer",
        "Network Layer",
        "Data Link Layer",
        "Session Layer"
    ],
    answer: 1
},

{
    subject: "cn",
    question: "Which device forwards data using MAC addresses?",
    options: [
        "Router",
        "Gateway",
        "Switch",
        "Modem"
    ],
    answer: 2
},

{
    subject: "cn",
    question: "What is the full form of HTTP?",
    options: [
        "HyperText Transfer Protocol",
        "HighText Transfer Protocol",
        "Hyper Transfer Text Protocol",
        "HyperText Transmission Process"
    ],
    answer: 0
},

{
    subject: "cn",
    question: "Which topology connects all devices to a central device?",
    options: [
        "Bus",
        "Ring",
        "Mesh",
        "Star"
    ],
    answer: 3
},

{
    subject: "cn",
    question: "Which protocol is used to translate domain names into IP addresses?",
    options: [
        "FTP",
        "DNS",
        "SMTP",
        "TCP"
    ],
    answer: 1
},

{
    subject: "cn",
    question: "Which transport layer protocol is connection-oriented?",
    options: [
        "UDP",
        "IP",
        "TCP",
        "ARP"
    ],
    answer: 2
},
{
    subject: "python",
    question: "Which keyword is used to define a function in Python?",
    options: [
        "function",
        "def",
        "fun",
        "define"
    ],
    answer: 1
},

{
    subject: "python",
    question: "Which symbol is used to create a comment in Python?",
    options: [
        "//",
        "/* */",
        "#",
        "<!-- -->"
    ],
    answer: 2
},

{
    subject: "python",
    question: "Which data type is used to store True or False values?",
    options: [
        "int",
        "str",
        "bool",
        "float"
    ],
    answer: 2
},

{
    subject: "python",
    question: "Which function is used to find the length of a list?",
    options: [
        "size()",
        "length()",
        "len()",
        "count()"
    ],
    answer: 2
},

{
    subject: "python",
    question: "Which of the following is a mutable data type in Python?",
    options: [
        "Tuple",
        "String",
        "List",
        "Integer"
    ],
    answer: 2
},

{
    subject: "python",
    question: "Which keyword is used to create a class in Python?",
    options: [
        "object",
        "class",
        "define",
        "struct"
    ],
    answer: 1
},

{
    subject: "python",
    question: "Which operator is used for exponentiation in Python?",
    options: [
        "^",
        "**",
        "//",
        "%%"
    ],
    answer: 1
},

{
    subject: "python",
    question: "Which function is used to display output in Python?",
    options: [
        "echo()",
        "display()",
        "print()",
        "output()"
    ],
    answer: 2
},

{
    subject: "python",
    question: "Which collection stores data in key-value pairs?",
    options: [
        "List",
        "Tuple",
        "Set",
        "Dictionary"
    ],
    answer: 3
},

{
    subject: "python",
    question: "Which keyword is used to import a module in Python?",
    options: [
        "include",
        "using",
        "import",
        "require"
    ],
    answer: 2
},
];


let currentQuestion = 0;

let score = 0;

let selectedAnswer = false;


// LOAD QUESTION
let selectedQuestions = quizQuestions;
let selectedSubject = "java";
function selectSubject(subject) {
    selectedSubject = subject;

    currentQuestion = 0;
    score = 0;

    selectedQuestions = quizQuestions.filter(function(question) {
       return question.subject.toLowerCase() === subject.toLowerCase();
    });

    loadQuestion();
}
function loadQuestion() {

    const question =
        selectedQuestions[currentQuestion];


    document.getElementById("questionNumber")
        .innerText =
        "Question " +
        (currentQuestion + 1) +
        " of " +
       selectedQuestions.length;


    document.getElementById("currentScore")
        .innerText =
        "Score: " + score;


    document.getElementById("question")
        .innerText =
        question.question;


    const optionsContainer =
        document.getElementById("options");


    optionsContainer.innerHTML = "";


    selectedAnswer = false;


    question.options.forEach(function(option, index) {

        const button =
            document.createElement("button");


        button.className = "option";

        button.innerText = option;


        button.onclick = function() {

            selectAnswer(button, index);

        };


        optionsContainer.appendChild(button);

    });

}


// SELECT ANSWER

function selectAnswer(button, selectedIndex) {

    if (selectedAnswer) {
        return;
    }


    selectedAnswer = true;


    
        const correctIndex =
    selectedQuestions[currentQuestion].answer;


    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(function(option, index) {

        if (index === correctIndex) {

            option.classList.add("correct");

        }

    });


    if (selectedIndex === correctIndex) {

        score++;

        button.classList.add("correct");

    }
    else {

        button.classList.add("wrong");

    }


    document.getElementById("currentScore")
        .innerText =
        "Score: " + score;

}


// NEXT QUESTION

function nextQuestion() {

    if (!selectedAnswer) {

        alert("Please select an answer first!");

        return;
    }


    currentQuestion++;


    if (currentQuestion < selectedQuestions.length) {

        loadQuestion();

    }
    else {

        showResult();

    }

}


// SHOW RESULT

function showResult() {

    document.getElementById("question")
        .style.display = "none";


    document.getElementById("options")
        .style.display = "none";


    document.getElementById("nextBtn")
        .style.display = "none";


    document.getElementById("quizResult")
        .style.display = "block";


    
        document.getElementById("quizResult")
    .innerHTML = `
    
    <h2>🎉 Quiz Completed!</h2>

    <p>
        Your Score:
        <strong>${score} / ${selectedQuestions.length}</strong>
    </p>

    <p>
        Percentage:
        <strong>${Math.round((score / selectedQuestions.length) * 100)}%</strong>
    </p>

    <p>
        ${
            score === selectedQuestions.length
                ? "🔥 Perfect Score! Excellent work!"
                : score >= selectedQuestions.length * 0.7
                ? "👏 Great Job! Keep it up!"
                : score >= selectedQuestions.length * 0.5
                ? "👍 Good attempt! You can improve more!"
                : "💪 Keep practicing! You will do better next time!"
        }
    </p>

    <button
        class="restart-btn"
        onclick="restartQuiz()">
        Try Again 🔄
    </button>

`;
}


// RESTART QUIZ

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document.getElementById("question")
        .style.display = "block";


    document.getElementById("options")
        .style.display = "grid";


    document.getElementById("nextBtn")
        .style.display = "inline-block";


    document.getElementById("quizResult")
        .style.display = "none";


    loadQuestion();

}


// START QUIZ

loadQuestion();

// DISPLAY TASKS
function displayTasks() {

    const taskList = document.getElementById("taskList");

    const taskCount = document.getElementById("taskCount");

    taskList.innerHTML = "";

    if (tasks.length === 0) {

        taskList.innerHTML = `
            <p class="empty-message">
                No tasks added yet. Start planning! 🚀
            </p>
        `;

        taskCount.innerText = "0 Tasks";

        return;
    }


    const completedTasks =
        tasks.filter(function(task) {
            return task.completed;
        }).length;


    taskCount.innerText =
        completedTasks + "/" + tasks.length + " Completed";


    tasks.forEach(function(task) {

        const taskItem =
            document.createElement("div");

        taskItem.className = "task-item";


        const taskLeft =
            document.createElement("div");

        taskLeft.className = "task-left";


        const checkbox =
            document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;


        checkbox.onclick = function() {
            completeTask(task.id);
        };


        const text =
            document.createElement("span");

        text.className = "task-text";

        text.innerText = task.text;


        if (task.completed) {
            text.classList.add("task-completed");
        }


        taskLeft.appendChild(checkbox);

        taskLeft.appendChild(text);


        const deleteButton =
            document.createElement("button");

        deleteButton.className = "delete-task";

        deleteButton.innerText = "🗑️";


        deleteButton.onclick = function() {
            deleteTask(task.id);
        };


        taskItem.appendChild(taskLeft);

        taskItem.appendChild(deleteButton);


        taskList.appendChild(taskItem);

    });
}


// COMPLETE TASK
function completeTask(id) {

    tasks.forEach(function(task) {

        if (task.id === id) {
            task.completed = !task.completed;
        }

    });

    displayTasks();
}


// DELETE TASK
function deleteTask(id) {

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    displayTasks();
}
// ===============================
// FOCUS TIMER
// ===============================

let timerSeconds = 25 * 60;

let timerInterval = null;

let timerRunning = false;


// DISPLAY TIMER

function updateTimerDisplay() {

    const minutes =
        Math.floor(timerSeconds / 60);

    const seconds =
        timerSeconds % 60;


    const hours = Math.floor(minutes / 60);
const remainingMinutes = minutes % 60;

const formattedHours =
    String(hours).padStart(2, "0");

const formattedMinutes =
    String(remainingMinutes).padStart(2, "0");

const formattedSeconds =
    String(seconds).padStart(2, "0");


    document.getElementById("timerDisplay")
        .innerText =
        formattedHours + ":" +
formattedMinutes + ":" +
formattedSeconds;
}


// START TIMER

function startTimer() {

    if (timerRunning) {
        return;
    }


    timerRunning = true;


    document.getElementById("timerStatus")
        .innerText =
        "Focus mode is ON 🔥";


    timerInterval =
        setInterval(function() {

            if (timerSeconds > 0) {

                timerSeconds--;

                updateTimerDisplay();

            }
            else {

                clearInterval(timerInterval);

                timerRunning = false;

                document.getElementById("timerStatus")
                    .innerText =
                    "Session completed! 🎉";

                alert("Focus session completed! 🎉");

            }

        }, 1000);
}


// PAUSE TIMER

function pauseTimer() {

    clearInterval(timerInterval);

    timerRunning = false;


    document.getElementById("timerStatus")
        .innerText =
        "Timer paused ⏸️";
}


// RESET TIMER

function resetTimer() {

    clearInterval(timerInterval);

    timerRunning = false;

    timerSeconds = 25 * 60;

    updateTimerDisplay();


    document.getElementById("timerStatus")
        .innerText =
        "Ready to focus? 🚀";
}


// CHANGE TIMER

function setTimer(minutes) {

    clearInterval(timerInterval);

    timerRunning = false;

    timerSeconds = minutes * 60;

    updateTimerDisplay();


    document.getElementById("timerStatus")
        .innerText =
        minutes + " minute session selected ⏱️";


    document.querySelectorAll(".mode-btn")
        .forEach(function(button) {

            button.classList.remove("active");

        });

}
function setCustomTimer() {

    const hours = Number(document.getElementById("customHours").value);
    const minutes = Number(document.getElementById("customMinutes").value);

    const totalMinutes = (hours * 60) + minutes;

    if (totalMinutes > 0) {
        setTimer(totalMinutes);
    } else {
        alert("Please enter a valid time!");
    }
}

// ===============================
// SMART NOTES
// ===============================

let notes = JSON.parse(
    localStorage.getItem("studyMateNotes")
) || [];


// SAVE NOTE

function saveNote() {

    const title =
        document.getElementById("noteTitle")
            .value.trim();

    const content =
        document.getElementById("noteContent")
            .value.trim();


    if (title === "" || content === "") {

        alert("Please enter both title and note!");

        return;
    }


    const note = {

        id: Date.now(),

        title: title,

        content: content

    };


    notes.push(note);


    localStorage.setItem(
        "studyMateNotes",
        JSON.stringify(notes)
    );


    document.getElementById("noteTitle")
        .value = "";


    document.getElementById("noteContent")
        .value = "";


    displayNotes();

}


// DISPLAY NOTES

function displayNotes() {

    const notesList =
        document.getElementById("notesList");

    const noteCount =
        document.getElementById("noteCount");


    notesList.innerHTML = "";


    noteCount.innerText =
        notes.length + " Notes";


    if (notes.length === 0) {

        notesList.innerHTML = `
            <p class="no-notes">
                No notes saved yet. Start writing! ✍️
            </p>
        `;

        return;
    }


    notes.forEach(function(note) {

        const noteCard =
            document.createElement("div");

        noteCard.className = "note-card";


        noteCard.innerHTML = `

            <h4>
                📌 ${note.title}
            </h4>

            <p>
                ${note.content}
            </p>

            <button
                class="delete-note"
                onclick="deleteNote(${note.id})">

                🗑️

            </button>

        `;


        notesList.appendChild(noteCard);

    });

}


// DELETE NOTE

function deleteNote(id) {

    notes =
        notes.filter(function(note) {

            return note.id !== id;

        });


    localStorage.setItem(
        "studyMateNotes",
        JSON.stringify(notes)
    );


    displayNotes();

}


// LOAD SAVED NOTES

displayNotes();

// =============================
// STUDY GOALS
// =============================

function addGoal() {
    const input = document.getElementById("goalInput");
    const goalText = input.value.trim();

    if (goalText === "") {
        alert("Please enter a study goal!");
        return;
    }

    goals.push({
        id: Date.now(),
        text: goalText,
        completed: false
    });

    saveGoals();
    input.value = "";
    displayGoals();
    updateProgress();
}
// =============================
// STUDY GOALS
// =============================

let goals = JSON.parse(localStorage.getItem("studyGoals")) || [];

function saveGoals() {
    localStorage.setItem("studyGoals", JSON.stringify(goals));
}

function addGoal() {
    const input = document.getElementById("goalInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a study goal!");
        return;
    }

    goals.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    saveGoals();
    input.value = "";
    displayGoals();
}

function toggleGoal(id) {
    goals = goals.map(goal => {
        if (goal.id === id) {
            goal.completed = !goal.completed;
        }
        return goal;
    });

    saveGoals();
    displayGoals();
    updateProgress();
}

function deleteGoal(id) {
    goals = goals.filter(goal => goal.id !== id);

    saveGoals();
    displayGoals();
     updateProgress();
}

function displayGoals() {
    const list = document.getElementById("goalsList");

    if (!list) return;

    if (goals.length === 0) {
        list.innerHTML =
            '<p class="no-goals">No goals added yet. 🎯</p>';
        return;
    }

    list.innerHTML = goals.map(goal => `
        <div class="goal-item ${goal.completed ? "completed" : ""}">
            
            <label>
                <input 
                    type="checkbox"
                    ${goal.completed ? "checked" : ""}
                    onchange="toggleGoal(${goal.id})"
                >
                <span>${goal.text}</span>
            </label>

            <button 
                type="button"
                onclick="deleteGoal(${goal.id})"
            >
                ✕
            </button>

        </div>
    `).join("");
}

// Load saved goals when page opens
displayGoals();
// ===== UPDATE PROGRESS =====

function updateProgress() {
    const goals = JSON.parse(localStorage.getItem("studyGoals")) || [];

    const totalGoals = goals.length;
    const completedGoals = goals.filter(goal => goal.completed).length;

    const percentage = totalGoals === 0
        ? 0
        : Math.round((completedGoals / totalGoals) * 100);

    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");
    const progressDetails = document.getElementById("progressDetails");

    if (progressFill) {
        progressFill.style.width = percentage + "%";
    }

    if (progressText) {
        progressText.textContent = percentage + "% Complete";
    }

    if (progressDetails) {
        progressDetails.textContent =
            `${completedGoals} of ${totalGoals} goals completed`;
    }
}