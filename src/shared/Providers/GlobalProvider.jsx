'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { signOut, useSession } from 'next-auth/react';
import LoadingScreenMinedu from "../Components/LoadingScreenMinedu";
import useClienteAxios from "../Hooks/useClienteAxios";
import useSWR from "swr";
import { configSWR } from "../Constants/GlobalConstants";
export const GlobalContext = createContext();

const accesoActual = [
    {
        "idPersonaRol": 2,
        "idRol": 2,
        "rol": "POSTULANTE ENCARGATURA",
        "idPersona": 1,
        "porDefecto": 1,
        "sede": {
            "idSede": 0,
            "idTipoSede": 1,
            "descripcionSede": "OFICINA VIRTUAL",
            "descripcionTipoSede": "DIFOID"
        },
        "menus": [
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Mis Documentos",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "person",
                "ruta": "informe",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Expedientes",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "directions",
                "ruta": "expediente",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Postulación",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "directions",
                "ruta": "postulacion",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Historial",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "checklist",
                "ruta": "historial",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
        ]
    },
    {
        "idPersonaRol": 1,
        "idRol": 1,
        "rol": "POSTULANTE CONTRATACIÓN",
        "idPersona": 1,
        "porDefecto": 1,
        "sede": {
            "idSede": 0,
            "idTipoSede": 1,
            "descripcionSede": "OFICINA VIRTUAL",
            "descripcionTipoSede": "DIFOID"
        },
        "menus": [
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Mis Documentos",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "person",
                "ruta": "informe",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Expedientes",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "directions",
                "ruta": "expediente",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Postulación",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "directions",
                "ruta": "postulacion",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Historial",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "checklist",
                "ruta": "historial",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
        ]
    },
    {
        "idPersonaRol": 3,
        "idRol": 3,
        "rol": "COMITÉ DE EVALUACIÓN",
        "idPersona": 1,
        "porDefecto": 1,
        "sede": {
            "idSede": 0,
            "idTipoSede": 1,
            "descripcionSede": "OFICINA VIRTUAL",
            "descripcionTipoSede": "DIFOID"
        },
        "menus": [
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Mis Documentos",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "person",
                "ruta": "informe",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Expedientes",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "directions",
                "ruta": "expediente",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Postulación",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "directions",
                "ruta": "postulacion",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
            {
                "idMenu": 1,
                "idMenuPadre": 0,
                "esPadre": false,
                "nombre": "Historial",
                "codigo": "GESMAT",
                "descripcion": "Gestión de Matrículas",
                "icono": "checklist",
                "ruta": "historial",
                "acciones": [
                    {
                        "idAccion": 1,
                        "nombre": "ACCEDER",
                        "codigo": "ACC"
                    },
                    {
                        "idAccion": 3,
                        "nombre": "AGREGAR",
                        "codigo": "AGR"
                    },
                    {
                        "idAccion": 4,
                        "nombre": "MODIFICAR",
                        "codigo": "MOD"
                    },
                    {
                        "idAccion": 5,
                        "nombre": "ELIMINAR",
                        "codigo": "ELI"
                    },
                    {
                        "idAccion": 2,
                        "nombre": "CONSULTAR",
                        "codigo": "CON"
                    }
                ]
            },
        ]
    }
]

export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobal debe estar dentro del proveedor GlobalContext');
    }
    return context;
}
const GlobalProvider = ({ children }) => {

    /*
        const axios = useClienteAxios();

        const fetchPermisos = async () => {
            const response = await axios.get(session ? `/v1/auth/accesos/${session?.user?.idPersona}` : null);
            if (response.data.success === false) {
                return null;
            } else {
                return response.data.data;
            }
        }
        const { data: accesos, error, isLoading } = useSWR("accesos_" + session?.user?.idPersona, fetchPermisos, configSWR);
      */

    const handleClickCerrarSesion = () => {

        signOut();
    }
    /*
        const accesoActual = accesos?.filter((acceso) => acceso.idPersonaRol === session?.user.idPersonaRol)
    
    */
    return (
        <GlobalContext.Provider value={{
            handleClickCerrarSesion,
            accesoActual,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export {
    GlobalProvider
}
export default GlobalContext