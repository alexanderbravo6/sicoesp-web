import EditarExpedienteModal from "@/componentes/Expediente/EditarExpedienteModal";
import InformeEscalafonarioButton from "@/componentes/Expediente/InformeEscalafonarioButton";
import EditarComiteModal from "@/componentes/Procesos/Comite/EditarComiteModal";
import ComiteLink from "@/componentes/Procesos/ComiteLink";
import VerGestionConvocatoriaModal from "@/componentes/Procesos/Convocatoria/VerGestionConvocatoriaModal";
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
export const gestionConvocatoriasColumnas = [

    {
        header: 'PROCESO',
        accessorKey: 'proceso',
        size: 40
    },

    {
        header: 'CÓDIGO MODULAR',
        accessorKey: 'codigoModular',
        size: 20
    },
    {
        header: 'REGION',
        accessorKey: 'region',
        size: 50
    },
    {
        header: 'IESP/EESP',
        accessorKey: 'institucion',
        size: 300
    },
    {
        header: 'PLAZA',
        accessorKey: 'codigoPlaza',
        size: 80
    },
    {
        header: 'CARGO',
        accessorKey: 'cargo',
        size: 150
    },
    {
        header: 'ETAPA',
        accessorKey: 'etapa',
        size: 150
    },
    {
        header: 'POSTULANTES',
        accessorKey: 'cantidadPostulante',
        size: 20
    },
    {
        header: 'ACCIONES',
        cell: ({ row }) => (
            <>
                <div className='flex gap-2 justify-center items-center '>
                    <VerGestionConvocatoriaModal />
                </div>
            </>
        ),
    },
]
export const convocatoriaColumnas = [

    {
        header: 'PROCESO',
        accessorKey: 'proceso',
        size: 200
    },
    {
        header: 'PUESTO',
        accessorKey: 'puesto',
        size: 150
    },

    {
        header: 'CÓDIGO MODULAR',
        accessorKey: 'codigoModular',
        size: 20
    },
    {
        header: 'REGION',
        accessorKey: 'region',
        size: 50
    },
    {
        header: 'IESP/EESP',
        accessorKey: 'institucion',
        size: 300
    },
    {
        header: 'PLAZA',
        accessorKey: 'codigoPlaza',
        size: 80
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
export const expedienteColumnas = [
    {
        header: 'TIPO DE PROCESO',
        accessorKey: 'tipoProceso',
        size: 60
    },
    {
        header: 'N° EXPEDIENTE',
        accessorKey: 'numeroExpediente',
        size: 30
    },
    {
        header: 'N° DOCUMENTO',
        accessorKey: 'numeroDocumento',
        size: 30
    },
    {
        header: 'NOMBRE COMPLETO',
        accessorKey: 'nombreCompleto',
        size: 300
    },
    {
        header: 'INFORME ESCALAFONARIO',
        accessorKey: 'informeEscalafonario',
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
                    <EditarExpedienteModal row={row} />
                    <InformeEscalafonarioButton row={row} />
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