import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ErrorPage from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { PassagemPage } from "./pages/PassagemPage";
import { HospedagemPage } from "./pages/HospedagemPage";

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/passagem" element={<PassagemPage />} />
          <Route path="/hospedagem" element={<HospedagemPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  );
}

const PagesContainer = styled.main`
  background-color: #120a8f;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`;
