var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get('/:color', function(req, res, next) {

  var contents = fs.readFileSync(__dirname +'/colors.json');
  var jsonContent = JSON.parse(contents);

  if (req.params.color.toLowerCase() === 'black') {
    res.send(jsonContent.colors[0]);
  }
  else if (req.params.color.toLowerCase() === 'white') {
    res.send(jsonContent.colors[1]);
  }
  else if (req.params.color.toLowerCase() === 'red') {
    res.send(jsonContent.colors[2]);
  }
  else if (req.params.color.toLowerCase() === 'blue') {
    res.send(jsonContent.colors[3]);
  }
  else if (req.params.color.toLowerCase() === 'yellow') {
    res.send(jsonContent.colors[4]);
  }
  else if (req.params.color.toLowerCase() === 'green') {
    res.send(jsonContent.colors[5]);
  }
  else if (req.params.color.toLowerCase() === 'all') {
    res.send(jsonContent.colors);
  }
  else {
    // error page
    res.locals.code = "404";
    res.locals.message = "Something broke!!";
    res.render('error');
  }

});

module.exports = router;
