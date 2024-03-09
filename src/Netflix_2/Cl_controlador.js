import { Msuscriptor } from "./Cl_Msuscriptor.js"
import {Magencia} from "./Cl_Magencia.js"
import { Vagencia } from "./Cl.Vagencia.js"
import { Vsuscriptor } from "./Cl_Vsuscriptor.js"

export class controlador{
    constructor(){
        this.Magencia= new Magencia()
        this.Vsuscriptor= new Vsuscriptor()
        this.Vagencia= new Vagencia()
        this.salida=document.getElementById("salida")
    }

    procesarSuscriptor(){
        do{
            let datos= this.Vsuscriptor.leerdatos();
            let suscriptor= new Msuscriptor(datos);
            this.Magencia.procesarSuscriptor(suscriptor);
            this.Vsuscriptor.reportar(this.salida, suscriptor.nombre,suscriptor.precioB(), suscriptor.precioPsus());

        }while(confirm("hay otro suscriptor?"))
        this.Vagencia.reportar(
            this.salida,
            this.Magencia.planFav(),
            this.Magencia.porcNconexion()
        )
    }
}