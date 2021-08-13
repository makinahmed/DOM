
// make yellow 

function makeYellow() {
    document.body.style.backgroundColor = 'lightYellow';

}


// make blue 
let makeBlue = document.getElementById('makeBlue');
makeBlue.onclick = blue;

function blue() {
    document.body.style.backgroundColor = 'lightBlue';
}
// make green 
let makegreen = document.getElementById('makeGreen');

makegreen.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// make pink 

let makePinkk = document.getElementById('makePink')

makePinkk.addEventListener('click', makepink)

function makepink() {
    document.body.style.backgroundColor = 'pink';
}


// make teal

let teal = document.getElementById('makeTeal');

teal.addEventListener('click', function () {
    document.body.style.backgroundColor = 'teal';
});

