export class Magencia{
    constructor(){
        this.contP_3=0
        this.contP_2=0
        this.contP_1=0
        this.contP=0
    }

    procesarSuscriptor(s){
        this.contP++
        if(s.plan=== 1)
        this.contP_1++
        
        if(s.plan=== 2)
        this.contP_2++
        
        if(s.plan=== 3)
        this.contP_3++
    }

    planFav(){
        if(this.contP_1> this.contP_2 && this.contP_1>this.contP_3)
        return "Plan A"
        else if(this.contP_2>this.contP_1 && this.contP_2> this.contP_3)
        return "Plan B"
        else
        return "Plan C"
    }
    porcNconexion(){
        return (this.contP_3*100)/this.contP
    }
}