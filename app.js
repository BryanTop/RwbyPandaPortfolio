const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();

app.use(helmet());

app.use(bodyParser.json());

app.use(helmet.hidePoweredBy({setTo: 'PHP 4.2.0'}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');



app.get('/NWUI/index', (req, res) => {
    res.render('NWUI/index');
})


app.get('/', (req, res) => {
    res.render('index');
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Example app listening on port ' + port);
});

//Run app, then load http://localhost:port in a browser to see the output.


