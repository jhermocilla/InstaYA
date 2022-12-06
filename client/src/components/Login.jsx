import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [datos, setDatos] = useState({
    user: "",
    password: "",
  });
  const handleImputchange = (event) => {
    setDatos({ ...datos, [event.target.name]: event.target.value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: datos.user,
        password: datos.password,
      }),
    };
    fetch("http://localhost:9000/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));

    e.target.reset();
  };

  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="abs-center">
            <form className="border p-3 form" onSubmit={handleSubmitLogin}>
              <h2>Gestion de paquetes - Login</h2>
              <br />
              <div className="border p-3">
                <div>
                  <p className="registro">
                    <Link to="/registro"> Regístrate</Link>
                  </p>
                </div>
                <br />
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

                <button
                  className="btn btn-primary btn-block mb-4"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Login;
