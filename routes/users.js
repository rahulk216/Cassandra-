var express = require('express');
var router = express.Router();
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
	contactPoints: ['127.0.0.1'],
});

/* GET users listing. */
router.get('/', function (req, res, next) {
	// res.send('respond with a resource');
	client.connect(() => {
		console.log('Connected to Cassandra : users');
	});
});

module.exports = router;
