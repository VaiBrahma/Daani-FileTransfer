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
        

        // download the file located in remotePath
        // to localFile
        await sftp.get(remoteFile, localFile);        
    } catch(e) {
        console.log(e)
    }
    
    // close the client connection
    await sftp.close()
}

// download the remote file "marketing/CSV/prices.csv"
// and save it to the local file "prices.csv"
downloadFileFromSFTP("prices.csv", "marketing/CSV/prices.csv")