import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Passo from "../components/Passo";
import { useNavigate } from "react-router-dom";
import CidadeContext from "../contexts/CidadeContext";

export const HomePage = () => {
  const [form, setForm] = useState("");
  const navigate = useNavigate();

  const { cidade, setCidade } = useContext(CidadeContext);
  
  useEffect(() => {
    async function fetchCidades() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/cidades`
        );
        setCidade(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    fetchCidades();
  }, [setCidade]);

  function submitForm(e) {
    e.preventDefault();
    navigate(`/passagens/cidade/${encodeURIComponent(form)}`);
  }

  return (
    <>
      <HomeContainer>
        <form onSubmit={submitForm}>
          <Label>Selecione a sua cidade de destino:</Label>
          <Select onChange={(e) => setForm(e.target.value)} value={form}>
            <option value="">Selecione uma cidade</option>
            {cidade?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nome}
              </option>
            ))}
          </Select>
          <button type="submit">Buscar</button>
        </form>
      </HomeContainer>
      <Passo />
    </>
  );
};

const HomeContainer = styled.div`
  display: flex;
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
