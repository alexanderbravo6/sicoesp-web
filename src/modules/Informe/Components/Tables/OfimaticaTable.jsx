'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { ExperienciaLaboralColumns, FormacionProfesionalColumns, HerramientasVirtualesColumns } from '../../Constants/InformeConstants'
const data = {
    "error": false,
    "isLoading": false,
    "data": [
        {
            id: 1,
            idCurso: 1,
            idNivel: 1,
            curso: "EXCEL",
            nivel: 'BÁSICO',

        }
    ]
}

function OfimaticaTable() {
    // const { FetchEnunciados } = useEnunciadoService()
    const cursosOfimatica = data

    if (cursosOfimatica.error) return <LoadingErrorCard />
    if (cursosOfimatica.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={cursosOfimatica?.data} columns={HerramientasVirtualesColumns} total={cursosOfimatica?.data?.length} />
        </>
    )
}

export default OfimaticaTable