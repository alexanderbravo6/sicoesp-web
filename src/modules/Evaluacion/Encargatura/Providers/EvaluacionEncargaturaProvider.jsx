'use client'
import { createContext, useContext, useState } from 'react';

const EvaluacionEncargaturaContext = createContext();

export function useEvaluacionEncargatura() {
    return useContext(EvaluacionEncargaturaContext);
}

export function EvaluacionEncargaturaProvider({ children }) {

    return (
        <EvaluacionEncargaturaContext.Provider value={{

        }}>
            {children}
        </EvaluacionEncargaturaContext.Provider>
    );
}
