import { Box, Heading, useUpdateEffect, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Atividade from "./Atividade";
import { useRef } from "react";

export default function AtividadeLista() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
      axios
        .get("https://api-to-do-list-test.herokuapp.com/atividade")
        .then((response) => {
          setData(response.data.resultado);
        })
        .catch((error) => console.log(error));

  });

  const onDelete = async (id) => {
    try {
      await axios.delete(
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
        direction="column"
        mt="73px"
        mb="73px"
      >
        <Box align="center">
          <Heading
            size="4xl"
            textAlign="center"
            bg="grey.500"
            w="100%"
            mt="70px"
            mb="50px"
          >
            Atividades:
          </Heading>
        </Box>
        <WrapItem>
          <Wrap justify="center" w="100%">
            {data.map((resultado, index) => (
              <WrapItem key={resultado.id}>
                <Atividade resultado={resultado} onClick={onDelete}></Atividade>
              </WrapItem>
            ))}
          </Wrap>
        </WrapItem>
      </Wrap>
    </>
  );
}
