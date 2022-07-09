import { API_URL } from "../../app/constants";
import { ICita } from "./types";

export const obtenerCita: (personaje?: string) => Promise<ICita> = async ( personaje) => {
  
  if (personaje && parseInt(personaje)) {
    throw new Error("El nombre debe ser un texto");
  }

  // API_URL ES LA URL QUE TRAE UNA CITA ALEATORIA, si se le agrega el personaje 
  // trae  una del personaje

  const url = personaje ? `${API_URL}?character=${personaje}` : API_URL;
  const respuesta = await fetch(url);
  const [data] = await respuesta.json();

  // se hace esto porque si no trae un array con un objeto
  const dataNormalizada = {
    cita: data.quote,
    personaje: data.character,
    imagen: data.image,
    direccionPersonaje: data.characterDirection,
  };

  return dataNormalizada;
};
