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

function authorBornIn1947(arrayLivros) {
  return arrayLivros.find((element) => element.author.birthYear === 1947)
}

// console.log(authorBornIn1947(books))

function smallerName() {
  let nameBook
  let size = Number.MAX_SAFE_INTEGER
  // escreva aqui o seu código

  books.forEach((element) => {
    if (element.name.length < size){
      size = element.name.length;
      nameBook = element
    }
  })

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// console.log(smallerName());

function getNamedBook() {
  return books.find((element) => element.name.length === 26)
}

// console.log(getNamedBook());

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear)
}

// console.log(booksOrderedByReleaseYearDesc())

function everyoneWasBornOnSecXX() {
  return books.every((element) => element.author.birthYear < 2001 && element.author.birthYear > 1901)
}

// console.log(everyoneWasBornOnSecXX());

function someBookWasReleaseOnThe80s() {
  return books.some((element) => element.releaseYear > 1979 && element.releaseYear <1990)
}

// console.log(someBookWasReleaseOnThe80s())

function authorUnique() {
  let yearAuthor = {}
  books.forEach((element) => {
    yearAuthor[element.author.birthYear] = (yearAuthor[element.author.birthYear] || 0) + 1
  } )
  return Object.values(yearAuthor).every((element) => element < 2)
}

console.log(authorUnique())
