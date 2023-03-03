const {Router} = require('express');
const router = Router();

const { ObtenerUsuario, CreateUsuario, ObtenerUsua, DeleteUsuario, UpdateUsuario } = require('../Controller/Usuarios.controller.js')

router.route('/')
    .get(ObtenerUsuario)
    .post(CreateUsuario)

router.route('/')
  //*  .get(ObtenerUsua) Este ObtenerUsua es en base al ID
    // .delete(DeleteUsuario)
    .put(UpdateUsuario)

module.exports = router;