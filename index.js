var FS = require('fs'),
    NODE_RATIFY = require('node-ratify');

function isJpeg (path, cb) {
    if (!NODE_RATIFY.isFunction(cb)) {
        throw new TypeError('callback not provided');
    } else if (!NODE_RATIFY.isString(path)) {
        throw new TypeError('provided path is not correct');
    } else {
        var buffer = new Buffer(2);
        FS.open(path, 'r', function (err, fd) {
            if (err) {
                throw (err);
            } else {
                FS.read(fd, buffer, 0, 2, 0, function (err, bytesRead, buffer) {
                    if (err) {
                        FS.close(fd, function (err1) {
                            cb(err1 || err, false);
                        });
                    } else {
                        if (buffer && buffer.length === 2) {
                            cb(null, (buffer[0] === 0xFF && buffer[1] === 0xD8));
                        } else {
                            cb(null, false);
                        }
                    }
                });
            }
        });
    }
};

function isJpegSync (path) {
    var ret = false;
    if (!NODE_RATIFY.isString(path)) {
        throw new TypeError('provided path is not correct');
    } else {
        var buffer = new Buffer(2);
        var fd = FS.openSync(path, 'r');

        if (fd) {
            // Read the file synchronously
            FS.readSync(fd, buffer, 0, 2, 0);

            if (buffer && buffer.length === 2)
                ret = (buffer[0] === 0xFF && buffer[1] === 0xD8);

            // Close the file
            FS.closeSync(fd);
        }

        return ret;
    }
};

exports = module.exports = {
    isJpeg: isJpeg,
    isJpegSync: isJpegSync
};