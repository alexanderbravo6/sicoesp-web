'use client'
import { createContext, useContext, useState } from 'react';

const PostulacionContext = createContext();

export function usePostulacion() {
    return useContext(PostulacionContext);
}

export function PostulacionProvider({ children }) {
    const [convocatoriasSeleccionadas, setConvocatoriasSeleccionadas] = useState()

    return (
        <PostulacionContext.Provider value={{
            convocatoriasSeleccionadas,
            setConvocatoriasSeleccionadas
        }}>
            {children}
        </PostulacionContext.Provider>
    );
}
