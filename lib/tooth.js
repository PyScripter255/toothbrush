"use strict";
var Stream = require("stream").Stream,
mustache = require("mustache");


module.exports = exports = function tooth(res, opts){
	var t = new Stream();

    t.write = function (chunk) {
        t.emit("data", mustache.render(chunk.toString(), opts).replace("\r\n", ""));
    }
	t.end = function(){
	    res.end()
	}
	t.writable = true;  
    return t;  
}
