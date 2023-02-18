let express = require('express');
const path = require('path');
const cors = require('cors');
let app = express(); 

const bodyParser = require("body-parser");
const router = require('./routes');

require('./models/db');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());

app.use("/api/v1", router);

app.set('port', process.env.PORT || 8080);

let server = app.listen(app.settings.port, () => console.log('listening on ', app.settings.port));

app.get("/*",(req,res) => {
    res.status(404).json({error:"Page not found for now"});
});

//Routes
const RegisterRoute = require('./routes/register');
app.use('/', RegisterRoute);

const LoginRoute = require('./routes/login');
app.use('/', LoginRoute);



app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public', 'index.html'));
  });