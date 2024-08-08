import React from 'react'

const CronogramaEncargatura = () => {
    return (
        <>
                 <table className=" w-full font-normal my-4 ">
                <thead className=" text-left text-[13px] text-gray-700 uppercase bg-gray-100 ">
                    <tr>
                        <th className="p-2"> N°</th>
                        <th className="p-2">ETAPA</th>
                        <th className="p-2">ACTIVIDADES</th>
                        <th className="p-2">DURACIÓN</th>
                        <th className="p-2">REPONSABLES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white text-[13px] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" >
                        <td className="p-2">1</td>
                        <td className="p-2">ACTIVIDADES PREVIAS A LA EVALUACIÓN</td>
                        <td className="p-2">CONVOCATORIA</td>
                        <td className="p-2">4</td>
                        <td className="p-2">MINEDU</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CronogramaEncargatura