import React from 'react'


import ExpedienteTable from './Components/Tables/ExpedienteTable'
import RegistrarExpedienteModal from './Components/Modals/RegistrarExpedienteModal'


function ExpedienteIndex() {
    return (
        <>
            <section className='my-4'>
                <RegistrarExpedienteModal />
            </section>
            <ExpedienteTable />
        </>
    )
}

export default ExpedienteIndex