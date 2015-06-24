/**
 * Module dependencies.
 */

var os = require('system').os;
var execFile = require('child_process').execFile;

var cmd = {
    type: "Darwin-NotificationCenter",
    pkg: "terminal-notifier",
    msg: '-message',
    title: '-title',
    subtitle: '-subtitle',
    sound:  '-sound',
    url: '-open',
    priority: {
        cmd: '-execute',
        range: []
    }
};

exports = module.exports = growl;

function growl(msg, options, fn) {
    var image;
    var args = [];
    var options = options || {};
    var fn = fn || function(){};

    // message
    args.push(cmd.msg);
    var stringifiedMsg = JSON.stringify(msg);
    var escapedMsg = stringifiedMsg.replace(/\\n/g, '\n');
    args.push(escapedMsg);

    if (options.url) {
        args.push(cmd.url);
        args.push(JSON.stringify(options.url));
    }

    if ( options.image ) {
        args.push('-contentImage');
        args.push(options.image);
    }

    //execFile("ls", ["-lF", "/usr"], null, function (err, stdout, stderr) {
        //console.log("execFileSTDOUT:", JSON.stringify(stdout))
        //console.log("execFileSTDERR:", JSON.stringify(stderr))
    //})

    // execute
    //console.log(cmd.pkg, args.join(' '));
    execFile(cmd.pkg, args, null, fn);
};
