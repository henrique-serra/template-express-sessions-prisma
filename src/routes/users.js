const { Router } = require('express');
const usersController = require('../controllers/users');

const router = Router();

router.get('/', (req, res) => {
  return res.send('hello world');
});

router.post('/', usersController.createUserPost);

module.exports = router;
