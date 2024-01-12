const Subjects = require("../database/models/Subjects");

class SubjectsController {
  constructor() {
    this.success = 200;
    this.postSuccess = 201;

    this.badData = 400;
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

  async create(req, res) {
    try {
      const { subjectName } = req.body;

      const subjectData = {
        subjectName,
        timeSpentOn: 0,
        userId: req.session.userData.id,
      };

      const createMessage = await this.subjects.create(subjectData);

      res.status(this.postSuccess).json({ success: true, msg: createMessage });
    } catch (error) {
      res
        .status(this.badData)
        .json({ success: false, msg: "A matéria já existe!" });
    }
  }
}

module.exports = SubjectsController;
