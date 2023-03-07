const {Router} = require('express');
const router = Router();

const { ObtenerUsuario, CreateUsuario, ObtenerUsua, DeleteUsuario, UpdateUsuario, VerificarCodigo } = require('../Controller/Usuarios.controller.js')

router.route('/')
    .post(ObtenerUsuario)
    .put(UpdateUsuario)
    // .post(CreateUsuario)

router.route('/:newuser')
    .post(CreateUsuario)

// router.route('/')
    // .delete(DeleteUsuario)

router.route('/:code')
    .put(VerificarCodigo)

router.route('/:correo')
    .get(ObtenerUsua)

module.exports = router;