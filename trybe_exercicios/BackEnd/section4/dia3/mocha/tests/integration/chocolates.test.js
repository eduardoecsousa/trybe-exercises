const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

const output = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];

const sinon = require('sinon');
const fs = require('fs');

const app = require('../../src/app'); 


const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Usando o método GET em /chocolates', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Testando a API Cacau Trybe', function(){
    it('Retorna a lista completa de chocolates!', async function () {
      const response = await chai
      .request(app)
      .get('/chocolates');

      expect(response.status).to.be.equals(200);

      expect(response.body.chocolates).to.deep.equal(output);
    });
  });
  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  }); 

  describe('Usando o método GET em /chocolate/total', function () {
    it('Retorna status 200 e o a quatidade de chocolate"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: 4 })
    });
  });

  describe('Usando o método GET em /chocolates/search?name=Mo', function () {
    it('Retorna status 200 e o chocolate encontrado"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');


      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([
        {
          id: 3,
          name: "Mon Chéri",
          brandId: 2
        },
        {
          id: 4,
          name: "Mounds",
          brandId: 3
        }
      ])
    });
  });

  describe('Usando o método GET em /chocolate/search?name=ZZZ', function () {
    it('Retorna status 404 e o um array vazio"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=ZZZ');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal([])
    });
  });
})
