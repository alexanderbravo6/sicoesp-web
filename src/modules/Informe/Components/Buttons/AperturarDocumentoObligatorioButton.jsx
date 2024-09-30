'use client'
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import TemplateBaseModal from '@/shared/Components/Templates/TemplateBaseModal';
import { useUtils } from '@/shared/Hooks/useUtils';
import RegistrarFormacionProfesionalForm from '../Forms/RegistrarFormacionProfesionalForm';
import { useInforme } from '../../Providers/InformeProvider';

function AperturarDocumentoObligatorioButton() {
    const { isOpenDO, SetIsOpenDO } = useInforme()
    const { ValidarPermisos } = useUtils()
    const handleEstadoDO = () => {
        SetIsOpenDO(!isOpenDO)
    }

    if (!ValidarPermisos('GESMAT', 'AGR')) return null

    return (
        <>
            {
                !isOpenDO ? <Button onClick={handleEstadoDO} className='mb-4' size='md' color="primary">

                    Abrir Registro
                </Button> :
                    <Button onClick={handleEstadoDO} className='mb-4' size='md' color="primary">

                        Cerrar Registro
                    </Button>
            }

        </>
    )
}

export default AperturarDocumentoObligatorioButton