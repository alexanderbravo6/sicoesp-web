'use client'

import IconsSidebar from '@/componentes/UI/IconsSidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function LinkSimple({ index, ruta, icono, nombre }) {
    const pathname = usePathname()

    return (
        <li key={index} >
            <Link
                href={`${ruta}`}
                className={`${pathname === ruta || pathname.startsWith(ruta) ? "active" : ""
                    } flex gap-2 items-center p-2 my-2 transition duration-300 max-md:text-sm text-white rounded-lg dark:text-white hover:bg-main  dark:hover:bg-main  `}
            >
                <IconsSidebar name={icono} />
                <span>{nombre}</span>
            </Link>
        </li>

    )
}

export default LinkSimple