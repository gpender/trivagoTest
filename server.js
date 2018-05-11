const express = require('express');

const app = express();
const PORT = process.env['PORT'] || 2000;

require('./routes/hotels')(app);

app.listen(PORT,()=>{
  console.log('Server started on port ' + PORT);
})
