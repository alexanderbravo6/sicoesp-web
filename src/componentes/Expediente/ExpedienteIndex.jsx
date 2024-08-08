import React from 'react'
import ExpedienteTabla from './Tablas/ExpedienteTabla'
import { expedienteColumnas } from '@/constantes/columnas'
import RegistroExpedienteModal from './RegistroExpedienteModal'

function ExpedienteIndex() {
    return (
        <>
            <section className='my-4'>
                <RegistroExpedienteModal />
            </section>
            <ExpedienteTabla columnas={expedienteColumnas} />
        </>
    )
}

export default ExpedienteIndex