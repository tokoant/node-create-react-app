const fs = require('fs');

exports.handler = async function http (req) {
  console.log('Begin API called');
  const ip = fs.readFileSync('./ip.txt');
  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: JSON.stringify({
      message: `Service from Ansible Host: ${ip}!`
    })
  }
}

