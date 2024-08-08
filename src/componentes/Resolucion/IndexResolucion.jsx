
import React from 'react'
import TablaResolucion from './Tablas/TablaResolucion'
import RegistrarResolucionModal from './RegistrarResolucionModal'
import { resolucionColumnas } from '@/constantes/columnas'

const IndexResolucion = () => {
    return (
        <>
            <section className=' mt-4 mb-6'>
                <h4 className='text-xl font-extralight text-gray-700 ' >
                    Gestión de resoluciones del proceso de distribución de horas pedagógicas
                </h4>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                    En esta sección podrás visualizar y gestionar las resoluciones del proceso de distribución de horas pedagógicas.
                </p>
            </section>
            <RegistrarResolucionModal />
            <TablaResolucion columnas={resolucionColumnas} />
        </>
    )
}

export default IndexResolucion