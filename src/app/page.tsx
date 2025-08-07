'use client';


import Link from "next/link";

import { useEffect, useState } from 'react';
import type { Apartamento } from '@/types';



export default function Home() {
  const [apartamentos, setApartamentos] = useState<Apartamento[]>([]);

  useEffect(() => {
    const fetchApartamentos = async () => {
      const response = await fetch('/api/apartamentos');
      const data = await response.json();
      setApartamentos(data.apartamentos);
    };

    fetchApartamentos();
  }, []);

  console.log(apartamentos);

  return (
    <main className="flex flex-row gap-[32px] items-center p-8 h-screen">
      <Link
        href={`/aptos/${[0]}`}
        className="w-full h-full py-8 text-3xl font-bold text-center bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition hover:opacity-70"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1462396240927-52058a6a84ec?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <span className="relative z-10">{apartamentos[0]?.nombre}</span>
      </Link>
      <Link
        href={`/aptos/${[1]}`}
        className="w-full h-full max-w-md py-8 text-3xl font-bold text-center bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition hover:opacity-70"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <span className="relative z-10">{apartamentos[1]?.nombre}</span>
      </Link>

    </main>

  );
}
