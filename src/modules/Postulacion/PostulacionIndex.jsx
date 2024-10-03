import TemplateBaseAlert from "@/shared/Components/Templates/TemplateBaseAlert"
import { Button, Checkbox, Divider } from "@nextui-org/react"
import { useState } from "react"
import ResultadoExpediente from "./Components/Forms/ResultadoExpediente"
import SeleccionarConvocatoriaModal from "./Components/Modals/SeleccionarConvocatoriaModal"
import ConvocatoriaSeleccionadaTable from "./Components/Tables/ConvocatoriaSeleccionadaTable"


function PostulacionIndex() {
    const [expedienteEncontrado, setExpedienteEncontrado] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const handleSubmmit = () => {
        console.log('Postulando...')
    }
    const [declaracionJurada, setDeclaracionJurada] = useState(false)
    const handleSearch = () => {

        setExpedienteEncontrado(true)
    }
    const handleClean = () => {
        console.log('Limpiando...')
        setExpedienteEncontrado(false)
    }
    return (
        <>
            <section className='my-4'>
                <TemplateBaseAlert message='Debe tomar en cuenta que solo podrá postular a 2 convocatorias por postulación como máximo de manera simultánea, podrá volver a hacer postulaciones una vez que haya culminado 
                ' type='Attention' />
                <div className='w-full bg-white h-auto md:overflow-hidden shadow-md rounded-lg p-4 '>
                    <h4 className='font-bold text-main' >SELECCIONAR EXPEDIENTE</h4>
                    <hr className="h-px mt-2 mb-4 bg-gray-200 border-0 "></hr>
                    <div>
                        <label htmlFor="expediente" className="block mb-2   text-xs font-medium text-gray-900 dark:text-white">NÚMERO DE EXPEDIENTE</label>
                        {
                            !expedienteEncontrado ?
                                <input type="text" id="expediente" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> :
                                <span className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                    EXP-2025-0001
                                </span>
                        }

                    </div>
                    <hr className="h-px my-4 bg-gray-200 border-0 "></hr>
                    <section className='flex gap-3'>
                        <Button size='sm' onClick={handleSearch} color="primary" variant="ghost" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon w-5 icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                            BUSCAR
                        </Button>
                        <Button onClick={handleClean} size='sm' variant="ghost" color="danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10l4 4m0 -4l-4 4" />
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                            </svg>  LIMPIAR
                        </Button>
                    </section>
                </div>

                {
                    expedienteEncontrado &&
                    (
                        <>
                            <ResultadoExpediente />
                            <section>

                                <div className="px-4 mt-10 sm:px-0">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">Convocatorias Seleccionadas</h3>
                                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Selección de convocatorias activas.</p>
                                </div>
                                <Divider className='my-4' />
                                <SeleccionarConvocatoriaModal />
                                <ConvocatoriaSeleccionadaTable />
                                <Divider className='my-4' />
                                <h5 className='text-lg text-[#006fee]'>
                                    Declaración Jurada :
                                </h5>
                                <div className="flex flex-col mt-4 gap-2 ">
                                    <Checkbox isSelected={declaracionJurada} onValueChange={setDeclaracionJurada}>
                                        <p className='text-gray-600 font-light text-md' >
                                            Confirmo que la carga de información requerida ha sido registrada en su totalidad y es precisa conforme a mi conocimiento y creencia.
                                        </p>
                                    </Checkbox>
                                </div>
                                <Button className='mt-10'
                                    {
                                    ...declaracionJurada ? { isDisabled: false } : { isDisabled: true }
                                    }
                                    onClick={handleSubmmit}
                                    color="primary" >
                                    Postular
                                </Button>
                            </section>
                        </>
                    )
                }

            </section>

        </>
    )
}

export default PostulacionIndex