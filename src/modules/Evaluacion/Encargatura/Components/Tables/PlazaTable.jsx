
import React from 'react'
import { TableSkeleton } from '@/componentes/UI/Skeletons';
import ErrorData from '@/componentes/UI/ErrorData';
import Basetable from '@/componentes/UI/Basetable';
import { EvaluacionEncargaturaColumns, PlazasColumns } from '../../Constants/EvaluacionEncargaturaConstants';

const data = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            codigoConvocatoria: "CEDG-2024-001",
            region: 'LIMA METROPOLITANA',
            codigoModular: "411557744",
            tipoGestion: "EESP",
            institucion: "MONTESSORI",
            plaza: "00456757541447",

        }
    ]
}

function PlazaTable() {

    const plazas = data;
    if (plazas.error) return <ErrorData />
    if (plazas.isLoading) return <TableSkeleton />


    return (
        <>
            {
                plazas && (
                    <Basetable datos={plazas?.data} columns={PlazasColumns} total={plazas?.data.length} />
                )
            }

        </>
    )
}

export default PlazaTable