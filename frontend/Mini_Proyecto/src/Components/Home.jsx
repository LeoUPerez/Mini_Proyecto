import React from 'react'
import Header from './Header'
import NavBar from './NavBar';


const Home = () => {

    function Abrir() {
        let nv = document.getElementById('navbar');
        let hd = document.getElementById('header');
        let btns = document.getElementById('abrir');


        hd.className = 'w-full h-10 flex items-center pt-4';
        nv.className= 'max-md:pt-28 opacity-100 max-md:text-base';
        btns.className = 'w-8 h-8 text-xs opacity-0 max-md:opacity-0';
        // btns.style.opacity = '0';
    }
    function Cerrar() {
        let nv = document.getElementById('navbar');
        let hd = document.getElementById('header');
        let btns = document.getElementById('abrir');

        hd.className = 'w-full h-14 flex items-center';
        nv.className= 'opacity-100 h-12 w-full text-base max-md:opacity-0 max-md:text-xs relative max-md:w-2/5';
        btns.className = ' w-8 h-8 text-base opacity-0 max-md:opacity-100';
        // btns.style.opacity = '1';
    }
  return (
    <section>
        <div className='w-full h-screen'>
           <div className='w-full h-14 flex items-center' id='header'>
                <Header/>
                <div className='max-md:opacity-0 h-12 max-md:h-full max-md:text-xs relative w-full max-md:w-2/5' id='navbar'>
                  <NavBar/>
                 <button onClick={Cerrar} className="absolute top-1 p-1 bg-red-500 flex justify-center items-center rounded-full text-sm w-6 h-6 opacity-0 max-md:opacity-100 max-md:mt-3 max-md:ml-1">X</button>
                </div>
                <button id='abrir' onClick={Abrir} className=" w-8 h-8 text-base opacity-0 max-md:opacity-100"><i className="fa-solid fa-bars"></i></button>


                {/* <div className='w-1/2 h-full bg-yellow-300'>
                    s
                </div>
                <div className='w-1/2 h-full bg-blue-400 flex'>
                    <Header
                      Onclick={Abrir}
                    />
                    <div className='w-1/2 h-full bg-green-200 flex'>
                        <NavBar/>
                        <button className="bg-blue-300 w-16 h-10">Abrir</button>
                    </div>
                </div> */}
                

            </div> 
        </div>
    </section>
  )
}

export default Home