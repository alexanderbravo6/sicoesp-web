'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { useUtils } from '@/shared/Hooks/useUtils';
import { IconEdit } from '@/componentes/UI/Icons';
import PlazaTable from '../Tables/PlazaTable';
import ValidarRequisitosForms from '../Forms/ValidarRequisitosForms';

function RequisitoEncargaturaModal({
    row
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { ValidarPermisos } = useUtils()
    // if (!ValidarPermisos('GESMAT', 'AGR')) return null

    return (
        <>
            <Button isIconOnly size="sm" title='Validar Requisitos' className='border-none' variant="ghost" color="success" onPress={onOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-list-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.5 5.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 11.5l1.5 1.5l2.5 -2.5" /><path d="M3.5 17.5l1.5 1.5l2.5 -2.5" /><path d="M11 6l9 0" /><path d="M11 12l9 0" /><path d="M11 18l9 0" /></svg>
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
                                <h1 className=" text-blue-400 ">
                                    VALIDACIÓN DE REQUISITOS
                                </h1>
                            </ModalHeader>
                            <section className='p-4'>
                                <ValidarRequisitosForms onClose={onClose} />
                            </section>

                        </>

                    )}
                </ModalContent>
            </TemplateBaseModal>
        </>
    )
}

export default RequisitoEncargaturaModal