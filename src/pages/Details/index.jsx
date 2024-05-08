import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Container, Links, Content } from "./styles"

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao Reactjs</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            quaerat laboriosam accusamus consectetur non ullam, ex distinctio
            quae, autem perspiciatis incidunt temporibus voluptatibus aperiam
            doloribus voluptatem neque soluta illo omnis.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br/aulas</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
