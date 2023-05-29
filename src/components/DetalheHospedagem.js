import styled from "styled-components";

export default function DetalheHospedagem({
  foto,
  hotel,
  preco_diaria,
  cafe_da_manha_texto,
  estacionamento_texto
}) {

  return (
    <>
      <DetalheHospedagemContainer>
        <Bloco>
          <Imagem src={foto} alt={hotel}/>
        </Bloco>
        <Bloco>
          <p>Hotel: </p>
          <Text>{hotel}</Text>
        </Bloco>
        <Bloco>
          <p>Preço: </p>
          <Text>{preco_diaria}</Text>
        </Bloco>
        <Bloco>
          <p>Café da manha: </p>
          <Text>{cafe_da_manha_texto}</Text>
        </Bloco>
        <Bloco>
          <p>Estacionamento: </p>
          <Text>{estacionamento_texto}</Text>
        </Bloco>
      </DetalheHospedagemContainer>
    </>
  );
}

const Imagem = styled.img`
  width: 300px;
  height: 250px;
`;

const Bloco = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 14px;
`;

const Text = styled.p`
  font-family: "Saira Stencil One", cursive;
  color: #ffb000;
  font-weight: 400;
  font-size: 14px;
`;

const DetalheHospedagemContainer = styled.div`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
`;
