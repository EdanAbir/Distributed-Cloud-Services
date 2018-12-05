var http = require ('http'),
    express = require('express'),
    app = express();

// Connect to orders.js file
var ordersOp = require('./orders.js');
var Order = new ordersOp();

app.get('/',function(req,res) {
    
    res.send('Success');
    
});

// Listen for connection on this port
http.createServer(app).listen(8080);
console.log('listening on port 8080\n');

// Run some methods.
Order.AddOrders('Steak');
Order.AddOrders('Chips');
Order.AddOrders('Cola');
Order.AddOrders('Burger');
Order.Get_all();
Order.RemoveOrders('Chp');
Order.RemoveOrders('Chips');
Order.Get_all();
Order.ResetOrders();
Order.AddOrders('Ice cream');
Order.Get_all();


