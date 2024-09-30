import React from 'react'

function CarreraProfesionalCatalogo() {
    return (
        <div id="alert-additional-content-1" className="p-4 mb-4 text-sky-800 border border-sky-300 rounded-lg bg-sky-50 dark:bg-gray-800 dark:text-sky-400 dark:border-sky-800" role="alert">
            <div className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <h3 className="text-lg font-medium">Recomendación</h3>
            </div>
            <div className="mt-2 mb-4 text-sm">
                Antes de registrar la siguiente información lo invitamos a ver los siguientes catálogos para ubicar su especialidad de accuerdo al grado de estudios o nivel académico:
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2   gap-4">
                <a target='_blank' href='Catalogo/catalogo_carreras_profesionales.pdf' download="catalogo_carreras_profesionales.pdf" className="text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 flex items-center justify-center focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center  ">
                    <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    Catálogo de carreras profesionales
                </a>
                <a target='_blank' href='Catalogo/catalogo_maestria.pdf' download="catalogo_maestria.pdf" className="text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none flex items-center justify-center focus:ring-sky-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center  ">
                    <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    Catálogo de Maestría
                </a>
                <a target='_blank' href='Catalogo/catalogo_doctorado.pdf' download="catalogo_doctorado.pdf" className="text-white bg-sky-500  hover:bg-sky-700 focus:ring-4 focus:outline-none flex items-center justify-center focus:ring-sky-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center  ">
                    <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    Catálogo de Doctorado
                </a>
                <a target='_blank' href='Catalogo/catalogo_segunda_especialidad.pdf' download="catalogo_segunda_especialidad.pdf" className="text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:outline-none flex items-center justify-center focus:ring-sky-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center  ">
                    <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    Catálogo de Segunda Especialidad
                </a>
            </div>
        </div>
    )
}

export default CarreraProfesionalCatalogo