import styled from "styled-components";

export const BackgroundImage = styled.img`
  height: calc(100vh - 4rem);
  @media (max-width: 468px) {
    display: none;
  }
`;

export const ContainerLogin = styled.div`
  background-color: #e2e6e9;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
