import CustomModal from "@/componentes/UI/CustomModal";
import { Button, Divider, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import InformeEscalafonarioButton from "./InformeEscalafonarioButton";

export default function RegistroExpedienteModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="primary" size="md" variant="ghost" onPress={onOpen}>
                Nuevo Expediente
            </Button>
            <CustomModal isOpen={isOpen} className={"max-w-5xl"} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex text-title flex-col gap-1">NUEVO EXPEDIENTE</ModalHeader>
                            <Divider className="mb-2" />
                            <ModalBody>
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
                                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />

                                    </div>
                                    <div className='col-span-2'>
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Región</dt>
                                        <select id="region" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="">SELECCIONAR</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                    <div className='col-span-2'>
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Provincia</dt>
                                        <select id="provincia" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="">SELECCIONAR</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                    <div className='col-span-2'>
                                        <dt className="text-xs font-medium leading-6 text-gray-900">Distrito</dt>
                                        <select id="distrito" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="">SELECCIONAR</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="px-4 mt-8 sm:px-0">
                                    <h3 class="text-base font-semibold leading-7 text-gray-900">EXPEDIENTE</h3>
                                    <p class="mt-1 max-w-2xl text-xs leading-6 text-gray-500">Deberá ingresa el código del informe escalafonario.</p>
                                </div>
                                <Divider className='mt-1 mb-4' />
                                <section className="grid gap-6 items-end grid-cols-1 md:grid-cols-3">
                                    <div className="col-span-1">
                                        <label htmlForm="´tipoProceso" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">TIPO DE PROCESO</label>
                                        <input type="text" disabled value={"DESIGNACIÓN"} id="´tipoProceso" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
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
                                        <InformeEscalafonarioButton />
                                    </div>

                                </section>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Guardar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </CustomModal>
        </>
    );
}
