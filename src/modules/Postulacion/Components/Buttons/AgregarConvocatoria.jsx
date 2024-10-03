import React from 'react'
import { usePostulacion } from '../../Providers/PostulacionProvider'
import { Button } from '@nextui-org/react'

function AgregarConvocatoria({ row }) {
    const { setConvocatoriasSeleccionadas, convocatoriasSeleccionadas } = usePostulacion()
    const handleSeleccion = () => {
        setConvocatoriasSeleccionadas(
            (prev) => {
                if (prev) {
                    return [...prev, row]
                } else {
                    return [row]
                }
            }
        )
    }
    return (
        <Button isIconOnly onClick={handleSeleccion} color="success" size="sm" title='Agregar' variant="ghost" aria-label="Like">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        </Button>
    )
}

export default AgregarConvocatoria