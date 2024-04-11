const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const mUrl = process.env.url;
module.exports = {PORT, mUrl};
