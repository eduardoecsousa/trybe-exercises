// Verifique se a importação do arquivo correto está sendo feita.
const {getPokemonDetails}  = require('./laboratorioPokemon');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
    const erroAtual = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails('pikachu', (erro, message  => {
    try{
      expect(erro).toBe(erroAtual);
      done(erro)
    } catch (erro){
      done(erro)
    }
    }));
  });

  it('retorna um pokémon que existe no banco de dados', () => {
    // Escreva aqui seu código
  });
});