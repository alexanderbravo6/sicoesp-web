import EditarComiteModal from "@/componentes/Procesos/Comite/EditarComiteModal";
import ComiteLink from "@/componentes/Procesos/ComiteLink";
import ConvocatoriaLink from "@/componentes/Procesos/ConvocatoriaLink";
import MiembroComiteLink from "@/componentes/Procesos/MiembroComiteLink";



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
                    <ComiteLink id={row.id} />
                    <ConvocatoriaLink id={row.id} />
                </div>
            </>
        ),
    },
]
export const resolucionColumnas = [

    {
        header: 'NÚMERO',
        accessorKey: 'codigoInterno'
    },
    {
        header: 'TIPO DE RESOLUCIÓN',
        accessorKey: 'nombreInforme'
    },
    {
        header: 'NÚMERO DE RESOLUCIÓN',
        accessorKey: 'encargado'
    },
    {
        header: 'FECHA DE RESOLUCIÓN',
        accessorKey: 'fecha'
    },
    {
        header: 'NÚMERO DE FOLIOS',
        accessorKey: 'estado'
    },
    {
        header: 'ESTADO',
        accessorKey: 'estado'
    },
    {
        header: 'ACCIONES',
        cell: ({ row }) => (
            <>
                <div className='flex gap-2 justify-center items-center '>

                </div>
            </>
        ),
    },
]
export const comiteColumnas = [
    {
        header: 'TIPO DE PROCESO',
        accessorKey: 'tipoProceso',
        size: 300
    },
    {
        header: 'PROCESO',
        accessorKey: 'proceso',
        size: 300
    },
    {
        header: 'DRE',
        accessorKey: 'nombreRegion',
        size: 200
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
                    <MiembroComiteLink id={row.id} />
                </div>
            </>
        ),
    },
]
export const miembroComiteColumnas = [

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
                    <EditarComiteModal row={row} />
                </div>
            </>
        ),
    },
]