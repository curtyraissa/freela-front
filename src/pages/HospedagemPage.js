import styled from "styled-components";
import Logo from "../components/Logo";

export const HospedagemPage = () => {
  return (
    <>
      <Logo />
      <HospedagemContainer>
        <form>
          <input required />
          <button type="submit">Selecionar</button>
        </form>
      </HospedagemContainer>
    </>
  );
};

const HospedagemContainer = styled.div`
  display: "flex";
`;
