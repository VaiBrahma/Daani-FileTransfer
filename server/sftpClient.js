<<<<<<< HEAD
const lanIP = require('./lanip')
const getWifiIp = require('./wifiip');

let hostt;
wifiip?(hostt = wifiip):(lanIP?hostt = lanIP:(hostt = localhost));

const SFTPClient = require("ssh2-sftp-client") 

async function operationWithSFTP() {
    const sftp = new SFTPClient()
    
    try {
        await sftp.connect({
            host: hostt,
            port: 7883,
            username: "Vaibhav Singh",
            password: "iwillcrackit"
        })

    } catch(e) {
        console.log(e)
    }
    
    await sftp.close()
}
=======
const SftpClient = require('ssh2-sftp-client');
const sftp = new SftpClient();

async function connectAndUpload() {
  try {
    await sftp.connect({
      host: 'your-sftp-host',
      port: 22,
      username: 'vaibhav-singh',
      password: 'iwillcrackit',
    });

    // Upload a file to the remote server
    await sftp.put('local-file-path', 'remote-file-path');

    // Close the SFTP connection
    sftp.end();
    console.log('File uploaded successfully.');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

module.exports = { connectAndUpload };
>>>>>>> old_daani/main
