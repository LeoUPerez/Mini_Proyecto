import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Img from '../public/Real-State.png'

const Header = ({Onclick}) => {

  return (
    <section className="w-1/2 h-full pt-2 flex max-md:row max-md:justify-start">
      <div className='h-full min-w-[12%] flex justify-end items-center p-2 max-md:justify-center'>
          <img src={Img} alt="" className="h-28 pt-5" />
      </div>
    </section>
  );
          {/*<Link className='hover:text-blue-600 transition-all duration-300' to={'/login'}>
                    Funcion IIFE */}
                    {/* {(() => {
                        if (sessionStorage.length !== 0) {
                        return (
                            <span>{sessionStorage.getItem('Usuario')}</span>
                        );
                        } else{
                        return (
                            <i className="fa-solid fa-user"></i>
                        );
                        } 
                    })()}{" "} */}
                    {/*Funcion IIFE 
            </Link>*/}
};

export default Header;
