const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (lesson) => {
  lesson.turno = 'noite'
}

addShift(lesson2);

const listKeys = (object) => {
  const keysObj = Object.keys(object);
  return keysObj;
}

listKeys(lesson1);

const sizeObj = (obj) => {
  const arrayObj = Object.entries(obj).length;
  return `o tamanho do obejto é ${arrayObj}`;
}

sizeObj(lesson3)

const valueObj = (obj) => {
  const arrayValueObj = Object.values(obj);
  return arrayValueObj;
}

valueObj(lesson1);

const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });



const totalStudy = (obj) => {
  let soma = 0;
  for (let i in obj) {
    soma += obj[i].numeroEstudantes
  }
  return soma;
}

totalStudy(allLessons);

const positionObj = (obj, position) => {
  const arrayObjValue = Object.values(obj)
  return arrayObjValue[position]
}

positionObj(lesson1, 0);

const verifyPair = (obj, objKeys, value) => {
  const arrayObjValue = Object.values(obj);
  const arrayObjKeys = Object.keys(obj)
  for (let iKeys of arrayObjKeys){
    if (iKeys === objKeys){
      for (let iValue of arrayObjValue){
        if (iValue === value){
          return true
        }
      }
    }
  }
  return false
}

verifyPair(lesson1, 'materia', 'Portugues')