async function validaName (req, res, next) {
  const { name } = req.body;
  if(!name) return res.status(400).json({ message: 'O campo name é obrigatório' })
  if(name.length < 4) return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' })
  next();
};

async function validaPrice (req, res, next) {
  const { price } = req.body;
  if(typeof price === "undefined") return res.status(400).json({ message: 'O campo price é obrigatório' })
  if(price < 0) return res.status(400).json({ message: 'O campo price deve ser um número maior ou igual a zero' })
  next();
};

async function validaDescription (req, res, next) {
  const { description } = req.body;
  if(!description) return res.status(400).json({ message: 'O campo description é obrigatório' })
  const {rating, difficulty, createdAt} = description;
  if(!createdAt) return res.status(400).json({ message: 'O campo createdAt é obrigatório' })
  if(!rating) return res.status(400).json({ message: 'O campo rating é obrigatório' })
  if(!difficulty) return res.status(400).json({ message: 'O campo difficulty é obrigatório' })
  next();
};

async function validaDate (req, res, next) {
  const regexDate = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const { description } = req.body;
  const { createdAt } = description;
  if(!regexDate.test(createdAt)) return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' })
  next();
};

async function validaRating (req, res, next) {
  const { description } = req.body;
  const { rating } = description;
  if(!Number.isInteger(rating)
    || rating < 1 
    || rating > 5) return res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' })
  next();
};

async function validaDifficulty (req, res, next) {
  const { description } = req.body;
  const { difficulty } = description;
  const difficultys = ['Fácil', 'Médio', 'Difícil'];
  const verification = difficultys.some((dif) => dif === difficulty);
  if(!verification) return res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' })
  next();
};




module.exports = {
  validaName,
  validaPrice,
  validaDescription,
  validaDate,
  validaRating,
  validaDifficulty
};