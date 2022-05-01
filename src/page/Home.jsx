import { Container } from "@mui/material";
import React from "react";
import CriarAtividade from "../components/CriarAtividade";
import AtividadeLista from "../components/AtividadeLista";

export default function Home() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <CriarAtividade />
      <AtividadeLista />
    </Container>
  );
}
