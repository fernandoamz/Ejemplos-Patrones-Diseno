'use strict'

/*
    Instancia unica: Nos garantiza la existencia de una única instancia para una clase.   

*/

//Singleton
const ClassPrueba= (() => {
    
    function ClassP(){
        var name; 

        this.getName = function (){
            return name;
        }

        this.setName = function(n){
            name = n
        }
    }

    var instance

    return{
        getInstance: () => {
            if(!instance){
                instance = new ClassP()
            }

            return instance
        }
    }

})()

const CP1 = ClassPrueba.getInstance();
const CP2 = ClassPrueba.getInstance();

console.log(CP1.getRandomNumber() === CP2.getRandomNumber())

/*
*
* EJEMPLO DE UN MAL SINGLETON 
*
*/

var myBadSingleton = (function (){
    var instance;

    function init(){
        //singleton

        var privateRandomNumber = Math.random()
    }   

    return {
        getRandomNumber: function(){
            return privateRandomNumber;
        }
    }

    return{
        getInstance: function(){
            instance = init();

            return instance;
        }
    }

})()

var badSingletonA = myBadSingleton.getInstance();
var badSingletonB = myBadSingleton.getInstance();

console.log(badSingletonA.getRandomNumber !== badSingletonB.getRandomNumber)