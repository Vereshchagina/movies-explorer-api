const router = require('express').Router();
const { validatePostCard, validateGetCardById } = require('../middlewares/validation');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', validatePostCard, createCard);
router.delete('/:cardId', validateGetCardById, deleteCard);
router.put('/:cardId/likes', validateGetCardById, likeCard);
router.delete('/:cardId/likes', validateGetCardById, dislikeCard);

module.exports = router;
