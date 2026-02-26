import "./App.css"
import { Card } from "./components"
import { usePersona } from "./hooks"

function App() {
  const { personajes } = usePersona()

  return (
    <div className="container">
      <h1 className="titulo">Rick y Morty</h1>
      {personajes.map((p) => (
        <Card
          key={p.id}
          nombre={p.nombre}
          imagen={p.imagen}
          estado={p.estado}
        />
      ))}
    </div>
  )
}

export default App