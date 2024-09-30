import LoadingErrorCard from '@/shared/Components/LoadingErrorCard';
import Progress from '@/shared/Components/Progress';
import React from 'react'
import RolItemCard from './RolItemCard';
import { useSession } from 'next-auth/react';
import { useFetchRoles } from '../Hooks/useSeguridad';

const data = {
    error: false,
    isLoading: false,
    data: [
        {
            idPersonaRol: 1,
            idRol: 1,
            rol: "POSTULANTE CONTRATACIÓN",
            idPersona: 1,
            porDefecto: 0,
            sede: {
                idSede: 0,
                idTipoSede: 1,
                descripcionSede: "OFICINA DE DIFOID",
                descripcionTipoSede: "DIFOID"
            }
        },
        {
            idPersonaRol: 2,
            idRol: 2,
            rol: "POSTULANTE ENCARGATURA",
            idPersona: 1,
            porDefecto: 0,
            sede: {
                idSede: 0,
                idTipoSede: 1,
                descripcionSede: "OFICINA DE DIFOID",
                descripcionTipoSede: "DIFOID"
            }
        },
        {
            idPersonaRol: 3,
            idRol: 3,
            rol: "POSTULANTE DESIGNACIÓN",
            idPersona: 1,
            porDefecto: 0,
            sede: {
                idSede: 0,
                idTipoSede: 1,
                descripcionSede: "OFICINA DE DIFOID",
                descripcionTipoSede: "DIFOID"
            }
        },
        {
            idPersonaRol: 4,
            idRol: 4,
            rol: "ESPECIALISTA DIFOID",
            idPersona: 1,
            porDefecto: 0,
            sede: {
                idSede: 0,
                idTipoSede: 1,
                descripcionSede: "OFICINA DE DIFOID",
                descripcionTipoSede: "DIFOID"
            }
        },
        {
            idPersonaRol: 5,
            idRol: 5,
            rol: "ESPECIALISTA DRE",
            idPersona: 1,
            porDefecto: 0,
            sede: {
                idSede: 0,
                idTipoSede: 1,
                descripcionSede: "LIMA METROPOLITANA",
                descripcionTipoSede: "DRE"
            }
        },

        {
            idPersonaRol: 6,
            idRol: 6,
            rol: "PRESIDENTE DE COMITÉ",
            idPersona: 1,
            porDefecto: 0,
            sede: {
                idSede: 0,
                idTipoSede: 1,
                descripcionSede: "LIMA METROPLITANA",
                descripcionTipoSede: "DRE"
            }
        },
    ]

}

function RolesCardList() {

    const roles = data;

    if (roles.error) return <LoadingErrorCard />
    if (roles.isLoading) return <Progress />

    return (
        <>
            <ul role="list" className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 w-full  divide-gray-100">
                {
                    roles &&
                    roles.data.map((rol, id) => (
                        <RolItemCard key={id} rol={rol} />
                    ))
                }
            </ul>
        </>
    )
}

export default RolesCardList