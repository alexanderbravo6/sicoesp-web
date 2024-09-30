'use client'
import React from 'react'
import { useState } from 'react';
import { ButtonSubmit } from '@/shared/Components/Form/Buttons';
import { useForm } from 'react-hook-form';
import { Button, Divider, ModalBody, ModalFooter } from '@nextui-org/react';
import { useSWRConfig } from 'swr';
import TemplateBaseAlert from '@/shared/Components/Templates/TemplateBaseAlert';
import { toast } from 'react-toastify';
import InformeResumen from './InformeResumen';


function RegistrarExpedienteForm({ onClose }) {

    const [content, setContent] = useState('');
    const registrarEnunciado = 1
    const [tipoProceso, SetTipoProceso] = useState(0)
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();


    const [errorValidation, setErrorValidation] = useState('');
    const { mutate } = useSWRConfig()

    const form = handleSubmit(async (data) => {
        console.log(data)
        return

        const request = {
            ...data,
            contenido: content
        }

        try {
            const response = await registrarEnunciado(request)

            if (response.success === true) {
                setErrorValidation([])
                mutate(`enunciados`,
                    // Aquí se actualiza la data
                    (res) => {

                        return { ...res, data: [...res.data, response.data] }
                    }
                    , false
                )
                onClose()
                toast.success(response.messages[0])
            } else {

                if (response.errors) {
                    const nuevosErrores = Object.values(response.errors).flat();
                    setErrorValidation(nuevosErrores)
                }
                if (response.validations) {
                    const nuevosErrores = Object.values(response.validations).flat();
                    setErrorValidation(nuevosErrores)
                }
            }
        } catch (error) {
            console.log(error)
        }
    })
    return (
        <section>
            <form onSubmit={form}>
                <ModalBody>
                    {
                        errorValidation.length === 0 ? null : (
                            <section>
                                <TemplateBaseAlert message={errorValidation} type={'errorList'} />
                            </section>
                        )
                    }
                    <div class="px-4  sm:px-0">
                        <h3 class="text-base font-semibold leading-7 text-gray-900">DATOS PERSONALES</h3>
                        <p class="mt-1 max-w-2xl text-xs leading-6 text-gray-500">Información personal del postulante.</p>
                    </div>
                    <Divider className='mt-1 mb-4' />
                    <div className='grid md:grid-cols-8 grid-cols-1 gap-6' >
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">DNI</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">73632374</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Nombres</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Bryan Alexander </dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Apellido Materno</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Moscol </dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Apellido Paterno</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Bravo</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Fecha de Nacimiento</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">09/01/2024</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Teléfono Celular</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">942417725</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Correo Electrónico</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">bryanalexandermoscolbravo@gmail.com</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Sexo</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Masculino</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Dirección</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Asoc. Residencial Montecarlos Mz. C. LT 10
                            </dd>
                        </div>

                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Región</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Lima
                            </dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Provincia</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Lima
                            </dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-xs font-medium leading-6 text-gray-900">Distrito</dt>
                            <dd className="mt-1 text-xs leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                San Martin de Porres
                            </dd>
                        </div>
                    </div>
                    <div class="px-4 mt-8 sm:px-0">
                        <h3 class="text-base font-semibold leading-7 text-gray-900">EXPEDIENTE</h3>
                        <p class="mt-1 max-w-2xl text-xs leading-6 text-gray-500">Deberá ingresa el código del informe escalafonario.</p>
                    </div>
                    <Divider className='mt-1 mb-4' />
                    <section >
                        <label htmlForm="´tipoProceso" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">TIPO DE PROCESO</label>
                        <select id="tipoProceso"
                            onChange={(e) => SetTipoProceso(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">SELECCIONAR</option>
                            <option value="1">CONTRATACIÓN</option>
                            <option value="2">ENCARGATURA DIRECTOR</option>
                            <option value="3">DESIGNACIÓN DIRECTOR</option>
                            <option value="4">DESIGNACIÓN PUESTOS DE GESTIÓN PEDAGÓGICA</option>
                        </select>
                    </section>
                    {
                        tipoProceso == 3 || tipoProceso == 4 ?
                            (
                                <section className="grid gap-6 items-end grid-cols-1 md:grid-cols-3">
                                    <div className="col-span-1">
                                        <label htmlForm="informeEscalafonario" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">N° INFORME ESCALAFONARIO</label>
                                        <input type="text" id="informeEscalafonario" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className="col-span-1">
                                        <Button color="primary">
                                            BUSCAR
                                        </Button>
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlForm="informeEscalafonario" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">PREVISUALIZACIÓN</label>

                                    </div>
                                </section>
                            )
                            :
                            <InformeResumen />
                    }
                </ModalBody>
                <ModalFooter>
                    <ButtonSubmit label="Registrar" isSubmitting={isSubmitting} />
                    <Button color="danger" variant="flat" onPress={onClose}   >
                        Cerrar
                    </Button>
                </ModalFooter>
            </form>
        </section >
    )

}

export default RegistrarExpedienteForm
