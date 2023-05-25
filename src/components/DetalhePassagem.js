import styled from "styled-components";

export default function DetalhePassagem() {
  return (
    <>
      <Title>Detalhe da Passagem:</Title>
      <DetalhePassagemContainer>
        <Bloco>
          <p>Cidade de Destino: </p>
          <Text>CIDADE</Text>
        </Bloco>
        <Bloco>
          <p>Cidade de Origem: </p>
          <Text>CIDADE</Text>
        </Bloco>
        <Bloco>
          <p>Companhia Aérea: </p>
          <Text>NOME</Text>
        </Bloco>
        <Bloco>
          <p>Horário Previsto de Chegada: </p>
          <Text>HORA</Text>
        </Bloco>
        <Bloco>
          <p>Preço da Passagem: </p>
          <Text>PREÇO</Text>
        </Bloco>
      </DetalhePassagemContainer>
    </>
  );
}

const Title = styled.p`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;

const Bloco = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

const Text = styled.p`
  font-family: "Saira Stencil One", cursive;
  color: #ffb000;
  font-weight: 400;
  font-size: 14px;
`;

const DetalhePassagemContainer = styled.div`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
`;
