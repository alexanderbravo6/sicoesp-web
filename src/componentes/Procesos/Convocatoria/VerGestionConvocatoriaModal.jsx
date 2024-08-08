import CustomModal from "@/componentes/UI/CustomModal";
import { Button, Divider, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import ComiteForm from "../Formulario/ComiteForm";
import ConvocatoriaForm from "../Formulario/ConvocatoriaForm";
import { IconEyes } from "@/componentes/UI/Icons";
import VerConvocatoriaForm from "../Formulario/VerConvocatoriaForm";

export default function VerGestionConvocatoriaModal({row}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="primary" size="sm" isIconOnly variant="ghost" onPress={onOpen}>
                <IconEyes />
            </Button>
            <CustomModal isOpen={isOpen} className={"max-w-5xl"} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex text-title flex-col gap-1">VER CONVOCATORIA</ModalHeader>
                            <Divider className="mb-2" />
                            <ModalBody>
                                <VerConvocatoriaForm />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </CustomModal>
        </>
    );
}
