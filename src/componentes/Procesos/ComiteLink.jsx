import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { IconGroup } from '../UI/Icons'

function ComiteLink({ id }) {
    return (

        <Button href={`/procesos/comite/${id}`} title='Comités' isIconOnly as={Link} color="primary" size="sm" variant="ghost" >
            <IconGroup />
        </Button>
    )
}

export default ComiteLink