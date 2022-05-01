import { Container, List } from "@mui/material";
import React, { useState } from "react";
import CriarAtividade from "../components/CriarAtividade";
import TodoItem from "../components/TodoItem";
import AtividadeLista from "../components/AtividadeLista";

export default function Home() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <CriarAtividade />
      <AtividadeLista />
    </Container>
  );
}
