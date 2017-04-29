const bitcoin = require('bitcoin');

// all config options are optional
const client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'itoonx',
  pass: 'BLOCKCHAIN_ONLY_WE_TRUTH',
  timeout: 30000
});

var batch = [];
for (var i = 0; i < 10; ++i) {
  batch.push({
    method: 'getnewaddress',
    params: ['myaccount']
  });
}
client.cmd(batch, function(err, address, resHeaders) {
  if (err) return console.log(err);
  console.log('Address:', address);
});
