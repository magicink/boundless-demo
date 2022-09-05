window.App = window.App || {}
const { setState } = App
export const Characters = [
  {
    name: 'Player One'
  },
  {
    name: 'Player Two'
  },
  {
    name: 'Player Three'
  }
]
setState && setState({ Characters })
