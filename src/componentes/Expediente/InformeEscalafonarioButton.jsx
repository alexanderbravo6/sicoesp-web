
import { Button } from "@nextui-org/react";
import { IconEdit, IconPDF } from "../UI/Icons";

export default function InformeEscalafonarioButton() {

    return (
        <>
            <Button color="secondary" title="Descargar Informe escalafonario" isIconOnly size="sm" variant="ghost" >
                <IconPDF />
            </Button>

        </>
    );
}
