const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/MapInformation');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();
app.use(bodyParser.json());

require('./routes/mapInformationRoutes')(app);



const PORT = process.env.PORT || 5000
app.listen(PORT);