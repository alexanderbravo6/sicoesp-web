import React from 'react'
import { miembroComiteColumnas } from '@/constantes/columnas'
import RegistroComiteModal from './RegistroComiteModal'
import MiembroComiteTabla from '../Tabla/MiembroComiteTabla'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function MiembroComiteIndex() {
    const router = useRouter()
  

    return (
        <>

            <section className='w-full my-4 flex items-center justify-between' >
                <RegistroComiteModal />
                <Button
                    onClick={() => router.back()}
                    variant="solid"
                    size="md">
                    Regresar
                </Button>
            </section>
            <MiembroComiteTabla columnas={miembroComiteColumnas} />
        </>
    )
}

export default MiembroComiteIndex