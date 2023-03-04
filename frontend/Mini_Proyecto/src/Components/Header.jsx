import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {


  return (
    <section className="w-full h-4/5 flex justify-center items-center">
      <NavBar/>
      <div className='h-full min-w-[12%] flex justify-end items-center p-5'>
        <Link className='hover:text-blue-600 transition-all duration-300' to={'/login'}>
                    {/*Funcion IIFE */}
                    {(() => {
                        if (sessionStorage.length !== 0) {
                        return (
                            <span>{sessionStorage.getItem('Usuario')}</span>
                        );
                        } else{
                        return (
                            <i className="fa-solid fa-user"></i>
                        );
                        } 
                    })()}{" "}
                    {/*Funcion IIFE */}
            </Link>
      </div>
    </section>
  );
};

export default Header;
