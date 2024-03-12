
const users = [
  { id: 1, email: 'user1@example.com', password: 'password1' },
  { id: 2, email: 'user2@example.com', password: 'password2' }
];

async function createUser(email, password) {
  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);
  return newUser;
}

async function getAllUsers() {
  return users;
}

async function loginUser(email, password) {
  const user = users.find(user => user.email === email);

  if (!user || user.password !== password) {
    throw new Error('Invalid email or password');
  }

  return user;
}

module.exports = {
  createUser,
  getAllUsers,
  loginUser
};
