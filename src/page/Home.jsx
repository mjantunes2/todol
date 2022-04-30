import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form />
      <List sx={{ marginTop: "1em" }}>
        <TodoItem />
      </List>
    </Container>
  );
}
