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
            curso: "MICROSOF TEAMS",
            nivel: 'BÁSICO',

        }
    ]
}

function HerramientaVirtualTable() {
    // const { FetchEnunciados } = useEnunciadoService()
    const herramientas = data

    if (herramientas.error) return <LoadingErrorCard />
    if (herramientas.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={herramientas?.data} columns={HerramientasVirtualesColumns} total={herramientas?.data?.length} />
        </>
    )
}

export default HerramientaVirtualTable