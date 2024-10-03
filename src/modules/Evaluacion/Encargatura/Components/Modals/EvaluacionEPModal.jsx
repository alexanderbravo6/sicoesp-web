'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { useUtils } from '@/shared/Hooks/useUtils';
import { IconEdit } from '@/componentes/UI/Icons';

function EvaluacionEPModal({
    row
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    // if (!ValidarPermisos('GESMAT', 'AGR')) return null

    return (
        <>
            <Button isIconOnly size="sm" title='Entrevista Personal' className='border-none' variant="ghost" color="primary" onPress={onOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /><path d="M15 19l2 2l4 -4" /></svg>
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
                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default EvaluacionEPModal