const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
  response.sendFile(path.resolve('dist/index.html'));
});

module.exports = router;
