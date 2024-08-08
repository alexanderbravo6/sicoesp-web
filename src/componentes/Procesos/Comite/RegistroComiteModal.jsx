import CustomModal from "@/componentes/UI/CustomModal";
import { Button, Divider, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import ComiteForm from "../Formulario/ComiteForm";

export default function RegistroComiteModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="primary" size="md" variant="ghost" onPress={onOpen}>
                Nuevo Miembro
            </Button>
            <CustomModal isOpen={isOpen} className={"max-w-5xl"} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex text-title flex-col gap-1">NUEVO MIEMBRO DE COMITÉ</ModalHeader>
                            <Divider className="mb-2" />
                            <ModalBody>
                                <ComiteForm disabled={false} />
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
