import TitleComponent from "../title";
import { Wrapper, ContainerCenter } from "./styles";

const Adverts = () => {
  return (
    <Wrapper className="c-container-cards">
      <TitleComponent value="Anúncios" />
      <ContainerCenter>
        <p>Este contato não possui anúncios vinculados.</p>
      </ContainerCenter>
    </Wrapper>
  );
};

export default Adverts;
