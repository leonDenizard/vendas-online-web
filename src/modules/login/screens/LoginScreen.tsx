import styled from "styled-components";

import { BackgroundImage } from "../styles/loginScreen.styles";
import { ContainerLogin } from "../styles/loginScreen.styles";

const LoginScreen = () => {
  return (
    <Container>
      <BackgroundImage src="./background.png"></BackgroundImage>
      <ContainerLogin>
        <h1>Sign in</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic possimus
          voluptatibus pariatur qui, voluptas sapiente quidem nesciunt in quos
          ducimus modi voluptatum animi debitis numquam ea non ratione veniam
          maiores.
        </p>
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
