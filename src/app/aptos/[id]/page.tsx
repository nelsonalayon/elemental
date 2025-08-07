'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ApartmentChart from '@/components/ApartmentChart';
import type { Apartamento, Cuotas, Persona } from '@/types';


export default function AptosPage() {
    const { id } = useParams();
    const [apartamento, setApartamento] = useState<Apartamento | null>(null);
    const [independence, setIndependence] = useState<Cuotas[]>([]);
    const [freedom, setFreedom] = useState<Cuotas[]>([]);
    const [personas, setPersonas] = useState<Persona[]>([]);

    useEffect(() => {
        const fetchApartamentos = async () => {
            const response = await fetch('/api/apartamentos');
            const data = await response.json();
            // Busca el apartamento por índice (id)
            setApartamento(data.apartamentos[Number(id)]);
            setIndependence(data.independence);      // Guarda las cuotas
            setFreedom(data.freedom);      // Guarda las cuotas
            setPersonas(data.personas);  // Guarda las personas
        };
        fetchApartamentos();
    }, [id]);

    if (!apartamento) return <div>Cargando...</div>;

    return (
  <div className="min-h-screen bg-blue-50">            
    <ApartmentChart apartamento={apartamento} cuotas={Number(id) === 0 ? independence : freedom} personas={personas} />
  </div>
);
}