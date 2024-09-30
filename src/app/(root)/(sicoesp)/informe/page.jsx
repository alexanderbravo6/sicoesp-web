
'use client'

import Header from '@/componentes/Layout/Header';
import InformeContratacionIndex from '@/modules/Informe/Components/InformeContratacionIndex';
import InformeEncargaturaIndex from '@/modules/Informe/Components/InformeEncargaturaIndex';
import { useSession } from 'next-auth/react';

const itemBreadcrumbs = [
    {
        href: '/',
        name: 'Inicio'
    },
    {
        href: '/INFORME',
        name: 'Gestión de mis documentos'
    }
]

function InformePage() {

    const { data: session } = useSession()
    return (
        <>
            <Header itemBreadcrumbs={itemBreadcrumbs} titulo='MIS DOCUMENTOS' />
            <section className='w-full'>

                <div className='w-full bg-white mt-5 mb-16   h-auto  overflow-x-auto  rounded-lg  '>
                    {
                        session?.user.idRol === 3 && <InformeContratacionIndex />
                    }
                    {
                        session?.user.idRol === 4 && <InformeEncargaturaIndex />
                    }


                </div>
            </section>

        </>
    )
}

export default InformePage