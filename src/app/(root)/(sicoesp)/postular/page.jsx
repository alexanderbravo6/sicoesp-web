'use client'
import ExpedienteIndex from '@/componentes/Expediente/ExpedienteIndex'
import ConvocatoriaTabla from '@/componentes/Expediente/Tablas/ConvocatoriaTabla'

import Header from '@/componentes/Layout/Header'
import MiembroComiteIndex from '@/componentes/Procesos/Comite/MiembroComiteIndex'
import Search from '@/componentes/UI/Search'
import { convocatoriaColumnas, gestionConvocatoriasColumnas } from '@/constantes/columnas'
import { Button, Checkbox, Divider } from '@nextui-org/react'
import React, { useState } from 'react'
const itemBreadcrumbs = [
    {
        href: '/',
        name: 'Inicio'
    },
    {
        href: '/postular',
        name: 'Postular'
    }
]
function PostularPage() {
    const [open, setOpen] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const [status, setStatus] = useState(false)

    function handleSubmmit() {
        setStatus(!status)
    }
    function handleSearch() {

    }
    return (
        <>
            <Header itemBreadcrumbs={itemBreadcrumbs} titulo='POSTULAR A UN CONVOCATORIA' />
            <section className='w-full px-4'>
                <div className="px-4 mt-10 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">DATOS PERSONALES</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Información personal del postulante.</p>
                </div>
                <Divider className='my-4' />
                <div className='grid md:grid-cols-8 grid-cols-1 gap-6' >
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">DNI</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">73632374</dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nombres</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Bryan Alexander </dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Apellido Materno</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Moscol </dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Apellido Paterno</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Bravo</dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de Nacimiento</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">09/01/2024</dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Teléfono Celular</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">942417725</dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Correo Electrónico</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">bryanalexandermoscolbravo@gmail.com</dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Sexo</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Masculino</dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Dirección</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Residencial</dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Región</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Lima Metropolitana</dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Provincia</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Lima</dd>
                    </div>
                    <div className='col-span-2'>
                        <dt className="text-sm font-medium leading-6 text-gray-900">Distrito</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">San Martín de Porres</dd>
                    </div>
                </div>

                <div className="px-4 mt-10 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">CONVOCATORIAS </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Selección de convocatorias activas.</p>
                </div>
                <Divider className='my-4' />
                <ConvocatoriaTabla columnas={convocatoriaColumnas} />
                <div className="px-4 mt-10 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">FORMULARIO DE POSTULACIÓN</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Selección de convocatorias activas.</p>
                </div>
                <Divider className='my-4' />
                <div className='px-4'>
                    <h3 className="text-sm font-semibold leading-7 text-gray-900">CONVOCATORIAS SELECCIONADAS</h3>
                    <div className='col-span-2  max-w-screen-xl mx-auto mt-5 shadow-lg p-5 w-full  grid sm:grid-cols-8 grid-cols-1 gap-3'>
                        <div className='w-full col-span-3 '>
                            <dt className="text-sm font-medium leading-6 text-gray-900">EESP JOSE MARIA ARGUEDAS DE CHALHUANCA</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">CM: 0702902</dd>
                        </div>
                        <div className='w-full col-span-2 '>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Región: Loreto</dd>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Distrito: Iquitos</dd>
                        </div>
                        <div className='w-full col-span-2 '>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Carrera: Educación Inicial</dd>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Plaza: 245646577115</dd>
                        </div>
                        <div className='w-full col-span-1 flex justify-center items-center '>
                            <Button color="danger">
                                Eliminar
                            </Button>
                        </div>
                    </div>
                    <h3 className="text-sm font-semibold leading-7 mt-8 text-gray-900">DECLARACIÓN JUGARADA</h3>

                    <div className="flex flex-col mt-4 gap-2 ">
                        <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
                            <p className='text-gray-600 font-light text-md' >
                                Confirmo que la carga de información requerida ha sido registrada en su totalidad y es precisa conforme a mi conocimiento y creencia.
                            </p>
                        </Checkbox>
                    </div>
                    <Button className='mt-10'
                        {
                        ...isSelected ? { isDisabled: false } : { isDisabled: true }
                        }
                        onClick={handleSubmmit}
                        color="primary" >
                        Postular
                    </Button>
                </div>
            </section>

        </>
    )
}

export default PostularPage