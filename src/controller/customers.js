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

const create = async (req, res) => {
  const {body} = req;
  try {
    await modelCustomers.createNewCustomer(body);
    res.json({
      message: "Successfully created customers",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error.message,
    });
  }
};

const update = async (req, res) => {
  const {body} = req;
  const {id} = req.params;
  try {
    await modelCustomers.updateCustomer(body, id);
    res.json({
      message: "successfully update customers",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error.message,
    });
  }
}

const destroy = async (req, res) => {
  const {id} = req.params;
  try {
    await modelCustomers.deleteCustomer(id);
    res.json({
      message: "successfully delete customers",
      data: id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error.message,
    });
  }
}

module.exports = {
  index,
  create,
  update,
  destroy
}
