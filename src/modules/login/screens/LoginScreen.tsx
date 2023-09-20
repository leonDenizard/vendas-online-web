import styled from "styled-components";

import Input from "../../../shared/inputs/inpput/Input";
import { BackgroundImage } from "../styles/loginScreen.styles";
import { ContainerLogin } from "../styles/loginScreen.styles";

const LoginScreen = () => {
  return (
    <Container>
      <BackgroundImage src="./background.png"></BackgroundImage>
      <ContainerLogin>
        <Icon className="bx bx-code-alt"></Icon>
        <Input title="Usuário:" />
        <Input title="Senha:" />
      </ContainerLogin>
    </Container>
  );
};

export default LoginScreen;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1440px;
  border-radius: 20px;
  overflow: hidden;
`;

export const Icon = styled.i`
  font-size: 5vw;
`;
