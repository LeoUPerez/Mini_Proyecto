const jwtv = require('jsonwebtoken');
const usuario = {};
const jwtVerify = "";

const modelo = require('../Models/ModelUsuarios.js');

usuario.ObtenerUsuario = async (req, res) =>{
    const {username, password} = req.body;
    const values = [username, password];

    const usuario = await modelo.find({"nombre": username, "password": password});
    if (usuario.length > 0) {
        res.send(usuario[0].keyvalidation);
    } else {
        res.json({message: "Usuario no encontrado"});
    }

}

usuario.CreateUsuario = async (req, res) =>{
   jwt(req, res);
}
function jwt(req, res) {
    jwtv.sign({user: modelo}, 'secretkey', (err, token)=>{
     const {nombre, apellido, password, telefono, correo} = req.body;
     const NuevoUsuario = new modelo({
         keyvalidation: token,
         nombre: nombre,
         apellido: apellido,
         password: password,
         telefono: telefono,
         correo: correo
     }) 
      NuevoUsuario.save();
     res.json({message:"El usuario ha sido guardao"})
     console.log(token);
    });
 }
 
// usuario.ObtenerUsua = async (req, res) =>{
//     const usuario = await modelo.findById(req.params.id);
//     res.json(usuario);
// }
// usuario.DeleteUsuario = async (req, res) =>{
//     await modelo.findByIdAndDelete(req.params.id);
//     res.json({message: "Usuario ha sido eliminao"})
// }
usuario.UpdateUsuario = async (req, res) =>{
    const {nombre, apellido, password, telefono, correo} = req.body;
    const values = [nombre, apellido, password, telefono, correo];
    
    const usuario = await modelo.find({"correo": correo});
    if (usuario.length > 0) {

        res.json({message: "Usuario actualizao"})
    } else {
        res.json({message: "Usuario no encontrado"})
    }
    


    // const usuario = await modelo.find({"correo": correo});
    // res.send(usuario);
    // console.log(usuario);

    // await modelo.findByIdAndUpdate(req.params.id,{
    //     nombre,
    //     apellido,
    //     edad,
    //     telefono,
    //     correo
    // });
}



module.exports = usuario;