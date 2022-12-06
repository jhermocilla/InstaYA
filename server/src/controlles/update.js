const createmodel = require("../models/userAuth");

// // update a user
// router.put("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, age, email } = req.body;
//   userSchema
//     .updateOne({ _id: id }, { $set: { name, age, email } })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// });

//TODO: crear envio!
const Update = async (req, res) => {
  try {
    //TODO: Datos que envias desde el front (postman)
    const { id } = req.params;
    const { fecha, hora, estado, largo, ancho, alto, peso, direccion, ciudad, destinatario, idestinatario, direccionE, ciudadE,} = req.body;


    const User = await createmodel.updateOne(
      { _id: id },
      {
        $set: {
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
        },
      }
    );
    res.json({ data: User});

    console.log("Datos actiualizados correctamente");
  } catch (e) {
    res.json({ message: error });
  }
};

module.exports = { Update };
