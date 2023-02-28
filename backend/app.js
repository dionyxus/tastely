let express = require('express');
let app = express(); 
const cors = require("cors");

const bodyParser = require("body-parser");
const router = require('./routes');

app.use(cors());

require('./models/db');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/v1", router);

app.set('port', process.env.PORT || 8080);

let server = app.listen(app.settings.port, () => console.log('listening on ', app.settings.port));

app.get("/*",(req,res) => {
    res.status(404).json({error:"Page not found for now"});
});