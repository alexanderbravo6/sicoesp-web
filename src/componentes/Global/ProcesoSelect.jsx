import React from 'react'

const ProcesoSelect = () => {
    return (
        <select id="proceso" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">SELECCIONAR</option>
            <option value="1">CONTRATACIÓN DOCENTE</option>
            <option value="2">ENCARGATURA DE DIRECTORES</option>
            <option value="3">DESIGNACIÓN DE PUESTOS PEDAGÓGICOS</option>
            <option value="4">DESIGNACIÓN DE DIRECTOR GENERAL</option>
        </select>
    )
}

export default ProcesoSelect