const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createUser(email, password, firstName, lastName) {
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error("Failed to create user: " + error.message);
  }
}

