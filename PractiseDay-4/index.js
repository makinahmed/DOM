
let h1 = document.getElementsByTagName('h1')
h1[0].style.textAlign = 'center'

// make green 

function makeGreen() {
    document.body.style.backgroundColor = '#6B8E23'
}

// make hotpink 

let hotpink = document.getElementById('makeHotPink');

hotpink.onclick = function () {
    document.body.style.backgroundColor = 'teal'
}

// make magenta 

let makemagenta = document.getElementById('makeBandor');

makemagenta.addEventListener('click', function () {
    document.body.style.backgroundColor = '#696969'
})




// input text 



let input = document.getElementById('input-text');
let submit = document.getElementById('submitBtn');
let p = document.getElementById('paragraph');

submit.addEventListener('click', function () {
    p.innerText = input.value
    input.value = ''

    console.log(input.value);
})






// comment 


let newComment = document.getElementById('new-comment');
let submitComment = document.getElementById('submit-comment');
let commentSection = document.getElementById('comment-section')





submitComment.addEventListener('click', function () {
    let createElement = document.createElement('p')
    createElement.innerText = newComment.value;
    commentSection.appendChild(createElement)
    newComment.value = '';
})

