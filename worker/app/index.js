const express = require('express');
const app     = express();

//const PORT = process.env.NODE_ENV === 'prod' ? 80 : 9000;
const PORT = 9100;
let message = 'Hello World';

console.log('Process started:', process.pid);

app.get('/call', (req, res) => {
    console.log('worker /call');
    res.send(`WORKER: ${message}`);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM');

    message += ' SIGTERM';

    setTimeout(() => {
        console.log('SHUTDOWN SIGTERM');
        process.exit(128 + 15);
    }, 2000);
});

process.on('exit', code => {
    console.log('exit '+ code);
});
