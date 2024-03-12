const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createUser(email, password) {
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error("Failed to create user: " + error.message);
  }
}

async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
}

async function loginUser(email, password) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }

    return user;
  } catch (error) {
    throw new Error("Failed to login: " + error.message);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  loginUser,
};
 