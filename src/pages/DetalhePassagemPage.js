import Logo from "../components/Logo";
import DetalheCidade from "../components/DetalhePassagem";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export const DetalhePassagemPage = () => {
  const [detalhePassagem, setDetalhePassagem] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/passagens/3`)
      // TODO - puxar o id de forma dinamica - :id
      .then((res) => {
        setDetalhePassagem(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <>
      <Logo />
      <Text>Detalhe da passagem selecionada:</Text>
      <DetalheCidade
        preco={detalhePassagem.preco}
        cia_aerea={detalhePassagem.cia_aerea}
        data={detalhePassagem.data}
        horario_chegada={detalhePassagem.horario_chegada}
        horario_saida={detalhePassagem.horario_saida}
        cidade_destino={detalhePassagem.cidade_destino}
        cidade_origem={detalhePassagem.cidade_origem}
      />
    </>
  );
};

const Text = styled.p`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 20px;
  color: white;
  margin-bottom: 14px;
`;
