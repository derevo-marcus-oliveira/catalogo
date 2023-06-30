import { useContext } from "react"
import { controller } from "../Context/Controller"


export default function Cartao() {

    /*
      crtl - 1 : é os cartoes
      ctrl - 2 : é a funcao de adicionar cartao
      ctrl - 3 : é o cartao selecionado
      ctrl - 4 : é o que seta o cartao selecionado
    */
    const ctrl = useContext(controller)

    return (
        <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="card-header">
                <h5>Nome</h5>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU" className="card-img-top" alt="..." />
            <div className="card-body">

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-footer text-end  text-body-secondary">
                R$ 25.00
            </div>
        </div>
    )
}