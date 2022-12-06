const createmodel = require('../models/userAuth')
const { httpError } = require('../helpers/handleError')

//TODO: crear envio!
const create = async (req, res) => {
    try {
        
        //TODO: Datos que se envian desde el front 
        const { fecha, hora, estado, largo, ancho, alto, peso, direccion, ciudad, destinatario, idestinatario, direccionE, ciudadE, user } = req.body

        const User = await createmodel.create({
            fecha, 
            hora, 
            estado, 
            largo, 
            ancho, 
            alto, 
            peso, 
            direccion, 
            ciudad, 
            destinatario, 
            idestinatario, 
            direccionE, 
            ciudadE, 
            user 
        })

        res.send({ data: User })
        console.log('Orden creada con exito')
        

    } catch (e) {
        httpError(res, e)
    }
}



module.exports = { create }