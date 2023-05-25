import styled from "styled-components";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Filtro from "../components/Filtro";

export const PassagemPage = () => {
  return (
    <>
      <Logo />
      <Filtro placeholder="Filtrar passagem" />
      <PassagemContainer>
        <Text>Passagens para CIDADE:</Text>
        <Card />
      </PassagemContainer>
    </>
  );
};

const PassagemContainer = styled.div`
  display: "flex";
  width: 100%;
  color: #fff;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;
