
const requisitos = [
    {
        id: 1,
        requisito: "Requisito 1",
    }
]

function PostulantesTabla() {
    return (
        <table className=" w-full text-xs font-normal my-4 ">
            <thead className=" text-left text-[13px] text-gray-700 uppercase bg-gray-100 ">
                <tr>
                    <th className="p-2">
                        N° DOCUMENTO
                    </th>
                    <th className="p-2">
                        PRIMER APELLIDO
                    </th>
                    <th className="p-2">
                        SEGUNDO APELLIDO
                    </th>
                    <th className="p-2">
                        NOMBRES
                    </th>
                    <th className="p-2">
                        CELULAR
                    </th>
                    <th className="p-2">
                        CORREO
                    </th>
                    <th className="p-2">
                        NOMBRADO/CONTRATADO
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td  className="p-2">
                        065456465
                    </td>
                    <td  className="p-2">
                        PEREZ
                    </td>
                    <td  className="p-2">
                        GARCIA
                    </td>
                    <td  className="p-2">
                        JUAN
                    </td>
                    <td  className="p-2">
                        987654321
                    </td>
                    <td  className="p-2">
                        juan@gmail.com
                    </td>
                    <td  className="p-2">
                        NOMBRADO
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default PostulantesTabla