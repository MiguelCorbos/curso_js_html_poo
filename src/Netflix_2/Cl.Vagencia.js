export class Vagencia{
    reportar(salida, planFav, porcNconexion){
        salida.innerHTML+= `<br>El plan favorito es: ${planFav}</br>`
        salida.innerHTML+= `<br>Porcentaje de suscriptores sin conexion: %${porcNconexion}</br>`
    }
}