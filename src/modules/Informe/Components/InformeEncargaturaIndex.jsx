'use client'
import { IconCheck } from '@/shared/Components/Icons'
import { Card, CardBody, Divider, Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import CarreraProfesionalCatalogo from './Utils/CarreraProfesionalCatalogo'
import FormacionProfesionalTable from './Tables/FormacionProfesionalTable'
import RegistrarFormacionProfesionalModal from './Modals/RegistrarFormacionProfesionalModal'
import ExperienciaLaboralTable from './Tables/ExperienciaLaboralTable'
import EspecializacionTable from './Tables/EspecializacionTable'
import HerramientaVirtualTable from './Tables/HerramientaVirtualTable'
import OfimaticaTable from './Tables/OfimaticaTable'
import EventoAcademicoTable from './Tables/EventoAcademicoTable'
import PublicacionTable from './Tables/PublicacionTable'
import ReconocimientoTable from './Tables/ReconocimientoTable'
import DocumentoObligatorioTable from './Tables/DocumentoObligatorioTable'
import AperturarDocumentoObligatorioButton from './Buttons/AperturarDocumentoObligatorioButton'
function InformeEncargaturaIndex() {

    return (
        <div className="flex w-full flex-col">
            <Tabs color="default" aria-label="Options">

                <Tab key="formacion_profesional" variant="underlined" title={"Formación Académica y Profesional"}>
                    <section className=' mt-4 mb-6'>
                        <h4 className='text-xl font-normal text-gray-700 ' >
                            Formación Académica
                        </h4>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                            En esta sección podrá gestionar sus documentos de formación profesional.
                        </p>
                    </section>
                    <Divider className='mb-6' />
                    <CarreraProfesionalCatalogo />
                    <div className='flex justify-start' >
                        <RegistrarFormacionProfesionalModal />
                    </div>
                    <FormacionProfesionalTable />

                </Tab>
                <Tab key="experiencia_laboral" variant="underlined" title={"Experiencia Laboral"}>
                    <section>
                        <section className=' mt-4 mb-6'>
                            <h4 className='text-xl font-normal text-gray-700 ' >
                                Experiencia Laboral
                            </h4>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                                En esta sección podrá gestionar sus documentos de formación profesional.
                            </p>
                        </section>
                        <Divider className='mb-6' />
                        <div className='flex justify-start' >
                            <RegistrarFormacionProfesionalModal />
                        </div>
                        <ExperienciaLaboralTable />
                    </section>

                </Tab>
                <Tab key="formacion_continua" variant="underlined" title={"Formación Continua"}>
                    <section className='flex gap-5 flex-col'>
                        <section>
                            <section className=' mt-4 mb-6'>
                                <h4 className='text-xl font-normal text-gray-700 ' >
                                    Diplomados,cursos y especializaciones
                                </h4>
                                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                                    En esta sección podrá gestionar sus documentos de formación profesional.
                                </p>
                            </section>
                            <Divider className='mb-6' />
                            <div className='flex justify-start' >
                                <RegistrarFormacionProfesionalModal />
                            </div>
                            <EspecializacionTable />
                        </section>
                        <section>
                            <section className=' mt-4 mb-6'>
                                <h4 className='text-xl font-normal text-gray-700 ' >
                                    Herramientas Virtuales
                                </h4>
                                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                                    En esta sección podrá gestionar sus documentos de formación profesional.
                                </p>
                            </section>
                            <Divider className='mb-6' />
                            <div className='flex justify-start' >
                                <RegistrarFormacionProfesionalModal />
                            </div>
                            <HerramientaVirtualTable />
                        </section>
                        <section>
                            <section className=' mt-4 mb-6'>
                                <h4 className='text-xl font-normal text-gray-700 ' >
                                    Conocimiento de Ofimatica
                                </h4>
                                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                                    En esta sección podrá gestionar sus documentos de formación profesional.
                                </p>
                            </section>
                            <Divider className='mb-6' />
                            <div className='flex justify-start' >
                                <RegistrarFormacionProfesionalModal />
                            </div>
                            <OfimaticaTable />
                        </section>
                    </section>
                </Tab>
                <Tab key="eventos_academicos_publicaciones_reconocimientos" variant="underlined" title={"Eventos académicos, Publicaciones y Reconocimientos"}>
                    <section className='flex gap-5 flex-col'>
                        <section>
                            <section className=' mt-4 mb-6'>
                                <h4 className='text-xl font-normal text-gray-700 ' >
                                    Participación en eventos académicos
                                </h4>
                                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                                    En esta sección podrá gestionar sus documentos de formación profesional.
                                </p>
                            </section>
                            <Divider className='mb-6' />
                            <div className='flex justify-start' >
                                <RegistrarFormacionProfesionalModal />
                            </div>
                            <EventoAcademicoTable />
                        </section>
                        <section>
                            <section className=' mt-4 mb-6'>
                                <h4 className='text-xl font-normal text-gray-700 ' >
                                    Publicaciones
                                </h4>
                                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                                    En esta sección podrá gestionar sus documentos de formación profesional.
                                </p>
                            </section>
                            <Divider className='mb-6' />
                            <div className='flex justify-start' >
                                <RegistrarFormacionProfesionalModal />
                            </div>
                            <PublicacionTable />
                        </section>
                        <section>
                            <section className=' mt-4 mb-6'>
                                <h4 className='text-xl font-normal text-gray-700 ' >
                                    Reconocimientos
                                </h4>
                                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                                    En esta sección podrá gestionar sus documentos de formación profesional.
                                </p>
                            </section>
                            <Divider className='mb-6' />
                            <div className='flex justify-start' >
                                <RegistrarFormacionProfesionalModal />
                            </div>
                            <ReconocimientoTable />
                        </section>
                    </section>
                </Tab>
                <Tab key="documento_obligatorio" variant="underlined" title={"Documentos Obligatorios"}>
                    <section className='flex gap-5 flex-col'>
                        <section>
                            <section className=' mt-4 mb-6'>
                                <h4 className='text-xl font-normal text-gray-700 ' >
                                    Documentos Obligatorios
                                </h4>
                                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                                    En esta sección podrá gestionar sus documentos de formación profesional.
                                </p>
                            </section>
                            <Divider className='mb-6' />
                            <div className='flex justify-start gap-4' >
                       
                                <RegistrarFormacionProfesionalModal />
                                <AperturarDocumentoObligatorioButton />
                            </div>
                            <DocumentoObligatorioTable />
                        </section>

                    </section>
                </Tab>
            </Tabs>
        </div>
    )
}

export default InformeEncargaturaIndex