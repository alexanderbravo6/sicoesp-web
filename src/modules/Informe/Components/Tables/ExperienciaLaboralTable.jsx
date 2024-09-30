'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { ExperienciaLaboralColumns, FormacionProfesionalColumns } from '../../Constants/InformeConstants'
const data = {
    "error": false,
    "isLoading": false,
    "data": [
        {
            id: 1,
            tipo: "EXPERIENCIA DOCENTE EN EDUCACIÓN SUPERIRO",
            institucion: 'MONTERRICO',
            cargo: 'DOCENTE',

            fechaInicio: '2021-01-01',
            fechaFin: '2021-12-01',
            tiempo: '1a1m13d',
        }
    ]
}

function ExperienciaLaboralTable() {
    // const { FetchEnunciados } = useEnunciadoService()
    const experienciaLaboral = data

    if (experienciaLaboral.error) return <LoadingErrorCard />
    if (experienciaLaboral.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={experienciaLaboral?.data} columns={ExperienciaLaboralColumns} total={experienciaLaboral?.data?.length} />
        </>
    )
}

export default ExperienciaLaboralTable