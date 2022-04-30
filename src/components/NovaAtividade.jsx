import { Box, Button, Heading, Input, Wrap, WrapItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

export default function NovaAtividade() {
  const [atividade, setAtividade] = useState('')
  const [descricao, setDescricao] = useState('')
  const [feito, setFeito] = useState('')

  function limparCampos() {
    setAtividade('')
    setDescricao('')
    setFeito('')
  }

  async function enviarAtividade() {
    try {
      await axios.post('https://api-to-do-list-test.herokuapp.com/atividade/create', {
        atividade,
        descricao,
        feito
      })

      limparCampos()

      alert('Atividade enviada com sucesso')
    } catch (error) {
      alert(error)
    }
  }

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
        <Box>
          <Heading
            size="2xl"
            textAlign="center"
            bg="grey.500"
            w="100%"
            mt="70px"
          >
            Cadastrar nova Atividade:
          </Heading>
        </Box>

        <Wrap w="33%" h="" direction="column">
          <label className={styles.label}>Nome da Atividade</label>
          <WrapItem w="100%">
            <Input
              value={atividade}
              onChange={event => {
                setAtividade(event.target.value)
              }}
              bgColor="white"
              fontWeight="medium"
              placeholder="Nome da Atividade"
            />
          </WrapItem>

          <Button size="md" backgroundColor="#F2b705" onClick={enviarAtividade}>
            Enviar
          </Button>
        </Wrap>
      </Wrap>
    </>
  )
}