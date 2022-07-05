import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import { INoticiasNormalizadas } from "./Noticias.type";
import { ContenedorNoticias, ListaNoticias, TituloNoticias} from "./styled";
import NoticiaCard from "./NoticiaCard";
import {devolverNoticiaNormalizada } from "./utils";
import ModalContainer from "./ModalContainer";

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const obtenerInformacion = async () => {

    const respuesta = await obtenerNoticias();

    const data = respuesta.map((n) => {
      return devolverNoticiaNormalizada(n);
    });

    setNoticias(data);
  };

  useEffect(() => {
    obtenerInformacion();
  }, []);

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias> 
      <ListaNoticias>
        {noticias.map((n) => (
          <NoticiaCard n={n} setModal={setModal}/>
        ))}
        {modal ? 
          <ModalContainer modal={modal} setModal={setModal}/>
          : null}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
