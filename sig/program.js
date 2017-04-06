const signals = {
    'SIGINT':  2,
    'SIGTERM': 15
};

function shutdown(signal, value) {
    setTimeout(function() {
        console.log('server stopped by ' + signal);
        process.exit(128 + value);
    }, 1000);
}
Object.keys(signals).forEach(function(signal) {
    process.on(signal, function() {
        shutdown(signal, signals[signal]);
    });
});

setInterval(function() {

}, 100000);
