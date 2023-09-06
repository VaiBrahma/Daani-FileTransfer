const os = require('os');
const dns = require('dns');

function getWifiIp() {
    const networkInterfaces = os.networkInterfaces();
    for (const interfaceName in networkInterfaces) {
        const networkInterface = networkInterfaces[interfaceName];
        for (const entry of networkInterface) {
            if (entry.family === 'IPv4' && !entry.internal) {
                return entry.address;
            }
        }
    }
    return null;
}

function checkWifiConnection() {
    return new Promise((resolve, reject) => {
        dns.lookup('www.google.com', (err) => {
            if (err && err.code === 'ENOTFOUND') {
                reject('Not connected to Wi-Fi. Please connect to Wi-Fi.');
            } else {
                resolve('Connected to Wi-Fi');
            }
        });
    });
}

async function main() {
    try {
        const wifiIp = getWifiIp();
        if (wifiIp) {
            console.log(`Your Wi-Fi IP address is: ${wifiIp}`);
        } else {
            console.log('Please connect to Wi-Fi to get the IP address.');
        }

        const wifiStatus = await checkWifiConnection();
        console.log(wifiStatus);
    } catch (error) {
        console.error(error);
    }
}

main();

module.exports = getWifiIp;