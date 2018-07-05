// old interface

function Shipping(){
    this.request = function(zipStart, zipEnd, weight){
        return "$49.75";
    }
}

// new interface 

function AdvanceShipping(){
    this.login = function(credentials){}
    this.setStart = function(start){}
    this.setDestination = function(destination){}
    this.calculate = function(weight){ return "$39.50"}
}

// adapter interface 

function Shipping(credentials){
    var shipping = new AdvanceShipping()

    shipping.login(credentials)

    return{
        request: function(zipStart, zipEnd, weight){
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    }
}

var log = (function(){
    var log = ""

    return{
        add: function(msg){log += msg + "\n"},
        show: function(){alert(log); log = ""}
    }
})()

function run(){
    var shipping = new Shipping();
    var credentials = {token: "xxxx-xxx"}
    var adapter = new ShippingAdapter(credentials)

    var cost = shipping.request("78951", "10012", "12hrs")
    log.add("Old cost " + cost)

    cost = adapter.request("7851", "2145", "2lbs")
    log.add("New cost" + cost);
    log.show()
}

run()