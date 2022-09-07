const buttonSet = document.getElementById('submit');
const buttonClear = document.getElementById('clear');
let inputName = document.getElementById('name')
let inputEmail = document.getElementById('email');
const date = document.getElementById('date');
const validate = new window.JustValidate('#form');
date.DatePickerX.init();



buttonSet.addEventListener('click', function (event) {
  // let nameCompleto = String(inputName.value);
  // if (nameCompleto.checkValidity() === false) {
  //   return alert("Campo 'Nome' com caracteres insuficiente");
  // } else if (inputEmail.checkValidity() === false ) {
  //   return alert('E-mail invalido');
  // } 
  
  validate
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);

})



