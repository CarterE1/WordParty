var input = "";
var text = document.getElementById('textInput');
var currentCombo;

var arrayOfLines;
var arrayOfCombos;
var arrayOfUsedWords = [];

var timeLeft = 30;
document.getElementById('timer').innerText = timeLeft;
var timer = window.setInterval(everySecond, 1000);

setNewCombo()

fetch('Files/words.txt').then((response) => response.text()).then(repo => {
    arrayOfLines = repo.split('\n');
})

fetch('Files/combos.txt').then((response) => response.text()).then(repo => {
    arrayOfCombos = repo.split('\n');
})

text.addEventListener('keyup', function onEvent(e) {
    if (e && e.keyCode === 13) {
        input = text.value;
        text.value = "";
        checkWord(input.replace(/[^\w\s-]/gi, '').toLowerCase())
    } else if (e) {
        isCorrect(text.value.replace(/[^\w\s-]/gi, '').toLowerCase())
    }
});

function setNewCombo() {
    setTimeout(() => { currentCombo = arrayOfCombos[(Math.random() * arrayOfCombos.length) | 0]; document.getElementById('curCombo').innerText = /*"Current combo: " +*/ currentCombo }, 50);
}

function checkWord(word) {
    console.log(arrayOfLines.includes("all"))
    text = document.getElementById('textInput');
    if (word.indexOf(currentCombo.trim()) > -1) {
        if (arrayOfLines.includes(word) && !arrayOfUsedWords.includes(word)) {
            console.log("test")
            setNewCombo()
            text.style.borderColor = '#afafaf';
            arrayOfUsedWords.push(word)
            if (word.length < 5) {
                timeLeft += word.length;
            } else if (word.length < 20) {
                timeLeft += Math.round(word.length * 1.25);
            } else {
                timeLeft += 20;
            }
            document.getElementById("timer").innerText = timeLeft;
        } else {
            text.style.borderColor = '#afafaf';
        }
    }
}

function isCorrect(value) {
    combo = document.getElementById('textInput');
    if (value.indexOf(currentCombo.trim()) > -1 && (combo.style.borderColor = '#47c2ff')) {
        if (arrayOfLines.includes(value)) {
            if (arrayOfUsedWords.includes(value)) {
                combo.style.borderColor = '#fc0303';
            } else {
                combo.style.borderColor = '#03fc66';
            }
        }
    } else if (value === '') {
        combo.style.borderColor = '#afafaf';
    } else {
        combo.style.borderColor = '#47c2ff';
    }
}

function everySecond() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
    }
}

function onStart() {
    timeLeft = 30;
    document.getElementById("timer").innerText = timeLeft;
}
