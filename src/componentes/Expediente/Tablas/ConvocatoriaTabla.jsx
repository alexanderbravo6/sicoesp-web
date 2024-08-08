
import React from 'react'



import { TableSkeleton } from '@/componentes/UI/Skeletons';
import ErrorData from '@/componentes/UI/ErrorData';
import Basetable from '@/componentes/UI/Basetable';

const convocatorias = {
    error: false,
    isLoading: false,
    data: [
        {
            id: 1,
            proceso: 'DESIGNACIÓN',
            puesto: "DIRECTOR GENERAL",
            codigoModular: '000000',
            region: 'LIMA METROPOLITANA',
            institucion: "MONTESSORI",

            etapa: "ACTIVIDADES PREVIA A LA EVALUACIÓN",
            cantidadPostulante: "0",
            codigoPlaza: "5745456465"
        }
    ]
}

function ConvocatoriaTabla({ columnas }) {

    if (convocatorias.error) return <ErrorData />
    if (convocatorias.isLoading) return <TableSkeleton />


    return (
        <>
            {
                convocatorias && (
                    <Basetable datos={convocatorias?.data} columns={columnas} total={convocatorias?.data.length} />
                )
            }

        </>
    )
}

export default ConvocatoriaTabla