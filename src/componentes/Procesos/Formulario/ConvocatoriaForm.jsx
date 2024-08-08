import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import RequisitosTabla from "../Tabla/RequisitosTabla";
import CronogramaDesignacion from "../Cronogramas/CronogramaDesignacion";
function ConvocatoriaForm({ disabled }) {
    return (
        <>
            <section >
                <Tabs aria-label="Options">
                    <Tab key="convocatoria" title="CONVOCATORIA">
                        <Card  className="p-3">
                            <CardBody>
                                <section className="grid grid-cols-1 md:grid-cols-2 ">
                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Cargar Archivo</label>
                                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                                    </div>
                                </section>
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Cronograma" title="CRONOGRAMA">
                        <Card>
                            <CardBody>
                                <CronogramaDesignacion />
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </section>
        </>
    )
}

export default ConvocatoriaForm