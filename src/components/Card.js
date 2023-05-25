import styled from "styled-components";

export default function Card() {
  return (
    <>
      <CardContainer>
        
        <Bloco>
          <p>Data e Horário</p>
          <Text>PREÇO</Text>
          <p>Local de Partida</p>
        </Bloco>
      </CardContainer>
    </>
  );
}
const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  color: black;
`;

const Text = styled.p`
  font-family: "Saira Stencil One", cursive;
  color: #ffb000;
  font-weight: 400;
  font-size: 14px;
`;

const CardContainer = styled.div`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
`;
