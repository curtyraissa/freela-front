import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ErrorPage from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { PassagemPage } from "./pages/PassagemPage";
import { HospedagemPage } from "./pages/HospedagemPage";
import { DetalhePassagemPage } from "./pages/DetalhePassagemPage";
import { DetalheHospedagemPage } from "./pages/DetalheHospedagemPage";
import CidadeContext from "./contexts/CidadeContext";
import { useState } from "react";

export default function App() {
  // const [cidade, setCidade] = useState(localStorage.getItem("cidade"));
  const [cidade, setCidade] = useState(JSON.parse(localStorage.getItem("cidade")));

  return (
    <PagesContainer>
      <CidadeContext.Provider value={{ cidade, setCidade }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/passagens" element={<PassagemPage />} />
            <Route path="/passagens/:id" element={<DetalhePassagemPage />} />
            <Route path="/hospedagens" element={<HospedagemPage />} />
            <Route path="/hospedagens/:id" element={<DetalheHospedagemPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </CidadeContext.Provider>
    </PagesContainer>
  );
}

const PagesContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #120a8f;
  width: calc(100vw - 50px);
  height: calc(100vh - 50px);
  padding: 25px;
`;
