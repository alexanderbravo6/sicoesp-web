
import React from 'react'



import { TableSkeleton } from '@/componentes/UI/Skeletons';
import ErrorData from '@/componentes/UI/ErrorData';
import Basetable from '@/componentes/UI/Basetable';

const comites = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            anio: 2024,
            tipoProceso: 'DESIGNACIÓN',
            proceso: 'PROCESO DE DESIGNACIÓN DE DIRECTOR GENERAL',
            codigoProceso: '2025-0001',
            numeroConvocatoria: "PRIMERA",
            fechaCreacion: '01/01/2024',
            estado: 'CREADO'
        }
    ]
}

function ComiteTabla({ columnas }) {

    if (comites.error) return <ErrorData />
    if (comites.isLoading) return <TableSkeleton />


    return (
        <>
            {
                comites && (
                    <Basetable datos={comites?.data} columns={columnas} total={comites?.data.length} />
                )
            }

        </>
    )
}

export default ComiteTabla