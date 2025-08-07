export type ApartmentChartProps = {
  apartamento: Apartamento;
    cuotas: Cuotas;

    personas: Persona;
};

export type Apartamento = {
    idapto: number;
    nombre: string;
    cuota_inicial: number;
    fecha_de_entrega: Date;
    linkConsignacion: string;
    valor: number;
};

export type Persona = {
    idPersona: number;
    nombre: string; 
    email: string;    
};

export type Cuotas = {
    idPago: number;
    referenciApto: number;
    concepto: number;
    persona: string;
    fechaPago: number;
    valorEsperado: number;
    valorPagado: number;
    consignacion: string;
};

// Agrega más tipos según tus modelos