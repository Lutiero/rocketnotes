import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./style"

export function Header() {
  return (
    <Container>
      <Profile to="/me">
        <img src="https://github.com/lutiero.png" alt="Foto de perfil" />
        <div>
          <span>Bem vindo(a)</span>
          <strong>Lutiero Pedroso Fabri</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
