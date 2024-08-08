'use client'
import Header from '@/componentes/Layout/Header'
import MiembroComiteIndex from '@/componentes/Procesos/Comite/MiembroComiteIndex'
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
        name: 'Gestión de Convocatorias'
    }
]
function ConvocatoriaPage() {
    function handleSearch() {

    }

    return (
        <>
            <Header itemBreadcrumbs={itemBreadcrumbs} titulo='GESTIÓN DE CONVOCATORIAS' />
            <section className='w-full'>
                <Search handleSearch={handleSearch} >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                        <div>
                            <label htmlFor="estado" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">REGIÓN</label>
                            <select id="estado" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">LIMA METROPOLITANA</option>
                                <option value="2">AREQUIPA</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="estado" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">INSTITUCIÓN</label>
                            <select id="estado" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">SELECCIONAR</option>
                                <option value="1">MONTESSORI</option>
                            </select>
                        </div>
                    </div>

                </Search>
                <div className='w-full bg-white mt-5 mb-16   h-auto  overflow-x-auto  rounded-lg  '>

                </div>
            </section>

        </>
    )
}

export default ConvocatoriaPage