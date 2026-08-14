import Tailyni from './components/Nome/Tailyni.tsx';

export default function App() {

  return (
    <div className="App">
      <header>
        <h1>Meus Componentes</h1>
        <nav>
          <ul>
            <li>Item-1</li>
            <li>Item-2</li>
            <li>Item-3</li>
          </ul>
        </nav>
      </header>
      <main>
        <Tailyni />
        <h2>Conteúdo</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci excepturi, aperiam blanditiis reprehenderit quasi aliquam corporis incidunt dolore doloribus vel fugiat officia soluta? Maxime laborum nostrum doloribus voluptatibus porro necessitatibus!</p>
      </main>
      <footer>
        <p>Todos os direitos reservados. &copy;</p>
      </footer>
    </div>
  );

}