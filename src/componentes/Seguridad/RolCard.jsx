'use client'
import React from 'react'

function RolCard({ rol }) {


    const isActive = 1 === rol.idPersonaRol;

    return (
        <li className={`  ${isActive ? "bg-main  text-white " : ""} my-6 hover:bg-main  hover:text-white  shadow-xl cursor-pointer  max-w-96 overflow-auto  px-6 rounded-lg gap-x-6 py-5`}>
            <p className={`text-sm font-bold  leading-6 `}>ROL DE USUARIO : <span className='font-normal' >{rol.rol}</span> </p>
            <p className={`text-sm font-bold  leading-6 `}>TIPO DE SEDE :  <span className='font-normal' >{rol.descripcionTipoSede}</span> </p>
            <p className={`text-sm font-bold   leading-6  `}>SEDE :  <span className='font-normal'  >{rol.descripcionSede}</span> </p>
        </li>
    )
}

export default RolCard