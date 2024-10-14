const dbPool = require("../config/database");
const getAllCustomers = () => {
  const data = "SELECT * FROM customers";
  return dbPool.execute(data);
};

const createNewCustomer = (body) => {
  const data = `INSERT INTO customers(customer_name, customer_address, customer_phone, customer_email) 
                        VALUES ('${body.customer_name}', '${body.customer_address}', '${body.customer_phone}', '${body.customer_email}')`;
  return dbPool.execute(data);
}

const updateCustomer = (body, id) => {
  const data = `UPDATE customers 
                SET customer_name = ?, 
                    customer_address = ?, 
                    customer_phone = ?, 
                    customer_email = ? 
                WHERE id = ?`;
  return dbPool.execute(data, [
    body.customer_name,
    body.customer_address,
    body.customer_phone,
    body.customer_email,
    id
  ]);
}

const deleteCustomer = (id) => {
  const data = `DELETE FROM customers WHERE id = ?`;
  return dbPool.execute(data, [id]);
}

module.exports = {
  getAllCustomers,
  createNewCustomer,
  updateCustomer,
  deleteCustomer
}
