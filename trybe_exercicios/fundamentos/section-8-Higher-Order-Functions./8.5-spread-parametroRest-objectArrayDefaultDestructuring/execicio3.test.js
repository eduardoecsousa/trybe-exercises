const personLikes = require('./exercicio3')

describe('Teste da função personLikes', () => {
  it('testa se a função retorna nome, a idade e gostos na frase de forma dinamica.', () => {
    const jessica = {
      name: 'Jessica',
      age: 30,
      likes: ['Shoping'],
      nationality: 'Paranaens',
    };
    const ricardo = {
      name: 'Ricardo',
      age: 27,
      likes: ['games'],
      nationality: 'Mineiro',
    };
    const alex = {
      name: 'Alex',
      age: 23,
      likes: ['Cortar cabelo'],
      nationality: 'Paulista',
    };
    expect(personLikes(jessica)).toEqual('Jessica is 30 years old and likes Shoping.')
    expect(personLikes(ricardo)).toEqual('Ricardo is 27 years old and likes games.');
    expect(personLikes(alex)).toEqual('Alex is 23 years old and likes Cortar cabelo.');
  })
})