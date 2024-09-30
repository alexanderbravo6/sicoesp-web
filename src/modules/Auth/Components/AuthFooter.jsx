import React from 'react'

const AuthFooter = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4 h-[10%] md:h-[6%]">
            <div className="w-full mx-auto h-full max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center ">© {new Date().getFullYear()} <a href="https://www.minedu.gob.pe/superiorpedagogica/" className="hover:underline">DIFOID</a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Normativa</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Politica de Privacidad</a>
                    </li>

                </ul>
            </div>
        </footer>
    )
}

export default AuthFooter