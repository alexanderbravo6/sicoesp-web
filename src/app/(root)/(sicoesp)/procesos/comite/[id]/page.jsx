
'use client'
import ProcesoSelect from '@/componentes/Global/ProcesoSelect'
import TipoProcesoSelect from '@/componentes/Global/TipoProcesoSelect'
import Header from '@/componentes/Layout/Header'
import ProcesoIndex from '@/componentes/Procesos/ProcesoIndex'
import Search from '@/componentes/UI/Search'
import React from 'react'
const itemBreadcrumbs = [
    {
        href: '/',
        name: 'Inicio'
    },
    {
        href: '/procesos',
        name: 'Gestión de Procesos'
    },
    {
        href: '/procesos/comite',
        name: 'Gestión de Comité'
    }
]

function ComitePage() {

    function handleSearch() {

    }

    return (
        <>
            <Header itemBreadcrumbs={itemBreadcrumbs} titulo='GESTIÓN DE COMITÉ' />
            <section className='w-full'>
                <Search handleSearch={handleSearch} >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div>
                            <label htmlFor="tipoProceso" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">NOMBRE DE COMITÉ</label>
                            <input type="text" id="tipoProceso" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>
                        <div>
                            <label htmlFor="proceso" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">CARGO DE COMITÉ</label>
                            <input type="text" id="proceso" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />

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
                <div className='w-full bg-white mt-5 mb-16   h-auto  overflow-x-auto  rounded-lg  '>
                    <ProcesoIndex />
                </div>
            </section>

        </>
    )
}

export default ComitePage