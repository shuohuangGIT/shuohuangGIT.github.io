// sentences with custom font sizes
const danmuLines = [
    { text: `"Resonance chain is more interesting than resonance pair!"`, size: "1.5vw" },
    { text: `"Academic curse of good memory: when you recognize some people you met before in a conference but they forget who you are"`, size: "1vw" },
];

const danmuArea = document.getElementById("danmu-area");
const lanes = 3;
const laneHeight = danmuArea.clientHeight / (lanes+0.5);

// track last danmu in each lane
const laneData = Array(lanes).fill(null);
// track last instance *per sentence*
const sentenceData = new Map();

// global pause flag
let danmuPaused = false;
function pauseDanmu() {
    danmuPaused = true;
    document.querySelectorAll(".danmu").forEach(el => {
        el.style.animationPlayState = "paused";
    });
}
function resumeDanmu() {
    danmuPaused = false;
    document.querySelectorAll(".danmu").forEach(el => {
        el.style.animationPlayState = "running";
    });
}
function toggleDanmuButton() {
    const btn = document.getElementById("danmu-toggle-btn");

    if (danmuPaused) {
        // was paused → resume
        resumeDanmu();
        btn.textContent = "❚❚";   // show pause icon
    } else {
        // was running → pause
        pauseDanmu();
        btn.textContent = "▶︎";   // show play icon
    }
}


// check if the same sentence is allowed to appear again
function canLaunchSentence(item) {
    const prev = sentenceData.get(item.text);
    if (!prev) return true;  // never launched

    const now = Date.now();
    const elapsed = (now - prev.startTime) / 1000;

    // distance passed since start
    const distancePassed =
        (elapsed / prev.duration) *
        (danmuArea.clientWidth + prev.width);

    return distancePassed >= danmuArea.clientWidth;
}

function launchDanmu(item) {
    if (!canLaunchSentence(item)) return;

    const now = Date.now();

    // find a free lane (same logic as your original)
    const freeLanes = laneData.map((data, i) => {
        if (!data) return i;
        const elapsed = (now - data.startTime) / 1000;
        const distancePassed =
            (elapsed / data.duration) *
            (danmuArea.clientWidth + data.width);
        return distancePassed >= danmuArea.clientWidth * 0.5 ? i : -1;
    }).filter(i => i !== -1);

    if (freeLanes.length === 0) return;

    const laneIndex = freeLanes[Math.floor(Math.random() * freeLanes.length)];

    // create element
    const el = document.createElement("p");
    el.className = "danmu";
    el.innerHTML = `<em>${item.text}</em>`;
    el.style.top = laneIndex * laneHeight + "px";
    el.style.fontSize = item.size;

    // apply pause state to new elements
    if (danmuPaused) {
        el.style.animationPlayState = "paused";
    }

    danmuArea.appendChild(el);
    const textWidth = el.offsetWidth;

    // random speed 60–120 px/sec
    const speed = 60 + Math.random() * 60;
    const duration = (danmuArea.clientWidth + textWidth) / speed;

    // random small delay (same as your original)
    const delaySec = Math.random() * 0.5;
    el.style.animationDuration = duration + "s";
    el.style.animationDelay = delaySec + "s";
    el.style.right = `-${textWidth}px`;
    el.style.animationName = "danmu-move";

    const startTime = Date.now() + delaySec * 1000;

    // record lane info
    laneData[laneIndex] = {
        el,
        width: textWidth,
        duration,
        startTime
    };

    // record sentence info
    sentenceData.set(item.text, {
        el,
        width: textWidth,
        duration,
        startTime
    });

    // cleanup
    setTimeout(() => {
        if (el.parentNode) el.remove();
        if (laneData[laneIndex] && laneData[laneIndex].el === el)
            laneData[laneIndex] = null;
    }, (duration + 1) * 1000);
}

// launch frequently
setInterval(() => {
    const item = danmuLines[Math.floor(Math.random() * danmuLines.length)];
    launchDanmu(item);
}, 300);

// keyframes
const style = document.createElement("style");
style.innerHTML = `
@keyframes danmu-move {
    0% { right: -100%; }
    100% { right: 110%; }
}`;
document.head.appendChild(style);