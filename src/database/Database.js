const path = require("path");
const fs = require("fs");
const {DB_PATH} = require("../config/database");

class Database {
    async connect() {
        try {
            if (!fs.existsSync(DB_PATH)) {
                await fs.promises.writeFile(DB_PATH, JSON.stringify({
                    products: []
                }, null, 4));
            }

            this.client = JSON.parse(await fs.promises.readFile(DB_PATH, "utf-8"));

            return this.client;
            } catch (err) {
                throw new Error("Can't connect to database");
            }
    }

    getClient() {
        return this.client;
    }
}

module.exports = Database;
