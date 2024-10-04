
import React from 'react'
import { TableSkeleton } from '@/componentes/UI/Skeletons';
import ErrorData from '@/componentes/UI/ErrorData';
import Basetable from '@/componentes/UI/Basetable';
import { EvaluacionEncargaturaColumns } from '../../Constants/EvaluacionEncargaturaConstants';

const data = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            proceso: "ENCARGATURA DE DIRECTOR GENERAL",
            codigoConvocatoria: "CEDG-2024-001",
            region: 'LIMA METROPOLITANA',
            cantidadPlazas: '2',
            tipoConvocatoria: "PRIMERA",
            fechaRegistro: '01/01/2024',
        }
    ]
}

function EvaluacionEncargaturaTable() {

    const procesos = data;
    if (procesos.error) return <ErrorData />
    if (procesos.isLoading) return <TableSkeleton />


    return (
        <>
            {
                procesos && (
                    <Basetable datos={procesos?.data} columns={EvaluacionEncargaturaColumns} total={procesos?.data.length} />
                )
            }

        </>
    )
}

export default EvaluacionEncargaturaTable