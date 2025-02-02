import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Background, Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>
        <Input type="text" icon={FiUser} placeholder="Nome" />
        <Input type="email" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha" />
        <Button title="Cadastrar" />
        <Link to="/login">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
