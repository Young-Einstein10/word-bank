var submit = document.querySelector('.form');
var wordInput = document.querySelector('#word');

var wordlist = document.querySelector('.collection');

submit.addEventListener('submit', function (e){
    var newWord = document.createElement('li');
    newWord.className = 'collection-item';
    newWord.appendChild(document.createTextNode(wordInput.value));

    wordlist.appendChild(newWord);

    wordInput.value = '';


    console.log(newWord);
});