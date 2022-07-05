import { FC } from "react";
import { INoticiasNormalizadas } from "./Noticias.type";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import {
    CloseButton,
    TarjetaModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    BotonSuscribir,
    CotenedorTexto,
    ContenedorModal,
  } from "./styled";

type ModalContainerProps = {
    modal: INoticiasNormalizadas,
    setModal: Function; 
}

const ModalContainer: FC<ModalContainerProps> = ({modal, setModal}: ModalContainerProps) => {

    const img = SuscribeImage;
    const titulo = "Suscríbete a nuestro Newsletter";
    const descripcion = "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.";

    return (
        <ContenedorModal>
            <TarjetaModal>
            <CloseButton onClick={() => setModal(null)}>
                <img src={Close} alt="close-button" />
            </CloseButton>
            <ImagenModal src={modal.esPremium ? img : modal.imagen} alt="news-image" />
            <CotenedorTexto>
                <TituloModal>{modal.esPremium ? titulo : modal.titulo}</TituloModal>
                <DescripcionModal>{modal.esPremium ? descripcion : modal.descripcion}</DescripcionModal>
                {modal.esPremium && 
                    <BotonSuscribir onClick={() =>
                        setTimeout(() => {
                            alert("Suscripto!");
                            setModal(null);
                        }, 1000)
                        }
                    >
                Suscríbete
                </BotonSuscribir>}
            </CotenedorTexto>
            </TarjetaModal>  
        </ContenedorModal>
    );
};

export default ModalContainer;