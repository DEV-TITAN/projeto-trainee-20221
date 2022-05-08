class Repository {
    constructor(db) {
        this._db = db.getClient();
    }
}

module.exports = Repository;
