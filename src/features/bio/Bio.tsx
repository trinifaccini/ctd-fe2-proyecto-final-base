import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import styles from "./styles.module.css";
import { 
  StyledContainer, 
  StyledButtonContainer, 
  StyledBioImg, 
  StyledBioName, 
  StyledBioDesc, 
  StyledButton 
} from "./styles";

const Bio = () => {

  // Como default vemos a Bart
  // INFO_SIMPSONS es un objeto con los diferentes personajes (objetos) 
  const [bioActiva, setBioActiva] = useState(INFO_SIMPSONS[NombresSimpsons.BART]);

  const onClick: (nombre: NombresSimpsons) => void = (nombre) => {
    setBioActiva(INFO_SIMPSONS[nombre]);
  }

  // Devuelve un botón con el nombre del personaje (creador de botones)
  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <StyledButton
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        active = {bioActiva.id === nombre ? true : false}
      >
        {nombre}
      </StyledButton>
    ));
  };

  return (
    <StyledContainer>
      <StyledButtonContainer>
        {crearBotones()}
      </StyledButtonContainer>
      <div>
        <div>
          <StyledBioImg
            src={bioActiva.image}
            alt={bioActiva.nombre}
            className={styles.bioImagen}
          />
        </div>
        <div>
          <StyledBioName> {bioActiva.nombre}</StyledBioName>
          <StyledBioDesc>{bioActiva.descripcion}</StyledBioDesc>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Bio;
