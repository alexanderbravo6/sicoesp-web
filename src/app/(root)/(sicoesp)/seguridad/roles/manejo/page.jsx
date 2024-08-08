'use client'
import RolCard from '@/componentes/Seguridad/RolCard'
import Breadcrumb from '@/componentes/UI/Breadcrumb'
import ErrorData from '@/componentes/UI/ErrorData';
import ProgressBar from '@/componentes/UI/ProgressBar';
import React from 'react'
const itemBreadCrumbs = [
    {
        href: '/',
        name: 'Inicio'
    },
    {
        href: '/',
        name: 'Seguridad'
    },
    {
        href: '/',
        name: 'Roles'
    },
    {
        href: '/seguridad/roles/manejo',
        name: 'Manejo'
    }
]
const roles = {
    error: false,
    isLoading: false,
    data: [
        {


            id: 1,
            idPersonaRol: 1,
            rol: "ESPECIALISTA DIFOID",
            descripcionTipoSede: "OFICINA",
            descripcionSede: "DIRECCIÓN DE FORMACIÓN INICAL DOCENTE"

        },
        {


            id: 2,
            idPersonaRol: 2,
            rol: "VEEDOR DIFOID",
            descripcionTipoSede: "OFICINA",
            descripcionSede: "DIRECCIÓN DE FORMACIÓN INICAL DOCENTE"

        },
        {


            id: 3,
            idPersonaRol: 3,
            rol: "RESPONSABLE DE PERSONAL",
            descripcionTipoSede: "DRE",
            descripcionSede: "LIMA MAETROPOLITANA"

        },
        {


            id: 4,
            idPersonaRol: 4,
            rol: "PRESIDENTE DE COMITÉ DE EVALUACIÓN PARA DESIGNACIÓN",
            descripcionTipoSede: "DRE",
            descripcionSede: "LIMA MAETROPOLITANA"

        },
        {

            id: 5,
            idPersonaRol: 5,
            rol: "POSTULANTE DESIGNACIÓN",
            descripcionTipoSede: "INSTITUCIÓN",
            descripcionSede: "NO DEFINIDO"

        },
        {


            id: 6,
            idPersonaRol: 6,
            rol: "POSTULANTE CONTRATACIÓN",
            descripcionTipoSede: "INSTITUCIÓN",
            descripcionSede: "NO DEFINIDO"

        },
        {


            id: 7,
            idPersonaRol: 7,
            rol: "POSTULANTE ENCARGATURA",
            descripcionTipoSede: "INSTITUCIÓN",
            descripcionSede: "NO DEFINIDO"

        }
    ]
}
function SeguridadPage() {

    return (
        <>
            <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-main  rounded-md '>
                <h1 className='text-white font-thin md:text-[1.1rem]  text-[12px] '>MANEJO DE ROLES</h1>
                <h2 className='text-white font-thin md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadCrumbs} /> </h2>
            </div>
            <div className='w-full py-6 px-9'>
                <h4 className='text-gray-500' >
                    Listado de roles asignados al usuario
                </h4>
                <ul role="list" className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 w-full  divide-gray-100">
                    {
                        roles &&
                            roles.error ? <ErrorData /> :
                            roles.isLoading ? <ProgressBar /> :
                                roles?.data.map((rol, id) => (
                                    <RolCard key={id} rol={rol} />
                                ))
                    }
                </ul>
            </div>

        </>


    )
}

export default SeguridadPage