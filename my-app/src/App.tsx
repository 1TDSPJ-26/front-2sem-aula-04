import Eduardo from "./components/Nome/Eduardo"

export default function App(){
  return(
    <div>
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
        <Eduardo/>
        <h2>Conteúdo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam possimus odit autem ad fugiat quae iste, laudantium beatae ex. Enim tempora tenetur sed ipsam id pariatur, fugiat nobis nulla.</p>
      </main>
      <footer>
        <p>Todos os direitos reservados. &copy;</p>
      </footer>


    </div>
  );
}