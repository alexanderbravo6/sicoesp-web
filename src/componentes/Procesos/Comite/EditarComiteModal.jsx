import React, { useState } from "react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import { IconEdit } from "@/componentes/UI/Icons";
import CustomModal from "@/componentes/UI/CustomModal";
import ComiteForm from "../Formulario/ComiteForm";


export default function EditarComiteModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selected, setSelected] = useState("1");
    return (
        <>
            <Button isIconOnly color="primary" size="sm" variant="ghost" onPress={onOpen}>
                <IconEdit />
            </Button>
            <CustomModal isOpen={isOpen} className={"max-w-5xl"} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">EDITAR MIEMBRO DE COMITÉ</ModalHeader>
                            <ModalBody>
                                <ComiteForm disabled="true" />
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
