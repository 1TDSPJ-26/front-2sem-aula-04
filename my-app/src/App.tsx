//aprender a construir um componente funcional no react com typescript

export default function App() {
  //Área reservada para declarações

  const nome = "Alê";

  return (
    <div>
      {/* O HTML aqui é na verdade XML */}
      <h1>Meu componente</h1>
      <h2>Autor: {nome}</h2>
    </div>
  );
}
