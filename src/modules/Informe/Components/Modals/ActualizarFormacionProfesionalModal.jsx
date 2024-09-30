'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { useUtils } from '@/shared/Hooks/useUtils';
import RegistrarFormacionProfesionalForm from '../Forms/RegistrarFormacionProfesionalForm';
import ActualizarFormacionProfesionalForm from '../Forms/ActualizarFormacionProfesionalForm';
import { IconEdit } from '@/componentes/UI/Icons';

function ActualizarFormacionProfesionalModal({
    row
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    // if (!ValidarPermisos('GESMAT', 'AGR')) return null

    return (
        <>
            <Button isIconOnly size="sm" title='Eliminar' className='border-none' variant="ghost" color="success" onPress={onOpen}>
                <IconEdit />
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
                                <h1 className=" text-blue-400 ">ACTUALIZAR FORMACIÓN PROFESIONAL</h1>
                            </ModalHeader>
                            <ActualizarFormacionProfesionalForm onClose={onClose} row={row} />
                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default ActualizarFormacionProfesionalModal