import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import CustomModal from "../UI/CustomModal";
import CronogramaDesignacion from "./Cronogramas/CronogramaDesignacion";
import CronogramaEncargatura from "./Cronogramas/CronogramaEncargatura";

export default function CronogramaModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selected, setSelected] = useState("1");
    return (
        <>
            <Button isIconOnly color="primary" size="sm" variant="ghost" onPress={onOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-clock-hour-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 0 -2h-2.5v-4a1 1 0 0 0 -.883 -.993z" /></svg>
            </Button>
            <CustomModal isOpen={isOpen} className={"max-w-3xl"} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">CRONOGRAMA DEL PROCESO</ModalHeader>
                            <ModalBody>

                                <section>
                                    <RadioGroup
                                        label="Selecciona una opción"
                                        orientation="horizontal"
                                        value={selected}
                                        onValueChange={setSelected}
                                    >
                                        <Radio value="1">Asignar</Radio>
                                        <Radio value="2">Modificable</Radio>
                                        <Radio value="3">Estandar</Radio>
                                    </RadioGroup>
                                </section>
                                {
                                    selected == 1 ? <CronogramaDesignacion /> : <CronogramaEncargatura />
                                }


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
