import { useState } from "react";

const BuscaPersonaje = () => {
const [name, setName] = useState("");
const handleSubmit = e => {
  e.preventDefault();
  console.log("name:", name);
}

    return (
      <div className="busca-personaje">
        <h1>Buscador de Personajes Disney</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Inserta el nombre.." onChange={e => setName(e.target.value)}/>
          <input type="submit" value="Buscar" />
        </form>
      </div>
    );
}

export default BuscaPersonaje;