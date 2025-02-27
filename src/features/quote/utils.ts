import {
  ESTADO_FETCH,
  NOMBRE_INVALIDO,
  MENSAJE_CARGANDO,
  NO_ENCONTRADO,
} from "./constants";

export const obtenerMensaje: (cita: string, estadoPedido: ESTADO_FETCH) => string = (cita, estadoPedido) => {
  if (estadoPedido === ESTADO_FETCH.CARGANDO) {
    return MENSAJE_CARGANDO;
  }

  if (estadoPedido === ESTADO_FETCH.ERROR) {
    return NOMBRE_INVALIDO;
  }
 
  // Como está hecho, nunca va a dar el mensaje de NO ENCONTRADO
  return cita ? `${cita}` : NO_ENCONTRADO;
};
