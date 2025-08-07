'use client';

import React from 'react';
import Link from 'next/link';


import type { Cuotas, Persona } from '@/types';

import Card from '../components/card';
import { formatCurrency } from '../utils';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


type ApartmentChartProps = {
  apartamento: {
    nombre: string;
    cuota_inicial: number;
    fecha_de_entrega: Date;
    linkConsignacion: string;
    valor: number;
    // agrega otros campos si los necesitas
  };
  cuotas: Cuotas[];
  personas: Persona[];
};


// Total pagado por las 4 personas

export default function ApartmentChart({ apartamento, cuotas, personas }: ApartmentChartProps) {

  const totalPagado = cuotas.reduce((sum, cuota) => sum + (cuota.valorPagado || 0), 0);
  // Función para formatear números como pesos colombianos
  const personasConPagos = personas.filter((persona) => {
    const totalPagadoPersona = cuotas
      .filter((cuota) => cuota.persona === String(persona.idPersona))
      .reduce((sum, cuota) => sum + (cuota.valorPagado || 0), 0);
    return totalPagadoPersona > 0;
  });

  const cuotaInicialPorPersona = apartamento.cuota_inicial / personasConPagos.length;

  const barData = {
    labels: personasConPagos.map((p) => p.nombre),
    datasets: [
      {
        label: 'Total Pagado',
        data: personasConPagos.map((persona) =>
          cuotas
            .filter((cuota) => cuota.persona === String(persona.idPersona))
            .reduce((sum, cuota) => sum + (cuota.valorPagado || 0), 0)
        ),
        backgroundColor: 'rgba(37, 99, 235, 0.7)', // azul
      },

    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Total Pagado por Persona' },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: cuotaInicialPorPersona, // <-- Aquí fijas el máximo del eje Y
        title: {
          display: true,
          text: 'Cuota Inicial por Persona',
          font: {
            size: 16,
            family: 'Arial',
            weight: 'bold' as const,
          },
          color: '#4B5563', // Color gris oscuro
        },
      },
    },
  };

  // funcion para calcular la fecha del proximo pago y quien tiene que pagar 

  // 1. Obtén la fecha actual
const ahora = new Date();

// 2. Filtra las cuotas con fecha de pago en el futuro
const cuotasFuturas = cuotas
  .filter(cuota => cuota.fechaPago && new Date(cuota.fechaPago) > ahora);

// 3. Busca la cuota con la fecha más próxima
const proximaCuota = cuotasFuturas.reduce((min, cuota) =>
  !min || new Date(cuota.fechaPago) < new Date(min.fechaPago) ? cuota : min,
  null as Cuotas | null
);

// 4. Busca la persona correspondiente
const personaProxima = personas.find(p => String(p.idPersona) === proximaCuota?.persona);



  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {apartamento.nombre}
      </h2>

      {/* Información resumen */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card title="Valor Total" value={formatCurrency(apartamento.valor)} color='text-red-600' />
        <Card title="Cuota Inicial" value={formatCurrency(apartamento.cuota_inicial)} color='text-yellow-600' />
        <Card
          title="Total Pag"
          value={formatCurrency(totalPagado)}
          adicional={`Falta: ${formatCurrency(apartamento.cuota_inicial - totalPagado)}`}
        />
        <div>
          <Card title="Proxima cuota" value={
              proximaCuota
                ? `${personaProxima?.nombre} - ${new Date(proximaCuota.fechaPago).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })}`
                : 'Sin próximas cuotas'
            } />
            <Link href={apartamento.linkConsignacion} className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Hacer la consignación
            </Link>
        </div>


      </div>

      {/* Botones para ver pagos individuales */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Pagos por persona:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {personasConPagos.map((persona) => {
            // Filtra las cuotas de esta persona
            const cuotasDePersona = cuotas.filter(cuota => cuota.persona === String(persona.idPersona));
            // Suma el valorPagado de todas las cuotas de esta persona
            const totalPagadoPersona = cuotasDePersona.reduce((sum, cuota) => sum + (cuota.valorPagado || 0), 0);

            return (
              <div key={persona.idPersona} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                <div className={`w-4 h-4 rounded `}></div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">{persona.nombre}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatCurrency(totalPagadoPersona)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='w-full h-120 mb-8'>
        <Bar data={barData} options={barOptions} />
      </div>



      {/* Información adicional */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-semibold mb-2">Información Financiera:</h3>
        <ul className="text-sm space-y-1">
          <li>• Porcentaje de cuota inicial con respecto al valor total: {((apartamento.cuota_inicial * 100) / apartamento.valor).toFixed(1)}%</li>
          <li>• Porcentaje pagado de la cuota inicial: {((totalPagado * 100) / apartamento.cuota_inicial).toFixed(1)}%</li>
          <li>• Falta por pagar de cuota inicial: {formatCurrency(apartamento.cuota_inicial - totalPagado)}</li>
          <li>• Saldo restante del apartamento: {formatCurrency(apartamento.valor - totalPagado)}</li>
        </ul>
      </div>
    </div>
  );
}
