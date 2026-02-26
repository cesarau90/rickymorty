import { useEffect, useState } from "react";
import type { Personaje } from "../types"

const usePersona = () => {
    const[personajes, setPersonajes] = useState<Personaje[]>([])

const traerPersonajes = async () => {
    try {
        const datos = await fetch("https://rickandmortyapi.com/api/character")
        const info = await datos.json()

        const lista = info.results.map((p: any) => ({
            id: p.id,
            nombre: p.name,
            imagen: p.image,
            estado: p.status
        }))

        setPersonajes(lista)   
    } catch (error) {
        console.error(error)
    }
}
    

    useEffect(()=>{
        traerPersonajes()
    },[])

    return{personajes}
}
export default usePersona