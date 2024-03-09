export class Vsuscriptor{
    leerdatos(){
        let nombre= prompt("nombre")
        let plan= prompt("plan")
        
        return {nombre, plan}


    }
    reportar(salida, nombre, precioB,  precioPsus){
        salida.innerHTML += `<br> El suscriptor: ${nombre},
        Precio base es de: $${precioB},
        paga un total de: $${precioPsus} </br>`
    }
}

