import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Logo from "../components/Logo";
import Passo from "../components/Passo";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [cidade, setCidade] = useState([]);
  const [form, setForm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cidades`)
      .then((res) => {
        setCidade(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  function submitForm(e) {
    e.preventDefault();
    setForm(e.target.value);
    navigate("/passagens?cidade=" + encodeURIComponent(form));
  }

  return (
    <>
      <Logo />
      <HomeContainer>
        <form onSubmit={submitForm}>
          <Label>Selecione a sua cidade de destino:</Label>
          <Select>
            <option value="">Selecione uma cidade</option>
            {cidade.map((item) => (
              <option key={item.id} value={item.nome}>
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
