const loadingScreen = document.getElementById("loadingScreen");
const resultScreen = document.getElementById("resultScreen");

const progressBar = document.getElementById("progressBar");
const progressNumber = document.getElementById("progressNumber");

const terminalText = document.getElementById("terminalText");
const loadingMessage = document.getElementById("loadingMessage");

const revengeButton = document.getElementById("revengeButton");
const revengeSection = document.getElementById("revengeSection");
const againButton = document.getElementById("againButton");


// ===============================
// LOADING MESSAGES
// ===============================

const messages = [

    "Connecting to friendship database...",

    "Scanning target photo...",

    "Detecting questionable decisions...",

    "Calculating meme potential...",

    "Analyzing hairstyle...",

    "Checking brain activity...",

    "Searching for common sense...",

    "Common sense not found 💀",

    "Generating final report...",

    "Preparing troll..."
];


// ===============================
// START ANALYSIS
// ===============================

function startAnalysis() {

    loadingScreen.classList.remove("hidden");

    resultScreen.classList.add("hidden");

    revengeSection.classList.add("hidden");

    progressBar.style.width = "0%";

    progressNumber.textContent = "0";

    let progress = 0;

    const interval = setInterval(() => {

        progress++;

        progressBar.style.width = `${progress}%`;

        progressNumber.textContent = progress;


        // Change terminal messages

        if (progress % 10 === 0) {

            const messageIndex =
                Math.floor(progress / 10) - 1;

            if (messages[messageIndex]) {

                terminalText.textContent =
                    messages[messageIndex];
            }
        }


        // Change loading message

        if (progress < 30) {

            loadingMessage.textContent =
                "Please wait...";

        } else if (progress < 60) {

            loadingMessage.textContent =
                "This is getting serious...";

        } else if (progress < 90) {

            loadingMessage.textContent =
                "Oh no... 😭";

        } else {

            loadingMessage.textContent =
                "There is no escape.";
        }


        // Finished

        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                showResult();

            }, 700);
        }

    }, 45);
}


// ===============================
// SHOW RESULT
// ===============================

function showResult() {

    loadingScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    createConfetti();
}


// ===============================
// CONFETTI
// ===============================

function createConfetti() {

    const container =
        document.getElementById("confetti");

    container.innerHTML = "";

    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");


        const randomX =
            Math.random() * 100;

        const randomDelay =
            Math.random() * 2;

        const randomDuration =
            2 + Math.random() * 3;

        const randomRotation =
            Math.random() * 360;


        piece.style.left =
            `${randomX}vw`;

        piece.style.animationDelay =
            `${randomDelay}s`;

        piece.style.animationDuration =
            `${randomDuration}s`;

        piece.style.transform =
            `rotate(${randomRotation}deg)`;


        // Random colors using CSS variables

        const colors = [
            "#ff238f",
            "#bd70ff",
            "#00ff66",
            "#ffff00",
            "#00c8ff",
            "#ff7b00"
        ];

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        container.appendChild(piece);
    }
}


// ===============================
// REVENGE BUTTON
// ===============================

revengeButton.addEventListener(
    "click",
    () => {

        revengeSection.classList.remove("hidden");

        revengeSection.scrollIntoView({
            behavior: "smooth"
        });

        revengeButton.textContent =
            "😂 YOU HAVE BEEN WARNED";

    }
);


// ===============================
// ANALYZE AGAIN
// ===============================

againButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        startAnalysis();

    }
);


// ===============================
// START
// ===============================

startAnalysis();