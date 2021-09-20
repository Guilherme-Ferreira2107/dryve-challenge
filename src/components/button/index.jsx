import { ButtonWrapper } from "./styles";

const ButtonComponent = ({ text, srcUrlImage }) => {
  return (
    <ButtonWrapper>
      <img src={srcUrlImage} alt={text} />
      <span>{text}</span>
    </ButtonWrapper>
  );
};

export default ButtonComponent;
