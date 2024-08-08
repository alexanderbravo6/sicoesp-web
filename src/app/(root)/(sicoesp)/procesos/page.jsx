
'use client'
import Breadcrumb from '@/componentes/UI/Breadcrumb';
import { useState } from 'react';
import Search from '@/componentes/UI/Search';
import ProcesoTabla from '@/componentes/Procesos/Tabla/ProcesoTabla';
import { procesoColumnas } from '@/constantes/columnas';
import ProcesoIndex from '@/componentes/Procesos/ProcesoIndex';
import { Divider } from '@nextui-org/react';
import Header from '@/componentes/Layout/Header';
import TipoProcesoSelect from '@/componentes/Global/TipoProcesoSelect';
import ProcesoSelect from '@/componentes/Global/ProcesoSelect';

const itemBreadcrumbs = [
  {
    href: '/',
    name: 'Inicio'
  },
  {
    href: '/procesos',
    name: 'Gestión de Procesos'
  }
]


function ProcesoPage() {


  const [filterplanes, setFilterPlanes] = useState(0);
  const [filterciclos, setFilterCiclos] = useState(0);


  function handleSearch() {

  }

  return (
    <>
      <Header itemBreadcrumbs={itemBreadcrumbs} titulo='GESTIÓN DE PROCESOS' />
      <section className='w-full'>
        <Search handleSearch={handleSearch} >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor="tipoProceso" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">TIPO DE PROCESO</label>
              <TipoProcesoSelect />
            </div>
            <div>
              <label htmlFor="proceso" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">PROCESO</label>
              <ProcesoSelect />
            </div>
            <div>
              <label htmlFor="estado" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">ESTADO</label>
              <select id="estado" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">SELECCIONAR</option>
                <option value="1">CREADO</option>
                <option value="2">ELIMINADO</option>
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

export default ProcesoPage