import { FC } from "react";
import { INoticiasNormalizadas } from "./Noticias.type";
import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  BotonLectura,
} from "./styled";

type TarjetaNoticiaCardProps = {
    n: INoticiasNormalizadas,
    setModal: Function; 
}


const NoticiaCard: FC<TarjetaNoticiaCardProps> = ({n, setModal}: TarjetaNoticiaCardProps) => {

  return (
    <TarjetaNoticia>
        <ImagenTarjetaNoticia src={n.imagen} />
        <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
        <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
        <DescripcionTarjetaNoticia>
          {n.descripcionCorta}
        </DescripcionTarjetaNoticia>
        <BotonLectura onClick={() => setModal(n)}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
};

export default NoticiaCard;