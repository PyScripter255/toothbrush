var tooth = require("./tooth"),
fs = require("fs");

module.exports = exports = function (file, res, opts) {
    res.writeHead(200, {"Content-Type": "text/html"})
    var m = tooth(res, opts);
    var fStream = fs.createReadStream(file);
    fStream.pipe(m);
    m.pipe(res);
};
