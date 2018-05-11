
module.exports = (app) => {
  app.post('/api/booking_submit',(req,res)=>{
    console.log('booking_submit');
      const bookingInfo = {
        "checkin_date": "2016-01-25",
        "checkout_date": "2016-01-26",
        "partner_reference": "abc123",
        "reference_id": "692e8acc-d1d9-45dc-b50f-e7b824f3306f",
        "partner_data":{
            "identifier_for_something":"9614b191-9e1b-4b7d-9cbc-5b9204ac2a2a"
        },
        "tracking_data": {
          "actor": "trivago",
          "advLink": "http://advertiser-site.com/hoteladlon/Executive_Brilliant_Doppelzimmer?start_date=2016-12-28&end_date=2016-12-29"
        },
        "payment": {
          "method": {
            "code": "PaymentCard",
            "options": [
              {
                "code": "MasterCard",
                "fee": {
                  "amount": 0.0,
                  "currency": "USD"
                }
              }
            ]
          },
          "parameters": {
            "card_number": "6011111111111117",
            "cardholder_name": "Christopher Palmer",
            "expiration_month": "09",
            "expiration_year": "2025",
            "cvv": "507",
            "callback_success": "",
            "callback_cancel": "",
            "callback_error": "",
            "type": "PaymentCard"
          },
          "billing_address": {
            "address1": "12 Johnson Junction",
            "city": "Santa Cruz",
            "state": "Maryland",
            "postal_code": "97897",
            "country": "US"
          }
        },
        "customer": {
          "first_name": "Christopher",
          "last_name": "Palmer",
          "phone_number": "9-(590)311-9256",
          "email": "Christopher.Palmer@test.trivago.com",
          "country": "US"
        },
        "rooms": [
          {
            "party": {
              "adults":2,
                  "children":[
                      1
                  ]
            },
            "traveler_first_name": "Christopher",
            "traveler_last_name": "Palmer"
          }
        ],
        "final_price_at_booking": {
          "amount": 100.0,
          "currency": "USD"
        },
        "final_price_at_checkout": {
          "amount": 5.00,
          "currency": "USD"
        }
      };

      res.send(bookingInfo);
  });


  app.post('/api/booking_availability',(req,res)=>{
    console.log('booking_availability');

const hotelData = {
      "api_version":1,
      "hotel_id":730099,
      "start_date":"2016-01-25",
      "end_date":"2016-01-26",
      "party":[
          {
              "adults":2,
              "children":[
                  1
              ]
          }
      ],
      "lang":"en_US",
      "user_country":"US",
      "room_types_array":[
          {
              "name":"Double Room, 1 King Bed",
              "final_price_at_booking":{
                  "amount":100,
                  "currency":"USD"
              },
              "final_price_at_checkout":{
                  "amount":5,
                  "currency":"USD"
              },
              "description":"Air-conditioned room with a minibar, desk and private bathroom.",
              "rooms_available":4,
              "partner_data":{
                  "identifier_for_something":"9614b191-9e1b-4b7d-9cbc-5b9204ac2a2a"
              },
              "rate_key" : "0fd6eca9-9c33-4978-b9bc-b3f3d60f6205",
              "room_type" : "STANDARD",
              "occupancy" : {
                  "standard_persons" : 2,
                  "max_persons" : 3,
                  "max_adults" : 2,
                  "max_children" : 2,
                  "max_child_age" : 16
              },
              "room_group": {
                  "code" : "e5db04fa67d6",
                  "name" : "Cozy Double Room",
                  "description" : "Air-conditioned room with a minibar, desk and private bathroom."
               },
              "line_items":[
                  {
                      "price":{
                          "amount":100,
                          "currency":"USD"
                      },
                      "type":"net_rate",
                      "paid_at_checkout":false,
                      "description":"base price"
                  },
                  {
                      "price":{
                          "amount":5,
                          "currency":"USD"
                      },
                      "type":"city_tax",
                      "paid_at_checkout":true,
                      "description":"city tax"
                  }
              ],
              "amenities":[
                  "free bottle of water",
                  "air condition"
              ],
              "value_adds" : [
                  "FREE_BREAKFAST",
                  "FREE_INTERNET",
                  "FREE_PARKING"
              ],
              "payment_methods": [
                  {
                      "code": "PaymentCard",
                      "options": [
                          {
                              "code": "MasterCard",
                              "fee": {
                                  "amount": 0.0,
                                  "currency": "USD"
                              }
                          },
                          {
                              "code": "Visa",
                              "fee": {
                                  "amount": 2.77,
                                  "currency": "USD"
                              }
                          }
                      ]
                  },
                  {
                      "code": "ExternalProvider",
                      "options": [
                          {
                              "code": "Paypal",
                              "fee": {
                                  "amount": 0.0,
                                  "currency": "USD"
                              }
                          }
                      ]
                   },
                   {
                      "code": "BankAccount",
                      "options": [
                          {
                              "code": "DirectDebit",
                              "fee": {
                                  "amount": 0,
                                  "currency": "GBP"
                              }
                          }
                      ]
                  },
                  {
                      "code": "ManualPayment",
                      "options": [
                          {
                              "code": "BankTransfer",
                              "fee": {
                                  "amount": 0,
                                  "currency": "GBP"
                              }
                          }
                      ]
                  }
              ],
              "photos":[
                  {
                      "url":"https://trv-companypages.s3-eu-central-1.amazonaws.com/wp-content/uploads/sites/2/2015/07/trivago_logo_twitter-1024x512.png",
                      "caption":"Trivago logo",
                      "width":1024,
                      "height":512
                  }
              ],
              "cancellation": {
  				"policy": "free text",
  				"penalties": [
  					{
  						"fee": {
  							"amount": 20.0,
  							"currency": "USD"
  						}
  					},
  					{
  						"from": "2016-01-18T16:00:00+0000",
  						"fee": {
  							"amount": 100.0,
  							"currency": "USD"
  						}
  					}
  				]
  			}
          }
      ],
      "hotel_details":{
          "name":"Some Awesome Hotel",
          "address1":"52977 Ismael Bridge",
          "city":"South Maurice",
          "state":"NY",
          "postal_code":"01234",
          "country":"USA",
          "latitude":-61.7414,
          "longitude":-174.122,
          "phone":"(509) 711-6896",
          "url":"http://www.hotel-site.com/welcome",
          "amenities":[
              "RESTAURANT",
              "NON_SMOKING",
              "FREE_PARKING"
          ],
          "photos":[
              {
                  "url":"https://trv-companypages.s3-eu-central-1.amazonaws.com/wp-content/uploads/sites/2/2015/07/trivago_logo_twitter-1024x512.png",
                  "caption":"Trivago logo",
                  "width":1024,
                  "height":512
              }
          ],
          "checkinout_policy":"check-in from 3pm and check-out till 12am"
      },
      "customer_support":{
          "phone_numbers":[
              {
                  "contact":"444-444-4444",
                  "description":"Support number"
              }
          ]
      }
  };

    res.send(hotelData);
  })
}
