let elForm = document.querySelector('.form');
let elFormInput = elForm.querySelector('.form-input');
let elFormButton = elForm.querySelector('.form-button');
let elFormOutput = elForm.querySelector('.form-output');

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();


  if (elFormInput.value % 3 == 0 && elFormInput.value % 5 !== 0){
    elFormOutput.value = 'Fizz'
  }else if (elFormInput.value % 5 == 0 && elFormInput.value % 3 !== 0){
    elFormOutput.value = 'Buzz'
  }else if (elFormInput.value % 3 == 0 && elFormInput.value % 5 == 0 ){
    elFormOutput.value = 'FizzBuzz'
  }else if (elFormInput.value % 3 !== 0 && elFormInput.value % 5 !== 0){
    elFormOutput.value = elFormInput.value
  }
})




