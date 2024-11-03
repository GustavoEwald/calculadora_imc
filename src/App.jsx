import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Result from "./components/Result"


function App() {
  const [query, setQuery] = useState('')
  const [start, setStart] = useState(0)

  return (
  <>
    <Header started={start}/>
    <Formulario onQuery={setQuery} onStart={setStart}/>
    <Result imc={query}/>
  </>  
  )
}

export default App
