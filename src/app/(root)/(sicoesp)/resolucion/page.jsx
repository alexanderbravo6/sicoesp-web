'use client'
import ProcesoSelect from '@/componentes/Global/ProcesoSelect'
import TipoProcesoSelect from '@/componentes/Global/TipoProcesoSelect'
import Header from '@/componentes/Layout/Header'
import ProcesoIndex from '@/componentes/Procesos/ProcesoIndex'
import IndexResolucion from '@/componentes/Resolucion/IndexResolucion'
import Search from '@/componentes/UI/Search'
import React from 'react'
const itemBreadcrumbs = [
    {
        href: '/',
        name: 'Inicio'
    },
    {
        href: '/resolucion',
        name: 'Resoluciones'
    }
]

function ResolucionPage() {
    function handleSearch() {

    }

    return (
        <>
            <Header itemBreadcrumbs={itemBreadcrumbs} titulo='GESTIÓN DE RESOLUCIONES' />
            <section className='w-full'>
                <Search handleSearch={handleSearch} >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div>
                            <label htmlFor="tipoProceso" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">N° RESOLUCIÓN</label>
                            <input type="text" id="tipoProceso" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="codigoConvocatoria" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">CÓDIGO DE CONVOCATORIA</label>
                            <input type="text" id="codigoConvocatoria" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="proceso" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">PROCESO</label>
                            <select id="proceso" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">DESIGNACIÓN DE PUESTOS DIRECTIVOS</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="tipoResolucion" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">TIPO DE RESOLUCIÓN</label>
                            <select id="tipoResolucion" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">RESOLUCIÓN DIRECTORAL REGIONAL</option>
                            </select>
                        </div>
                    </div>

                </Search>
                <div className='w-full bg-white mt-5 mb-16   h-auto  overflow-x-auto  rounded-lg  '>
                    <IndexResolucion />
                </div>
            </section>

        </>
    )
}

export default ResolucionPage