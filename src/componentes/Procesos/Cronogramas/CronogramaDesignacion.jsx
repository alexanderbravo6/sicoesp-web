import React from 'react'

const CronogramaDesignacion = () => {
    return (
        <>
            <table className=" w-full font-normal my-4 ">
                <thead className=" text-left text-[13px] text-gray-700 uppercase bg-gray-100 ">
                    <tr>
                        <th className="p-2"> N°</th>
                        <th className="p-2">ETAPA</th>
                        <th className="p-2">ACTIVIDADES</th>
                        <th className="p-2 w-2">DURACIÓN <br /> (DÍAS HÁBILES)</th>
                        <th className="p-2">REPONSABLES</th>
                        <th className="p-2">INICIO</th>
                        <th className="p-2">FIN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white text-[13px] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" >
                        <td className="p-2">1</td>
                        <td rowSpan={6} className="p-2">ACTIVIDADES PREVIA A LA EVALUACIÓN</td>
                        <td className="p-2">CONVOCATORIA</td>
                        <td className="p-2">4</td>
                        <td className="p-2">MINEDU</td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                    </tr>
                    <tr className="odd:bg-white text-[13px] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" >
                        <td className="p-2">2</td>

                        <td className="p-2">PUBLICACIÓN DE PLAZAS VACANTES</td>
                        <td className="p-2">4</td>
                        <td className="p-2">MINEDU</td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                    </tr>
                    <tr className="odd:bg-white text-[13px] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" >
                        <td className="p-2">3</td>

                        <td className="p-2">INSCRIPCIÓN DE POSTULANTES A TRAVÉS DEL FORMULARIO VIRTUAL</td>
                        <td className="p-2">4</td>
                        <td className="p-2">MINEDU</td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                    </tr>
                    <tr className="odd:bg-white text-[13px] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" >
                        <td className="p-2">4</td>

                        <td className="p-2">EVALUACIÓN DE EXPEDIENTES VIRTUALES Y PUBLICACIÓN DE APTOS</td>
                        <td className="p-2">4</td>
                        <td className="p-2">MINEDU</td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                    </tr>
                    <tr className="odd:bg-white text-[13px] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" >
                        <td className="p-2">4</td>

                        <td className="p-2">PRESENTACIÓN DE RECLAMOS</td>
                        <td className="p-2">4</td>
                        <td className="p-2">MINEDU</td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                    </tr>
                    <tr className="odd:bg-white text-[13px] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" >
                        <td className="p-2">4</td>

                        <td className="p-2">PRESENTACIÓN DE RECLAMOS</td>
                        <td className="p-2">4</td>
                        <td className="p-2">MINEDU</td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                        <td className="p-2"> <input type="date" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default CronogramaDesignacion