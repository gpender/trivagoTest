const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env['PORT'] || 2000;

app.use(bodyParser.json());

require('./routes/hotels')(app);

app.listen(PORT,()=>{
  console.log('Server started on port ' + PORT);
})
