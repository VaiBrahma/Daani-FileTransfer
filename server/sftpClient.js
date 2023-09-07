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
