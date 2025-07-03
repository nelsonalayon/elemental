'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import DynamicChart from './DynamicChart';
import ApartmentChart from './ApartmentChart';

// Registrar los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Datos de ejemplo para gráfica de barras
const barData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Ventas 2024',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444',
        '#8B5CF6',
        '#F97316',
      ],
      borderColor: [
        '#1D4ED8',
        '#059669',
        '#D97706',
        '#DC2626',
        '#7C3AED',
        '#EA580C',
      ],
      borderWidth: 1,
    },
  ],
};

// Datos de ejemplo para gráfica de líneas
const lineData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Usuarios Activos',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      borderColor: '#3B82F6',
      backgroundColor: '#3B82F6',
      tension: 0.1,
    },
    {
      label: 'Nuevos Usuarios',
      data: [28, 48, 40, 19, 86, 27],
      fill: false,
      borderColor: '#10B981',
      backgroundColor: '#10B981',
      tension: 0.1,
    },
  ],
};

// Datos de ejemplo para gráfica de dona
const doughnutData = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [
    {
      label: 'Dispositivos',
      data: [300, 50, 100],
      backgroundColor: [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
      ],
      borderColor: [
        '#1D4ED8',
        '#059669',
        '#D97706',
      ],
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Gráfica de Ejemplo',
    },
  },
};

export default function Chart() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Ejemplos de Gráficas con Chart.js
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gráfica de Barras */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Gráfica de Barras</h2>
          <Bar data={barData} options={chartOptions} />
        </div>

        {/* Gráfica de Líneas */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Gráfica de Líneas</h2>
          <Line data={lineData} options={chartOptions} />
        </div>

        {/* Gráfica de Dona */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-center">Gráfica de Dona</h2>
          <div className="w-full max-w-md mx-auto">
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>

        {/* Gráfica Dinámica */}
        <div className="lg:col-span-2">
          <DynamicChart />
        </div>

        {/* Gráfica del Apartamento */}
        <div className="lg:col-span-2">
          <ApartmentChart />
        </div>
      </div>

      {/* Ejemplo con datos dinámicos */}
      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Datos Dinámicos</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Puedes actualizar los datos de las gráficas dinámicamente:
        </p>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <code className="text-sm">
            {`const newData = {
  labels: ['Lunes', 'Martes', 'Miércoles'],
  datasets: [{
    label: 'Ventas',
    data: [10, 20, 30],
    backgroundColor: '#3B82F6'
  }]
};`}
          </code>
        </div>
      </div>
    </div>
  );
}
