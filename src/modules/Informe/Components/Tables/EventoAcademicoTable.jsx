'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { EventosAcademicosColumns, ExperienciaLaboralColumns, FormacionProfesionalColumns } from '../../Constants/InformeConstants'
const data = {
    "error": false,
    "isLoading": false,
    "data": [
        {
            id: 1,
            fechaParticipacion: "2021-01-01",
            institucion: 'MONTERRICO',
            horas: '50',


        }
    ]
}

function EventoAcademicoTable() {
    // const { FetchEnunciados } = useEnunciadoService()
    const eventos = data

    if (eventos.error) return <LoadingErrorCard />
    if (eventos.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={eventos?.data} columns={EventosAcademicosColumns} total={eventos?.data?.length} />
        </>
    )
}

export default EventoAcademicoTable