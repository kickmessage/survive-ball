const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: async function (callback) {
        try {

            await client.connect();
        }
        catch(err) {
            return callback(err)
        }
        console.log("Connection successfully established.")
    },

    getDb: function () {
        return _db;
    },
};
