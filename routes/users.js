const router = require('express').Router();
const { validatePatchUserInfo, validatePatchAvatar, validateGetUserById } = require('../middlewares/validation');

const {
  getUsers,
  getUserById,
  updateUser,
  updateAvatar,
  getMyProfile,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getMyProfile);
router.get('/:userId', validateGetUserById, getUserById);
router.patch('/me', validatePatchUserInfo, updateUser);
router.patch('/me/avatar', validatePatchAvatar, updateAvatar);

module.exports = router;
