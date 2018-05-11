


module.exports = (app) => {
  app.get('/api/hotels',(req,res)=>{
    console.log(req.body);
    console.log(req.headers);

    res.send('hello');
  })
}
