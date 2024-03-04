const express = require('express');
const app = express();
const lesson1Route = require('./routes')
 
app.use('/',lesson1Route)
 
const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});