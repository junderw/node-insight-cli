var InsightRestClient = require('..').RestClient;
var batch = require('..').batch;
var cli = new InsightRestClient();
batch.transaction(cli, ['0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098']).then(console.log)
