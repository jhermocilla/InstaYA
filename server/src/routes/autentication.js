const express = require("express");
const router = express.Router();

const { loginCtrl, registerCtrl } = require("../controlles/auth");
const { create } = require("../controlles/crear")
const { Update } = require("../controlles/update")
const { list } = require("../controlles/listar")

// // create user
// router.post("/users", (req, res) => {
//   const user = registerSchema(req.body)
//   user.save()
//     .then((data) => res.json(data))
//     .catch((error) => res.json({message:error}));
// });

router.post("/login", loginCtrl);

router.post("/register", registerCtrl);
router.post("/crear_orden", create);
router.put("/update/:id", Update);
router.get("/list/:users", list);

module.exports = router;
