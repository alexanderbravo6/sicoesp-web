import React, { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useInforme } from "../../Providers/InformeProvider";

export default function EspecialidadRadioGroup({ onClose }) {
    const { idProgramaProfesional, setIdProgramaProfesional } = useInforme()
    const [selected, setSelected] = useState(null);
    const handleSelect = (e) => {

    }

    return (
        <div className="flex flex-col gap-3">
            {
                idProgramaProfesional != null ?
                    (
                        <p>
                            Seleccione un programa profesional
                        </p>
                    ) : (
                        <>
                            <RadioGroup
                                label="Select your favorite city"
                                value={selected}
                                onValueChange={setSelected}
                            >
                                <Radio value="buenos-aires">Buenos Aires</Radio>
                                <Radio value="sydney">Sydney</Radio>
                                <Radio value="san-francisco">San Francisco</Radio>
                                <Radio value="london">London</Radio>
                                <Radio value="tokyo">Tokyo</Radio>
                            </RadioGroup>
                            <p className="text-default-500 text-small">Seleccionado: {selected}</p>
                        </>
                    )
            }
        </div>
    );
}
