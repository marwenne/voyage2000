var express = require('express');
var router = express.Router();
var https = require('https');
const fetch = require('node-fetch');

var hotels = '';
//const api_url ='https://api.voyages2000.com.tn/${cityId},${checkin},${checkout},${pax}';
const api_url ='https://api.voyages2000.com.tn/hotels/availability?cityId=3&checkin=2021-08-12&checkout=2021-08-18&pax=2';

router.get('/search',async function(req, res) {

    var hotel = {
        locality : req.body.locality,
        arrDate : req.body.arrDate ,
        depDate : req.body.depDate ,
        nights : req.body.nights ,
        adults : req.body.adults1 ,
        children : req.body.children1 ,
        infant : req.body.infant1 ,
        cityId: 3 
    };

    try {
      await fetch(api_url)
        .then(res => res.json())
        .then(data => {
          if (!data) {
           res.send("errrrrrrrrroee")
           console.log("errrrrrrrrroee")
          } else {
          //  res.send(data)
          res.render('hotels',{listhotel : data.hotels, message : 'heloooooooooooooooooooooooooooooo'});
            console.log(data)
          }
        });
  
    } catch (err) {
      res.send("errrror a5er")
      console.log ("errrror a5er")
    }
  


 // console.log(hotels);
   //res.send(hotels);
 // res.render('hotels',{listhotel : hotels, message : 'bonjourrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'});
  });

  module.exports = router;
