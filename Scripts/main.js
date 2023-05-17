var input = "";
var text = document.getElementById('textInput');
var currentCombo;
var arrayOfLines;
var arrayOfCombos;

setNewCombo()

fetch('../files/words.txt').then((response) => response.text()).then(repo => {
    arrayOfLines = repo.split('\n');
})

fetch('../files/combos.txt').then((response) => response.text()).then(repo => {
    arrayOfCombos = repo.split('\n');
})

text.addEventListener('keyup', function onEvent(e) {
    if (e && e.keyCode === 13) {
        input = text.value;
        text.value = "";
        checkWord(input)
    }
});

function setNewCombo() {
    setTimeout(() => { currentCombo = arrayOfCombos[(Math.random() * arrayOfCombos.length) | 0]; document.getElementById('curCombo').innerText = "Current combo: " + currentCombo }, 20);
}

function checkWord(word) {
    for (var i = 0; i < word.length; i++) {
        if (word.substring(i, i + currentCombo.trim().length) === currentCombo.trim()) {
            console.log("HOLLY NIGA")
        }
    }
}