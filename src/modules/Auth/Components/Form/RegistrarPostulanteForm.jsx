'use client'

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button, DateInput, Select, SelectItem, Spinner, button } from "@nextui-org/react";
import Link from "next/link";
import TemplateBaseAlert from "@/shared/Components/Templates/TemplateBaseAlert";
import { useUtils } from "@/shared/Hooks/useUtils";
import RegresarButton from "@/shared/Components/Buttons/RegresarButton";


const tipoProceso = [
    {
        id: 1,
        nombre: "CONTRATACIÓN DOCENTE"
    }, {
        id: 2,
        nombre: "ENCARGATURA DE DIRECTORES"
    },
    {
        id: 3,
        nombre: "DESIGNACIÓN"
    }
]

function RegistrarPostulanteForm() {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const router = useRouter();
    const { registrarPostulante } = useUtils()
    const [validate, setValidate] = useState(false);
    const [procesoSeleccionado, setProcesoSeleccionado] = useState(false);
    const [customError, setCustomError] = useState(null);
    const [errorValidation, setErrorValidation] = useState('');

    const form = handleSubmit(async (data) => {


        const response =
        {
            ...data,
            idRolFuncional: procesoSeleccionado,

        }
        console.log(response)
        return
        try {
            const response = await registrarPostulante(data)
            if (response.success === true) {
                toast.success(response.messages[0])
                onClose()
                reset()
                mutate(`personas_${pagination?.pageIndex + 1}_${JSON.stringify(query)}`)

                setErrorValidation("")
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
        <>
            <form onSubmit={form} className="max-w-xl mb-[6%]  gap-5 flex flex-col md:mx-auto mx-[10%] p-5 overflow-auto h-[60%] md:w-full w-[80%] ">
                <div className="mb-6 text-left w-full">
                    <h1 className=" font-extralight mb-3 text-3xl text-black"><strong className="font-bold">Formulario de registro</strong> para postulantes </h1>
                    <p className="font-extralight text-[#454545] ">Formulario para el registro de postulantes para los procesos de contratación docente, encargatura de directores y  designación de cargos directivos y puestos pedagógicos.</p>

                </div>
                <p className="text-gray-400 text-left w-full">Formulario</p>
                {
                    errorValidation.length === 0 ? null : (
                        <section>
                            <TemplateBaseAlert message={errorValidation} type={'errorList'} />
                        </section>
                    )
                }

                <div className=" w-full grid  grid-cols-3   gap-4 mb-3 ">
                    <div className='col-span-3 md:col-span-1'>
                        <label htmlFor="tipoDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Documento</label>
                        <select id="tipoDocumento"
                            {...register('tipoDocumento', {
                                required: {
                                    value: true,
                                    message: 'El campo tipo de documento es requerido'
                                },
                            })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">SELECCIONAR</option>
                            <option value="1">DNI</option>
                            <option value="2">CARNET DE EXTRANJERÍA</option>
                        </select>
                        {
                            errors.tipoDocumento && (
                                <span className="text-red-500 text-xs">{errors.tipoDocumento.message}</span>
                            )
                        }
                    </div>
                    <div className=' col-span-3 md:col-span-2'>
                        <label htmlFor="numeroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Número de Documento
                        </label>
                        <input
                            {...register('numeroDocumento', {
                                required: {
                                    value: true,
                                    message: 'El campo número de documento es requerido'
                                },
                            })}
                            type="text" id="numeroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {
                            errors.numeroDocumento && (
                                <span className="text-red-500 text-xs">{errors.numeroDocumento.message}</span>
                            )
                        }
                    </div>
                    <div className='col-span-3'>
                        <label htmlFor="primerApellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Apellido Paterno
                        </label>
                        <input
                            {...register('primerApellido', {
                                required: {
                                    value: true,
                                    message: 'El campo apellido paterno es requerido'
                                },
                            })}
                            type="text" id="primerApellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {
                            errors.primerApellido && (
                                <span className="text-red-500 text-xs">{errors.primerApellido.message}</span>
                            )
                        }
                    </div>
                    <div className='col-span-3'>
                        <label htmlFor="segundoApellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Apellido Materno
                        </label>
                        <input
                            {...register('segundoApellido', {
                                required: {
                                    value: true,
                                    message: 'El campo apellido materno es requerido'
                                },
                            })}
                            type="text" id="segundoApellido" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {
                            errors.segundoApellido && (
                                <span className="text-red-500 text-xs">{errors.segundoApellido.message}</span>
                            )
                        }
                    </div>
                    <div className='col-span-3'>
                        <label htmlFor="nombres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Nombres
                        </label>
                        <input
                            {...register('nombres', {
                                required: {
                                    value: true,
                                    message: 'El campo nombres es requerido'
                                },
                            })}
                            type="text" id="nombres" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {
                            errors.nombres && (
                                <span className="text-red-500 text-xs">{errors.nombres.message}</span>
                            )
                        }
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                        <input type="text" id="correo"
                            {...register('correo', {
                                required: {
                                    value: true,
                                    message: 'El campo correo es requerido'
                                },
                            })}
                            autoComplete="off"
                            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {
                            errors.correo && (
                                <span className="text-red-500 text-xs">{errors.correo.message}</span>
                            )
                        }
                    </div>
                    <div className=' col-span-3 md:col-span-1'>
                        <label htmlFor="fechaNacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento</label>
                        <input
                            {...register('fechaNacimiento', {
                                required: {
                                    value: true,
                                    message: 'El campo fecha de nacimiento es requerido'
                                },
                            })}
                            id="fechaNacimiento"
                            type="date" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {
                            errors.fechaNacimiento && (
                                <span className="text-red-500 text-xs">{errors.fechaNacimiento.message}</span>
                            )
                        }
                    </div>

                    <div className=' col-span-3 md:col-span-1'>
                        <label htmlFor="sexo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo</label>
                        <select id="sexo"
                            {...register('sexo', {
                                required: {
                                    value: true,
                                    message: 'El campo sexo es requerido'
                                },
                            })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Seleccionar</option>
                            <option value="1">Masculino</option>
                            <option value="2">Femenino</option>

                        </select>
                        {
                            errors.sexo && (
                                <span className="text-red-500 text-xs">{errors.sexo.message}</span>
                            )
                        }
                    </div>

                    <div className=' col-span-3 md:col-span-1'>
                        <label htmlFor="celular" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Celular</label>

                        <input
                            autoComplete="off"
                            {...register('celular', {
                                required: {
                                    value: true,
                                    message: 'El campo celular es requerido'
                                },
                            })}
                            id="celular"
                            type="number"
                            className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        {
                            errors.celular && (
                                <span className="text-red-500 text-xs">{errors.celular.message}</span>
                            )
                        }
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="clave" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input type="password"
                            {...register('clave', {
                                required: {
                                    value: true,
                                    message: 'El campo contraseña es requerido'
                                },
                            })}
                            id="clave" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*********" />
                        <span className='text-gray-500'>
                            La contraseña debe contener como mínimo un caracter especial (@#$%*,-.()/{ }%?¿!), una mayúscula, una minúscula, un número y una longitud entre 8 y 30 caracteres.
                        </span>
                        <br />
                        {
                            errors.clave && (
                                <span className="text-red-500 text-xs">{errors.clave.message}</span>
                            )
                        }
                    </div>
                    <div className=" col-span-3 ">
                        <label htmlFor="tipoProceso" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Proceso</label>
                        <Select
                            label=""
                            id="tipoProceso"
                            selectionMode="multiple"
                            placeholder="Seleccionar"
                            className="max-w-full"
                            labelPlacement="outside"
                            classNames={{
                                base: "max-w-full",
                                trigger: "h-12",
                            }}
                            onSelectionChange={setProcesoSeleccionado}
                        >
                            {tipoProceso.map((item) => (
                                <SelectItem key={item.id}>
                                    {item.nombre}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                </div>


                <section className=" flex w-full justify-end flex-row" >

                    {isSubmitting ? (
                        <>
                            <Button color="primary" isLoading>
                                Cargando...
                            </Button>

                        </>
                    ) :
                        (
                            <>
                                <button className="w-28   text-white hover:text-white border border-main bg-main hover:bg-secundary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2   r">
                                    Registrar
                                </button>
                            </>
                        )
                    }

                    <RegresarButton url={"/inicio-sesion"} />
                </section>

            </form>



        </>
    );

}
export default RegistrarPostulanteForm