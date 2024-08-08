import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import CustomModal from "../UI/CustomModal";
import RegistroProcesoForm from "./Formulario/RegistroProcesoForm";

export default function RegistroProcesoModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="primary" size="md" variant="ghost" onPress={onOpen}>
                Nuevo Proceso
            </Button>
            <CustomModal isOpen={isOpen} className={"max-w-7xl"} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">NUEVO PROCESO</ModalHeader>
                            <ModalBody>
                                <RegistroProcesoForm />
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
