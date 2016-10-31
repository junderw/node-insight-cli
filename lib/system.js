'use strict'
var LimitRequestPromise = require('limit-request-promise');
var lrp = module.exports = new LimitRequestPromise(1, 0.1);
// public site limitter
lrp.setup([
    // live-net
    {host:'https://insight.bitpay.com', max:1, sec:2},
    {host:'https://bitcore2.mytrezor.com', max:1, sec:2},
    {host:'https://blockexplorer.com', max:1, sec:2},
    {host:'https://insight.satoshipay.io', max:1, sec:2},
    {host:'https://www.localbitcoinschain.com', max:1, sec:2},
    // test-net
    {host:'https://testnet.blockexplorer.com', max:1, sec:3},
    {host:'https://test-insight.bitpay.com', max:1, sec:3}
]);
