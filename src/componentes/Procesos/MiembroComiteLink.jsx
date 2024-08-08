import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { IconGroup, IconPerson } from '../UI/Icons'

function MiembroComiteLink({ id }) {

    return (

        <Button href={`/procesos/comite/miembros/${id}`} title='Miembros' isIconOnly as={Link} color="primary" size="sm" variant="ghost" >
            <IconPerson />
        </Button>
    )
}

export default MiembroComiteLink