import { type ClassValue,clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}


export const range = (a: number , b: number) => (b - a) * Math.random() + a;