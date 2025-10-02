const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.createUserPost = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        password: hashedPassword,
      },
    });

    return res.json(user);
  } catch (error) {
    console.error('Error posting message: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
