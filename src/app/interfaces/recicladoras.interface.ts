import { Material } from "./material.interface";

export interface Recicladoras{
    idrecicladora: number | null;
    nombre_rec: string | null;
    telefono_rec: string | null;
    paga: string | null;
    ciudad: string | null;
    barrio: string | null;
    calle: string | null;
    gps: string | null;
    estado: string | null;
    materiales: Material[]
}