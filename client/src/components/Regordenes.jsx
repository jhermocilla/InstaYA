import React, { Fragment, useState } from "react";
import axios from 'axios'

function Regorden() {
  const [datos, setDatos] = useState({
    fecha: "", 
    hora: "",
    estado: "",
    largo: "",
    ancho: "",
    alto: "",
    peso: "",
    direccion: "",
    ciudad: "",
    destinatario: "",
    idestinatario: "", 
    direccionE: "",
    ciudadE: "",
    
  });
  const handleImputchange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fecha: datos.fecha, 
        hora: datos.hora,
        estado: datos.estado, 
        largo: datos.largo, 
        ancho: datos.ancho, 
        alto: datos.alto, 
        peso: datos.peso, 
        direccion: datos.direccion, 
        ciudad: datos.ciudad, 
        destinatario: datos.destinatario, 
        idestinatario: datos.idestinatario, 
        direccionE: datos.direccionE, 
        ciudadE: datos.ciudadE 
      }),
    };
    fetch("http://localhost:9000/api/crear_orden", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));
    
    e.target.reset();
  };

  return (
    <Fragment>
      <section className="">
            
               
                  <div className="container">
                    <div className="abs-center-ro">
                      <form className="border p-3 form" rule="form" onSubmit={handleSubmit}>
                      <h5>Gestion de paquetes - Registro ordenes (Recogida)</h5><br />
                      <div className="border p-3">
                        <div className="form-group row">
                          <label className="col-form-label col-sm-2" htmlFor="">Fecha</label>
                          <div className="col-sm-4">
                          <input
                            className="form-control "
                            type="date"
                            name="fecha"
                            placeholder="01/01/2021"
                            onChange={handleImputchange}
                          /></div>

                          <label className="col-form-label col-sm-2" htmlFor="">Hora</label>
                          <div className="col-sm-4">
                          <input
                            className="form-control "
                            type="time"
                            name="hora"
                            placeholder="00:00"
                            onChange={handleImputchange}
                          /></div> 
                        </div><br />
                        <div className="form-group row">
                  <label className="col-form-label col-sm-2">
                    Estado
                  </label>
                  <div className="col-sm-5" >
                    <select className="form-control dropdown-toggle" name="estado" id="sel1" onChange={handleImputchange}>
                    <option value="">Seleccione</option>
                      <option value="Guardado">Guardado</option>
                      <option value="Cancelado">Cancelado</option>
                      <option value="Cumplido">Cumplido</option>
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
                          <label className="col-form-label col-sm-4" htmlFor="">Direccion recogida</label>
                          <div className="col-sm-8">
                          <input
                            className="form-control "
                            type="text"
                            name="direccion"
                            placeholder=""
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label className="col-form-label col-sm-4" htmlFor="">Ciudad recogida</label>
                          <div className="col-sm-8">
                          <input
                            className="form-control "
                            type="text"
                            name="ciudad"
                            placeholder=""
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label className="col-form-label col-sm-4" htmlFor="">Nomre destinatario</label>
                          <div className="col-sm-8">
                          <input
                            className="form-control "
                            type="text"
                            name="destinatario"
                            placeholder=""
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label className="col-form-label col-sm-4" htmlFor="">C.C/Nit destinatario</label>
                          <div className="col-sm-8">
                          <input
                            className="form-control "
                            type="text"
                            name="idestinatario"
                            placeholder=""
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label className="col-form-label col-sm-4" htmlFor="">Direccion entrega</label>
                          <div className="col-sm-8">
                          <input
                            className="form-control "
                            type="text"
                            name="direccionE"
                            placeholder=""
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                        <div className="form-group row">
                          <label className="col-form-label col-sm-4" htmlFor="">Ciudad entrega</label>
                          <div className="col-sm-8">
                          <input
                            className="form-control "
                            type="text"
                            name="ciudadE"
                            placeholder=""
                            onChange={handleImputchange}
                          /></div>
                        </div><br />

                       

                        
                          <button
                            className="btn btn-primary btn-block mb-4"
                            type="submit"
                          >
                            Crear orden
                          </button>
                          </div>
                      </form>
                    </div>
                  </div>
                
             
      </section>
    </Fragment>
  );
}

export default Regorden;

