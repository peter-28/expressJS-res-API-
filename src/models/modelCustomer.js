const dbPool = require("../config/database");
const getAllCustomers = () => {
  const data = "SELECT * FROM customers";
  return dbPool.execute(data);
};

module.exports = {
  getAllCustomers,
}
