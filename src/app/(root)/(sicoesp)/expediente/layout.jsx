import { InformeProvider } from '@/modules/Informe/Providers/InformeProvider'
import React from 'react'

function ExpedienteLayout({ children }) {
    return (
        <>
            <InformeProvider >
                {children}
            </InformeProvider>
        </>
    )
}

export default ExpedienteLayout