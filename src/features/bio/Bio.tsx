import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import styles from "./styles.module.css";

import { StyledContainer, StyledButtonContainer, StyledBioImg, StyledBioName, StyledBioDesc, StyledButton } from "./Bio.styles";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <StyledButton
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        active = {bioActiva.id === nombre ? true: false}
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
