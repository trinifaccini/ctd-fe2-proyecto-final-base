import { INoticias } from "./fakeRest";

const reformatString = (string: String) => {
  const newString = string.split(" ")
  .map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  })
  .join(" ");

  return newString;
}

const calcularMinutosTranscurridos = (ahora: Date, fecha: Date) => {
  return (Math.floor((ahora.getTime() - fecha.getTime()) / 60000))
}

export const devolverNoticiaNormalizada = (n: INoticias) => {

  const titulo = reformatString(n.titulo);
  const ahora = new Date();
  const minutosTranscurridos = calcularMinutosTranscurridos(ahora, n.fecha);

  return {
    id: n.id,
    titulo,
    descripcion: n.descripcion,
    fecha: `Hace ${minutosTranscurridos} minutos`,
    esPremium: n.esPremium,
    imagen: n.imagen,
    descripcionCorta: n.descripcion.substring(0, 100),
  };

}