const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};


const viewHabilidade = (student) => {
  const arrayOfSkills = Object.keys(student)
  for(let index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}: ${student[arrayOfSkills[index]]}`)
  }
}

viewHabilidade(student2);