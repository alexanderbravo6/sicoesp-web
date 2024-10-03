import AgregarConvocatoria from "../Components/Buttons/AgregarConvocatoria";

export const ConvocatoriaColumns = [
    {
        header: 'PROCESO',
        accessorKey: 'nombreProceso',
        size: 100
    },
    {
        header: 'CONVOCATORIA',
        accessorKey: 'codigoConvocatoria',
        size: 100
    },
    {
        header: 'REGIÓN',
        accessorKey: 'region',
        size: 30
    },
    {
        header: 'CÓDIGO MODULAR',
        accessorKey: 'codigoModular',
        size: 30
    },
    {
        header: 'INSTITUCIÓN',
        accessorKey: 'institucion',
        size: 150
    },
    {
        header: 'N° CONVOCATORIA',
        accessorKey: 'numeroConvocatoria',
        size: 60
    },
    {
        header: 'ACCIONES',
        size: 50,
        cell: ({ row }) => (
            <>
                <div className='flex gap-2  items-center '>
                    <AgregarConvocatoria row={row.original} />
                </div>
            </>
        ),
    },
]