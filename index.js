const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/MapInformation');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();
app.use(bodyParser.json());

// CORSを許可する
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

require('./routes/mapInformationRoutes')(app);

if(process.env.NODE_ENV === "production") {
  // Express will server up produciton assets 
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will server up the index.html file 
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 5000
app.listen(PORT);