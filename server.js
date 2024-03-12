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

async function loginUser(email, password) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.password !== password) {
      throw new Error("Incorrect password");
    }

    return user;
  } catch (error) {
    throw new Error("Failed to login: " + error.message);
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

async function createPlant(name, description, price, image, inventory) {
  try {
    const newPlant = await prisma.plant.create({
      data: {
        name,
        description,
        price,
        image,
        inventory,
      },
    });
    return newPlant;
  } catch (error) {
    throw new Error("Failed to create plant: " + error.message);
  }
}

async function updatePlant(id, data) {
  try {
    const updatedPlant = await prisma.plant.update({
      where: { id },
      data,
    });
    return updatedPlant;
  } catch (error) {
    throw new Error("Failed to update plant: " + error.message);
  }
}

async function getAllPlants() {
  try {
    const plants = await prisma.plant.findMany();
    return plants;
  } catch (error) {
    throw new Error("Failed to fetch plants: " + error.message);
  }
}

async function createOrder(userId, plantIds, totalPrice) {
  try {
    const newOrder = await prisma.order.create({
      data: {
        user: {
          connect: { id: userId },
        },
        plants: {
          connect: plantIds.map((id) => ({ id })),
        },
        totalPrice,
      },
    });
    return newOrder;
  } catch (error) {
    throw new Error("Failed to create order.");
  }
}

async function getAllOrders() {
  try {
    const orders = await prisma.order.findMany();
    return orders;
  } catch (error) {
    throw new Error("Failed to fetch orders: " + error.message);
  }
}

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  createPlant,
  updatePlant,
  getAllPlants,
  createOrder,
  getAllOrders,
};
