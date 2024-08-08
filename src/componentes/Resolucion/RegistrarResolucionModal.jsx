import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Divider, useDisclosure } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { IconProyectoResolucion, IconSearch } from '@/componentes/UI/Icons';
import ProcesoSelect from '../Global/ProcesoSelect';

const RegistrarResolucionModal = ({ row }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const handleBuscarProyecto = () => {
        console.log('Buscar Proyecto')
        setMostrarDetalle(!mostrarDetalle)
    }
    return (
        <>
            <Button size="md" variant="ghost" color="primary" className='my-4' onPress={onOpen}>
                Registrar Resolución
            </Button>
            <Modal
                className="max-w-5xl mt-7 max-h-[850px] overflow-auto "
                backdrop={"blur"}
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">REGISTRAR NUEVA RESOLUCIÓN</ModalHeader>
                            <ModalBody>
                                <div className="max-w-lg mb-4 ">
                                    <div className="space-y-1">
                                        <h4 className="text-medium font-medium">INFORMACIÓN DE PROCESO</h4>
                                        <p className="text-small text-default-400">Especificar información sobre el proceso que hace referencia la resolución.</p>
                                    </div>
                                </div>
                                <section className='grid sm:grid-cols-3 gap-3 justify-center items-end grid-cols-1' >

                                   
                                    <div>
                                        <label htmlFor="asunto" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">GRUPO ACCIÓN</label>
                                        <select id="asunto" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="">SELECCIONAR</option>
                                            <option value="1">COMITÉ</option>
                                            <option value="2">RESULTADOS</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="asunto" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">ACCIÓN</label>
                                        <select id="asunto" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="">SELECCIONAR</option>
                                            <option value="1">CONFORMACIÓN DE COMITÉ</option>
                                            <option value="2">RESULTADOS FINALES</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="proceso" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">MOTIVO DE ACCIÓN</label>
                                        <ProcesoSelect />
                                    </div>
                                </section>



                                <Divider className="my-4" />
                                <div className="max-w-lg mb-4 ">
                                    <div className="space-y-1">
                                        <h4 className="text-medium font-medium">Datos de Resolución</h4>
                                        <p className="text-small text-default-400">Información que conformará parte de la resolución.</p>
                                    </div>
                                </div>
                                <section className='grid sm:grid-cols-3 gap-3 grid-cols-1' >
                                <div className='col-span-1' >
                                        <label htmlFor="tipoResolucion" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">TIPO DE RESOLUCIÓN</label>
                                        <select id="tipoResolucion" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="">SELECCIONAR</option>
                                            <option value="1">RESOLUCIÓN DIRECTORAL REGIONAL</option>
                                        </select>
                                    </div>
                                    <div className='col-span-1' >
                                        <label htmlFor="fechaEmision" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Fecha de Resolución</label>
                                        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className='col-span-1' >
                                        <label htmlFor="folios" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Folios</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="folios" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Resolución</label>
                                        <input className="block w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none" type="file" />
                                    </div>
                                </section>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                    </svg>

                                    Registrar Informe
                                </Button>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}

export default RegistrarResolucionModal