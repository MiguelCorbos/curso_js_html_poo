import { controlador } from "./Cl_controlador.js"
export class Cl_main{
    constructor(){
        let control= new controlador()
        control.procesarSuscriptor()
    }
}