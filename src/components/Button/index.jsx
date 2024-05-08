import { Container } from "./styles"
import PropTypes from "prop-types"

export function Button({ title }) {
  return <Container type="button">{title}</Container>
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}
