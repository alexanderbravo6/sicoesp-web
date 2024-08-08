'use client'

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button, DateInput, Select, SelectItem, Spinner, button } from "@nextui-org/react";
import Link from "next/link";
import RegresarButton from "../UI/RegresarButton";

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
            <form onSubmit={ValidarUsuario} className="max-w-2xl mb-[6%]  gap-5 flex flex-col md:mx-auto mx-[10%] h-[80%] md:w-full w-[80%] items-center justify-center">

                <div className="mb-6 text-left w-full">
                    <h1 className=" font-extralight mb-3 text-3xl text-black"><strong className="font-bold">Formulario de registro</strong> para postulantes </h1>
                    <p className="font-extralight text-[#454545] ">Formulario para el registro de postulantes para los procesos de contratación docente, encargatura de directores y  designación de cargos directivos y puestos pedagógicos.</p>

                </div>
                <p className="text-gray-400 text-left w-full">Formulario</p>
                {
                    customError && (
                        <div className="bg-red-500 text-white p-4 text-left text-xs w-full rounded-lg mb-5">
                            {customError}
                        </div>
                    )
                }
                <div className="grid w-full gap-6 mb-6 md:grid-cols-3  items-end">
                    <div>
                        <label htmlFor="tipoDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Documento</label>
                        <select id="tipoDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main">
                            <option value="">Seleccionar</option>
                            <option value="1">D.N.I</option>
                            <option value="2">CARNET DE EXTRANJERÍA</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="nroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Documento</label>
                        <input type="text" maxLength={"12"} id="nroDocumento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main" required />
                    </div>
                    <Button onClick={() => { setValidate(!validate) }} className="bg-main" color="secondary">
                        Buscar
                    </Button>
                </div>
                {
                    validate && (
                        <>
                            <div className="grid w-full gap-3 mb-3 md:grid-cols-3">
                                <div>
                                    <label htmlFor="validate_nroDocumento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Dodcumento</label>
                                    <div className="flex items-center h-10">
                                        <p className="text-sm">
                                            {postulante.nroDocumento}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="validate_primer_apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primer Apellido</label>
                                    <div className="flex items-center h-10">
                                        <p className="text-sm">
                                            {postulante.primerApellido}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="validate_segundo_apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo Apellido</label>
                                    <div className="flex items-center h-10">
                                        <p className="text-sm">
                                            {postulante.segundoApellido}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="validate_segundo_apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
                                    <div className="flex items-center h-10">
                                        <p className="text-sm">
                                            {postulante.nombres}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="validate_segundo_apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento</label>
                                    <div className="flex items-center h-10">
                                        <p className="text-sm">
                                            {postulante.fechaNacimiento}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="validate_segundo_apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo</label>
                                    <div className="flex items-center h-10">
                                        <p className="text-sm">
                                            {postulante.sexo}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <DateInput
                                        variant="flat"
                                        label="Fecha Nacimiento"
                                        labelPlacement={"outside"}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Celular</label>
                                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label htmlFor="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                                    <input type="email" id="correo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main" required />
                                </div>
                                <div  className=" col-span-1" >
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main" placeholder="•••••••••" required />
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

                        </>
                    )
                }
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