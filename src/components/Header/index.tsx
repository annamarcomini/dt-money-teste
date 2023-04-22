// esse é a parte do logo e do botão de nova transação
import logoIMG from "../../assets/Logo.svg" // importar a imagem da pasta em q ela está
import { Container, Content } from "./styles" // importar o estilo dos containers
export function Header() {
  return (
    <Container>
      {" "}
      {/* essa é a importação do css no componente*/}
      <Content>
        <img src={logoIMG} alt="dt money" />{" "}
        {/* essa tag serve para colocar o logo no header*/}
        <button type="button">
          Nova transação {/* esse é o botão do nova transação*/}
        </button>
      </Content>
    </Container> 
  )
}
