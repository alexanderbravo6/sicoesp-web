'use client'
import { createContext, useContext, useState } from 'react';

const InformeContext = createContext();

export function useInforme() {
    return useContext(InformeContext);
}

export function InformeProvider({ children }) {
    const [idProgramaProfesional, setIdProgramaProfesional] = useState(null)
    const [isOpenDO, SetIsOpenDO] = useState(true)
    return (
        <InformeContext.Provider value={{
            idProgramaProfesional,
            setIdProgramaProfesional,
            SetIsOpenDO,
            isOpenDO
        }}>
            {children}
        </InformeContext.Provider>
    );
}
