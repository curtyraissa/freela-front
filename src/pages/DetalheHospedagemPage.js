import { useEffect, useState } from "react";
import axios from "axios";
import DetalheHospedagem from "../components/DetalheHospedagem";
import Logo from "../components/Logo";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

export const DetalheHospedagemPage = () => {
  const [detalheHospedagem, setDetalheHospedagem] = useState([]);

  const { id } = useParams(); 

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/hospedagens/${id}`)
      .then((res) => {
        setDetalheHospedagem(res.data);
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
      <DetalheHospedagem
        foto={detalheHospedagem.foto}
        hotel={detalheHospedagem.hotel}
        preco_diaria={detalheHospedagem.preco_diaria}
        cafe_da_manha_texto={detalheHospedagem.cafe_da_manha_texto}
        estacionamento_texto={detalheHospedagem.estacionamento_texto}
      />
      <Link  to={`/`}>
      <Button>Voltar para Home!</Button>
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