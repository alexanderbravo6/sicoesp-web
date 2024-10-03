'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { useUtils } from '@/shared/Hooks/useUtils';
import ConvocatoriaTable from '../Tables/ConvocatoriaTable';
function SeleccionarConvocatoriaModal() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESMAT', 'AGR')) return null

    return (
        <>
            <Button onPress={onOpen} className='mb-4' size='md' color="primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Registrar
            </Button>
            <TemplateBaseModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className={'max-w-5xl '}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col  gap-1">
                                <h1 className=" text-blue-400 ">LISTA DE CONVOCATORIAS</h1>
                            </ModalHeader>
                            <section className='p-4'>
                                <ConvocatoriaTable />
                            </section>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}   >
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default SeleccionarConvocatoriaModal