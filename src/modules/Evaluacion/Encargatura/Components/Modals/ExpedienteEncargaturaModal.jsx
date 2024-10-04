'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { useUtils } from '@/shared/Hooks/useUtils';
import { IconEdit } from '@/componentes/UI/Icons';
import ExpedienteEncargaturaTable from '../Tables/ExpedienteEncargaturaTable';

function ExpedienteEncargaturaModal({
    row
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    // if (!ValidarPermisos('GESMAT', 'AGR')) return null

    return (
        <>
            <Button isIconOnly size="sm" title='Evaluación de Expedientes' className='border-none' variant="ghost" color="primary" onPress={onOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-checkup-list"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 14h.01" /><path d="M9 17h.01" /><path d="M12 16l1 1l3 -3" /></svg>
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
                                <h1 className=" text-blue-400 ">EVALUACIÓN DE EXPEDIENTES</h1>
                            </ModalHeader>
                            <section className="p-6">
                                <ExpedienteEncargaturaTable />
                            </section>
                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default ExpedienteEncargaturaModal