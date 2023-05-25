import styled from "styled-components";

export default function Filtro() {
  return (
    <>
      <Search type="search" name="filtrar" placeholder="Filtrar Passagens" />
    </>
  );
}

const Search = styled.input`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
