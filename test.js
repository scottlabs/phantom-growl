var growl = require('./lib/growl');

var tests = 3;
var currentTest = 0;

function cb() {
    currentTest++;
    if ( currentTest === tests) { phantom.exit(0); }
};

growl('You have mail', {}, cb);
growl('Open a URL', { url: 'https://npmjs.org/package/growl' }, cb);
growl('Show image', { image: 'fixtures/img.png' }, cb);
