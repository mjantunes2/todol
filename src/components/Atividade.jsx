import { Checkbox } from "@chakra-ui/react";
import styles from "./style.module.css";
import { DeleteIcon } from "@chakra-ui/icons";
import React from "react";

const Atividade = (props) => {
  return (
    <div
      className={
        props.resultado.feito == null
          ? styles.card_container
          : styles.card_container_feito
      }
    >
      <div className={styles.icons}>
        <DeleteIcon
          color="black"
          onClick={() => props.onClick(props.resultado.id)}
        />
        <Checkbox
          disabled={props.resultado.feito == null ? false : true}
          onChange={() => props.onChange(props.resultado.id)}
          className={styles.text_check}
        >
          Feito
        </Checkbox>
      </div>

      <div className={styles.card_titulo}>
        <h1>
          <span>
            {props.resultado.atividade}{" "}
            {props.resultado.feito != null ? "- finalizado" : ""}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Atividade;
