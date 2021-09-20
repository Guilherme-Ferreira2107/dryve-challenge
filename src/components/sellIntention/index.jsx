import filterPlus from "../../assets/icons/plus-blue.png";

import TitleComponent from "../title";
import ButtonComponent from "../button";

import { ContainerCenter, Wrapper } from "./styles";

const SellIntention = () => {
  return (
    <Wrapper className="c-container-cards">
      <TitleComponent value="Inteção de venda" />

      <ContainerCenter>
        <ButtonComponent text="Adicionar" srcUrlImage={filterPlus} />
      </ContainerCenter>
    </Wrapper>
  );
};

export default SellIntention;
