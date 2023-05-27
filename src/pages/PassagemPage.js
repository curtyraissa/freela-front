import styled from "styled-components";
import Logo from "../components/Logo";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export const PassagemPage = () => {
  const [passagem, setPassagem] = useState([]);
  const [filtro, setFiltro] = useState("");
  // const filtros = passagem.filter((item))

  useEffect(() => {
    axios
      // .get(`${process.env.REACT_APP_API_URL}/passagens/cidade/:cidade_id`)
      .get(`${process.env.REACT_APP_API_URL}/passagens/cidade/1`)
      .then((res) => {
        setPassagem(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <>
      <Logo />
      <Search
        type="search"
        name="filtrar"
        placeholder="Filtrar passagem"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <PassagemContainer>
        <Text>Passagens para CIDADE:</Text>
        <Bloco>
          {passagem.map((item) => (
            <Card
              key={item.id}
              data={item.data}
              horario={item.horario}
              preco={item.preco}
              localPartida={item.localPartida}
            />
          ))}
        </Bloco>
      </PassagemContainer>
    </>
  );
};

const Bloco = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Search = styled.input`
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PassagemContainer = styled.div`
  display: "flex";
  width: 100%;
  color: #fff;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;