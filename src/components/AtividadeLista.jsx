import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState, useParams} from "react";
import Atividade from "./Atividade";

export default function AtividadeLista() {
  const [data, setData] = useState([]);
  const finalizar = { atividade: 'feito'}

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

  const onCheck = async (id) => {
    try {
      await axios.patch(
        `https://api-to-do-list-test.herokuapp.com/atividade/${id}`, finalizar
      );
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
            mt="-40px"
            mb="10px"
          >
            Lista de Atividades:
          </Heading>
        </Box>
        <WrapItem>
          <Wrap justify="center" w="100%">
            {data.map((resultado, index) => (
              <WrapItem key={resultado.id}>
                <Atividade resultado={resultado} onClick={onDelete} onChange={onCheck}></Atividade>
              </WrapItem>
            ))}
          </Wrap>
        </WrapItem>
      </Wrap>
    </>
  );
}
