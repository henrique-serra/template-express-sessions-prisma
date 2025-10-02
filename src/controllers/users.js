const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.createUserPost = (req, res) => {
  try {
  } catch (error) {
    console.error('Error posting message: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
