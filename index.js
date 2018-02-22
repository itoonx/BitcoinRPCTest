const bitcoin = require('bitcoin');
const env = require('./environment.json');


if (!env) {
	return console.log('Not found environment.json, Please make sure you have the rpc configuration file');
}

// all config options are optional
const client = new bitcoin.Client({
  host: env.rpchost,
  port: env.rpcport,
  user: env.rpcusername,
  pass: env.rpcpassword,
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
