import { Button, CloseButton,  } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import styles from "./style.module.css";

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
          <span>{props.resultado.atividade}</span>
        </h1>
      </div>
    </div>
  );
};

export default Atividade;
