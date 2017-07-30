const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req, res) => {
    res.send('go to api/whoami');
});

app.get('/api/whoami', (req, res) => {
    let info = {
        'ipaddress': req.ip,
        'language': req.headers['accept-language'].split(',')[0],
        'software': req.headers["user-agent"].split("(")[1].split(")")[0]
    };

    console.log(JSON.stringify(info));
    res.set('Content-Type', 'application/json');
    res.json(info);
});

app.listen(port, () => {
    console.log('Listening on port: ', port);
}); 