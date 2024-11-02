import axios from 'axios';

//realiza una solicitud a una API para obtener datos de tipo de cambio
export const getExchangeRate = async () => {
    try {
        const response = await axios.get('');
        return response.data;
    } catch (error) {
        console.error("Error al obtener el tipo de cambio", error);
        return null;
    }
};
