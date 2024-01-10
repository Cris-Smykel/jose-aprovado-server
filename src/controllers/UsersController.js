const Users = require("../database/models/Users");

class UsersController {
  constructor() {
    this.users = new Users();

    this.success = 200;
    this.postSuccess = 201;

    this.badData = 400;
    this.notFound = 404;
  }

  async authUser(req, res) {
    try {
      const { userEmail, userPassword } = req.body;

      const userRow = await this.users.get(userEmail);

      res.status(this.success).json({ success: true, data: userRow });
    } catch (error) {
      res
        .status(this.notFound)
        .json({ success: false, msg: "User not found." });
    }
  }
}

module.exports = UsersController;
