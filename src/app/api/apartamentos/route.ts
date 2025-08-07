import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const apartamentos = await prisma.apto.findMany();
  const personas = await prisma.persona.findMany();
  const independence = await prisma.independence.findMany();
  const freedom = await prisma.freedom.findMany();

  return NextResponse.json({
    apartamentos,
    personas,
    independence,
    freedom,
  });
}