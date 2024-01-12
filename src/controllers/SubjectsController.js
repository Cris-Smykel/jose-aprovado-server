const Subjects = require("../database/models/Subjects");

class SubjectsController {
  constructor() {
    this.success = 200;
    this.postSuccess = 201;

    this.serverError = 500;

    this.subjects = new Subjects();
  }

  async getAll(req, res) {
    try {
      const subjectsData = await this.subjects.all();

      res.status(this.success).json({ success: true, data: subjectsData });
    } catch (error) {
      res
        .status(this.serverError)
        .json({ success: false, msg: "There was a server error." });
    }
  }
}

module.exports = SubjectsController;
