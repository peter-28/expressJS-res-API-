const modelCustomers = require("../models/modelCustomer");
const index = async (req, res) => {
  try {
    const [data] = await modelCustomers.getAllCustomers();
    res.json({
      message: "successfully get customers",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error
    });
  }
}

const create = (req, res) => {
  res.json({
    message: "successfully post customers",
  });
}

const update = (req, res) => {
  res.json({
    message: "successfully update customers",
  });
}

const destroy = (req, res) => {
  res.json({
    message: "successfully delete customers",
  });
}

module.exports = {
  index,
  create,
  update,
  destroy
}
