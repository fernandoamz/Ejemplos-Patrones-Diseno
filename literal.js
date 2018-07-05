let MyObjetoLiteral = {
    suma: (valor_a, valor_b) => {
        let result = valor_a + valor_b
        console.log(`El resultado de la suma de ${valor_a} + ${valor_b} = ${result}`)
    },

    resta: (valor_a, valor_b) => {
        let result = valor_a - valor_b
        console.log(`El resultado de la resta de ${valor_a} - ${valor_b} = ${result}`)
    }
}

MyObjetoLiteral.suma(5,10)
MyObjetoLiteral.resta(15,10)