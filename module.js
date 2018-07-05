var Formulas = (function(){
    var iva = 0.18

    return {
        calcularIva: function(monto){
            return monto * iva;
        },
        calcularMontoSinIva: function(monto){
            return monto / (1 + iva);
        },
        calcularUtilidad : function(costo, ingreso){
            return ingreso - costo;
        },
        calcularTasaEfectivaAnual: function(capital, interes, periodos){
            return capital * Math.pow(1 + interes, periodos)
        }
    };
})();

Formulas.calcularMontoSinIva(400)
Formulas.calcularIva(400)
Formulas.calcularTasaEfectivaAnual(100000, 0.05, 2)

/* Creacion con Submodulos */

var calculos = (function (){
    var iva = 0.18

    return {
        venta: {
            calcularIva: function(monto){
                return monto * iva;
            },
            calcularMontoSinIva: function(monto){
                return monto / (1 + iva);
            },
            calcularUtilidad: function(costo, ingreso){
                return ingreso - costo
            }
        },
        financiera: {
            calcularTasaEfectivaAnual: function(capital, interes, periodos){
                return capital * Math.pow(1 + interes, periodos);
            }
        }
    }
})()

calculos.venta.calcularMontoSinIva(400)
calculos.venta.calcularIva(400)
calculos.financiera.calcularTasaEfectivaAnual(10000, 0.05, 2)