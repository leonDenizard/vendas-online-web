import { useState } from "react";
import styled from "styled-components";

import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/inpput/Input";
import { BackgroundImage } from "../styles/loginScreen.styles";
import { ContainerLogin } from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`User ${userName}, password ${password}`);
  };

  return (
    <Container>
      <BackgroundImage src="./background.png"></BackgroundImage>
      <ContainerLogin>
        <Icon className="bx bx-code-alt"></Icon>
        <Input title="Usuário:" onChange={handleUserName} value={userName} />
        <Input
          type="password"
          title="Senha:"
          onChange={handlePassword}
          value={password}
        />
        <Button onClick={handleLogin}>Entrar</Button>
        <p>
          Esqueceu sua senha? <a href="#">Recuperar senha</a>
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

export const Icon = styled.i`
  font-size: 5vw;
`;
