/*
    Uno de los beneficios de usar el prototipo es que trabajamos con las fortalezas
    prototípicas que JavaScript tiene para ofrecer de forma nativa en lugar de intentar
    imitar las características de otros lenguajes. Con otros patrones de diseño. 

*/

var myCar = {
 
    name: "Ford Escort",
   
    drive: function () {
      console.log( "Weeee. I'm driving!" );
    },
   
    panic: function () {
      console.log( "Wait. How do you stop this thing?" );
    }
   
};
   
// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar );

// Now we can see that one is a prototype of the other
console.log(yourCar.name);

/**
 *  OTRO EJEMPLO  
 */

 var vehiclePrototype = {
     init: function(carModel){
         this.model = carModel;
     },

     getModel: function (){
         console.log("the model of this vehicle is..." + this.model)
     }
}

function vehicle(model){
    function F(){};

    F.prototype = vehiclePrototype;

    var f = new F();

    f.init(model);
    return f;
}

var car = vehicle("ford escort");
car.getModel();