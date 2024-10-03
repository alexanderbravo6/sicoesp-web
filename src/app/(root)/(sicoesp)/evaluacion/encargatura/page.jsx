'use client'

import Header from '@/componentes/Layout/Header'
import Search from '@/componentes/UI/Search'
import EvaluacionEncargaturaIndex from '@/modules/Evaluacion/Encargatura/Components/EvaluacionEncargaturaIndex'
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
function EvaluacionEncargaturaPage() {
    function handleSearch() {

    }
    return (
        <>
            <Header itemBreadcrumbs={itemBreadcrumbs} titulo='CONVOCATORIAS DE ENCARGATURA' />
            <section className='w-full'>
                <div className='w-full bg-white mt-5 mb-16   h-full  overflow-x-auto  rounded-lg shadow-md  '>
                    <Search handleSearch={handleSearch} >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                            <div>
                                <label htmlFor="estado" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">REGIÓN</label>
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
                <EvaluacionEncargaturaIndex />
            </section>

        </>
    )
}

export default EvaluacionEncargaturaPage