'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { FormacionProfesionalColumns } from '../../Constants/InformeConstants'
const dataFormacionProfesional = {
    "error": false,
    "isLoading": false,
    "data": [
        {
            id: 1,
            idGradoEstudio: 2,
            pais: 'Perú',
            nivelAcademico: 'Título Técnico',
            centroEstudios: 'San Juan Bosco',
            especialidad: 'Educación Inicial',
            fechaInicio: '2021-01-01',
            fechaFin: '2021-12-01',
            fechaEmision: '2021-12-01',
            ciudad: 'Lima',
        },
        {
            id: 2,
            idGradoEstudio: 2,
            pais: 'Perú',
            nivelAcademico: 'Título Profesional',
            centroEstudios: 'San Juan Bosco',
            especialidad: 'Educación Inicial',
            fechaInicio: '2021-01-01',
            fechaFin: '2021-12-01',
            fechaEmision: '2021-12-01',
            ciudad: 'Lima',
        }
    ]
}

function FormacionProfesionalTable() {
    // const { FetchEnunciados } = useEnunciadoService()
    const formacion = dataFormacionProfesional

    if (formacion.error) return <LoadingErrorCard />
    if (formacion.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={formacion?.data} columns={FormacionProfesionalColumns} total={formacion?.data?.length} />
        </>
    )
}

export default FormacionProfesionalTable