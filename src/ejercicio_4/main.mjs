/*
    El tipo de archivo de este archivo es: .mjs
    para importar el style
*/
import "../styles.css";

class Cl_Articulo {
  constructor(a, b, c) {
    this.nombre = a;
    this.precio = b;
    this.cantidad = c;
  }

  SubTotal() {
    return this.precio * this.cantidad;
  }
}

class Cl_Factura {
  constructor() {
    this.acumMonto = 0;
  }

  Total() {
    return this.acumMonto + this.Iva();
  }

  Iva() {
    return this.acumMonto * 0.16;
  }

  ProcesarFactura(articulo) {
    this.acumMonto += articulo.SubTotal();
  }
}

class App {
  constructor() {
    this.salidaCabecera = document.getElementById("salida_cabecera");
    this.salidaRegistros = document.getElementById("salida_registros");
    this.salidaPie = document.getElementById("salida_pie");
    this.salidaRespuestas = document.getElementById("salida_respuestas");
  }

  TableHead() {
    return `
    <tr>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>SubTotal()</th>
    </tr>
    `;
  }

  TableRow(nombre, precio, cantidad, subtotal) {
    return `
    <tr>
      <td>${nombre}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>${subtotal}</td>
    </tr>
    `;
  }

  TableFoot(subtotal, iva, total) {
    return `
        <p>subtotal</p>
        <p>${subtotal}</p>
        <p>iva</p>
        <p>${iva}</p>
        <p >total</p>
        <p>${total}</p>
    `;
  }

  run() {
    let factura = new Cl_Factura();

    let articulo_1 = new Cl_Articulo("Harina", 20, 20);
    let articulo_2 = new Cl_Articulo("Leche", 20, 20);
    let articulo_3 = new Cl_Articulo("Cafe", 20, 20);
    let articulo_4 = new Cl_Articulo("Azucar", 20, 20);
    let articulo_5 = new Cl_Articulo("Arroz", 20, 20);

    factura.ProcesarFactura(articulo_1);
    factura.ProcesarFactura(articulo_2);
    factura.ProcesarFactura(articulo_3);
    factura.ProcesarFactura(articulo_4);
    factura.ProcesarFactura(articulo_5);

    this.salidaCabecera.innerHTML = `
      ${this.TableHead()}
    `;

    this.salidaRegistros.innerHTML = `
      ${this.TableRow(articulo_1.nombre, articulo_1.precio, articulo_1.cantidad, articulo_1.SubTotal())}
      ${this.TableRow(articulo_2.nombre, articulo_2.precio, articulo_2.cantidad, articulo_2.SubTotal())}
      ${this.TableRow(articulo_3.nombre, articulo_3.precio, articulo_3.cantidad, articulo_3.SubTotal())}
      ${this.TableRow(articulo_4.nombre, articulo_4.precio, articulo_4.cantidad, articulo_4.SubTotal())}
      ${this.TableRow(articulo_5.nombre, articulo_5.precio, articulo_5.cantidad, articulo_5.SubTotal())}
      `;

    this.salidaPie.innerHTML = `
      ${this.TableFoot(factura.acumMonto, factura.Iva(), factura.Total())}
    `;

    this.salidaRespuestas.innerHTML = `
      <h3>a) total de registros:  </h3>
    `;
  }
}

new App().run();
