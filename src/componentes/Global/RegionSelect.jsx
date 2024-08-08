import React from 'react'

function RegionSelect() {
    return (
        <select id="region" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">SELECCIONAR</option>
            <option value="1">DRE</option>
            <option value="2">IESP/EESP</option>
        </select>
    )
}

export default RegionSelect