import styled from "styled-components";

export default function CardHospedagem({nome, preco}) {
  return (
    <>
      <CardHospedagemContainer>
        <Bloco>
          <p>Nome do Hotel: {nome}</p>
          <Text>PREÇO: {preco}</Text>
        </Bloco>
      </CardHospedagemContainer>
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

const CardHospedagemContainer = styled.div`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
`;
