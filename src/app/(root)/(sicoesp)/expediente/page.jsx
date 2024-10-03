'use client'

import Header from '@/componentes/Layout/Header'
import Search from '@/componentes/UI/Search'
import ExpedienteIndex from '@/modules/Expediente/ExpedienteIndex'
import React from 'react'
const itemBreadcrumbs = [
    {
        href: '/',
        name: 'Inicio'
    },
    {
        href: '/expedientes',
        name: 'Expediente'
    }
]
function ExpedientePage() {
    function handleSearch() {

    }
    return (
        <>
            <Header itemBreadcrumbs={itemBreadcrumbs} titulo='EXPEDIENTE' />
            <section className='w-full'>
                <div className='w-full bg-white mt-5 mb-16   h-full  overflow-x-auto  rounded-lg shadow-md  '>
                    <Search handleSearch={handleSearch} >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>
                                <label htmlFor="informeEscalafonario" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">NÚMERO DE INFORME </label>
                                <input type="text" id="informeEscalafonario" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="numeroExpediente" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">NÚMERO DE EXPEDIENTE</label>
                                <input type="text" id="numeroExpediente" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                            </div>
                            <div>
                                <label htmlFor="estado" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">ESTADO</label>
                                <select id="estado" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">SELECCIONAR</option>
                                    <option value="1">APROBADO</option>
                                    <option value="2">REEMPLAZADO</option>
                                    <option value="3">ELIMINADO</option>
                                </select>
                            </div>
                        </div>

                    </Search>

                </div>
                <ExpedienteIndex />
            </section>

        </>
    )
}

export default ExpedientePage