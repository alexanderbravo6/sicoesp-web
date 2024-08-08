
import { Skeleton } from '@nextui-org/react';
import React from 'react'

const periodos = {
    error: false,
    isLoading: false,
    data: {
        data: [
            {
                id: 1,
                nombre: '2025',
            },
            {
                id: 2,
                nombre: '2026',
            },
            {
                id: 3,
                nombre: '2027',
            },
        ]
    }
}

const PeriodoAcademicoSelect = () => {
    if (periodos.error) return <Skeleton className="h-10 w-28 rounded-lg" />
    if (periodos.isLoading) return <Skeleton className="h-10 w-40 rounded-lg" />


    return (

        <select  defaultValue={1} id='periodo_select_global' className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 ">
            {
                periodos &&
                periodos?.data.data.map(periodo => (
                    <option key={periodo.id} value={periodo.id}>{periodo.nombre}</option>
                ))
            }
        </select>
    )
}

export default PeriodoAcademicoSelect