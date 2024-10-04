import EvaluacionEPModal from "../Components/Modals/EvaluacionEPModal";
import ExpedienteEncargaturaModal from "../Components/Modals/ExpedienteEncargaturaModal";
import RequisitoEncargaturaModal from "../Components/Modals/RequisitoEncargaturaModal";
import ResultadoEncargaturaModal from "../Components/Modals/ResultadoEncargaturaModal";
import ValidarRequisitosModal from "../Components/Modals/ValidarRequisitosModal";

export const EvaluacionEncargaturaColumns = [
    {
        header: 'PROCESO',
        accessorKey: 'proceso',
        size: 100
    },
    {
        header: 'CODIGO',
        accessorKey: 'codigoConvocatoria',
        size: 100
    },
    {
        header: 'REGIÓN',
        accessorKey: 'region',
        size: 100
    },

    {
        header: 'TIPO CONVOCATORIA',
        accessorKey: 'tipoConvocatoria',
        size: 30
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
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <RequisitoEncargaturaModal row={row.original} />
                    <ExpedienteEncargaturaModal row={row.original} />
                    <EvaluacionEPModal row={row.original} />
                    <ResultadoEncargaturaModal row={row.original} />
                </div>
            </>
        ),
    },
]
export const PlazasColumns = [

    {
        header: 'CODIGO',
        accessorKey: 'codigoConvocatoria',
        size: 100
    },
    {
        header: 'REGIÓN',
        accessorKey: 'region',
        size: 100
    },

    {
        header: 'CODIGO MODULAR',
        accessorKey: 'codigoModular',
        size: 30
    },
    {
        header: 'GESTIÓN',
        accessorKey: 'tipoGestion',
        size: 50
    },
    {
        header: 'INSTITUCIÓN',
        accessorKey: 'institucion',
        size: 150
    },
    {
        header: 'PLAZA',
        accessorKey: 'plaza',
        size: 50
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <ValidarRequisitosModal row={row.original} />

                </div>
            </>
        ),
    },
]
export const ExpedienteColumns = [
    {
        header: 'TIPO DE PROCESO',
        accessorKey: 'tipoProceso',
        size: 50
    },
    {
        header: 'N° EXPEDIENTE',
        accessorKey: 'numeroExpediente',
        size: 50
    },
    {
        header: 'N° DOCUMENTO',
        accessorKey: 'numeroDocumento',
        size: 50
    },
    {
        header: 'NOMBRE COMPLETO',
        accessorKey: 'nombreCompleto',
        size: 200
    },
    {
        header: 'TIPO DE INFORME',
        accessorKey: 'tipoInforme',
        size: 50
    },
    {
        header: 'N° INFORME',
        accessorKey: 'numeroInforme',
        size: 50
    },
    {
        header: 'FECHA DE REGISTRO',
        accessorKey: 'fechaRegistro',
        size: 50
    },
    {
        header: 'ESTADO',
        accessorKey: 'estado',
        size: 50
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>

                </div>
            </>
        ),
    },
]
