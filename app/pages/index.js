import { useEffect, useState } from 'react';
import { getExchangeRate, getHistoricalData } from '../services/exchangeService';
import ExchangeRateChart from '../components/ExchangeRateChart';


//obtiene y muestra el tipo de cambio actual y el historial a través de un gráfico, actualizando los datos desde el servicio de API
export default function Home() {
    const [exchangeRate, setExchangeRate] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);
    const [historicalData, setHistoricalData] = useState([]);
    
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Tipo de Cambio Actual</h1>
            <p className="text-xl text-center mb-2">Actual: {exchangeRate}</p>
            <p className="text-center text-gray-500 mb-6">Última Actualización: {lastUpdated}</p>
            
            <h2 className="text-2xl font-semibold mt-8">Historial de Tipo de Cambio</h2>
            <div className="bg-white p-4 shadow rounded-lg">
                <ExchangeRateChart historicalData={historicalData} />
            </div>
        </div>
    );

    useEffect(() => {
        const fetchData = async () => {
            const data = await getExchangeRate();
            setExchangeRate(data?.rate);
            setLastUpdated(data?.lastUpdated);

            const historyData = await getHistoricalData();
            setHistoricalData(historyData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Tipo de Cambio Actual</h1>
            <p>Actual: {exchangeRate}</p>
            <p>Última Actualización: {lastUpdated}</p>
            <h2>Historial de Tipo de Cambio</h2>
            <ExchangeRateChart historicalData={historicalData} />
        </div>
    );

    
}

