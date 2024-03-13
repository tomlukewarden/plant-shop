const users = [
  { id: 1, email: 'user1@example.com', password: 'password1' },
  { id: 2, email: 'user2@example.com', password: 'password2' }
];

export const getAllUsers = async () => {
  return users;
};

export const loginUser = async (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user || user.password !== password) {
    throw new Error('Invalid email or password');
  }

  return user;
};

export const signUpUser = async (email, password) => {
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);
  return newUser;
};
