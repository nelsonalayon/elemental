import React from "react";

type CardProps = {
    title: string;
    value: number | string;
    color?: string; // opcional, para personalizar el color del valor
    adicional?: string;
};

export default function Card({ title, value, color = "text-blue-600", adicional = "" }: CardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center justify-center w-full max-w-xs">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">{title}</h3>
            <span className={`text-3xl font-bold ${color}`}>{value}</span>
            <p className="text-sm text-green-600 dark:text-green-400">
            {adicional}
          </p>
        </div>
    );
}