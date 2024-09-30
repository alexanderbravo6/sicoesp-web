
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { EyeFilledIcon, EyeSlashFilledIcon } from '../Icons'

export function InputFile({ label, name, register, error }) {
    const [fileName, setFileName] = useState(null)
    const [inputError, setInputError] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setInputError(null)

        if (file) {
            // Validar tipo de archivo
            if (file.type !== 'application/pdf') {
                setInputError('Solo se permiten archivos PDF.')
                event.target.value = ''
                return
            }

            // Validar tamaño de archivo (4MB = 4 * 1024 * 1024 bytes)
            if (file.size > 4 * 1024 * 1024) {
                setInputError('El archivo no debe superar los 4MB.')
                event.target.value = ''
                return
            }

            setFileName(file.name)
        } else {
            setFileName(null)
        }
    }

    return (

        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <p className="text-sm text-gray-600 mb-4">
                Solo se permiten archivos PDF con un tamaño máximo de 4MB.
            </p>
            <input
                {...register(name,
                    { required: `Este campo ${name} es requerido` }
                )}
                className="block w-full text-sm uppercase text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-blue-500 hover:bg-gray-100 transition duration-300 ease-in-out"
                id={name}
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
            />
            {inputError && (
                <div className="flex items-center mt-2 text-red-600" role="alert">

                    <span className="text-sm">{inputError}</span>
                </div>
            )}
            {fileName && !error && (
                <p className="mt-4 text-sm text-gray-600">
                    Archivo cargado: <span className="font-semibold">{fileName}</span>
                </p>
            )}
            {error && (
                <span className="text-red-500 text-xs">{error.message}</span>
            )}
        </>
    )
}

export const InputText = ({ label, name, value, register, error }) => {

    return (
        <>

            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            {
                value == null ?
                    <input
                        id={name}
                        type={"text"}
                        className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register(name,
                            { required: `Este campo ${name} es requerido` }
                        )}
                    />
                    :
                    <input
                        id={name}
                        type={"text"}
                        defaultValue={value}
                        className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register(name,
                            { required: `Este campo ${name} es requerido` }
                        )}
                    />
            }

            {error && (
                <span className="text-red-500 text-xs">{error.message}</span>
            )}
        </>

    );
};

export const InputDate = ({ label, name, register, value, error }) => {

    return (

        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <div className="relative max-w-sm">

                {
                    value == null ?
                        (
                            <>
                                <input
                                    id={name}
                                    {...register(name,
                                        { required: `Este campo ${name} es requerido` }
                                    )}
                                    type="date"
                                    className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"

                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                <input
                                    id={name}
                                    {...register(name,
                                        { required: `Este campo ${name} es requerido` }
                                    )}
                                    defaultValue={value}
                                    type="date"
                                    className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"

                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                            </>
                        )

                }

            </div>
            {error && (
                <span className="text-red-500 text-xs">{error.message}</span>
            )}
        </>

    );
};


export const ProgramasInput = ({ value, setValue }) => {
    const { data: session } = useSession()
    const programas = FetchProgramasByInstitucion(session?.user?.idInstitucionActiva)

    return (
        <>
            <label htmlFor="programas" className="block mb-2 text-xs font-medium text-gray-900 ">PROGRAMAS</label>
            <select id="programas" defaultValue={value}
                onChange={(e) => setValue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5  ">
                {programas && programas.isLoading ? (
                    <option value="0">Cargando...</option>
                ) : (
                    <>
                        <option value="0">Seleccionar</option>
                        {
                            programas?.data?.data.map(programa => (
                                <option key={programa.ID} value={programa.ID}> {programa.Programa}</option>
                            ))
                        }
                    </>
                )
                }
            </select>
        </>
    )
}
export const PassworInput = ({ value, register }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <div className='flex gap-3'>
                <input type={isVisible ? "text" : "password"}
                    {...register('clave', {

                        required: {
                            value: true,
                            message: 'El campo contraseña es requerido'
                        },
                    })}
                    id="contraseña" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={value} placeholder="*********" required />
                <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                    {isVisible ? (
                        <EyeSlashFilledIcon />
                    ) : (
                        <EyeFilledIcon />
                    )}
                </button>
            </div>
        </>
    )
}
export const CargosInput = ({ value, setValue }) => {
    return (
        <>
            <label htmlFor="ciclos" className="block mb-2 text-xs font-medium text-gray-900 ">CICLO</label>
            <select id="ciclos" defaultValue={value}
                onChange={(e) => setValue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5  ">
                <option value="0">Seleccionar</option>
                {
                    Ciclos.map(ciclo => (
                        <option key={ciclo.id} value={ciclo.id}> {ciclo.nombre}</option>
                    ))
                }
            </select>
        </>
    )
}
