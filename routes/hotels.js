


module.exports = (app) => {
  app.get('/api/booking_availability',(req,res)=>{
    console.log(req.body);
    console.log(req.headers);

const hotelData = {
"api_version": 4,
"lang": "en_GB",
"hotels": [
{
"partner_reference": "5568",
"name": "Hotel Adlon",
"street": "Unter den Linden 77",
"city": "Berlin",
"postal_code": "10117",
"state": "NRW",
"country": "Germany",
"latitude": 52.51624,
"longitude": 13.380437,
"desc": "Welcome to the hotel Adlon Kempinski, a hotel full of tradition and elegance in the heart of the city center.",
"amenities": [
"Beauty Center",
"Business Center",
"Café/ Bistro",
"Sauna"
],
"url": "http://advertiser-site.com/hoteladlon",
"email": "adlon@adlon.com",
"phone": "030-123123",
"fax": "030-12341234",
"room_types": {
"Executive Double": {
"url": "http://advertiser-site.com/hoteladlon/executive_double",
"desc": "When Lorenz Adlon opened this luxury hotel in 1907, he fulfilled his lifetime dream. The incredible aura of Hotel Adlon embraces you as soon as you cross the door."
},
"Superior Deluxe Double": {
"url": "http://advertiser-site.com/hoteladlon/superior_deluxe_Double",
"desc": "The view from the window is too spectacular to be ignored."
}
}
},
{
"partner_reference": "12345",
"name": "Hotel Majestic",
"street": "Viale Milano 18",
"city": "Rome",
"postal_code": "00115",
"state": "Lazio",
"country": "Italy",
"latitude": 132.51624,
"longitude": 10.380437,
"desc": "Welcome to the hotel Majestic, a hotel full of tradition and elegance in the heart of the city center.",
"amenities": [
"Beauty Center",
"Business Center",
"Café/ Bistro",
"Sauna"
],
"url": "http://advertiser-site.com/hotelmajestic",
"email": "majestic@majestic.com",
"phone": "030-123123",
"fax": "030-12341234",
"room_types": {
"Superior Deluxe Double": {
"url": "http://advertiser-site.com/hotelmajestic/superior_deluxe_Double",
"desc": "The view from the window is too spectacular to be ignored."
}
}
}
]
};


    res.send(JSON.stringify(hotelData));
  })
}
