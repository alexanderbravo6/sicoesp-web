import { FetchInstituciones } from '@/service/Fetcher';
import { Skeleton } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import React from 'react'

const InstitucionesSelect = () => {
    const { data: session, update } = useSession();
    const instituciones = FetchInstituciones();
    if (instituciones.error) return <Skeleton className="h-10 w-52 rounded-lg" />
    if (instituciones.isLoading) return <Skeleton className="h-10 w-52 rounded-lg" />


    return (

        <select onChange={(e) => {
            update({
                ...session,
                user: {
                    ...session.user,
                    idInstitucionActiva: e.target.value,
                },
            });

        }} defaultValue={session?.user.idInstitucionActiva} id='instituciones_global' className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  ">
            <option value="0">IESP/EESP</option>
            {
                instituciones?.data.data.map(institucion => (
                    <option key={institucion.id} value={institucion.id}>[{institucion.region}] - {institucion.nombre} </option>
                ))
            }

        </select>

    )
}

export default InstitucionesSelect