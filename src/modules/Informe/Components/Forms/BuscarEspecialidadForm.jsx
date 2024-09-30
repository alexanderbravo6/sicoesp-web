import { Button, ModalBody, ModalFooter } from '@nextui-org/react'
import React, { useState } from 'react'

import EspecialidadRadioGroup from './EspecialidadRadioGroup'
import { useInforme } from '../../Providers/InformeProvider'
import { ButtonSubmit } from '@/shared/Components/Form/Buttons'

function BuscarEspecialidadForm({ onClose }) {
    const { idProgramaProfesional, setIdProgramaProfesional } = useInforme()
    return (
        <section>
            <ModalBody>
                <div className="grid md:grid-cols-1 gap-4 px-6 pt-2 pb-4">
                    <div className="col-span-1">
                        <label htmlFor="tipoGrado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tipo de Grado
                        </label>
                        <select id="tipoGrado"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                uppercase
                                dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Seleccionar</option>

                        </select>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="carrera" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Carrera
                        </label>
                        <select id="carrera"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                uppercase
                                dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Seleccionar</option>

                        </select>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="programaGeneral" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Programa General
                        </label>
                        <select id="programaGeneral"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                uppercase
                                dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Seleccionar</option>

                        </select>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="programaProfesional" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Programa Profesional
                        </label>
                        <select id="programaProfesional"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                uppercase
                                dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Seleccionar</option>
                        </select>
                    </div>
                    <Button variant="ghost" size='md' className='max-w-44' color="primary">

                        Buscar
                    </Button>
                    <EspecialidadRadioGroup onClose={onClose} />
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onPress={onClose} >
                    Seleccionar
                </Button>

                <Button color="danger" variant="flat" onPress={onClose}   >
                    Cerrar
                </Button>
            </ModalFooter>

        </section >
    )
}

export default BuscarEspecialidadForm