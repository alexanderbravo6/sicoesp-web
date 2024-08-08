import React from 'react'
import ComiteTabla from '../Tabla/ComiteTabla'
import { comiteColumnas } from '@/constantes/columnas'
import RegistroComiteModal from './RegistroComiteModal'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

function ComiteIndex() {
 
    return (
        <>

            <section className='my-4 flex justify-end' >
                <Button

                    href="/procesos"
                    as={Link}
                    variant="solid"
                    size="md">
                    Regresar
                </Button>
            </section>
            <ComiteTabla columnas={comiteColumnas} />
        </>
    )
}

export default ComiteIndex