const {Router} = require('express');
const router = Router();

const { ObtenerUsuario, CreateUsuario, ObtenerUsua, DeleteUsuario, UpdateUsuario, VerificarCodigo } = require('../Controller/Usuarios.controller.js')

router.route('/')
    .get(ObtenerUsuario)
    .post(CreateUsuario)

router.route('/')
    // .delete(DeleteUsuario)
    .put(UpdateUsuario)

router.route('/:code')
    .put(VerificarCodigo)

router.route('/:correo')
    .get(ObtenerUsua)

module.exports = router;