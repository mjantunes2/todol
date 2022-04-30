import { Box, Heading, Input, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import axios from "axios";

const Form = () => {
  const [atividade, setAtividade] = useState("");

  function limparCampos() {
    setAtividade("");
  }

  async function enviarAtividade() {
    try {
      await axios.post(
        "https://api-to-do-list-test.herokuapp.com/atividade/create",
        {
          atividade,
        }
      );

      limparCampos();

      alert("Atividade enviada com sucesso");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Paper style={{ padding: "1em" }}>
      <Wrap w="33%" h="" direction="column">
        <label>Nome da Atividade</label>
        <WrapItem w="100%">
          <Input
            value={atividade}
            onChange={(event) => {
              setAtividade(event.target.value);
            }}
            bgColor="white"
            fontWeight="medium"
            placeholder="Nome da Atividade"
          />
        </WrapItem>
        <Button onClick={enviarAtividade} variant="text">
          Enviar
        </Button>
      </Wrap>
    </Paper>
  );
};

export default Form;
