function techList(skills, name) {
  if (skills.length === 0){
    return 'Vazio!'
  }
  const organizesSkills = skills.sort()
  let arrayProject = [];
  for (let i = 0; i < organizesSkills.length; i += 1){
    let newObjeto = {tech: organizesSkills[i], name: name}
    arrayProject.push(newObjeto);
  }
  return arrayProject;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

module.exports = techList;