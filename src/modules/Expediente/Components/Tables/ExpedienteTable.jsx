
import React from 'react'



import { TableSkeleton } from '@/componentes/UI/Skeletons';
import ErrorData from '@/componentes/UI/ErrorData';
import Basetable from '@/componentes/UI/Basetable';
import { ExpedienteColumns } from '../../Constants/ExpedienteConstants';

const expedientes = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            idTipoProceso: 1,
            tipoProceso: "ENCARGATURA",
            numeroExpediente: 'EXP-2025-0001',
            numeroDocumento: '73632374',
            nombreCompleto: 'BRYAN ALEXANDER MOSCOL BRAVO',

            numeroInforme: 'NO CORRESPONDE',
            tipoInforme: 'MANUAL',
            fechaRegistro: '01/01/2024',
            estado: 'CREADO'
        }
    ]
}

function ExpedienteTable() {

    if (expedientes.error) return <ErrorData />
    if (expedientes.isLoading) return <TableSkeleton />


    return (
        <>
            {
                expedientes && (
                    <Basetable datos={expedientes?.data} columns={ExpedienteColumns} total={expedientes?.data.length} />
                )
            }

        </>
    )
}

export default ExpedienteTable