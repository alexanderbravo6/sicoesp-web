import ComiteLink from "@/componentes/Procesos/ComiteLink";
import ConvocatoriaLink from "@/componentes/Procesos/ConvocatoriaLink";
import CronogramaModal from "@/componentes/Procesos/CronogramaModal";
import { IconGroup } from "@/componentes/UI/Icons";


export const procesoColumnas = [

    {
        header: 'AÑO',
        accessorKey: 'anio',
        size: 30
    },
    {
        header: 'TIPO DE PROCESO',
        accessorKey: 'tipoProceso',
        size: 30
    },
    {
        header: 'PROCESO',
        accessorKey: 'proceso',
        size: 300
    },
    {
        header: 'CÓDIGO',
        accessorKey: 'codigoProceso',
        size: 30

    },
    {
        header: 'FECHA DE CREACIÓN',
        accessorKey: 'fechaCreacion',
        size: 30
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <CronogramaModal row={row} />
                    <ComiteLink id={row.id} />
                    <ConvocatoriaLink id={row.id} />
                </div>
            </>
        ),
    },
]
export const comiteColumnas = [

    {
        header: 'NOMBRE DE COMITÉ',
        accessorKey: 'nombreComite',
        size: 30
    },
    {
        header: 'DOCUMENTO',
        accessorKey: 'numeroDocumento',
        size: 30
    },
    {
        header: 'APELLIDOS Y NOMBRES',
        accessorKey: 'nombreCompleto',
        size: 300
    },
    {
        header: 'TIPO DE MIEMBRO',
        accessorKey: 'tipoMiembro',
        size: 30

    },
    {
        header: 'CARGO EN EL COMITÉ ',
        accessorKey: 'cargoComite',
        size: 30
    },
    {
        header: 'ESTADO ',
        accessorKey: 'estado',
        size: 30
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <CronogramaModal row={row} />
                    <ComiteLink id={row.id} />
                    <ConvocatoriaLink id={row.id} />
                </div>
            </>
        ),
    },
]