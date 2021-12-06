let express = require('express');

const wallet = require('../controller/wallet.js');
const router = express.Router();

let app = express()
module.exports = router;


var wallet_controller = require('../controller/wallet.js');

////////////////////////////////////////
const path = require('path');

router.get('/', (request, response) => {
  response.sendFile(path.join(__dirname,'public' ));
})

////////////////////////////////////////


router.get('/wallet', wallet_controller.wallet);