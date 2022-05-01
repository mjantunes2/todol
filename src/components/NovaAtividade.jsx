import { Box, Button, Heading, Input, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

export default function NovaAtividade() {
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
    <>
      <Wrap>
        <Box>
          <Heading>Cadastrar nova Atividade:</Heading>
        </Box>

        <Wrap>
          <label>Nome da Atividade</label>
          <WrapItem>
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

          <Button size="md" onClick={enviarAtividade}>
            Enviar
          </Button>
        </Wrap>
      </Wrap>
    </>
  );
}
