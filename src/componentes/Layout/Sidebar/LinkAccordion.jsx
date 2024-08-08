'use client'
import React, { useState } from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";
import LinkSubmenu from './LinkSubmenu';
import { usePathname } from 'next/navigation';
import IconsSidebar from '@/componentes/UI/IconsSidebar';
function LinkAccordion({
    index, ruta, nombre, icono, subModulos
}) {

    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li key={index} >
            <button
                href={ruta}
                onClick={() => setIsOpen(!isOpen)}
                className={`${pathname === ruta || pathname.startsWith(ruta) ? "active" : ""
                    } flex gap-2 items-center w-full p-2 my-2 transition duration-300 max-md:text-sm text-white rounded-lg dark:text-white hover:bg-main  dark:hover:bg-main  `}
            >
                <IconsSidebar name={"config"} />
                <span>{nombre}</span>
            </button>
            {isOpen && (
                subModulos.map((subModulo, index) => (
                    <LinkSubmenu key={index} nombre={subModulo.nombre} ruta={`/${subModulo.rutaRelativa}`} />
                ))

            )}
        </li>

    )
}

export default LinkAccordion