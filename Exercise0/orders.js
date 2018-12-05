module.exports = function () {
    this.list = 0;
    var Array = [];
    this.index = 0;
    this.MaxOrders = 3;
    
    // Print the orders list.
    this.Get_all = function () { 
        for(var x=0; x<this.index; x++){
            console.log(Array[x]);
        }
        console.log("The total Number of orders: " + this.list)
        return;
    }

    // Add order to the list.
    this.AddOrders = function (details){
        this.index += 1;
        if (this.index > this.MaxOrders){
            this.index -= 1;
            console.log("The maximum orders limit is " + this.MaxOrders);
            return;
        }
        Array.push(details);
        this.list += 1;
        console.log("Number of orders changed to " + this.list);   
    }

    // Remove order from the list.
    this.RemoveOrders = function (details){
        
        if (Array.indexOf(details) >= 0) {
            console.log("The order '" + details +"' removed");
        } else {
            console.log("The order '" + details + "' not found");
            return this.list;
        }

        this.index -= 1;
        Array.splice(Array.indexOf(details), 1);
        this.list -= 1;
        console.log("Number of orders changed to " +this.list);
        return;
    }

    // Reset orders list.
    this.ResetOrders = function () {
        Array.length = 0;
        this.index = 0;
        console.log("Order list is empty")
        return;
    }
}





