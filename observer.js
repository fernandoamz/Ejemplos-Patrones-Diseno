
/*
*
* El patrón observer ofrece un modelo de suscripción en el que los objetos se suscriben a un evento
* y reciben una notificacion cuando este evento ocurre.
*
*/

function Click(){
    this.handlers = []
}

Click.prototype = {
    
    subscribe: function(fn){
        this.handlers.push(fn)
    },

    unsuscribe: function(fn){
        this.handlers = this.handlers.filter(
            function(item){
                if(item !== fn){
                    return item;
                }
            }
        )
    },

    fire: function(o, thisObj){
        var scope = this.thisObj ||window
        this.handlers.forEach(function(item){
            item.call(scope, o)
        })
    }
}

var log = (function(){
    var log = ""

    return{
        add: function(msg){ log += msg + "\n"},
        show: function(){ alert(log); log = "" }
    }
})()

function run(){
    var clickHandler = function(item){
        log.add("fired: " + item)
    }

    var click = new Click();

    click.subscribe(clickHandler);
    click.fire('event #1')
    click.unsuscribe(clickHandler)
    click.fire('event #2')
    click.subscribe(clickHandler)
    click.fire('event #3')

    log.show()
}

run()