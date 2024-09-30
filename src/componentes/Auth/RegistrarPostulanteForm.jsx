'use client'

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button, DateInput, Select, SelectItem, Spinner, button } from "@nextui-org/react";
import Link from "next/link";
import RegresarButton from "../UI/RegresarButton";
import TemplateBaseAlert from "@/shared/Components/Templates/TemplateBaseAlert";

const postulante = {
    tipoDocumento: 1,
    nroDocumento: 73632374,
    primerApellido: "MOSCOL",
    segundoApellido: "BRAVO",
    nombres: "BRYAN ALEXANDER",
    fechaNacimiento: "06-12-1998",
    sexo: "FEMENINO",
}
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

function RegistroPostulanteForm() {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const router = useRouter();
    const [validate, setValidate] = useState(false);
    const [procesoSeleccionado, setProcesoSeleccionado] = useState(false);
    const [customError, setCustomError] = useState(null);
    const [errorValidation, setErrorValidation] = useState('');

    const ValidarUsuario = handleSubmit(async (data) => {

        const res = await signIn('credentials', {
            redirect: false,
            name: data.name,
            password: data.password,
        });

        if (res.error) {

            setCustomError(res.error)
        }

    })

    return (
        <>
            <form onSubmit={ValidarUsuario} className="max-w-xl mb-[6%]  gap-5 flex flex-col md:mx-auto mx-[10%] h-[80%] md:w-full w-[80%] ">
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

                <div className="grid w-full gap-3 mb-3 md:grid-cols-3">
                    <div className='col-span-1'>
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
                            <option value="1">ACTIVO</option>
                            <option value="2">INACTIVO</option>
                        </select>
                        {
                            errors.tipoDocumento && (
                                <span className="text-red-500 text-xs">{errors.tipoDocumento.message}</span>
                            )
                        }
                    </div>
                    <div className='col-span-2'>
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
                    <div className='col-span-2'>
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
                    <div className='col-span-2'>
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
                    <div className='col-span-2'>
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
                    <div className='col-span-1'>
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
                    <div className="sm:col-span-1">
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
                    <div className="sm:col-span-2">
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
                    <div className="sm:col-span-2">
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
                    <div className="sm:col-span-3">
                        <label htmlFor="contraseña" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
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
                    <div className=" col-span-2 ">
                        <Select
                            label="Tipo de Procesos"
                            selectionMode="multiple"
                            placeholder="Seleccionar"
                            className="max-w-xs"
                            labelPlacement="outside"
                            classNames={{
                                base: "max-w-xs",
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

                    {

                        isSubmitting ?
                            <button
                                disabled={isSubmitting}
                                className="w-28 disabled:opacity-75  text-white border border-main bg-main  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                            >
                                <Spinner color="default" size="sm" />
                            </button>
                            :

                            <Link href="/auth/inicio-sesion"
                                disabled={isSubmitting}
                                className="w-28   text-white hover:text-white border border-main bg-main hover:bg-secundary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2    "
                            >
                                Registrar
                            </Link>
                    }
                    <RegresarButton url={"/auth/inicio-sesion"} />
                </section>

            </form>



        </>
    );

}
export default RegistroPostulanteForm