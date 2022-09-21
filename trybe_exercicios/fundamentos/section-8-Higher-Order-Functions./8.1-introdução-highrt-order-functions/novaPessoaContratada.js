const hire= (nome) => {
  const arrayNomePessoa = nome.toLowerCase().split(' ');
  let email = '';
  for(let i = 0; i < arrayNomePessoa.length; i += 1){
    if(i === arrayNomePessoa.length -1 ){
      email += arrayNomePessoa[i];
    } else {
      email += `${arrayNomePessoa[i]}_`
  }
}
return {
  nome: nome,
  email: `${email}@trybe.com`
}
}

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(hire));