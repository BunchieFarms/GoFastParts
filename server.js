const express = require('express');

const app = express();

app.use(express.static('./dist/gofastparts'));
app.get('/*', function(req, res) {
	res.sendFile('index.html', {root: 'dist/gofastparts/'});
});
app.listen(process.env.PORT || 8080);