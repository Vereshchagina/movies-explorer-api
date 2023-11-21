const router = require('express').Router();
const { validatePatchUserInfo } = require('../middlewares/validation');

const {
  updateUser,
  getMyProfile,
} = require('../controllers/users');

router.get('/me', getMyProfile);
router.patch('/me', validatePatchUserInfo, updateUser);

module.exports = router;
