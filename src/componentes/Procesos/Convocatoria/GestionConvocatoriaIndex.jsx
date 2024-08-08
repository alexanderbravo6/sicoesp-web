import React from 'react'
import GestionConvocatoriaTabla from '../Tabla/GestionConvocatoriaTabla'
import { gestionConvocatoriasColumnas } from '@/constantes/columnas'
import RegistroConvocatoriaRegionModal from './RegistroConvocatoriaRegionModal'
import RegistroConvocatoriaCargaMasiva from './RegistroConvocatoriaCargaMasiva'
import RegistroConvocatoriaInstitucion from './RegistroConvocatoriaInstitucion'

function GestionConvocatoriaIndex() {
    return (
        <>
            <section className='my-4 flex gap-4'>
                <RegistroConvocatoriaRegionModal />
                <RegistroConvocatoriaCargaMasiva />
                <RegistroConvocatoriaInstitucion />
            </section>
            <GestionConvocatoriaTabla columnas={gestionConvocatoriasColumnas} />
        </>
    )
}

export default GestionConvocatoriaIndex