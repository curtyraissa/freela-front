import styled from "styled-components";
import Logo from "../components/Logo";
import CardHospedagem from "../components/CardHospedagem";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const HospedagemPage = () => {
  const [hospedagem, setHospedagem] = useState([]);
  const [minPreco, setMinPreco] = useState("");
  const [maxPreco, setMaxPreco] = useState("");

  const filtragem = hospedagem.filter((h) => {
    const preco = parseFloat(h.preco.replace("R$", "").trim());
    const min = minPreco ? parseFloat(minPreco) : Number.MIN_VALUE;
    const max = maxPreco ? parseFloat(maxPreco) : Number.MAX_VALUE;
    return preco >= min && preco <= max;
  });
  
  const { id } = useParams(); 

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/hospedagens/cidade/${id}`)
      .then((res) => {
        setHospedagem(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <>
      <Logo />
      <Filtro>
        <Search
          type="search"
          name="minPreco"
          placeholder="Preço mínimo"
          value={minPreco}
          onChange={(e) => setMinPreco(e.target.value)}
        />
        <Search
          type="search"
          name="maxPreco"
          placeholder="Preço máximo"
          value={maxPreco}
          onChange={(e) => setMaxPreco(e.target.value)}
        />
      </Filtro>

      <HospedagemContainer>
        <Text>Hospedagens em CIDADE:</Text>
        <Bloco>
        {filtragem.map((item) => (
           <Link to={`/hospedagens/${item.id}`} key={item.id}>
            <CardHospedagem
              key={item.id}
              nome={item.nome}
              preco={item.preco}
            />
          </Link> 
          ))}
        </Bloco>
      </HospedagemContainer>
    </>
  );
};

const Filtro = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;

const Bloco = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
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

const HospedagemContainer = styled.div`
  width: 100%;
  color: #fff;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-family: "Saira Stencil One", cursive;
  font-weight: 400;
  font-size: 20px;
  color: white;
  margin-bottom: 14px;
`;
