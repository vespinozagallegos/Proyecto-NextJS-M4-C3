// vendors
import React from "react"

// types
import { ICardProps } from "./types";

// Componente FUNCIONAL con el valor que recibe <> --->  asignado desde la interfaz
// se desestructuran los valores recibidos como params ()
export const Card: React.FC<ICardProps> = ({ title, description }) => {
    // se renderizan los params recibidos
    //? se agrega renderizado condicional para mejorar RENDIMIENTO DEL DOM
    return(
        <div>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

export default Card;