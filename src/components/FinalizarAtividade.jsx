import { Box, Button, Heading, Input, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./style.module.css";

export default function FinalizarAtividade() {
  const [feito, setFeito] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        `https://api-to-do-list-test.herokuapp.com/atividade/${id}`
      );

      setFeito(response.data.resultado.feito);
    }

    fetch();
  }, [id]);

  const onCheck = async (id) => {
    try {
      await axios.patch(
        `https://api-to-do-list-test.herokuapp.com/atividade/${id}`
      );

      const newData = data.filter((resultado) => resultado.id !== id);
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Wrap
        w="100%"
        h="100%"
        bg="gray.500"
        justify="center"
        align="center"
        direction="column"
      >
        <Wrap w="33%" h="" direction="column">
          <label className={styles.label}>Atividade</label>
          <WrapItem w="100%">
            <Input
              value={feito}
              onChange={(event) => {
                setFeito(event.target.value);
              }}
              bgColor="white"
              fontWeight="medium"
            />
          </WrapItem>

          <Button size="md" backgroundColor="#F2b705" onClick={onCheck}>

          </Button>
        </Wrap>
      </Wrap>
    </>
  );
}
