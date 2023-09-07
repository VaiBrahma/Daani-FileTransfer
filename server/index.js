const express = require('express');
const lanIP = require('./lanip');
const getWifiIp = require('./wifiip');
const path = require('path');
const cors = require('cors')
const multer = require('multer-sftp');


const port = 7883;
const wifiip = getWifiIp();

const app = express()

let hostt;
wifiip?(hostt = wifiip):(lanIP?hostt = lanIP:(hostt = localhost));

// app.use(express.static(path.join(__dirname,'../client/src')))
// app.use(cors());
// Set up Multer-SFTP for file uploads
const storage = multer({
  sftp: {
    host: hostt,
    port: 7883, 
    username: 'Vaibhav Singh',
    password: 'your-password',
    // SFTP server directory where files will be uploaded
    directory: '/path/to/upload/directory',
  },
  limits: {
    fileSize: 5000 * 1024 * 1024, // 5 MB limit per file
  },
});

// Middleware to handle file uploads
app.post('/upload', storage.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully!' });
});

// Endpoint to download a file by specifying its filename
app.get('/download/:filename', (req, res) => {
  const { filename } = req.params;

  // Use Multer-SFTP's `download` function to download the file
  res.sftp.download(filename, (err, stream) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Unable to download the file.' });
    }

    // Set the appropriate response headers
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type', 'application/octet-stream');

    // Pipe the file stream to the response
    stream.pipe(res);
  });
});
////////////////////////////////////////////////////////////////////////

app.get('/api/lanIP', (req, res) => {
    res.json({hostt});
    console.log('hostnameis:',something.hostname)

  });

// app.use('/',(req,res)=>{
//     res.send(`hello dunia at ${wifiip}`);
// })

app.listen(port, hostt, ()=>{
    console.log(`server listened at http://${hostt}:${port}`)
})