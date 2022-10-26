import "./styles.css"
import logo from "./logo.png"

function App() {
  
  const nome = "João Victor";
  return (
    <>
      <h1>Hello World</h1>
      
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, id deleniti doloribus consequuntur suscipit autem voluptatibus! Reiciendis laudantium natus labore, deserunt rem eligendi. Quam et excepturi iusto consectetur, saepe, quidem magni architecto perferendis magnam accusantium facere illo, deserunt ipsum incidunt dolorum voluptates doloribus. Aperiam dicta cum quisquam consequatur voluptates nobis consequuntur earum similique dolor enim, iste odio at totam aspernatur!
      </p>
     
      <img src={logo} alt="" />

      <h3>{nome}</h3>
    </>
  )
}

export default App
