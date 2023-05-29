import Logo from "../components/Logo";
import DetalheCidade from "../components/DetalhePassagem";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const DetalhePassagemPage = () => {
  const [detalhePassagem, setDetalhePassagem] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/passagens/${id}`)
      .then((res) => {
        setDetalhePassagem(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [id]);

  return (
    <>
      <Logo />
      <Text>Detalhe da passagem selecionada:</Text>
      <Link  to={`/hospedagens/cidade/${id}`}>
      <DetalheCidade
        preco={detalhePassagem.preco}
        cia_aerea={detalhePassagem.cia_aerea}
        data={detalhePassagem.data}
        horario_chegada={detalhePassagem.horario_chegada}
        horario_saida={detalhePassagem.horario_saida}
        cidade_destino={detalhePassagem.cidade_destino}
        cidade_origem={detalhePassagem.cidade_origem}
      />
      </Link>
      <Link  to={`/hospedagens/cidade/${id}`}>
      <Button>Hospedagens disponíveis</Button>
      </Link>
      
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

const Button = styled.button`
  width: 100%;
  margin-top: 50px;
`;