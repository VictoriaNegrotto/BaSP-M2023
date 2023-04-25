
var nameI = document.getElementById ('name');
nameI.addEventListener('blur', funtion() {
    var vik = validateName (nameI)
});

function validateName (input)
    var value = input.value;
    var chars = 'abcdefghijklmnopqrstuvwxyz'


    var nameInput = document.querySelector('input [name = "name"]')
nameInput.onblur = function() {
    console.log('blur')

}