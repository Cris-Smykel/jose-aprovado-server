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
}

module.exports = Subjects;
