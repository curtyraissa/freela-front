import styled from "styled-components";
import Logo from "../components/Logo";
import Passo from "../components/Passo";

const objSelect = [
  { value: "riodejaneiro", label: "Rio de Janeiro" },
  { value: "saopaulo", label: "São Paulo" },
  { value: "fortaleza", label: "Fortaleza" },
];

export const HomePage = () => {
  return (
    <>
      <Logo />
      <HomeContainer>
        <form>
          <Label>Selecione a sua cidade de destino:</Label>
          <Select>
            {objSelect.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </Select>
          <button type="submit">Buscar</button>
        </form>
      </HomeContainer>
        <Passo />
    </>
  );
};

const HomeContainer = styled.div`
  display: "flex";
  width: 100%;
`;

const Label = styled.label`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 20px;
  color: white;
`;

const Select = styled.select`
  font-size: 20px;
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: 1px solid #cccccc;
  padding: 15px;
  margin: 1px;
  color: gray;
  :focus {
    border: 2px solid #ffb6b6;
    margin: 0px;
  }
  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 90px 1px;
  }
`;
