const pool = require("../config");

class Users {
  constructor() {
    this.table = {
      name: "users",
      columns: {
        id: "id",
        name: "name",
        email: "email",
        password: "password",
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    };

    this.database = pool;
  }

  async get(email) {
    try {
      const query = "SELECT ??, ?? FROM ?? WHERE ?? LIKE ? LIMIT 1";

      const [rows] = await this.database.query(query, [
        this.table.columns.email,
        this.table.columns.password,
        this.table.name,
        this.table.columns.email,
        email,
      ]);

      return rows[0];
    } catch (error) {
      return {
        error: "There was a sql ERROR.",
      };
    }
  }
}

module.exports = Users;
