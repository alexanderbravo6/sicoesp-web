'use client'
import { IconCheck } from '@/shared/Components/Icons'
import { Card, CardBody, Divider, Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import CarreraProfesionalCatalogo from './Utils/CarreraProfesionalCatalogo'
import FormacionProfesionalTable from './Tables/FormacionProfesionalTable'
import RegistrarFormacionProfesionalModal from './Modals/RegistrarFormacionProfesionalModal'
function InformeContratacionIndex() {
    return (
        <div className="flex w-full flex-col">
            <Tabs color="default" aria-label="Options">

                <Tab key="formacion_profesional" variant="underlined" title={"Formación Académica"}>
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
                    <FormacionProfesionalTable />

                </Tab>
                <Tab key="especializaciones" variant="underlined" title={"Especialización y Actualización"}>
                    <section className=' mt-4 mb-6'>
                        <h4 className='text-xl font-normal text-gray-700 ' >
                            Especialización y Actualización
                        </h4>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                            En esta sección podrá gestionar sus documentos de formación profesional.
                        </p>
                    </section>
                    <Divider className='mb-6' />
                    <div className='flex justify-start' >
                        <RegistrarFormacionProfesionalModal />
                    </div>
                    <FormacionProfesionalTable />

                </Tab>
                <Tab key="participacion" variant="underlined" title={"Participación en Eventos Académicos"}>
                    <section className=' mt-4 mb-6'>
                        <h4 className='text-xl font-normal text-gray-700 ' >
                            Participación en Eventos Académicos
                        </h4>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                            En esta sección podrá gestionar sus documentos de formación profesional.
                        </p>
                    </section>
                    <Divider className='mb-6' />
                    <div className='flex justify-start' >
                        <RegistrarFormacionProfesionalModal />
                    </div>
                    <FormacionProfesionalTable />

                </Tab>
                <Tab key="meritos" variant="underlined" title={"Méritos"}>
                    <section className=' mt-4 mb-6'>
                        <h4 className='text-xl font-normal text-gray-700 ' >
                            Méritos
                        </h4>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                            En esta sección podrá gestionar sus documentos de formación profesional.
                        </p>
                    </section>
                    <Divider className='mb-6' />
                    <div className='flex justify-start' >
                        <RegistrarFormacionProfesionalModal />
                    </div>
                    <FormacionProfesionalTable />

                </Tab>
            </Tabs>
        </div>
    )
}

export default InformeContratacionIndex