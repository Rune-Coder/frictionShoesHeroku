const Razorpay = require('razorpay');

//payment instance
module.exports.instance = new Razorpay({
    key_id: 'rzp_test_5unrIoTw0WhrB6',
    key_secret: 'rDcoHQp49ng3eLVtziVEgOT7',//key id given by razorpay
});
