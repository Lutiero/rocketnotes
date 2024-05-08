import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { FiPlus, FiSearch } from "react-icons/fi"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title="Todos" $isactive={true} />
        </li>
        <li>
          <ButtonText title="Reactjs" $isactive={false} />
        </li>
        <li>
          <ButtonText title="Nodejs" $isactive={false} />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Digite sua pesquisa" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: 1, name: "react" },
                { id: 2, name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
