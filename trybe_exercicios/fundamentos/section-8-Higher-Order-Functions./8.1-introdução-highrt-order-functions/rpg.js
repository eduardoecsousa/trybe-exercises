const demageDragon = () => {
  let demage = Math.round((Math.random * 35) + 15)
  return demage;
}

const demageWarrior = () => {
  let demage = Math.round((Math.random * 31) * 2);
  return demage
}

const demageMage = (manaMago) => {
  if (manaMago < 15) {
    return 'Não possui mana suficiente';
  }
  let demageMana = {
    dano: Math.round((Math.random + 46) * 2),
    mana: 15
  } 
  return demageMana;
}

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: demageMage(),
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: demageWarrior(),
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: demageDragon(),
};

const battleMembers = { mage, warrior, dragon };

const actionWarrior = (func) => {
  dragon.healthPoints -= func();
};

actionWarrior(demageWarrior);

const actionMage = (func) => {
  dragon.healthPoints -= func().dano;
  mage.mana -= func().mana;
}

actionMage(demageMage);



const gameActions = {
  // Crie as HOFs neste objeto.
};