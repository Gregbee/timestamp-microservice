// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();  
var moment = require('moment')



app.get('/:date?',function(req,res){
  var date = req.params.date;
  
  var result = null
  if(Number.isInteger(+date)){
      result = moment(Number.parseInt(date))    
  }
  else{
    result = moment(date)
  }
    
  if(!result || isNaN(result) || !date){
    res.send({unix: null,natural: null});
  }
  else{
    res.send({unix: result.format('X'), natural: result.format('MMMM DD, YYYY')})
  }
 
  
  
 

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
