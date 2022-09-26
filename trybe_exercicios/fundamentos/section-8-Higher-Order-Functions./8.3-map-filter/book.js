const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const formatedBookNames = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)

// console.log(formatedBookNames)

const nameAndAge = books.map((element) => {
  const autor = {};
  autor.age = element.releaseYear - element.author.birthYear
  autor.author  = element.author.name;
  return autor;
}).sort((a, b) => a.age - b.age);

// console.log(nameAndAge);

function fantasyOrScienceFiction() {
  const newArrayBooks = books.filter((element) => (element.genre === 'Fantasia' || element.genre === 'Ficção Científica'));
  return newArrayBooks;
}

// console.log(fantasyOrScienceFiction())

function oldBooksOrdered() {
  const oldBooks = books.filter((element) => 2022 - element.releaseYear >= 60 ).sort((a, b) => a.releaseYear - b.releaseYear)
  return oldBooks
}

// console.log(oldBooksOrdered());

function fantasyOrScienceFictionAuthors(func) {
  const authorFantasyOrScienceFiction = func().map((element) => element.author.name)
  return authorFantasyOrScienceFiction;
}

// console.log(fantasyOrScienceFictionAuthors(fantasyOrScienceFiction))

function oldBooks(func) {
  const nameoldBooks = func().map((element) => element.name);
  return nameoldBooks;
}

// console.log(oldBooks(oldBooksOrdered));

function authorWith3DotsOnName() {
  const authorWith3 = books.find((element) => element.author.name[1] === '.' && element.author.name[4] === '.').name;
  return authorWith3
}

console.log(authorWith3DotsOnName())  