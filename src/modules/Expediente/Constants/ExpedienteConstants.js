import DescargarArchivoButton from "@/shared/Components/Buttons/DescargarArchivoButton";

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
                    <DescargarArchivoButton id={row.original.idArchivo} />
                </div>
            </>
        ),
    },
]
