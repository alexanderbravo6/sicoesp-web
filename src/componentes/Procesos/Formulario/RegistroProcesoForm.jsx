import ProcesoSelect from '@/componentes/Global/ProcesoSelect'
import TipoProcesoSelect from '@/componentes/Global/TipoProcesoSelect'
import { Card, CardBody, Checkbox, CheckboxGroup, Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import AlcanceTabla from '../Tabla/AlcanceTabla'
import RegionSelect from '@/componentes/Global/RegionSelect'

function RegistroProcesoForm() {
    return (
        <>
            <div className="grid  grid-cols-2 gap-6" >
                <div>
                    <label htmlFor="tipoProceso" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">TIPO DE PROCESO</label>
                    <TipoProcesoSelect />
                </div>
                <div>
                    <label htmlFor="proceso" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">PROCESO</label>
                    <ProcesoSelect />
                </div>
                <div>
                    <label htmlFor="alcance" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">ALCANCE</label>
                    <RegionSelect />
                </div>
                <div>
                    <label htmlFor="anio" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">AÑO</label>
                    <p className='w-full p-2 border border-gray-300 rounded-md'>
                        2024
                    </p>
                </div>
            </div>

        </>
    )
}

export default RegistroProcesoForm