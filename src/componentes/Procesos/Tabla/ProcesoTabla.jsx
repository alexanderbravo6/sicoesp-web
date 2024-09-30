
import React from 'react'



import { TableSkeleton } from '@/componentes/UI/Skeletons';
import ErrorData from '@/componentes/UI/ErrorData';
import Basetable from '@/componentes/UI/Basetable';

const procesos = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            anio: 2024,
            tipoProceso: 'ENCARGATURA DE DIRECTORES',
            proceso: 'PROCESO DE ENCARGATURA DE DIRECTORES',
            codigoProceso: '2025-0001',
            numeroConvocatoria: "PRIMERA",
            fechaCreacion: '01/01/2024',
            estado: 'CREADO'
        }
    ]
}

function ProcesoTabla({ columnas }) {

    if (procesos.error) return <ErrorData />
    if (procesos.isLoading) return <TableSkeleton />


    return (
        <>
            {
                procesos && (
                    <Basetable datos={procesos?.data} columns={columnas} total={procesos?.data.length} />
                )
            }

        </>
    )
}

export default ProcesoTabla