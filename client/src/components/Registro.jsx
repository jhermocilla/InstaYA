import React, { Fragment, useState } from "react";

function Registro() {
  const [datos, setDatos] = useState({
    name: "",
    user: "",
    password: "",
    email: "",
  });
  const handleImputchange = (event) => {
  setDatos({ ...datos, [event.target.name]: event.target.value });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: datos.name,
        user: datos.user,
        password: datos.password,
        email: datos.email,
      }),
    };
    fetch("http://localhost:9000/api/register", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));
    
    e.target.reset();
  };

  return (
    <Fragment>
      <section className="">
        <div className="container">
          <div className="abs-center-reg">
            <form
              className="border p-3 form"
              onSubmit={handleSubmitRegister}
              action="http://localhost:9000/api/register"
              method="POST"
            >
              <h2>Gestion de paquetes - Registro</h2>
              <div className="border p-3">
                <div className="form-outline mb-4">
                  <label htmlFor="">Nombre</label>
                  <input
                    className="form-control "
                    type="text"
                    name="name"
                    placeholder="Ingrese su nombre"
                    onChange={handleImputchange}
                    
                  />
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="">Usuario</label>
                  <input
                    className="form-control "
                    type="text"
                    name="user"
                    placeholder="Ingrese su usuario"
                    onChange={handleImputchange}
                    
                  />
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="">Contraseña</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    onChange={handleImputchange}
                    
                  />
                </div>

                <div className="form-outline mb-4">
                  <label htmlFor="">Correo</label>
                  <input
                    className="form-control"
                    type="Email"
                    name="email"
                    placeholder="Ingrese su correo"
                    onChange={handleImputchange}
                    
                  />
                </div>

                <button
                  className="btn btn-primary btn-block mb-4"
                  type="submit"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Registro;
