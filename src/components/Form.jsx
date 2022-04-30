import React from "react";
import { TextField, Button, Paper } from "@mui/material";

const Form = () => {
  

  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField id="outlined-basic" label="Atividade" variant="outlined" fullWidth />
        <Button variant="text">Enviar</Button>
      </div>
    </Paper>
  );
};

export default Form;
