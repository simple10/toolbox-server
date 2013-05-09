var express = require('express')
  , webshot = require('webshot')
  , utils = require('./lib/utils')
  , webshot = require('./lib/webshot')
  , app = express()
  , tmpdir = '/tmp'
  , port = process.env.PORT || 3000;


var getWebshot = function(url, file, cb) {
  var options = {
    screenSize: {
      width: 320,
      height: 280
    },
    shotSize: {
      width: 'window',
      height: 480
    },
    script: function() {
      // todo: return page title in json response
      console.log("Page Title: " + document.title);
    },
    userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
      + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
  };
  webshot(url, file, options, cb);
}

app.get('/webshot/:url(*)', function(req, res){
  var url = utils.url(req.params.url)
    , id = utils.md5(url)
    , file = utils.path.join(tmpdir, id + '.png');
  getWebshot(url, file, function(err){
    if (err) return console.log(err);
    console.log('OK');
    res.sendfile(file);
    // res.json({
    //   status: 'OK',
    //   url: url
    // });
  });
});


console.log("Server listening on port " + port);
app.listen(port);

