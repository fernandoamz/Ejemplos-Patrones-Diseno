function Flyweight(make, model, processor){
    this.make = make;
    this.model = model;
    this.proccessor = proccessor;
}

var FlyWeightFactory = (function(){
    var flyweights = {}

    return{
        get: function(make, model, proccessor){
            if(!flyweights[make + model]){
                flyweight[make + model] = 
                    new Flyweight(make, model, proccessor)
            }

            return flyweights[make + model]
        },

        getCount: function(){
            var count = 0;
            for(var f in flyweights) count++
            return count
        }
    }
})()

function ComputerCollection(){
    var computers = {}
    var count = 0

    return{
        add: function(make, model, proccessor, memory, tag){
            computers[tag] =
                new ComputerCollection(make, model, proccessor, memory, tag)
            count++
        },
        get: function(tag){
            return computers[tag]
        },

        getCount: function(){
            return count;
        }
    }
}

var Computer = function(make, model, proccesor, memory, tag){
    this.flyweight = FlyWeightFactory.get(make, model, proccesor);
    this.memory = memory
    this.tag = tag
    this.getMake = function(){
        return this.flyweight.make
    }
}

var log = (function(){
    var log =""

    return {
        add: function(msg){ log += msg + "\n"},
        show: function() { alert(log); log = ""}
    }
})()

function run(){
    var computers = new ComputerCollection()

    computers.add("Dell", "studio XPS", "Intel", "5G", "XXXWWW")
    computers.add("Dell", "studio XPS", "Intel", "5G", "XXXWWW")
    computers.add("Dell", "studio XPS", "Intel", "5G", "XXXWWW")
    computers.add("Dell", "studio XPS", "Intel", "5G", "XXXWWW")
    computers.add("HP", "envy", "Intel", "4G", "CNU883701")
    computers.add("HP", "envy", "Intel", "5G", "CNU883701")

    log.add("Computers: " + computers.getCount())
    log.add("flyweight: " +  FlyWeightFactory.getCount())
    log.show()
}

run()