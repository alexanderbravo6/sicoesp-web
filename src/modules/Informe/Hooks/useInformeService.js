
import useSWR from "swr";
import { configSWR } from "@/shared/Constants/GlobalConstants";
import useAxiosEvaluacion from "@/shared/Hooks/useAxiosEvaluacion";
import useClienteAxios from "../../../shared/Hooks/useClienteAxios";

export const useInformeService = () => {
    const axios = useClienteAxios();
    //consulta SWR

    const FetchInformes = () => {
        const fetcher = () => axios.get("/v1/informes").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("informes", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    };
    const registrarInforme = async (data) => {
        try {
            const response = await axios.post(`/v1/informes`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const actualizarInforme = async (id, data) => {
        try {
            const response = await axios.put(`/v1/informes/${id}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };
    const eliminarInforme = async (id, data) => {
        try {
            const response = await axios.delete(`/v1/informes/${id}`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    return {
        FetchInformes,
        registrarInforme,
        actualizarInforme,
        eliminarInforme
    }
}