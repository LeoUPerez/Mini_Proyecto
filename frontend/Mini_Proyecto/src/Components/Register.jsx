import React, { useState } from 'react'
import Img from '../Images/RealSinName.png'

const Register = () => {

  const [body, setbody] = useState({username: "", apellido: "", password: "",
                                    telefono: "", correo: ""});

  function onchange() {
    let user = document.getElementById('Name');
    let lastname = document.getElementById('Last_name');
    let password = document.getElementById('Password');
    let telefono = document.getElementById('Phone_Number');
    let correo = document.getElementById('Mail');
    
    setbody(
      {
        username: user.value,
        apellido: lastname.value,
        password: password.value,
        telefono: telefono.value,
        correo: correo.value
      }
    )  
    console.log(body);
  }

  function VizualizarPass() {
    let password = document.getElementById('Password');
    let icon = document.getElementById('icon');

    if (password.type === "text") {
      password.type = "password";
      icon.className = 'fa-regular fa-eye-slash cursor-pointer';
    } else {
      password.type = "text";
      icon.className = 'fa-solid fa-eye cursor-pointer';
    }


  }

  return (
    <section className='w-full h-screen bg-blue-200 flex justify-center items-center'>
        <div className='min-w-[26%] min-h-[60%] bg-gray-200 opacity-80  rounded-2xl p-2 max-md:min-w-[95%] max-md:min-h-[65%]'>
            <div className='w-full flex justify-center'>
              <img className='h-28 max-md:h-20' src={Img} alt="" />
            </div>
            <form action="" className='flex flex-col gap-3 h-1/2s pt-6 justify-center items-center'>
                <input onChange={onchange} type="text" name="" id="Name" placeholder='Name' className='w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5' />
                <input onChange={onchange} type="text" name="" id="Last_name" placeholder='Last name' className='w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5'/>
                <div className='w-full ml-5 flex items-center justify-center gap-1'>
                  <input onChange={onchange} type="password" name="" id="Password" placeholder='Password' className='w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5'/>
                  <div className=''>
                    <i onClick={VizualizarPass} id='icon' className="fa-regular fa-eye-slash cursor-pointer"></i>
                  </div>
                </div>
                <input onChange={onchange} type="tel" name="" id="Phone_Number" placeholder='Phone Number' className='w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5'/>
                <input onChange={onchange} type="email" name="" id="Mail" placeholder='Mail' className='w-3/4 h-9 outline-blue-200 p-2 rounded-lg max-md:w-4/5'/>
            </form>
            <div className='w-full flex justify-center pt-5'>
              <button className='w-44 uppercase border-2 bg-blue-500 rounded-full p-1 font-thin text-white transition-all duration-200 hover:bg-green-300 hover:text-black max-md:w-44'>
                  Create Account
              </button>
            </div>
            
        </div>
    </section>
  )
}

export default Register;