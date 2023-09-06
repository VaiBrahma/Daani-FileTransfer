const express = require('express');
const multer = require('multer');
const os = require('os');
const app = express();
const port = 8000;

const lanIP = getLANIP();

function getLANIP() {
  const networkInterfaces = os.networkInterfaces();
  let lanIP = '127.0.0.1';

  for (const key of Object.keys(networkInterfaces)) {
    for (const iface of networkInterfaces[key]) {
      // Check if the interface is not internal and is IPv4
      if (!iface.internal && iface.family === 'IPv4') {
        lanIP = iface.address;
        break; // Use the first non-internal IPv4 address found
      }
    }
  }

  return lanIP;
}
module.exports = lanIP;

