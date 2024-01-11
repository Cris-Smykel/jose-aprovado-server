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

      if (!userEmail || !userPassword) {
        return this.userNotFound(res);
      }

      const userData = await this.users.get(userEmail);

      if (!userData) {
        return this.userNotFound(res);
      }

      if (userPassword !== userData.password) {
        return this.userNotFound(res);
      }

      req.session.isLogged = true;

      res.status(this.success).json({ success: true, data: userData });
    } catch (error) {
      res
        .status(this.notFound)
        .json({ success: false, msg: "User not found." });
    }
  }

  checkLogged(req, res) {
    let isLogged = false;

    if (req.session.isLogged) {
      isLogged = true;
    }

    res
      .status(this.success)
      .json({ success: true, data: { isLogged: isLogged } });
  }

  userNotFound(res) {
    const userNotFound = "Usuário não encontrado.";

    return res
      .status(this.notFound)
      .json({ success: false, msg: userNotFound });
  }
}

module.exports = UsersController;
