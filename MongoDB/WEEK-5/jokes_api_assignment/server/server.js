const express = require("express");
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

const JokeRoutes = require("./routes/jokes.routes");
JokeRoutes(app);

app.listen(8000, ()=> console.log("The server is live on port 8000"))