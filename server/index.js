const express = require('express');
const lanIP = require('./lanip');
const getWifiIp = require('./wifiip');
const path = require('path');

const port = 7883;
const app = express()

const wifiip = getWifiIp();

let host;
wifiip?(host = wifiip):(lanIP?host = lanIP:(host = localhost));

app.use(express.static(path.join(__dirname,'../client/src')))
app.use('/',(req,res)=>{
    res.send('heelo');
})

app.listen(port, host, ()=>{
    console.log(`server listened at http://${host}:${port}`)
})