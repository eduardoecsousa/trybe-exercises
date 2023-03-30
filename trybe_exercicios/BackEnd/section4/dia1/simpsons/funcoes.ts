const fs = require('fs').promises;
const path = require('path');

interface objSimpson {
  id: string;
  name: string;
}

async function printIdName() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
    const respose = JSON.parse(data)
    respose.map((e:objSimpson) => console.log(`${e.id} - ${e.name}`));
  } catch (error) {
    console.error(`Erro na leitura do arquivo:${error} `)
  }
}

function verificaPesonagem(idPerson: number) {
  const promise = new Promise(async(resolve, reject) => {
    const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
    const respose = JSON.parse(data)
    const varification = respose.some((e:objSimpson) => e.id === idPerson.toString())
    if(!varification) {
      reject(new Error('id não encontrado'))
    }
    const personagem = respose.find((e:objSimpson) => e.id === idPerson.toString());
    resolve(personagem);
  })

  return promise;
}

async function aguardaPromisse(){
  console.log(await verificaPesonagem(4));
};

