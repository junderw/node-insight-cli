var InsightRestClient = require('..').RestClient;
var cli = new InsightRestClient();
cli.transactionsbyAddress('12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX').then(console.log)
