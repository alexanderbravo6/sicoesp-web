import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const RegresarButton = ({ url }) => {
    return (
        <>
            <Button
                variant="ghost"
                size="md"
                radius="sm"
                href={url}
                as={Link}
                className="p-3 h-11 w-28"
                color="default">
                Regresar
            </Button>
        </>
    )
}

export default RegresarButton