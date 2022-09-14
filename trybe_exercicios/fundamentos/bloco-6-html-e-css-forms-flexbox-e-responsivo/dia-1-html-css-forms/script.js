const buttonSet = document.getElementById('submit');
const buttonClear = document.getElementById('clear');
let inputName = document.getElementById('name')
let inputEmail = document.getElementById('email');

buttonSet.addEventListener('click', function (event) {
  let nameCompleto = String(inputName.value);
  const form = document.getElementById('form')
  if (nameCompleto.length < 10) {
    return alert("Campo 'Nome' com caracteres insuficiente");
  } else if (inputEmail.checkValidity() === false ) {
    return alert('E-mail invalido');
  } 
  event.preventDefault();
  form.reset();
})
