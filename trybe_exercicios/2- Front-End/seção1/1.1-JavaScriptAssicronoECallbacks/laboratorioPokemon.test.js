// Verifique se a importação do arquivo correto está sendo feita.
const getPokemonDetails  = require('./laboratorioPokemon');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const erroAtual = new Error('Não temos esse pokémon para você :(');

    getPokemonDetails('pikachu', (error , _message) => {
    try{
      expect(error).toEqual(erroAtual);
      done();
    } catch (error){
      done(error);
    }
  });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    const messagePokemon = 'Olá, seu pokémon é o Squirtle, o tipo dele é Água e a habilidade principal dele é Jato de Água'

    getPokemonDetails('Squirtle', (_erro, message) => {
      expect(message).toEqual(messagePokemon);
      done()
    })
  });
});