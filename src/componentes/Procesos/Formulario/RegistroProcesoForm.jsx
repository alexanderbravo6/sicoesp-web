import ProcesoSelect from '@/componentes/Global/ProcesoSelect'
import TipoProcesoSelect from '@/componentes/Global/TipoProcesoSelect'
import { Card, CardBody, Checkbox, CheckboxGroup, Radio, RadioGroup, Tab, Tabs } from '@nextui-org/react'
import React, { useState } from 'react'
import AlcanceTabla from '../Tabla/AlcanceTabla'
import RegionSelect from '@/componentes/Global/RegionSelect'
import CronogramaModal from '../CronogramaModal'
import CronogramaDesignacion from '../Cronogramas/CronogramaDesignacion'
import CronogramaEncargatura from '../Cronogramas/CronogramaEncargatura'

function RegistroProcesoForm() {
    const [selected, setSelected] = useState("1");
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

            <section>
                <RadioGroup
                    label="Selecciona una opción"
                    orientation="horizontal"
                    value={selected}
                    onValueChange={setSelected}
                >
                    <Radio value="1">Asignar</Radio>
                    <Radio value="2">Modificable</Radio>
                    <Radio value="3">Estandar</Radio>
                </RadioGroup>
            </section>
            {
                selected == 1 ? <CronogramaDesignacion /> : <CronogramaEncargatura />
            }

        </>
    )
}

export default RegistroProcesoForm