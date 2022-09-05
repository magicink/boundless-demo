window.App = window.App || {}
const { getState, setState } = App

export const setCharacter = value => {
  const Characters = getState().Characters
  let character
  if (typeof value === 'string') {
    character = Characters.find(character => character.name === value)
  } else if (typeof value === 'object') {
    const { name } = value
    character = Characters.find(character => character.name === name)
  }
  character && setState && setState({ character })
}

export const getCharacter = () => {
  return getState().character
}

export const isCharacter = name => {
  if (getState) {
    const { character = {} } = getState()
    return character.name === name
  }
}
