import React from 'react'
import ProcesoTabla from './Tabla/ProcesoTabla'
import RegistroProcesoModal from './RegistroProcesoModal'
import { procesoColumnas } from '@/constantes/columnas'

const ProcesoIndex = () => {
    return (
        <>

            <section className='w-full my-4 flex items-center justify-start' >
                <RegistroProcesoModal />
            </section>
            <ProcesoTabla columnas={procesoColumnas} />
        </>
    )
}

export default ProcesoIndex