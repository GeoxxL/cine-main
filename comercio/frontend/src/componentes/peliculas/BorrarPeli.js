import { useState } from "react";
import { borrarPelicula } from "../../servicios/PeliculaServicio";

export default function BorrarPeli(props) {
    

    const {id} = props;
    return (
        <>
        <button onClick={() => borrarPelicula(id)}>Borrar</button>
            
        </>
    );
}