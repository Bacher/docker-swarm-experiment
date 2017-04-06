const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.NODE_ENV === 'prod' ? 80 : 9000;

app.get('/call', (req, res) => {
    console.log('balancer /call');

    Promise.race([
        request('http://127.0.0.1:9100/call'),
        timeout(1000),
    ]).then(data => {
        res.end(`BALANCER FROM WORKER: ${data}`);

    }, err => {
        console.error('Worker call failed:', err.message);
        res.status(500);
        res.end(`BAD: ${err ? err.message.substr(0, 100) : 'NONE'}`);
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('TIMEOUT'));
        }, ms);
    });
}
