import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  function selector_in(e) {
    let target = e.target;

    if (target.id === "Link") {
      let id = target.children[0].id;
      let elemento = document.getElementById(id);
      elemento.className = "w-1.5 h-1.5 rounded-full bg-blue-600";
    }
  }
  function selector_out(e) {
    let target = e.target;

    if (target.id === "Link") {
      let id = target.children[0].id;
      let elemento = document.getElementById(id);
      elemento.className = "w-1.5 h-1.5 rounded-full";
    }
  }

  return (
    <section className=" w-2/4 h-full flex justify-center items-center gap-7 bg-gray-100 font-light rounded-xl pb-2">
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className="hover:text-blue-600 transition-all duration-300 flex items-center flex-col justify-center"
      >
        <div id="Link1" className="w-1.5 h-1.5 rounded-full"></div>
        Home
      </Link>
      {/* <Link
        id="prueba"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className="hover:text-blue-600 transition-all duration-300 flex items-center flex-col justify-center"
      >
        <div id='link2' className='w-1.5 h-1.5 rounded-full'>
        </div>
        Link_2
      </Link>
      <Link
        id="prueba"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className="hover:text-blue-600 transition-all duration-300 flex items-center flex-col justify-center"
      >
        <div id='link3' className='w-1.5 h-1.5 rounded-full'>
        </div>        
        Link_3
      </Link> */}
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className="hover:text-blue-600 transition-all duration-300 flex items-center flex-col justify-center"
      >
        <div id="Link4" className="w-1.5 h-1.5 rounded-full"></div>
        Servicios
      </Link>
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className="hover:text-blue-600 transition-all duration-300 flex items-center flex-col justify-center"
      >
        <div id="Link5" className="w-1.5 h-1.5 rounded-full"></div>
        Sobre Nosotros
      </Link>
      <Link
        id="Link"
        onMouseEnter={selector_in}
        onMouseOut={selector_out}
        className="hover:text-blue-600 transition-all duration-300 flex items-center flex-col justify-center"
      >
        <div id="Link6" className="w-1.5 h-1.5 rounded-full"></div>
        Contactos
      </Link>
    </section>
  );
};

export default NavBar;
