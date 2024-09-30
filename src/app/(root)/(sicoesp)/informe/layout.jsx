import { InformeProvider } from '@/modules/Informe/Providers/InformeProvider'
import React from 'react'

function InformeLayout({ children }) {
    return (
        <>
            <InformeProvider >
                {children}
            </InformeProvider>
        </>
    )
}

export default InformeLayout