const bitcoin = require('bitcoin');

// all config options are optional
const client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'itoonx',
  pass: 'BLOCKCHAIN_ONLY_WE_TRUTH',
  timeout: 30000
});

client.cmd('getinfo', '*', 6, function(err, info, resHeaders){
  if (err) return console.log(err);
  console.log('Bitcoind Info :', info);
});

client.getBalance('*', 6, function(err, balance, resHeaders) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});

if (info && balance) {
    console.log('RPC Connection OK!!!');
}