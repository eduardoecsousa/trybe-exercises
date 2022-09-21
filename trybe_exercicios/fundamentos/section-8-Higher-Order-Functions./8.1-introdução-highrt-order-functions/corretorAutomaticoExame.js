function corrige(corretas, aluno){
  
  let notaPositiva = 0;
  let notaNegativa = 0;
  for (let i = 0; i < corretas.length; i += 1){
    if (corretas[i] === aluno[i]){
      notaPositiva += 1;
    } else if (aluno[i] === 'N.A') {
      notaPositiva;
    } else {
      notaNegativa += 0.5;
    }
  }
  return notaPositiva - notaNegativa;
}

const daNota = (resCorretas, resAluno, func) => func(resCorretas, resAluno)


console.log(daNota(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'A'] , corrige))