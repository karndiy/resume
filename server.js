const express = require('express');
const cors = require('cors')
const app = express();

const path = require('path');
const router = express.Router(app.use(cors()));
var PORT = process.env.port || 3000;


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


router.get('/user', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})



//add the router
app.use('/', router);
app.listen(PORT,function () {


  console.log(`CORS-enabled web server listening on port ${PORT}`)
});

