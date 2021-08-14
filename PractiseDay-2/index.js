let deleteElement = document.getElementById('delete-element')
let inputField = document.getElementById('input-field')
let deleteBtn = document.getElementById('delete-button')




inputField.addEventListener('focus', function () {

    document.body.style.backgroundColor = 'teal';
})

// blur 

inputField.addEventListener('blur', function () {

    document.body.style.backgroundColor = 'white';
})


// keypress 


// inputField.addEventListener('keypress', function () {
//     console.log(inputField.value);
// })

// keydown 


// inputField.addEventListener('keydown', function () {
//     console.log(inputField.value);
// })
// keyup 


// inputField.addEventListener('keyup', function () {
   
//     if (inputField.value == 'delete') {
//         deleteBtn.removeAttribute('disabled')
        
//     }
//     else {
//         deleteBtn.setAttribute()
//     }
    
// })



// document.getElementById('delete-button').addEventListener('keyup', function (event) {
//     if (event.target.value == '0') {
//         console.log("Makin");
//         document.getElementById('delete-button').removeAttribute('disabled');
//     }
// })