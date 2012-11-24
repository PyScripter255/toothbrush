#toothbrush.js
##Stream-based mustache template rendering for node.js
##Installation
```
npm install toothbrush
```

##Usage

```javascript
var toothbrush = require("toothbrush");

http.createSever(function(req, res){
	toothbrush("./test.html", res, {"title": "toothbrush"});
}).listen(8080);
```

Included in [froyo](http://pyscripter255.github.com/froyo).

