var input = "";
var text = document.getElementById('textInput');
var arrayOfLines;
var reponse;

var reponse = fetch('../files/words.txt').then((response) => response.text()).then(repo => {
    reponse = repo;
})

console.log(repo);

/*function filterAndWrite(text) {
    arrayOfLines = text.split('\n');
    //const startsWithDoubleSlash = new RegExp('^//');
    //const filteredLines = arrayOfLines.filter((line) => !line.match(startsWithDoubleSlash));
    //document.write(filteredLines);
}

function writeToDocument(link) {
    fetch(link)
        .then((response) => response.text())
        .then(filterAndWrite);
}

writeToDocument('..//files//words.txt'); */

text.addEventListener('keyup', function onEvent(e) {
    if (e && e.keyCode === 13) {
        input = text.value;
        text.value = "";
        console.log(input);
    }
});

function checkWord(word) {

}