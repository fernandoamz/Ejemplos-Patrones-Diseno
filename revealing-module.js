var myRevealingModule = (function (){

    var privateVar = "Ben Cherry",
        publicVar = "Hey there!";

        function privateFunction(){
            console.log("Name"+ privateVar)
        }

        function publicSetName(strName){
            privateVar = strName;
        }

        function publicGetName(){
            privateFunction();
        }

        return{
            setName: publicSetName,
            greeting: publicVar,
            getName: publicGetName
        };
})();

myRevealingModule.setName("fernando")

/**
 * 
 * OTRO EJEMPLO
 * 
 */

var myRevealingModule = (function () {
    var privateCounter = 0

    function privateFunction(){
        privateCounter++;
    }

    function publicFunction(){
        publicIncrement();
    }

    function publicIncrement(){
        privateFunction();
    }

    function publicGetCount(){
        return privateCounter;
    }

    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    }
})()

myRevealingModule.start();