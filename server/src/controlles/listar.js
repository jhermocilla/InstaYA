const createmodel = require('../models/userAuth')

  const list = async (req, res) => {
    try {
        
        //TODO: Datos que se envian desde el front 
        const { fecha, estado, direccionE, ciudadE, user } = req.body
        const { users } = req.params;

        const User = await createmodel.findById({
            users,
            fecha,
            estado,  
            direccionE, 
            ciudadE, 
            user 
        })

        res.send({ data: User })
        console.log(User)
        

    } catch (e) {
        httpError(res, e)
    }
}



module.exports = { list }