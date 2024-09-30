import DescargarArchivoButton from "../Components/Buttons/DescargarArchivoButton"
import EliminarDocumentoObligatorioButton from "../Components/Buttons/EliminarDocumentoObligatorioButton"
import EliminarFormacionProfesionalButton from "../Components/Buttons/EliminarFormacionProfesionalButton"
import ActualizarFormacionProfesionalModal from "../Components/Modals/ActualizarFormacionProfesionalModal"


export const FormacionProfesionalColumns = [
    {
        header: 'NIVEL ACADÉMICO',
        accessorKey: 'nivelAcademico',
        size: 50
    },
    {
        header: 'CENTRO DE ESTUDIOS',
        accessorKey: 'centroEstudios',
        size: 50
    },
    {
        header: 'ESPECIALIDAD',
        accessorKey: 'especialidad',
        size: 100
    },
    {
        header: 'FECHA INICIO',
        accessorKey: 'fechaInicio',
        size: 50
    },
    {
        header: 'FECHA FIN',
        accessorKey: 'fechaFin',
        size: 50
    },
    {
        header: 'LUGAR',
        accessorKey: 'ciudad',
        size: 50
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <DescargarArchivoButton id={row.original.idArchivo} />
                    <ActualizarFormacionProfesionalModal row={row.original} />
                    <EliminarFormacionProfesionalButton id={row.original.id} />
                </div>
            </>
        ),
    },
]
export const ExperienciaLaboralColumns = [
    {
        header: 'TIPO',
        accessorKey: 'tipo',
        size: 50
    },
    {
        header: 'INSTITUCIÓN',
        accessorKey: 'institucion',
        size: 50
    },
    {
        header: 'CARGO',
        accessorKey: 'cargo',
        size: 100
    },
    {
        header: 'FECHA INICIO',
        accessorKey: 'fechaInicio',
        size: 50
    },
    {
        header: 'FECHA FIN',
        accessorKey: 'fechaFin',
        size: 50
    },
    {
        header: 'TIEMPO EN EL CARGO',
        accessorKey: 'tiempo',
        size: 50
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <DescargarArchivoButton id={row.original.idArchivo} />
                    <ActualizarFormacionProfesionalModal row={row.original} />
                    <EliminarFormacionProfesionalButton id={row.original.id} />
                </div>
            </>
        ),
    },
]
export const EspecializacionesColumns = [
    {
        header: 'CURSO/PROGRAMA',
        accessorKey: 'programa',
        size: 50
    },
    {
        header: 'CENTRO DE ESTUDIOS',
        accessorKey: 'centroEstudios',
        size: 50
    },
    {
        header: 'TEMA',
        accessorKey: 'tema',
        size: 100
    },
    {
        header: 'FECHA INICIO',
        accessorKey: 'fechaInicio',
        size: 50
    },
    {
        header: 'FECHA FIN',
        accessorKey: 'fechaFin',
        size: 50
    },
    {
        header: 'HORAS',
        accessorKey: 'horas',
        size: 50
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <DescargarArchivoButton id={row.original.idArchivo} />
                    <ActualizarFormacionProfesionalModal row={row.original} />
                    <EliminarFormacionProfesionalButton id={row.original.id} />
                </div>
            </>
        ),
    },
]
export const HerramientasVirtualesColumns = [
    {
        header: 'CURSO',
        accessorKey: 'curso',
        size: 300
    },
    {
        header: 'NIVEL',
        accessorKey: 'nivel',
        size: 100
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <DescargarArchivoButton id={row.original.idArchivo} />
                    <ActualizarFormacionProfesionalModal row={row.original} />
                    <EliminarFormacionProfesionalButton id={row.original.id} />
                </div>
            </>
        ),
    },
]
export const ConocimientoOfimaticaColumns = [
    {
        header: 'CURSO',
        accessorKey: 'curso',
        size: 300
    },
    {
        header: 'NIVEL',
        accessorKey: 'nivel',
        size: 100
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <DescargarArchivoButton id={row.original.idArchivo} />
                    <ActualizarFormacionProfesionalModal row={row.original} />
                    <EliminarFormacionProfesionalButton id={row.original.id} />
                </div>
            </>
        ),
    },
]
export const EventosAcademicosColumns = [
    {
        header: 'INSTITUCIÓN',
        accessorKey: 'institucion',
        size: 200
    },
    {
        header: 'FECHA DE PARTICIPACIÓN',
        accessorKey: 'fechaParticipacion',
        size: 50
    },
    {
        header: 'HORAS',
        accessorKey: 'horas',
        size: 50
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <DescargarArchivoButton id={row.original.idArchivo} />
                    <ActualizarFormacionProfesionalModal row={row.original} />
                    <EliminarFormacionProfesionalButton id={row.original.id} />
                </div>
            </>
        ),
    },
]
export const PublicacionColumns = [
    {
        header: 'TIPO DE PUBLICACIÓN',
        accessorKey: 'tipo',
        size: 200
    },
    {
        header: 'TÍTULO',
        accessorKey: 'titulo',
        size: 100
    },
    {
        header: 'PARTICIPACIÓN',
        accessorKey: 'participacion',
        size: 100
    },
    {
        header: 'FECHA DE PUBLICACIÓN',
        accessorKey: 'fecha',
        size: 100
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <DescargarArchivoButton id={row.original.idArchivo} />
                    <ActualizarFormacionProfesionalModal row={row.original} />
                    <EliminarFormacionProfesionalButton id={row.original.id} />
                </div>
            </>
        ),
    },
]
export const ReconocimientosColumns = [
    {
        header: 'ACREDITACIÓN',
        accessorKey: 'acreditacion',
        size: 200
    },
    {
        header: 'ENTIDAD/EMPRESA',
        accessorKey: 'empresa',
        size: 100
    },
    {
        header: 'DESCRIPCIÓN',
        accessorKey: 'descripcion',
        size: 100
    },
    {
        header: 'FECHA DE RECONOCIMIENTO',
        accessorKey: 'fecha',
        size: 100
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <DescargarArchivoButton id={row.original.idArchivo} />
                    <ActualizarFormacionProfesionalModal row={row.original} />
                    <EliminarFormacionProfesionalButton id={row.original.id} />
                </div>
            </>
        ),
    },
]

export const DocumentoObligatorioColumns = [
    {
        header: 'NOMBRE DE DOCUMENTO',
        accessorKey: 'nombre',
        size: 200
    },
    {
        header: 'FECHA DE REGISTRO',
        accessorKey: 'fecha',
        size: 200
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <DescargarArchivoButton id={row.original.idArchivo} />
                    <EliminarDocumentoObligatorioButton id={row.original.id} />
                </div>
            </>
        ),
    },
]

