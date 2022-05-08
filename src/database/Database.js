const path = require("path");
const fs = require("fs");

class Database {
    path = path.join(__dirname, "database.json");

    async connect() {
        try {
            if (!fs.existsSync(this.path)) {
                await fs.promises.writeFile(this.path, JSON.stringify({
                    products: []
                }, null, 4));
            }

            this.client = JSON.parse(await fs.promises.readFile(this.path, "utf-8"));

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
