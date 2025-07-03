'use client';

import React from 'react';
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

 
// Datos simulados del apartamento
const apartmentData = {
  valorTotal: 300000000, // $300 millones
  cuotaInicial: 100000000, // $100 millones (1/3 del total)
  pagos: {
    persona1: 15000000, // $15 millones
    persona2: 20000000, // $20 millones
    persona3: 18000000, // $18 millones
    persona4: 12000000, // $12 millones
  }
};

// Total pagado por las 4 personas
const totalPagado = Object.values(apartmentData.pagos).reduce((sum, pago) => sum + pago, 0);

export default function ApartmentChart() {
  // Función para formatear números como pesos colombianos
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Datos para la gráfica
  const getChartData = () => {
    return {
      labels: ['Valor Total'],
      datasets: [
        // Dataset para valor total del apartamento
      
        // Dataset para cuota inicial
       
        // Datasets individuales para cada persona (barra apilada)
        {
          label: 'Persona 1',
          data: [apartmentData.pagos.persona1],
          backgroundColor: '#3B82F6',
          borderColor: '#2563EB',
          borderWidth: 1,
          
        },
        {
          label: 'Persona 2',
          data: [apartmentData.pagos.persona2],
          backgroundColor: '#10B981',
          borderColor: '#059669',
          borderWidth: 1,          
        },
        {
          label: 'Persona 3',
          data: [apartmentData.pagos.persona3],
          backgroundColor: '#8B5CF6',
          borderColor: '#7C3AED',
          borderWidth: 1,          
        },
        {
          label: 'Persona 4',
          data: [apartmentData.pagos.persona4],
          backgroundColor: '#F97316',
          borderColor: '#EA580C',
          borderWidth: 1,          
        },
         {
          label: 'Cuota Inicial',
          data: [apartmentData.cuotaInicial - totalPagado],
          backgroundColor: '#F59E0B',
          borderColor: '#D97706',
          borderWidth: 1,          
        },
          {
          label: 'Valor Total',
          data: [apartmentData.valorTotal - apartmentData.cuotaInicial],
          backgroundColor: '#DC2626',
          borderColor: '#B91C1C',
          borderWidth: 1,          
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
     
      tooltip: {
        callbacks: {
          label: function(tooltipItem: { dataset: { label?: string }, parsed: { y: number } }) {
            const value = tooltipItem.parsed.y;
            return `${tooltipItem.dataset.label || 'Valor'}: ${formatCurrency(value)}`;
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true, // Habilita el apilamiento en el eje X
        title: {
          display: true,           
          
        },
        ticks: {
          autoSkip: false, // Muestra todas las etiquetas del eje X
          maxRotation: 0, // Evita la rotación de etiquetas
        }
      },
      y: {
        stacked: true, // Habilita el apilamiento en el eje Y
       
        ticks: {
          callback: function(value: string | number) {
            return formatCurrency(Number(value));
          }
        }
      }
      
    },
    // Configuración del grosor de las barras
    barThickness: 80, // Grosor fijo en píxeles
    // maxBarThickness: 100, // Grosor máximo
    barPercentage: .8, // Porcentaje del ancho disponible (0.0 a 1.0)
    categoryPercentage: 0.2, // Porcentaje del espacio de la categoría
    
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Financiación del Apartamento
      </h2>

      {/* Información resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <h3 className="font-semibold text-red-700 dark:text-red-300">Valor Total</h3>
          <p className="text-2xl font-bold text-red-800 dark:text-red-200">
            {formatCurrency(apartmentData.valorTotal)}
          </p>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-700 dark:text-yellow-300">Cuota Inicial</h3>
          <p className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">
            {formatCurrency(apartmentData.cuotaInicial)}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 className="font-semibold text-green-700 dark:text-green-300">Total Pagado</h3>
          <p className="text-2xl font-bold text-green-800 dark:text-green-200">
            {formatCurrency(totalPagado)}
          </p>
          <p className="text-sm text-green-600 dark:text-green-400">
            Falta: {formatCurrency(apartmentData.cuotaInicial - totalPagado)}
          </p>
        </div>
      </div>

      {/* Botones para ver pagos individuales */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Pagos por persona:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <div>
              <p className="font-medium text-blue-700 dark:text-blue-300">Persona 1</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">{formatCurrency(apartmentData.pagos.persona1)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <div>
              <p className="font-medium text-green-700 dark:text-green-300">Persona 2</p>
              <p className="text-sm text-green-600 dark:text-green-400">{formatCurrency(apartmentData.pagos.persona2)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <div>
              <p className="font-medium text-purple-700 dark:text-purple-300">Persona 3</p>
              <p className="text-sm text-purple-600 dark:text-purple-400">{formatCurrency(apartmentData.pagos.persona3)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <div>
              <p className="font-medium text-orange-700 dark:text-orange-300">Persona 4</p>
              <p className="text-sm text-orange-600 dark:text-orange-400">{formatCurrency(apartmentData.pagos.persona4)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gráfica */}
      <div className="h-96"> {/* Altura fija de 384px */}
        <Bar data={getChartData()} options={chartOptions} />
      </div>

      {/* Información adicional */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-semibold mb-2">Información Financiera:</h3>
        <ul className="text-sm space-y-1">
          <li>• Porcentaje de cuota inicial: {((apartmentData.cuotaInicial / apartmentData.valorTotal) * 100).toFixed(1)}%</li>
          <li>• Porcentaje pagado de la cuota inicial: {((totalPagado / apartmentData.cuotaInicial) * 100).toFixed(1)}%</li>
          <li>• Falta por pagar de cuota inicial: {formatCurrency(apartmentData.cuotaInicial - totalPagado)}</li>
          <li>• Saldo restante del apartamento: {formatCurrency(apartmentData.valorTotal - apartmentData.cuotaInicial)}</li>
        </ul>
      </div>
    </div>
  );
}
