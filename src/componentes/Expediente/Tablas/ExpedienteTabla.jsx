
import React from 'react'



import { TableSkeleton } from '@/componentes/UI/Skeletons';
import ErrorData from '@/componentes/UI/ErrorData';
import Basetable from '@/componentes/UI/Basetable';

const expedientes = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            tipoProceso : "DESIGNACIÓN",
            numeroExpediente: 'EXP-2025-0001',
            numeroDocumento: '73632374',
            nombreCompleto: 'BRYAN ALEXANDER MOSCOL BRAVO',
            informeEscalafonario: 'I-244545',
            fechaRegistro: '01/01/2024',
            estado: 'CREADO'
        }
    ]
}

function ExpedienteTabla({ columnas }) {

    if (expedientes.error) return <ErrorData />
    if (expedientes.isLoading) return <TableSkeleton />


    return (
        <>
            {
                expedientes && (
                    <Basetable datos={expedientes?.data} columns={columnas} total={expedientes?.data.length} />
                )
            }

        </>
    )
}

export default ExpedienteTabla