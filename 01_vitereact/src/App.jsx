import Chai from './chai.jsx'

function App() {
// How to inject variables/js in the HTML 
const username = 'Vikrant'
  return (
    <>
      <Chai/>
      <h2>chai with vite with {username}</h2>
      <p>test the Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate consequuntur distinctio eaque vitae, rem deserunt unde eum fuga ipsa, magni vel! Itaque?</p>
    </>
  )
}

export default App
