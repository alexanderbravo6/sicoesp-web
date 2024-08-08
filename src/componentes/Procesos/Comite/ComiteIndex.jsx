import React from 'react'
import ComiteTabla from '../Tabla/ComiteTabla'
import { comiteColumnas } from '@/constantes/columnas'

function ComiteIndex() {
    return (
        <>

            <section className='w-full my-4 flex items-center justify-start' >
             
            </section>
            <ComiteTabla columnas={comiteColumnas} />
        </>
    )
}

export default ComiteIndex