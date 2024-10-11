const dbPool = require("../config/database");
const getAllUsers = () => {
  const data = "SELECT * FROM users";
  return dbPool.execute(data);
};

module.exports = {
  getAllUsers,
}
