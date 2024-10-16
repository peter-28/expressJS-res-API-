const modelUsers = require("../models/modelUser");
const index = async (req, res) => {
  try {
    const [data] = await modelUsers.getAllUsers();
    res.json({
      message: "successfully get users",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const create = async (req, res) => {
  const { body } = req;

  // Validate
  if (!body.name || !body.username || !body.email || !body.password) {
    return res.status(400).json({
      message: "Name, username, email and password are required",
      data: null,
    });
  }
  //store
  try {
    await modelUsers.createNewUser(body);
    res.status(201).json({
      message: "Successfully created user",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error.message,
    });
  }
};

const update = (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    modelUsers.updateUser(body, id);
    res.json({
      message: "successfully update users",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const destroy = (req, res) => {
  const { id } = req.params;
  try {
    modelUsers.deleteUser(id);
    res.json({
      message: "successfully delete user",
      data: id,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  index,
  create,
  update,
  destroy,
};
