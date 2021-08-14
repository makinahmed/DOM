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




inputField.addEventListener('keyup', function () {

    if (inputField.value == 'delete') {
        deleteBtn.removeAttribute('disabled')

    }
    else {
        deleteBtn.setAttribute('disabled', true)
    }

})



deleteBtn.addEventListener('click', function () {
    deleteElement.style.display = 'none'
    inputField.value = ''
})


// others practises of key events ;


// keypress 


// inputField.addEventListener('keypress', function () {
//     console.log(inputField.value);
// })

// keydown 


// inputField.addEventListener('keydown', function () {
//     console.log(inputField.value);
// })
// keyup 