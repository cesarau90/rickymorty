import "./card.css"

interface Props {
  nombre: string
  imagen: string
  estado: string
}

function Card({ nombre, imagen, estado }: Props) {
  const estadoClass =
    estado === "Alive" ? "alive" : estado === "Dead" ? "dead" : "unknown"

  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <div className="info">
        <h3>{nombre}</h3>
        <p className={estadoClass}>{estado}</p>
      </div>
    </div>
  )
}

export default Card