'use client'
import React from 'react'
import { useState } from 'react';

import { ButtonSubmit } from '@/shared/Components/Form/Buttons';
import { useForm } from 'react-hook-form';
import { Button, ModalBody, ModalFooter } from '@nextui-org/react';
import { useSWRConfig } from 'swr';
import TemplateBaseAlert from '@/shared/Components/Templates/TemplateBaseAlert';
import { toast } from 'react-toastify';
import BuscarEspecialidadModal from '../Modals/BuscarEspecialidadModal';
import { InputDate, InputFile, InputText } from '@/shared/Components/Form/Inputs';

const utils = {
    "isLoading": false,
    "error": false,
    "data": {
        "gradoEstudio": [
            {
                "id": 1,
                "nombre": "ESTUDIOS DE PREGRADO"
            },
            {
                "id": 2,
                "nombre": "ESTUDIOS DE POSGRADO"
            }
        ],
        "nivelAcademico": [
            {
                "id": 1,
                "idGradoEstudio": 1,
                "nombre": "Título Profesional / Profesor"
            },
            {
                "id": 2,
                "idGradoEstudio": 1,
                "nombre": "Título Licenciado"
            },
            {
                "id": 3,
                "idGradoEstudio": 1,
                "nombre": "Bachiller"
            },
            {
                "id": 4,
                "idGradoEstudio": 2,
                "nombre": "Título de Segunda Especialidad"
            },
            {
                "id": 5,
                "idGradoEstudio": 2,
                "nombre": "Grado de Maestría"
            },
            {
                "id": 6,
                "idGradoEstudio": 2,
                "nombre": "Grado de Doctor"
            },
            {
                "id": 7,
                "idGradoEstudio": 2,
                "nombre": "Estudios Concluidos de Maestría"
            },
            {
                "id": 8,
                "idGradoEstudio": 2,
                "nombre": "Estudios Concluidos de Doctorado"
            },
            {
                "id": 9,
                "idGradoEstudio": 2,
                "nombre": "Segunda Maestría"
            }
        ],
        "tipoGradoCarrera": [
            {
                "id": 1,
                "nombre": "PROFESIONAL"
            },
            {
                "id": 2,
                "nombre": "MAESTRÍA"
            },
            {
                "id": 3,
                "nombre": "DOCTORADO"
            },
            {
                "id": 4,
                "nombre": "SEGUNDA ESPECIALIDAD"
            }
        ]

    }
}


function RegistrarFormacionProfesionalForm({ onClose }) {

    const [content, setContent] = useState('');
    const registrarEnunciado = 1
    const { register, handleSubmit, getValues, setValue, reset, formState: { errors, isSubmitting } } = useForm();
    const [idGradoEstudio, setIdGradoEstudio] = useState(null);
    const handleChange = (value) => {
        setContent(value); // Aquí el valor es el HTML generado por Quill
    };
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
                    <div className="grid md:grid-cols-3 gap-4 p-6">
                        <div className="col-span-1">
                            <label htmlFor="idGradoEstudio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grado de Estudio</label>
                            <select id="idGradoEstudio"
                                {...register('idGradoEstudio', {
                                    required: {
                                        value: true,
                                        message: 'El campo grado de estudio es requerido'
                                    },
                                })}
                                onChange={(e) => setIdGradoEstudio(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                uppercase dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                <option value="">Seleccionar</option>
                                {
                                    utils &&
                                        utils.data.isLoading === true ? <option>Cargando...</option> :
                                        utils.data.error === true ? <option>Error de carga</option> :
                                            utils.data.gradoEstudio
                                                .filter((grado) => grado.id == 2)
                                                .map((grado) => (
                                                    <option key={grado.id} value={grado.id}>{grado.nombre}</option>
                                                ))
                                }

                            </select>
                            {
                                errors.idGradoEstudio && (
                                    <span className="text-red-500 text-xs">{errors.idGradoEstudio.message}</span>
                                )
                            }
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="idNivelAcademico" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nivel Académico
                            </label>
                            <select id="idNivelAcademico"
                                {...register('idNivelAcademico', {
                                    required: {
                                        value: true,
                                        message: 'El campo nivel académico es requerido'
                                    },
                                })}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                uppercase
                                dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">Seleccionar</option>
                                {
                                    utils &&
                                        utils.data.isLoading === true ? <option>Cargando...</option> :
                                        utils.data.error === true ? <option>Error de carga</option> :
                                            utils.data.nivelAcademico
                                                .filter((nivel) => nivel.idGradoEstudio == idGradoEstudio && (nivel.id == 4 || nivel.id == 5 || nivel.id == 6))
                                                .map((grado) => (
                                                    <option key={grado.id} value={grado.id}>{grado.nombre}</option>
                                                ))
                                }
                            </select>
                            {
                                errors.idNivelAcademico && (
                                    <span className="text-red-500 text-xs">{errors.idNivelAcademico.message}</span>
                                )
                            }
                        </div>
                        <div className="col-span-3 flex items-end gap-4 justify-between">
                            <section className='w-full' >
                                <label htmlFor="idEspecialidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Especialidad
                                </label>
                                <input id="idEspecialidad"
                                    {...register('idEspecialidad', {
                                        required: {
                                            value: true,
                                            message: 'El campo especialidad es requerido'
                                        },
                                    })}
                                    className="hidden" />
                                <span className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                uppercase
                                dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                                    EDUCACIÓN FÍSICIA
                                </span>
                                {
                                    errors.idEspecialidad && (
                                        <span className="text-red-500 text-xs">{errors.idEspecialidad.message}</span>
                                    )
                                }
                            </section>
                            <BuscarEspecialidadModal />
                        </div>
                        <div className="md:col-span-3">
                            <InputText
                                label={"País"}
                                name={"pais"}
                                register={register}
                                error={errors.pais}
                            />
                        </div>
                        <div className="md:col-span-3">
                            <InputText
                                label={"Ciudad"}
                                name={"ciudad"}
                                register={register}
                                error={errors.ciudad}
                            />
                        </div>

                        <div className="md:col-span-3">
                            <InputText
                                label={"Centro de Estudios"}
                                name={"centroEstudios"}
                                register={register}
                                error={errors.centroEstudios}
                            />
                        </div>
                        <div className="col-span-1">
                            <InputDate
                                label={"Fecha de Inicio"}
                                name={"fechaInicio"}
                                register={register}
                                error={errors.fechaInicio}
                            />
                        </div>
                        <div className="col-span-1">
                            <InputDate
                                label={"Fecha de Fin"}
                                name={"fechaInicio"}
                                register={register}
                                error={errors.fechaInicio}
                            />
                        </div>
                        <div className="col-span-1">
                            <InputDate
                                label={"Fecha de Emisión"}
                                name={"fechaEmision"}
                                register={register}
                                error={errors.fechaEmision}
                            />
                        </div>
                        <div className="md:col-span-3">
                            <InputFile
                                label={"Archivo"}
                                name={"archivo"}
                                register={register}
                                error={errors.archivo}
                            />
                        </div>
                    </div>
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

export default RegistrarFormacionProfesionalForm
