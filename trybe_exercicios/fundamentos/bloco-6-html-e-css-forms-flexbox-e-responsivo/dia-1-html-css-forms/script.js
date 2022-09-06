const buttonSet = document.getElementById('submit');
const buttonClear = document.getElementById('clear');
let inputName = document.getElementById('name')
let inputEmail = document.getElementById('email');

buttonSet.addEventListener('click', function (event) {
  event.preventDefault();
  let nameCompleto = String(inputName.value);
  if (nameCompleto.length < 10) {
    alert("Campo 'Nome' com caracteres insuficiente");
  } else if (inputEmail.checkValidity() === false) {
    alert('E-mail invalido');
  }

})

buttonClear.addEventListener('click', function () {

})