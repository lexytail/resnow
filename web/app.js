let express = require('express');
let app = express();
let server = 8000;

app.use(express.static('./'));

app.get('/', function(req, res) {
	res.sendFile('web/index.html');
});

app.listen(server, function () {
	console.log(`Лекси, сервер запущен на ${server} порте`);
})