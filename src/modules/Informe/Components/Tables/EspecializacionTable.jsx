'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { EspecializacionesColumns, ExperienciaLaboralColumns, FormacionProfesionalColumns } from '../../Constants/InformeConstants'
const data = {
    "error": false,
    "isLoading": false,
    "data": [
        {
            id: 1,
            programa: "DIPLOMADO",
            institucion: 'MONTERRICO',
            centroEstudios: 'EDUCACIÓN INICIAL ',
            tema: "EMDKSADKS",
            fechaInicio: '2021-01-01',
            fechaFin: '2021-12-01',
            horas: '20',
        }
    ]
}

function EspecializacionTable() {
    // const { FetchEnunciados } = useEnunciadoService()
    const especializaciones = data

    if (especializaciones.error) return <LoadingErrorCard />
    if (especializaciones.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={especializaciones?.data} columns={EspecializacionesColumns} total={especializaciones?.data?.length} />
        </>
    )
}

export default EspecializacionTable