export class Vagencia {
    constructor(app) {
    this.app = app;
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainFormTabla");
    this.btAgregar = document.getElementById("mainFormBtAgregar");
    this.lblPlanFav
    = document.getElementById("mainFormLblPlanFav");
    this.lblporcNconexion
    = document.getElementById("mainFormLblporcNconexion");
    this.lblprecioPsus
    = document.getElementById("mainFormLblprecioPsus");
    this.btAgregar.onclick = () => {
    this.ocultar();
    this.app.vsuscriptor.mostrar();
    };
    }

    mostrar() {
        this.vista.hidden = false;
        }
        ocultar() {
        this.vista.hidden = true;
        }
        reportarsuscriptor(suscriptor) {
        this.tabla.innerHTML += `
        <tr>
        <td>${suscriptor.nombre}</td>
        <td>${suscriptor.plan}</td>
        </tr>`;
        this.lblPlanFav.innerHTML
        = this.app.Magencia.PlanFav();
        this.lblporcNconexion.innerHTML
        = this.app.Magencia.porcNconexion();
        this.lblprecioPsus.innerHTML
        = this.app.Msuscriptor.precioPsus();
        }
    }
