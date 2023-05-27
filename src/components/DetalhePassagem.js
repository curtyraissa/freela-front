import styled from "styled-components";

export default function DetalhePassagem({
  preco,
  cia_aerea,
  data,
  horario_saida,
  horario_chegada,
  cidade_origem,
  cidade_destino,
}) {

  return (
    <>
      <DetalhePassagemContainer>
        <Bloco>
          <p>Data: </p>
          <Text>{data}</Text>
        </Bloco>
        <Bloco>
          <p>Cidade de Destino: </p>
          <Text>{cidade_destino}</Text>
        </Bloco>
        <Bloco>
          <p>Cidade de Origem: </p>
          <Text>{cidade_origem}</Text>
        </Bloco>
        <Bloco>
          <p>Companhia Aérea: </p>
          <Text>{cia_aerea}</Text>
        </Bloco>
        <Bloco>
          <p>Horário Previsto de Saída: </p>
          <Text>{horario_saida}</Text>
        </Bloco>
        <Bloco>
          <p>Horário Previsto de Chegada: </p>
          <Text>{horario_chegada}</Text>
        </Bloco>
        <Bloco>
          <p>Preço da Passagem: </p>
          <Text>{preco}</Text>
        </Bloco>
      </DetalhePassagemContainer>
    </>
  );
}

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
