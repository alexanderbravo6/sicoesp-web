'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { ConvocatoriaColumns } from '../../Constants/PostulacionConstants'
const data = {
    "error": false,
    "isLoading": false,
    "data": [
        {
            id: 1,
            nombreProceso: "PROCESO DE ENCARGATURA DE DIRECTORES",
            codigoConvocatoria: 'CED-2021-001',
            region: 'LIMA',
            codigoModular: '0147147',
            institucion: 'EESP SANTA ROSA',
            numeroConvocatoria: "PRIMERA"
        },
        {
            id: 2,
            nombreProceso: "PROCESO DE ENCARGATURA DE DIRECTORES",
            codigoConvocatoria: 'CED-2021-002',
            region: 'LIMA',
            codigoModular: '0147147',
            institucion: 'EESP SANTA ROSA',
            numeroConvocatoria: "SEGUNDA"
        }
    ]
}

function ConvocatoriaTable() {
    // const { FetchEnunciados } = useEnunciadoService()
    const convocatorias = data

    if (convocatorias.error) return <LoadingErrorCard />
    if (convocatorias.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={convocatorias?.data} columns={ConvocatoriaColumns} total={convocatorias?.data?.length} />
        </>
    )
}

export default ConvocatoriaTable