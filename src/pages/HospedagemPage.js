import styled from "styled-components";
import Logo from "../components/Logo";
import CardHospedagem from "../components/CardHospedagem";
import Filtro from "../components/Filtro";

export const HospedagemPage = () => {
  return (
    <>
      <Logo />
      <Filtro placeholder="Filtrar hospedagem"/>
      <HospedagemContainer>
        <Text>Hospedagens em CIDADE:</Text>
        <CardHospedagem />
      </HospedagemContainer>
    </>
  );
};

const HospedagemContainer = styled.div`
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
