'use client'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { ConvocatoriaColumns } from '../../Constants/PostulacionConstants'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { usePostulacion } from '../../Providers/PostulacionProvider'

function ConvocatoriaSeleccionadaTable() {
    const { convocatoriasSeleccionadas } = usePostulacion()


    if (!convocatoriasSeleccionadas) return <LoadingErrorCard />

    return (
        <>
            <TemplateBaseTable datos={convocatoriasSeleccionadas} columns={ConvocatoriaColumns} total={convocatoriasSeleccionadas?.length} />
        </>
    )
}

export default ConvocatoriaSeleccionadaTable