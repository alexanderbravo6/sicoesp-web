import EvaluacionEPModal from "../Components/Modals/EvaluacionEPModal";
import EvaluacionExpedienteEncargaturaModal from "../Components/Modals/EvaluacionExpedienteEncargaturaModal";
import RequisitoEncargaturaModal from "../Components/Modals/RequisitoEncargaturaModal";
import ResultadoEncargaturaModal from "../Components/Modals/ResultadoEncargaturaModal";

export const EvaluacionEncargaturaColumns = [
    {
        header: 'PROCESO',
        accessorKey: 'proceso',
        size: 100
    },
    {
        header: 'CODIGO',
        accessorKey: 'codigoConvocatoria',
        size: 80
    },
    {
        header: 'REGIÓN',
        accessorKey: 'region',
        size: 100
    },
    {
        header: 'RESOLUCIÓN DE SUSTENTO',
        accessorKey: 'resolucionSustento',
        size: 100
    },
    {
        header: 'FECHA REGISTRO',
        accessorKey: 'fechaRegistro',
        size: 50
    },
    {
        header: 'PLAZAS',
        accessorKey: 'cantidadPlazas',
        size: 30
    },
    {
        header: 'N° CONVOCATORIA',
        accessorKey: 'numeroConvocatoria',
        size: 30
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <RequisitoEncargaturaModal row={row.original} />
                    <EvaluacionExpedienteEncargaturaModal row={row.original} />
                    <EvaluacionEPModal row={row.original} />
                    <ResultadoEncargaturaModal row={row.original} />
                </div>
            </>
        ),
    },
]
