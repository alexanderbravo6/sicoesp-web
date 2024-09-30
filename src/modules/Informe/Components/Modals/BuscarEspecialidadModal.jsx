'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { useUtils } from '@/shared/Hooks/useUtils';
import RegistrarFormacionProfesionalForm from '../Forms/RegistrarFormacionProfesionalForm';
import { EyeFilledIcon, EyeSlashFilledIcon } from '@/shared/Components/Icons';
import BuscarEspecialidadForm from '../Forms/BuscarEspecialidadForm';

function BuscarEspecialidadModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESMAT', 'AGR')) return null

    return (
        <>
            <Button onPress={onOpen} variant="ghost" size='md' color="primary">
                <EyeSlashFilledIcon />
                Buscar
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
                                <h1 className=" text-blue-400 ">REGISTRAR FORMACIÓN PROFESIONAL</h1>
                            </ModalHeader>
                            <BuscarEspecialidadForm onClose={onClose} />
                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default BuscarEspecialidadModal