const lanIP = require('./lanip')
const getWifiIp = require('./wifiip');

let hostt;
wifiip?(hostt = wifiip):(lanIP?hostt = lanIP:(hostt = localhost));

const SFTPClient = require("ssh2-sftp-client") 
// ESM: import SFTPClient from "ssh2-sftp-client"

async function operationWithSFTP() {
    // initialize the SFTP client
    const sftp = new SFTPClient()
    
    try {
        // connect to the FTP/FTPS server
        await sftp.connect({
            host: hostt,
            port: 7883,
            username: "Vaibhav Singh",
            password: "iwillcrackit"
        })
        

        // upload the file located in localFile
        // to remoteFile
        await sftp.put('/upload', remoteFile);        
    } catch(e) {
        console.log(e)
    }
    
    // close the client connection
    await sftp.close()
}

// upload the local file "data.xslx"
// to store it to the remote file "marketing/Excel/data.xlsx"
uploadFileToSFTP("data.xslx", "marketing/Excel/data.xlsx")