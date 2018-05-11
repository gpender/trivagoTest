
module.exports = (app) => {
  app.post('/api/booking_submit',(req,res)=>{
    console.log('booking_submit');


      res.send(bookingInfo);
  });


  app.post('/api/booking_availability',(req,res)=>{
    console.log('booking_availability');

    res.send(hotelData);
  });
  const bookingInfo = require('./bookingInfo.json');
  
  const hotelData = require('./hotelData.json');



}
