const app = require("./app");
const {PORT, API_URL} = require("./config");

app.listen(PORT, () => console.log(`Server running at ${API_URL}`));
