const modelUsers = require("../models/modelUser");
const index = async (req, res) => {
  try {
    const [data] = await modelUsers.getAllUsers();
    res.json({
      message: "successfully get users",
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
    message: "successfully post users",
  });
}

const update = (req, res) => {
  res.json({
    message: "successfully update users",
  });
}

const destroy = (req, res) => {
  res.json({
    message: "successfully delete users",
  });
}

module.exports = {
  index,
  create,
  update,
  destroy
}
