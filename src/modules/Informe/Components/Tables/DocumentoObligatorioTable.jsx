'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { DocumentoObligatorioColumns, ReconocimientosColumns } from '../../Constants/InformeConstants'
const data = {
    "error": false,
    "isLoading": false,
    "data": [
        {
            id: 1,
            nombre: "DECLARACIÓN JURADA",
            fecha: '2021-01-01'
        },
        {
            id: 2,
            nombre: "TITULO PROFESIONAL",
            fecha: '2021-01-01'
        },
        {
            id: 3,
            nombre: "CARTA AVAL",
            fecha: '2021-01-01'
        }
    ]
}

function DocumentoObligatorioTable() {
    // const { FetchEnunciados } = useEnunciadoService()
    const documentos = data

    if (documentos.error) return <LoadingErrorCard />
    if (documentos.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={documentos?.data} columns={DocumentoObligatorioColumns} total={documentos?.data?.length} />
        </>
    )
}

export default DocumentoObligatorioTable