const form = document.getElementById("roastForm");
const nameInput = document.getElementById("name");
const analyzeBtn = document.getElementById("analyzeBtn");
const results = document.getElementById("results");
const scanLines = document.getElementById("scanLines");
const scoreElement = document.getElementById("score");
const scoreBar = document.getElementById("scoreBar");
const finalRoast = document.getElementById("finalRoast");
const againBtn = document.getElementById("againBtn");

const diagnostics = [
    "Initializing questionable IQ...",
    "Analyzing personality... COMPLETE...NOT FOUD",
    "Checking intelligence... ERROR 💀",
    "Scanning fashion sense... FAILED TO REPORT 💀",
    "Measuring brain activity... NO SIGNAL 📡",
    "Searching for common sense... NOT FOUND",
    "Calculating cringe levels...ERROR COMPUTER HAVING A HARD TIME CALCULATING",
    "Preparing emotional damage...ACTUALL EMOTINAL DANAGE"
];

const roasts = [
    "Bro is running on 2% battery and 0% common sense. 🔋",
    "Your brain has more loading screens than a 2005 computer. 💀",
    "Even your shadow leaves when things get embarrassing. 😭",
    "You bring everyone so much joy... when you leave the room. 😂",
    "If procrastination were an Olympic sport, you'd arrive late to the final. 🏆",
    "Your Wi-Fi signal has more connection than your brain. 📡",
    "You're proof that software updates aren't available for humans. 🤖",
    "Your life isn't a movie. It's the deleted scenes. 🎬",
    "Your brain has 47 tabs open, and every single one is buffering. 🧠",
    "You have something money can't buy: absolutely questionable decisions. 💀",
    "You're not useless. You can always serve as a bad example. 😂",
    "Even autocorrect has given up trying to understand you. 📱",
    "Even aliens have a hard time understanding this particular person 😂"
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomScore() {
    return Math.floor(Math.random() * 101);
}

async function runAnalysis(name) {
    analyzeBtn.disabled = true;
    analyzeBtn.textContent = "ANALYZING...";

    results.classList.remove("hidden");
    scanLines.innerHTML = "";
    finalRoast.innerHTML = "";
    scoreElement.textContent = "??";
    scoreBar.style.width = "0%";

    results.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

    for (const diagnostic of diagnostics) {
        const line = document.createElement("div");

        line.className = "scan-line";
        line.textContent = "> " + diagnostic;

        scanLines.appendChild(line);

        await sleep(700);
    }

    const score = randomScore();

    scoreElement.textContent = score;
    scoreBar.style.width = score + "%";

    const roast = randomItem(roasts);

    finalRoast.innerHTML = "";

    const heading = document.createElement("h3");
    heading.textContent = "⚠ FINAL DIAGNOSTIC REPORT";

    const nameHeading = document.createElement("h2");
    nameHeading.textContent = name.toUpperCase() + " 💀";

    const roastText = document.createElement("p");
    roastText.textContent = roast;

    const verdict = document.createElement("p");
    verdict.style.marginTop = "12px";
    verdict.style.color = "#f0abfc";

    verdict.textContent =
        score < 25
            ? "VERDICT: Certified chaos machine. 😭"
            : score < 50
                ? "VERDICT: Common sense not detected. 💀"
                : score < 75
                    ? "VERDICT: Suspiciously average human. 😂"
                    : "VERDICT: Intelligence detected. Investigating further... 👀";

    const disclaimer = document.createElement("p");
    disclaimer.style.marginTop = "12px";
    disclaimer.style.fontSize = "10px";
    disclaimer.style.color = "#9699ad";

    disclaimer.textContent =
        "Just a joke! Your score and diagnosis are randomly generated.";

    finalRoast.append(
        heading,
        nameHeading,
        roastText,
        verdict,
        disclaimer
    );

    analyzeBtn.disabled = false;
    analyzeBtn.textContent = "🔍 ANALYZE AGAIN";
}

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (!name) {
        nameInput.focus();
        return;
    }

    await runAnalysis(name);
});

againBtn.addEventListener("click", async function() {
    await runAnalysis(nameInput.value.trim());
});