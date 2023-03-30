const express = require('express');
const { createActivies } = require('../utils/fs')
const { 
  validaName,
  validaPrice, 
  validaDescription, 
  validaDate,
  validaRating,
  validaDifficulty
} = require('../middlewares/Validations');

const router = express.Router();

router.post(
  '/activities',
  validaName,
  validaPrice,
  validaDescription,
  validaDate,
  validaRating,
  validaDifficulty,
  async (req, res) => {
    const newActivies = req.body;
    await createActivies(newActivies);
    return res.status(200).json({message: 'Atividade cadastrada com sucesso!'})
  }
);

module.exports = router;