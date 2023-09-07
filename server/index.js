const express = require('express');
const lanIP = require('./lanip');
const getWifiIp = require('./wifiip');
const path = require('path');
const cors = require('cors')
const SFTPClient = require("ssh2-sftp-client") 


const port = 7883;
const wifiip = getWifiIp();

const app = express()

let hostt;
wifiip?(hostt = wifiip):(lanIP?hostt = lanIP:(hostt = localhost));

// app.use(express.static(path.join(__dirname,'../client/src')))
// app.use(cors());


app.post('/api/upload',(req,res)=>{
    console.log('connected');
    async function operationWithSFTP() {
        const sftp = new SFTPClient()
        
        try {
            await sftp.connect({
                host: hostt,
                port: 7883,
                username: "Vaibhav Singh",
                password: "iwillcrackit"
            })
            await sftp.put('/api/upload', '/api/download'); 
        } catch(e) {
            console.log(e)
        }
        
        await sftp.close()
    }
})

app.get('/api/lanIP', (req, res) => {
    res.json({hostt});
    console.log('hostnameis:',something.hostname)

  });

app.use('/',(req,res)=>{
    res.send(`hello dunia at ${wifiip}`);
})

app.listen(port, hostt, ()=>{
    console.log(`server listened at http://${hostt}:${port}`)
})