const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, cur) => {
  const destrinchando = cur.toLowerCase().split('')
  acc += destrinchando.reduce((acc, cur) => {
    cur === 'a'? acc += 1 : acc += 0
    return acc;
}, 0)
  return acc;
  }, 0)
}

console.log(containsA())

