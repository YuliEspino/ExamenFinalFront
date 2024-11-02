import { Line } from 'react-chartjs-2';

//renderiza un gráfico de líneas que representa cómo actualiza el tipo de cambio a lo largo del tiempo.

const ExchangeRateChart = ({ historicalData }) => {
    // Formatear los datos para el gráfico
    const data = {
        labels: historicalData.map(data => data.date), // Etiquetas de fechas
        datasets: [
            {
                label: 'Tipo de Cambio',
                data: historicalData.map(data => data.rate),
                fill: false,
                borderColor: 'blue',
                tension: 0.1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Fecha'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Tipo de Cambio'
                }
            }
        }
    };

    return <Line data={data} options={options} />;
};

export default ExchangeRateChart;
