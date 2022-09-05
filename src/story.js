window.Story = window.Story || {}
window.App = window.App || {}
const { getState } = Story
export const getPassage = () => {
  const { passage } = getState()
  return passage
}
