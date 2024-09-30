import { Button, Checkbox, Divider } from '@nextui-org/react'
import React, { useState } from 'react'

function ComiteForm({ disabled }) {
    const [declaracionConfirmada, setDeclaracionConfirmada] = useState(false);

    return (
        <>
            <div className="max-w-md mb-4 ">
                <div className="space-y-1">
                    <h4 className="text-medium  font-medium">DATOS PERSONALES</h4>
                </div>
            </div>
            <section className='grid grid-cols-1 gap-3 items-end  md:grid-cols-3'>
                <div>
                    <label htmlForm="tipoDocumento" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">TIPO DE DOCUMENTO</label>

                    <select id="tipoDocumento" disabled={disabled} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">SEECCIONAR</option>
                        <option value="1">D.N.I</option>
                        <option value="2">CARNET DE EXTRANJERIA</option>
                    </select>
                </div>
                <div>
                    <label htmlForm="numeroDocumento" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Número de Documento</label>
                    <input type="text" disabled={disabled} id="numeroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <Button color="primary" variant="solid">
                        Buscar
                    </Button>
                </div>
            </section >
            <section className='grid py-3 grid-cols-1 gap-3  md:grid-cols-4'>
                <div>
                    <label htmlForm="tipoDocumento" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">DOCUMENTO</label>
                    <p>
                        DNI: 73632374
                    </p>
                </div>
                <div>
                    <label htmlForm="tipoDocumento" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">PRIMER APELLIDO</label>
                    <p>
                        MOSCOL
                    </p>
                </div>
                <div>
                    <label htmlForm="tipoDocumento" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">SEGUNDO APELLIDO</label>
                    <p>
                        BRAVO
                    </p>
                </div>
                <div>
                    <label htmlForm="tipoDocumento" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">NOMBRES</label>
                    <p>
                        BRYAN ALEXANDER
                    </p>
                </div>
                <div>
                    <label htmlForm="tipoDocumento" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">FECHA DE NACIMIENTO</label>
                    <p>
                        BRYAN ALEXANDER
                    </p>
                </div>
                <div>
                    <label htmlForm="tipoDocumento" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">SEXO</label>
                    <p>
                        FEMENINO
                    </p>
                </div>
            </section>
            <section className='grid py-3 grid-cols-1 gap-3  md:grid-cols-2'>
                <div>
                    <label htmlForm="celular" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">CELULAR</label>
                    <input type="text" disabled={disabled} id="celular" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label htmlForm="correo" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">CORREO ELECTRÓNICO</label>
                    <input type="text" disabled={disabled} id="correo" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
            </section>
            <div className="flex flex-col gap-2">
                <Checkbox isDisabled={disabled} className='text-gray-500' isSelected={declaracionConfirmada} onValueChange={setDeclaracionConfirmada}>
                    Se ha verificado que la persona no cuenta con impedimento vigente para ser parte del comité según norma técnica <span className='text-red-700'>*</span>
                </Checkbox>
            </div>
            <Divider className='my-4' />
            <div className="max-w-md  ">
                <div className="space-y-1">
                    <h4 className="text-medium font-medium">DATOS DEL MIEMBRO DE COMITÉ</h4>
                </div>
            </div>
            <section className='grid py-3 grid-cols-1 gap-6  md:grid-cols-2'>

                <div>
                    <label htmlForm="tipoMiembro" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">TIPO DE MIEMBRO</label>
                    <select id="tipoMiembro" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">SELECCIONAR</option>
                        <option value="1">TITULAR</option>
                        <option value="2">SUPLENTE</option>
                    </select>
                </div>
                <div>
                    <label htmlForm="cargoComite" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">CARGO EN EL COMITÉ</label>
                    <select id="cargoComite" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">SELECCIONAR</option>
                        <option value="1">PRESIDENTE</option>
                        <option value="2">MIEMBRO</option>
                    </select>
                </div>

            </section>
        </>
    )
}

export default ComiteForm