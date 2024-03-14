import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error('Failed to fetch users: ' + error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }

    return user;
  } catch (error) {
    throw new Error('Failed to login: ' + error.message);
  }
};

export const signUpUser = async (email, password, firstName, lastName) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });
    
    return newUser;
  } catch (error) {
    throw new Error('Failed to sign up: ' + error.message);
  }
};

export const getUserProfile = async (userId) => {
  try {
    const userProfile = await prisma.user.findUnique({
      where: { id: userId },
      include: { 
        orders: true,
      },
    });
    
    return userProfile;
  } catch (error) {
    throw new Error('Failed to get user profile: ' + error.message);
  }
};
