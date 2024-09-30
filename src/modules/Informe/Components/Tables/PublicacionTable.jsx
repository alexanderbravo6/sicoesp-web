'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { PublicacionColumns } from '../../Constants/InformeConstants'
const data = {
    "error": false,
    "isLoading": false,
    "data": [
        {
            id: 1,
            tipo: "DIPLOMADO",
            titulo: 'MONTERRICO',
            participacion: 'EDUCACIÓN INICIAL ',
            fecha: '2021-01-01',
        }
    ]
}

function PublicacionTable() {
    // const { FetchEnunciados } = useEnunciadoService()
    const publicaciones = data

    if (publicaciones.error) return <LoadingErrorCard />
    if (publicaciones.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={publicaciones?.data} columns={PublicacionColumns} total={publicaciones?.data?.length} />
        </>
    )
}

export default PublicacionTable