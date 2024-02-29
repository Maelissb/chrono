let timer = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let audio = document.getElementById("myAudio"); // Accédez à l'élément audio

let minute = 0;
let second = 0;

let timeout;

let isStop = true;

const start = () => {
    if (isStop) {
        isStop = false;
        defileTemps();
    }
};

const stop = () => {
    if (!isStop) {
        isStop = true;
        clearTimeout(timeout);
    }
};

const playSound = () => {
    audio.play();  // Jouez le son
};

const defileTemps = () => {
    if (isStop) return;

    second = parseInt(second);
    minute = parseInt(minute);

    second++;

    if (second === 60) {
        minute++;
        second = 0;
    }

    // Affichage
    if (second < 10) {
        second = "0" + second;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    timer.textContent = `${minute}:${second}`;

    if (minute % 20 === 0 && second === 0) {
        playSound();  // Jouez le son toutes les 20 secondes
    }

    timeout = setTimeout(defileTemps, 1000);
};

const reset = () => {
    timer.textContent = "00:00";
    isStop = true;
    minute = 0;
    second = 0;
    clearTimeout(timeout);
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);


// Ajoutez cette fonction dans votre script.js
const changeSound = () => {
    let soundSelect = document.getElementById("soundSelect");
    let audioSource = document.getElementById("audioSource");
    audioSource.src = "/minuterie/asset/" + soundSelect.value;
    audio.load();  // Recharge le fichier audio avec le nouveau son
};
