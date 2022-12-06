import React, { Fragment, useState } from "react";

function Actualizar() {
  const [datos, setDatos] = useState({ Nombre: "", Apellidos: "" });
  const handleImputchange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.Nombre + " " + datos.Apellidos);
  };

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="abs-center-ao">
            <form
              className="border p-3 form"
              rule="form"
              onSubmit={enviarDatos}
            >
              <h5>Gestion de paquetes - Actualización de ordenes (Recogida)</h5>
              <br />
              <div className="border p-3">
                <div className="form-group row">
                  <label className="col-form-label col-sm-2" >
                    Fecha
                  </label>
                  <div className="col-sm-4">
                    <input
                      className="form-control "
                      type="date"
                      name="fecha"
                      placeholder="01/01/2021"
                      onChange={handleImputchange}
                    />
                  </div>

                  <label className="col-form-label col-sm-2">
                    Hora
                  </label>
                  <div className="col-sm-4">
                    <input
                      className="form-control "
                      type="time"
                      name="hora"
                      placeholder="00:00"
                      onChange={handleImputchange}
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <label className="col-form-label col-sm-2">
                    Estado
                  </label>
                  <div className="col-sm-5" name="estado">
                    <select className="form-control dropdown-toggle" name="lista" id="sel1">
                      <option value="r">Guardado</option>
                      <option value="a">Cancelado</option>
                      <option value="v">Cumplido</option>
                    </select>
                  </div>

                </div>
                <br />

                <div className="form-group row">
                  <div className="col-sm-3">
                    <label >
                      Largo
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <label >
                      Ancho
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <label>
                      Alto
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <label>
                      Peso
                    </label>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-3">
                    <input
                      className="form-control"
                      type="text"
                      name="largo"
                      onChange={handleImputchange}
                    />
                  </div>
                  <div className="col-sm-3">
                    <input
                      className="form-control "
                      type="text"
                      name="ancho"
                      onChange={handleImputchange}
                    />
                  </div>
                  <div className="col-sm-3">
                    <input
                      className="form-control "
                      type="text"
                      name="alto"
                      onChange={handleImputchange}
                    />
                  </div>
                  <div className="col-sm-3">
                    <input
                      className="form-control"
                      type="text"
                      name="peso"
                      onChange={handleImputchange}
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-form-label col-sm-4" htmlFor="">
                    Direccion recogida
                  </label>
                  <div className="col-sm-8">
                    <input
                      className="form-control "
                      type="text"
                      name="direccion"
                      onChange={handleImputchange}
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-form-label col-sm-4" htmlFor="">
                    Ciudad recogida
                  </label>
                  <div className="col-sm-8">
                    <input
                      className="form-control "
                      type="text"
                      name="ciudad"
                      onChange={handleImputchange}
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-form-label col-sm-4" htmlFor="">
                    Nomre destinatario
                  </label>
                  <div className="col-sm-8">
                    <input
                      className="form-control "
                      type="text"
                      name="destinatario"
                      onChange={handleImputchange}
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-form-label col-sm-4" htmlFor="">
                    C.C/Nit destinatario
                  </label>
                  <div className="col-sm-8">
                    <input
                      className="form-control "
                      type="text"
                      name="idestinatario"
                      onChange={handleImputchange}
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-form-label col-sm-4" htmlFor="">
                    Direccion entrega
                  </label>
                  <div className="col-sm-8">
                    <input
                      className="form-control "
                      type="text"
                      name="direccionE"
                      onChange={handleImputchange}
                    />
                  </div>
                </div>
                <br />

                <div className="form-group row">
                  <label className="col-form-label col-sm-4" htmlFor="">
                    Ciudad entrega
                  </label>
                  <div className="col-sm-8">
                    <input
                      className="form-control "
                      type="text"
                      name="ciudadE"
                      onChange={handleImputchange}
                    />
                  </div>
                </div>
                <br />

                <button className="btn btn-primary btn-block mb-4"  type="submit">
                  Actualizar orden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Actualizar;
