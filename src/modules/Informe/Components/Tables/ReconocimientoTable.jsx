'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { ReconocimientosColumns } from '../../Constants/InformeConstants'
const data = {
    "error": false,
    "isLoading": false,
    "data": [
        {
            id: 1,
            acreditacion: "DIPLOMADO",
            empresa: 'MONTERRICO',
            descripcion: 'EDUCACIÓN INICIAL ',
            fecha: '2021-01-01'
        }
    ]
}

function ReconocimientoTable() {
    // const { FetchEnunciados } = useEnunciadoService()
    const reconocimientos = data

    if (reconocimientos.error) return <LoadingErrorCard />
    if (reconocimientos.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={reconocimientos?.data} columns={ReconocimientosColumns} total={reconocimientos?.data?.length} />
        </>
    )
}

export default ReconocimientoTable