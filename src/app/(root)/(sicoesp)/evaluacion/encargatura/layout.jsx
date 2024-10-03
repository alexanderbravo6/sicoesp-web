
import { EvaluacionEncargaturaProvider } from '@/modules/Evaluacion/Encargatura/Providers/EvaluacionEncargaturaProvider'
import React from 'react'

function EvaluacionEncargatura({ children }) {
    return (
        <>
            <EvaluacionEncargaturaProvider >
                {children}
            </EvaluacionEncargaturaProvider>
        </>
    )
}

export default EvaluacionEncargatura