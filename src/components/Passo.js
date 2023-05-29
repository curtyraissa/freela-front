import styled from "styled-components";

export default function Passo() {
  return (
    <>
      <PassoContainer>
        <p>1. Escolha a cidade que deseja visitar</p>
        <p>2. Veja as passagens disponiveis, com preços e datas</p>
        <p>
          3. Veja os locais aonde você pode se hospedar e todo o conforto que
          eles oferecem!
        </p>
      </PassoContainer>
      <Text>Agência de Viagens ✈️ </Text>;
    </>
  );
}

const Text = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 30px;
  position: fixed;
  top: 125px;
`;

const PassoContainer = styled.div`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  position: fixed;
  bottom: 60px;
  margin: 25px;
`;
