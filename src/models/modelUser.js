const dbPool = require("../config/database");
const getAllUsers = () => {
  const data = "SELECT * FROM users";
  return dbPool.execute(data);
};

const createNewUser = (body) => {
  const data = `INSERT INTO users(name, username, email, password)
                VALUES ('${body.name}', '${body.username}', '${body.email}', '${body.password}')`;
  return dbPool.execute(data);
};

const updateUser = (body, id) => {
  const data = `UPDATE users
                SET name     = '${body.name}',
                    username = '${body.username}',
                    email    = '${body.email}',
                    password = '${body.password}'
                WHERE id = ${id}`;
  return dbPool.execute(data);
};

const deleteUser = (id) => {
  const data = `DELETE
                FROM users
                WHERE id = ${id}`;
  return dbPool.execute(data);
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}
