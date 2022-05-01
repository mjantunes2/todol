import { CloseButton } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import styles from "./style.module.css";
import React from 'react';

const Atividade = (props) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.icons}>
        <CloseButton
          color="blue"
          onClick={() => props.onClick(props.resultado.id)}
        />
        <Checkbox
          onChange={() => props.onChange(props.resultado.id)}
        >Feito</Checkbox>
      </div>

      <div className={styles.card_titulo}>
        <h1>
          <span>{props.resultado.atividade} {props.resultado.feito != null ? "- finalizado" : ""}</span>
        </h1>
      </div>
    </div>
  );
};

export default Atividade;
