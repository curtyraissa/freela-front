import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ErrorPage from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { PassagemPage } from "./pages/PassagemPage";
import { HospedagemPage } from "./pages/HospedagemPage";
import { DetalhePassagemPage } from "./pages/DetalhePassagemPage";

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/passagens" element={<PassagemPage />} />
          <Route path="/detalhe-passagem" element={<DetalhePassagemPage />} />
          <Route path="/hospedagens" element={<HospedagemPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
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
