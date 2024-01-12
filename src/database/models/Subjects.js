const pool = require("../config");

class Subjects {
  constructor() {
    this.database = pool;

    this.table = {
      name: "subjects",
      columns: {
        id: "id",
        name: "name",
        timeSpentOn: "time_spent_on",
        userId: "user_id",
        created_at: "created_at",
        updatedAt: "updated_at",
      },
    };
  }

  async all() {
    try {
      const query = "SELECT * FROM ??";

      const [rows, fields] = await this.database.query(query, [
        this.table.name,
      ]);

      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async create(subjectData) {
    try {
      const query = "INSERT INTO ??(??, ??, ??) VALUES(?, ?, ?)";

      const queryDone = await this.database.query(query, [
        this.table.name,
        this.table.columns.name,
        this.table.columns.timeSpentOn,
        this.table.columns.userId,
        subjectData.subjectName,
        subjectData.timeSpentOn,
        subjectData.userId,
      ]);

      return "Matéria criada com sucesso.";
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = Subjects;
