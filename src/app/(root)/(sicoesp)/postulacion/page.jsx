'use client'

import Header from '@/componentes/Layout/Header'
import Search from '@/componentes/UI/Search'
import ExpedienteIndex from '@/modules/Expediente/ExpedienteIndex'
import PostulacionIndex from '@/modules/Postulacion/PostulacionIndex'
import React from 'react'
const itemBreadcrumbs = [
    {
        href: '/',
        name: 'Inicio'
    },
    {
        href: '/postulacion',
        name: 'postulación'
    }
]
function PostulacionPage() {
   
    return (
        <>
            <Header itemBreadcrumbs={itemBreadcrumbs} titulo='POSTULACIÓN' />
            <section className='w-full'>

                <PostulacionIndex />
            </section>

        </>
    )
}

export default PostulacionPage