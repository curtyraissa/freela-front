import styled from "styled-components";

export default function Filtro({placeholder}) {
  return (
    <>
      <Search type="search" name="filtrar" placeholder={placeholder} />
    </>
  );
}

const Search = styled.input`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
