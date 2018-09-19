const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://vivekjack:Imvivek123@ds261342.mlab.com:61342/phill');
var cors = require('cors')

app.use(cors())
const bodyParser = require('body-parser')

// The order of the following middleware is very important!!
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('./public/index.html');
  })
// Routes
app.use('/api', require('./routes/user'));
// Start server
const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Server listening at ${port}`);