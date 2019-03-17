const express = require('express');
const app = express();
const mongoose = require('mongoose');
const  config = require ('./config/database');
const path = require('path');

mongoose.promise = global.promise;
mongoose.connect(config.uri, (err) =>{
    if (err){
        console.log('could not connect to database: ',err);
        } else{
            console.log('connected to database: '+ config.db);
            
        }
}
);
app.use(express.static(__dirname + '/client/dist/client'));
app.get('*', (req, res) => {
    res.send(path.join(__dirname + '/client/dist/client/index.html'));
  });
  
  app.listen(8080,() => {
    console.log('listening to port 8080');
    
  
  });