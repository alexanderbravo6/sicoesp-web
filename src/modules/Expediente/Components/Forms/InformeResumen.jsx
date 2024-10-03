import React from 'react'

function InformeResumen() {
    return (
        <section className="grid gap-6 items-end grid-cols-1 md:grid-cols-3">
            <div className="col-span-1">
                <label htmlForm="informeEscalafonario" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">RESUMEN DE INFORME</label>
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
                DESCARGAR INFORME
                </button>

            </div>

        </section>
    )
}

export default InformeResumen