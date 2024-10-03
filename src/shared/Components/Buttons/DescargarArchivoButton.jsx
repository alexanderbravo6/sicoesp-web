
'use client'

import { IconPDF } from '@/componentes/UI/Icons';
import useClienteAxios from '@/shared/Hooks/useClienteAxios';
import { Button } from '@nextui-org/react';
import { useState, useEffect, useCallback } from 'react'

export default function DescargarArchivoButton({ id }) {
    const [isDownloading, setIsDownloading] = useState(false)
    const [progress, setProgress] = useState(0)
    const axios = useClienteAxios();
    useEffect(() => {
        let timer
        if (isDownloading && progress < 100) {
            timer = setTimeout(() => setProgress(prev => prev + 1), 50)
        } else if (progress === 100) {
            setIsDownloading(false)
        }
        return () => clearTimeout(timer)
    }, [isDownloading, progress])


    const handleDownload = async (e) => {
        e.preventDefault();

        try {

            // Realiza una solicitud GET a la API para descargar el archivo
            const response = await axios.get(`/v1/archivo/descargar/${id}`, {
                responseType: 'blob',
            });


            // Crea un enlace para descargar el archivo
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;

            // Intenta obtener el nombre del archivo desde el encabezado Content-Disposition
            const contentDisposition = response.headers['content-disposition'];
            let fileName = 'archivo.pdf'; // Nombre por defecto
            if (contentDisposition && contentDisposition.indexOf('attachment') !== -1) {
                const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
                if (fileNameMatch.length === 2) {
                    fileName = fileNameMatch[1];
                }
            }

            // Asigna el nombre al archivo descargado
            link.setAttribute('download', fileName);

            // Agrega el enlace al DOM y fuerza la descarga
            document.body.appendChild(link);
            link.click();

            // Limpia el enlace una vez que el archivo se ha descargado
            link.remove();
            setIsDownloading(true)
            setProgress(0)

        } catch (error) {
            console.error('Error al descargar el archivo:', error);
            alert('Hubo un error al descargar el archivo');
        }
    };
    return (

        <Button isIconOnly isDisabled={isDownloading} onClick={handleDownload} size="sm" title='Descargar Archivo' className='border-none' variant="ghost" color="secondary" >
            <IconPDF />
        </Button>


    )
}