let ulElement = document.getElementById('list-container');
let liElement = document.getElementsByClassName('item');
let liSecondElement = document.getElementById('second-item');
let mainSection = document.getElementById('main-section');



// li 

liSecondElement.addEventListener('click', function (e) {
    console.log('section1 ssss');

})


// ul 

ulElement.addEventListener('click', function (e) {
    console.log(e.target.innerHTML);
    e.stopPropagation()

})





ulElement.addEventListener('click', function (e) {
    console.log('section2 ssss');
   

})

ulElement.addEventListener('click', function (e) {
    console.log('section3 ssss');
    e.stopImmediatePropagation()

})

ulElement.addEventListener('click', function (e) {
    console.log('section4 ssss');
   

})


// main section

mainSection.addEventListener('click', function (e) {
    console.log(e.target.innerHTML);

})
