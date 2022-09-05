import './constants'
import { isCharacter, setCharacter } from './characters'

window.App = window.App || {}
const { getState, setState } = App

const setup = () => {
  const { initialized } = getState()
  if (!initialized) {
    setState && setState({ initialized: true })
  }
}

setup()

window.setCharacter = setCharacter
window.isCharacter = isCharacter
