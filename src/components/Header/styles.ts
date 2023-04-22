//parte do css do header-index
import styled from "styled-components"

export const Container = styled.header`
  //esse é o container 1 que toma conta da tela inteira
  background: var(--black);
`
export const Content = styled.div`
  // esse é o container 2 que fica centralizado com as escritas dentro e não toma conta da tela inteira
  max-width: 1120px; // largura maxima
  margin: 0 auto; // para centralizar

  
  display: flex;
  align-items: center;
  justify-content: space-between;
`
