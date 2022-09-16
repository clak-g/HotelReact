import { Link } from "react-router-dom"
import "./Menu.css"
export function Menu(){


  return(

    <>
    
    <nav class="navbar navbar-expand-lg menu">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">Test</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="habitaciones">Habitaciones</Link>
            </li>
            
          </ul>
        </div>
      </div>
  </nav>
    
    </>

  )


}