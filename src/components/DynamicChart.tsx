'use client';

import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Simulando datos que vienen de una API
const generateRandomData = () => {
  return Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
};

export default function DynamicChart() {
  const [chartData, setChartData] = useState({
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ventas Dinámicas',
        data: generateRandomData(),
        backgroundColor: '#3B82F6',
        borderColor: '#1D4ED8',
        borderWidth: 1,
      },
    ],
  });

  const updateData = () => {
    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: generateRandomData(),
        },
      ],
    });
  };

  // Actualizar datos automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: generateRandomData(),
          },
        ],
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Gráfica con Datos Dinámicos',
      },
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Datos que se Actualizan</h2>
        <button
          onClick={updateData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Actualizar Datos
        </button>
      </div>
      <Bar data={chartData} options={options} />
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
        Los datos se actualizan automáticamente cada 5 segundos, o puedes hacer clic en &quot;Actualizar Datos&quot;
      </p>
    </div>
  );
}
