import React, { useState } from 'react'

const applicants = [
    {
        id: 1,
        name: 'KATIA NINOZCA FLORES LEDESMA',
        dni: '20022551',
        birthDate: '01/01/1988',
        phone: '01 0',
        cellphone: '951315308',
        email: 'kmfledesma@hotmail.com',
        gender: 'Femenino',
        address: 'JR FRANCISCO DE ZELA #1865',
        region: 'JUNIN',
        province: 'HUANCAYO',
        requirements: [
            { id: 1, description: 'Ser docente de la CPD.', met: true },
            { id: 2, description: 'Contar con título profesional de Profesor registrado en la DRE o de Licenciado en Educación registrado en SUNEDU.', met: true },
            { id: 3, description: 'Grado de Maestro, registrado en SUNEDU.', met: true },
            { id: 4, description: 'Mínimo tres (3) años de experiencia como docente en Educación Superior.', met: true },
            { id: 5, description: 'Mínimo cinco (5) años de experiencia en el puesto al que postula y/o en gestión de cargos directivos y/o de gestión pedagógica.', met: true },
            { id: 6, description: 'Mínimo diez (10) años de experiencia profesional.', met: true },
            { id: 7, description: 'No incurre en los impedimentos para postular y asumir la encargatura de puesto o de funciones detallados en la presente norma.', met: true },
            { id: 8, description: 'Adjunta declaración jurada (Anexo 1).', met: true },
        ]
    },
    {
        id: 2,
        name: 'JUAN CARLOS PEREZ RODRIGUEZ',
        dni: '30033662',
        birthDate: '15/05/1985',
        phone: '02 1',
        cellphone: '987654321',
        email: 'jcperez@gmail.com',
        gender: 'Masculino',
        address: 'AV. LOS ALAMOS 123',
        region: 'LIMA',
        province: 'LIMA',
        requirements: [
            { id: 1, description: 'Ser docente de la CPD.', met: true },
            { id: 2, description: 'Contar con título profesional de Profesor registrado en la DRE o de Licenciado en Educación registrado en SUNEDU.', met: true },
            { id: 3, description: 'Grado de Maestro, registrado en SUNEDU.', met: true },
            { id: 4, description: 'Mínimo tres (3) años de experiencia como docente en Educación Superior.', met: false },
            { id: 5, description: 'Mínimo cinco (5) años de experiencia en el puesto al que postula y/o en gestión de cargos directivos y/o de gestión pedagógica.', met: true },
            { id: 6, description: 'Mínimo diez (10) años de experiencia profesional.', met: true },
            { id: 7, description: 'No incurre en los impedimentos para postular y asumir la encargatura de puesto o de funciones detallados en la presente norma.', met: true },
            { id: 8, description: 'Adjunta declaración jurada (Anexo 1).', met: true },
        ]
    },
    {
        id: 3,
        name: 'MARIA FERNANDA GOMEZ SILVA',
        dni: '40044773',
        birthDate: '22/09/1990',
        phone: '03 2',
        cellphone: '912345678',
        email: 'mfgomez@outlook.com',
        gender: 'Femenino',
        address: 'CALLE LAS FLORES 456',
        region: 'AREQUIPA',
        province: 'AREQUIPA',
        requirements: [
            { id: 1, description: 'Ser docente de la CPD.', met: true },
            { id: 2, description: 'Contar con título profesional de Profesor registrado en la DRE o de Licenciado en Educación registrado en SUNEDU.', met: true },
            { id: 3, description: 'Grado de Maestro, registrado en SUNEDU.', met: false },
            { id: 4, description: 'Mínimo tres (3) años de experiencia como docente en Educación Superior.', met: true },
            { id: 5, description: 'Mínimo cinco (5) años de experiencia en el puesto al que postula y/o en gestión de cargos directivos y/o de gestión pedagógica.', met: true },
            { id: 6, description: 'Mínimo diez (10) años de experiencia profesional.', met: false },
            { id: 7, description: 'No incurre en los impedimentos para postular y asumir la encargatura de puesto o de funciones detallados en la presente norma.', met: true },
            { id: 8, description: 'Adjunta declaración jurada (Anexo 1).', met: true },
        ]
    },
    {
        id: 4,
        name: 'ROBERTO ALEJANDRO TORRES MENDOZA',
        dni: '50055884',
        birthDate: '10/12/1982',
        phone: '04 3',
        cellphone: '945678901',
        email: 'ratmendoza@yahoo.com',
        gender: 'Masculino',
        address: 'JR. LOS PINOS 789',
        region: 'LA LIBERTAD',
        provincia: 'TRUJILLO',
        requirements: [
            { id: 1, description: 'Ser docente de la CPD.', met: true },
            { id: 2, description: 'Contar con título profesional de Profesor registrado en la DRE o de Licenciado en Educación registrado en SUNEDU.', met: true },
            { id: 3, description: 'Grado de Maestro, registrado en SUNEDU.', met: true },
            { id: 4, description: 'Mínimo tres (3) años de experiencia como docente en Educación Superior.', met: true },
            { id: 5, description: 'Mínimo cinco (5) años de experiencia en el puesto al que postula y/o en gestión de cargos directivos y/o de gestión pedagógica.', met: true },
            { id: 6, description: 'Mínimo diez (10) años de experiencia profesional.', met: true },
            { id: 7, description: 'No incurre en los impedimentos para postular y asumir la encargatura de puesto o de funciones detallados en la presente norma.', met: true },
            { id: 8, description: 'Adjunta declaración jurada (Anexo 1).', met: true },
        ]
    },
]

