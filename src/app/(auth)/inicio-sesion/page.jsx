

import AuthFooter from '@/componentes/Auth/AuthFooter'
import IniciarSesionForm from '@/modules/Auth/Components/Form/IniciarSesionForm'
import React from 'react'

function LoginPage() {
    return (
        <>
            <IniciarSesionForm />
            <AuthFooter />
        </>
    )
}

export default LoginPage