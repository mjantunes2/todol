import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";
import axios from "axios";
import style from "./style.module.css";

const CriarAtividade = () => {
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
    <Paper elevation={3} sx={{ width: 1 }} style={{ padding: "1em" }}>
      <div style={{ textAlign: "center" }}>
        <label className={style.text}>Lista de Atividades</label>

        <Input
          value={atividade}
          onChange={(event) => {
            setAtividade(event.target.value);
          }}
          bgColor="white"
          fontWeight="medium"
          placeholder="Escreva sua Atividade"
          width='auto'
        />

        <Button onClick={enviarAtividade} variant="text">
          Enviar
        </Button>
      </div>
    </Paper>
  );
};

export default CriarAtividade;
