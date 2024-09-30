
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials) {
                try {
                    /*
                    // Aquí se debe realizar la petición a la API para validar las credenciales
                    const request = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/v1/auth/iniciar-sesion', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            usuario: credentials?.usuario,
                            clave: credentials?.clave
                        })
                    });
                    const response = await request.json();

                    if (response?.success === true) {

                        //guardar le accesos en localstorage


                        
                        */
                    const user = {
                        // Datos de sesión configurables
                        'idPersonaRol': 1,
                        'idRol': 4,
                        'idSede': 1,
                        'anio': 2024,
                        'sede': "IESP MONTERRICO",
                        'descripcionRol': "POSTULANTE ENCARGATURA",
                        'idInstitucionActiva': 1,
                        // Datos no configurables
                        'idPersona': 1,
                        'idUsuario': 1,
                        'nombreCompleto': "BRYAN ALEXANDER MOSCOL BRAVO",
                        'token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvdjEvYXV0aC9pbmljaWFyLXNlc2lvbiIsImlhdCI6MTcyNzQ1MjY0MiwiZXhwIjoxNzI3NDU2MjQyLCJuYmYiOjE3Mjc0NTI2NDIsImp0aSI6InNka2FHUXhHNzBmak5IbksiLCJzdWIiOiIyMyIsInBydiI6IjkwZjBmM2NhNjA0NWUzYzYyZjc2ZWRjMmM4NWNhMDVhMzRkYzBjOTIifQ.4y97jy88xt1__y8-uTumgrXFb5rzxzzye1b9A4RB8vs",
                        'tipoToken': "Bearer",
                        'estadoProceso': 1,
                        }

                        return user;
                 /*   } else {
                        throw new Error(response?.messages || 'Error al iniciar sesión');
                    }*/
        } catch(e) {
            throw new Error(e.message || 'Error al iniciar sesión');
        }
},
        }),
    ],
pages: {
    signIn: '/inicio-sesion',
        signOut: '/inicio-sesion',
            error: '/inicio-sesion',
                verifyRequest: '/',
                    newUser: null
},
session: {
    strategy: "jwt",
        maxAge: 30 * 60 * 6, // Set appropriate session duration (e.g., 30 minutes)
            updateAge: 24 * 60 * 60, // Refresh tokens regularly (e.g., every day)
    },
callbacks: {
        async jwt({ token, user, trigger, session, request }) {
        if (user) {
            token.user = user;
          //  token.accessToken = user.token;
        }

        // Verifica si la solicitud proviene de un trigger 'update'
        if (trigger === 'update') {

            token.user.anio = session.user.anio;
            token.user.idInstitucionActiva = session.user.idInstitucionActiva;
            token.user.idSede = session.user.idSede;
            token.user.descripcionRol = session.user.descripcionRol;
            token.user.sede = session.user.sede;
            token.user.idRol = session.user.idRol;
            token.user.idPersonaRol = session.user.idPersonaRol;
            return token;
        }

        return token;
    },
        async session({ session, token }) {
        session.user = token.user;
        return session;
    }
}

}
const handler = NextAuth(authOptions);

export {
    handler as GET,
    handler as POST
}