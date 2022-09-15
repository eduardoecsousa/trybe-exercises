const btnClick = document.getElementById('btn-click');
const qtdClick = document.getElementById('qtd-click');
let clickCount = 0 ;

qtdClick.innerHTML = clickCount

btnClick.addEventListener('click', () => {
  clickCount += 1;
  qtdClick.innerHTML = clickCount;
})