export default function ValidarRequisitosForms({ onClose }) {
    const [selectedApplicant, setSelectedApplicant] = useState(null)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleSave = () => {
        if (selectedApplicant) {
            console.log('Saving applicant data:', selectedApplicant)
        }
    }

    const handleBack = () => {
        console.log('Navigating back')
    }

    const isEligibleForEvaluation = selectedApplicant?.requirements.every(req => req.met) ?? false

    const Skeleton = ({ className }) => (
        <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
    )

    return (
        <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
            <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                <div className="flex justify-between items-center bg-gray-800 text-white p-4">
                    <h1 className="text-2xl font-semibold">Revisión de Postulantes</h1>
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="bg-white text-gray-800 px-4 py-2 rounded flex items-center transition-colors hover:bg-gray-200"
                        >
                            {selectedApplicant ? selectedApplicant.name : 'Seleccionar postulante'}
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-64 bg-white rounded shadow-lg z-10 overflow-hidden">
                                {applicants.map((applicant) => (
                                    <button
                                        key={applicant.id}
                                        onClick={() => {
                                            setSelectedApplicant(applicant)
                                            setIsDropdownOpen(false)
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                    >
                                        {applicant.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-6 grid grid-cols-2 gap-4">
                    {selectedApplicant ? (
                        {
                            id: 4,
                            name: 'ROBERTO ALEJANDRO TORRES MENDOZA',
                            dni: '50055884',
                            birthDate: '10/12/1982',
                            phone: '04 3',
                            cellphone: '945678901',
                            email: 'ratmendoza@yahoo.com',
                            gender: 'Masculino',
                            address: 'JR. LOS PINOS 789',
                            region: 'LA LIBERTAD',
                            provincia: 'TRUJILLO',
                            requirements: [
                                { id: 1, description: 'Ser docente de la CPD.', met: true },
                                { id: 2, description: 'Contar con título profesional de Profesor registrado en la DRE o de Licenciado en Educación registrado en SUNEDU.', met: true },
                                { id: 3, description: 'Grado de Maestro, registrado en SUNEDU.', met: true },
                                { id: 4, description: 'Mínimo tres (3) años de experiencia como docente en Educación Superior.', met: true },
                                { id: 5, description: 'Mínimo cinco (5) años de experiencia en el puesto al que postula y/o en gestión de cargos directivos y/o de gestión pedagógica.', met: true },
                                { id: 6, description: 'Mínimo diez (10) años de experiencia profesional.', met: true },
                                { id: 7, description: 'No incurre en los impedimentos para postular y asumir la encargatura de puesto o de funciones detallados en la presente norma.', met: true },
                                { id: 8, description: 'Adjunta declaración jurada (Anexo 1).', met: true },
                            ]
                        },
                        <>
                            <div key={1} className="border-b border-gray-200 pb-2">
                                <strong className="text-gray-700 capitalize">Nombre:</strong> {selectedApplicant.name}
                            </div>
                            <div key={2} className="border-b border-gray-200 pb-2">
                                <strong className="text-gray-700 capitalize">DNI:</strong> {selectedApplicant.dni}
                            </div>
                            <div key={3} className="border-b border-gray-200 pb-2">
                                <strong className="text-gray-700 capitalize">Fecha de nacimiento:</strong> {selectedApplicant.birthDate}
                            </div>
                            <div key={5} className="border-b border-gray-200 pb-2">
                                <strong className="text-gray-700 capitalize">Celular:</strong> {selectedApplicant.cellphone}
                            </div>
                            <div key={6} className="border-b border-gray-200 pb-2">
                                <strong className="text-gray-700 capitalize">Correo:</strong> {selectedApplicant.email}
                            </div>
                            <div key={7} className="border-b border-gray-200 pb-2">
                                <strong className="text-gray-700 capitalize">Género:</strong> {selectedApplicant.gender}
                            </div>
                            <div key={8} className="border-b border-gray-200 pb-2">
                                <strong className="text-gray-700 capitalize">Dirección:</strong> {selectedApplicant.address}
                            </div>
                            <div key={9} className="border-b border-gray-200 pb-2">
                                <strong className="text-gray-700 capitalize">Región:</strong> {selectedApplicant.region}
                            </div>
                            <div key={10} className="border-b border-gray-200 pb-2">
                                <strong className="text-gray-700 capitalize">Provincia:</strong> {selectedApplicant.province}
                            </div>
                            <div key={10} className="border-b border-gray-200 pb-2">
                                <strong className="text-gray-700 capitalize">Distrito:</strong> {selectedApplicant.province}
                            </div>
                        </>
                    ) : (
                        <>
                            {[...Array(8)].map((_, index) => (
                                <Skeleton key={index} className="h-6 w-full" />
                            ))}
                        </>
                    )}
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
                <div className="bg-gray-800 text-white p-4">
                    <h2 className="text-xl font-semibold">Requisitos</h2>
                </div>
                <div className="divide-y divide-gray-200">
                    {selectedApplicant ? (
                        selectedApplicant.requirements.map((req, index) => (
                            <div key={req.id} className={`flex items-center justify-between p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <span className="flex-grow">{req.description}</span>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={req.met}
                                        onChange={() => {
                                            const updatedApplicant = { ...selectedApplicant }
                                            const updatedReq = updatedApplicant.requirements.find(r => r.id === req.id)
                                            updatedReq.met = !updatedReq.met
                                            setSelectedApplicant(updatedApplicant)
                                        }}
                                        className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                                    />
                                </label>
                            </div>
                        ))
                    ) : (
                        <>
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className={`flex items-center justify-between p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                    <Skeleton className="h-6 w-3/4" />
                                    <Skeleton className="h-5 w-5" />
                                </div>
                            ))}
                        </>
                    )}
                    <div className={`flex items-center justify-between p-4 ${selectedApplicant?.requirements.length % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <span className="flex-grow font-semibold">¿Está apto para evaluación?</span>
                        {selectedApplicant ? (
                            <span className={`ml-4 font-semibold ${isEligibleForEvaluation ? 'text-green-600' : 'text-red-600'}`}>
                                {isEligibleForEvaluation ? 'SI' : 'NO'}
                            </span>
                        ) : (
                            <Skeleton className="h-6 w-8" />
                        )}
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={onClose}
                    className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition duration-300 flex items-center"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Retroceder
                </button>
                <button
                    onClick={handleSave}
                    className={`${selectedApplicant ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} text-white px-6 py-2 rounded transition duration-300 flex items-center`}
                    disabled={!selectedApplicant}
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                    </svg>
                    Registrar
                </button>
            </div>
        </div>
    )
}