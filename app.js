let express = require('express');
let app = express();
let server = 8000;

app.use(express.static('web'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.listen(server, function () {
	console.log(`Лекси, сервер запущен на ${server} порте`);
})