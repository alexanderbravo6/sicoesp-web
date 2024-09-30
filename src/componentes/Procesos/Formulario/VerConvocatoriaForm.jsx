import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import RequisitosTabla from "../Tabla/RequisitosTabla";
import CronogramaDesignacion from "../Cronogramas/CronogramaDesignacion";
import PostulantesTabla from "../Tabla/PostulantesTabla";
function VerConvocatoriaForm({ disabled }) {
    return (
        <>
            <section >
                <Tabs aria-label="Options">
                    <Tab key="convocatoria" title="CONVOCATORIA">
                        <Card className="p-3">
                            <CardBody>
                                <section className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
                                    <div>
                                        <label htmlForm="region" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">REGIÓN</label>
                                        <select id="region" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="">SELECCIONAR</option>
                                            <option value="1">LIMA METROPOLITANA</option>
                                            <option value="2">AREQUIPA</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlForm="nroConvocatoria" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">N° DE CONVOCATORIA</label>
                                        <select id="nroConvocatoria" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="">SELECCIONAR</option>
                                            <option value="1">PRIMERA CONVOCATORIA</option>
                                            <option value="2">SEGUNDA CONVOCATORIA</option>
                                            <option value="3">TERCERA CONVOCATORIA</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlForm="areaDesempenio" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">ÁREA DE DESEMPEÑO</label>
                                        <select id="areaDesempenio" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="">SELECCIONAR</option>
                                            <option value="1">DIRECTIVO</option>
                                            <option value="2">PUESTO DE GESTIÓN</option>
                                            <option value="3">DOCENTE</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlForm="puesto" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">PUESTO</label>
                                        <select id="puesto" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="">SELECCIONAR</option>
                                            <option value="1">DIRECTOR GENERAL</option>
                                            <option value="2">JEFE DE UNIDAD ACADÉMICA</option>
                                            <option value="3">SECRETARIO ACADÉMICO</option>
                                            <option value="2">COORDINADOR DE ÁREA ACADÉMICA</option>
                                            <option value="2">COORDINADOR DE ÁREA DE PRÁCTICA PREPROFESIONAL E INVESTIGACIÓN</option>
                                            <option value="2">SECRETARIO ACADÉMICO</option>
                                            <option value="2">JEFE DE UNIDAD DE INVESTIGACIÓN</option>
                                            <option value="2">JEFE DE UNIDAD DE OFRMACIÓN CONTINUA</option>
                                            <option value="2">JEFE DE LA UNIDAD DE BIENESTAR Y EMPLEABILIDAD</option>
                                            <option value="2">COORDINADOR DE ÁREA DE CALIDAD</option>
                                            <option value="2">JEFE DE UNDIAD DE POSGRADO DE EESP</option>
                                            <option value="10">DOCENTE</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlForm="nroVacante" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">N° DE VACANTES</label>
                                        <input type="text" id="nroVacante" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                    </div>
                                    <div>
                                        <label htmlForm="enlacePublicacion" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">ENLACE DE PUBLICACIÓN</label>
                                        <input type="text" id="enlacePublicacion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

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
                    <Tab key="postulantes" title="POSTULANTES">
                        <Card>
                            <CardBody>
                                <PostulantesTabla  />
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </section>
        </>
    )
}

export default VerConvocatoriaForm