import React from 'react'

function ResultadoExpediente() {
    return (
        <section>
            <div className='w-full bg-white h-auto md:overflow-hidden shadow-md rounded-lg p-4  my-4'>
                <h4 className='font-bold text-main' >INFORMACIÓN PERSONAL</h4>
                <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 "></hr>
                <div>
                    <div className='grid md:grid-cols-8 grid-cols-1 gap-6' >
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">DNI</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">73632374</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Nombres</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Bryan Alexander </dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Apellido Materno</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Moscol </dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Apellido Paterno</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Bravo</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de Nacimiento</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">09/01/2024</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Teléfono Celular</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">942417725</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Correo Electrónico</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">bryanalexandermoscolbravo@gmail.com</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Sexo</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Masculino</dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Dirección</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Asoc. Residencial Montecarlos Mz. C. LT 10
                            </dd>
                        </div>

                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Región</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Lima
                            </dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Provincia</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Lima
                            </dd>
                        </div>
                        <div className='col-span-2'>
                            <dt className="text-sm font-medium leading-6 text-gray-900">Distrito</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                San Martin de Porres
                            </dd>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full bg-white h-auto md:overflow-hidden shadow-md rounded-lg p-4  my-4'>
                <h4 className='font-bold text-main' >EXPEDIENTE</h4>
                <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 "></hr>
                <button

                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                    DESCARGAR EXPEDIENTE
                </button>


            </div>
        </section>
    )
}

export default ResultadoExpediente