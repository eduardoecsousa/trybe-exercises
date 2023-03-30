const { join } = require('path');

const fs = require('fs').promises;

const path = `../../data/local.json`;

async function getActivies() {
  
  try {
    const activies = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(activies);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

async function createActivies(newActivies) {
  const activies = await getActivies();
  console.log(activies);
  console.log(path, 'aqui');
  const newArrayJson = JSON.stringify([...activies, newActivies]);
  try {
    await fs.writeFile(join(__dirname, path), newArrayJson)
    console.log('deu bom');
  } catch(err) {
    console.error('deu ruim', err)
  }
}

async function test() {
  await createActivies({
    name: "dubai",
    price: 1000,
    description: {
      rating: 5,
      difficulty: "Dificil",
      createdAt: "10/08/2022"
    }
  })
};


module.exports ={createActivies};