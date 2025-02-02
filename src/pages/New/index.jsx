import { Link } from "react-router-dom"
import { Container, Form } from "./styles"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observação"></Textarea>
          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo item" />
          </Section>
          <Section>
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="nodejs" />
            </div>
          </Section>
          <Button title="Salvar"></Button>
        </Form>
      </main>
    </Container>
  )
}
