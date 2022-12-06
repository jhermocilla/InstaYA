import React, { Fragment, useState } from "react";

function ListadoDeOrdenes() {
    let Lista = [{
        ID: 1,
        Fecha: '18/8/2022',
        Ciudad: 'Cali',
        Dentrega: 'Cra 1 aja',
        Estado: 'En camino'

    },
    {
        ID: 2,
        Fecha: '18/8/2022',
        Ciudad: 'Cajamarca',
        Dentrega: 'Cra 2 aja',
        Estado: 'Entregado'
    }]


    function Agregar() {
        setID([...ID, num2])
    }
    function Modificar() {
        setID([...ID, num2])
    }

    function modificar(id){
        console.log(id)
    }

    return (
        <Fragment>
            <h2>----- Listado de Ordenes -----</h2>
            <button onClick={Agregar}>Agregar </button>
            <button onClick={Modificar}>Modificar </button>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col"> ID </th>
                        <th scope="col"> Fecha </th>
                        <th scope="col"> Ciudad de entrega </th>
                        <th scope="col"> Dirección de entrega </th>
                        <th scope="col"> Estado </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Lista.map((item, index) =>
                            <tr key={index} onClick={()=>modificar(item.ID)}>
                                <td>{item.ID}</td>
                                <td>{item.Fecha}</td>
                                <td>{item.Ciudad}</td>
                                <td>{item.Dentrega}</td>
                                <td>{item.Estado}</td>
                            </tr>
                        )}


                </tbody>
            </table>

        </Fragment>
    )
}

export default ListadoDeOrdenes