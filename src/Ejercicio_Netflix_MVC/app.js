import { Vagencia } from "./Vagencia.js";
import { Vsuscriptor } from "./Vsuscriptor.js";
import { Magencia } from "./Magencia.js";
class Cl_app {
constructor() {
this.Magencia = new Magencia();
this.Vsuscriptor = new Vsuscriptor(this);
this.Vagencia = new Vagencia(this);
}
}
export default Cl_app