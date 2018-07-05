function GeoCoder(){
    this.getLatLng = function(address){

        if(address === "Amsterdam"){
            return "85.3700° N, 7.89000° E"
        }else if(address === "London"){
            return "51.5171° N, 0.1062° W"
        }else if(address === "Paris"){
            return "48.8742° N, 2.3470° E"
        }else if(address === "Berlin"){
            return "52.5233° N, 13.4127° E"
        }else {
            return ""
        }
    }
}

function GeoProxy(){
    var geocoder = new GeoCoder();
    var geocache = {}

   return {
       getLatLng: function(address){
           if(!geocache[address]){
               geocache[address] = geocoder.getLatLng(address)
           }

           log.add(address + ": " + geocache[address])
           return geocache[address]
       },

       getCount: function(){
           var count = 0;
           for(var code in geocache){ count++ }
           return count
       }
   } 
}

var log = (function(){
    var log = ""

    return{
        add: function(msg){ log += msg + "\n"},
        show: function(){alert(log); log=""}
    }
})()

function run(){
    var geo = new GeoProxy();

    geo.getLatLng("Paris")
    geo.getLatLng("London")
    geo.getLatLng("London")
    geo.getLatLng("London")
    geo.getLatLng("London")
    geo.getLatLng("London")
    geo.getLatLng("London")
    geo.getLatLng("Amsterdam")
    geo.getLatLng("Amsterdam")
    geo.getLatLng("London")
    geo.getLatLng("London")

    log.add("\nCache size: " + geo.getCount())
    log.show()

}