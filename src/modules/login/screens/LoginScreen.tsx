import { useState } from "react";
import styled from "styled-components";

import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/inpput/Input";
import { useRequests } from "../../../shared/hooks/useRequests";
import { BackgroundImage } from "../styles/loginScreen.styles";
import { ContainerLogin } from "../styles/loginScreen.styles";
import { UserType } from "../types/UserType";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    postRequest<UserType>("http://localhost:3000/auth", {
      email: email,
      password: password,
    });
  };

  return (
    <Container>
      <BackgroundImage src="./background.png"></BackgroundImage>
      <ContainerLogin>
        <Icon className="bx bx-code-alt"></Icon>
        <Input title="Usuário:" onChange={handleEmail} value={email} />
        <Input
          type="password"
          title="Senha:"
          onChange={handlePassword}
          value={password}
        />
        <Button loading={loading} onClick={handleLogin}>
          Entrar
        </Button>
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
