import { CloseButton } from "@chakra-ui/react";

const Atividade = (props) => {
  return (
    <div>
      <div>
        <CloseButton
          color="red"
          onClick={() => props.onClick(props.resultado.id)}
        />
        <button onClick={() => {}}>
        </button>
      </div>

      <div>
        <h1>
          <span>{props.resultado.atividade}</span>
        </h1>
      </div>
    </div>
  );
};

export default Atividade;
