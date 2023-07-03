import { useContext } from "react"
import { controller } from "../Context/Controller"


export default function Cartao({dados}) {

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
                <h5>{dados.nome}</h5>
            </div>
            <img src={dados.url} className="card-img-top" alt="..." />
            <div className="card-body">

                <p className="card-text"><span style={{fontWeight: 'bold'}}>Raça: </span> {dados.raca}</p>
                <p className="card-text">{dados.descricao}</p>
            </div>
            <div class="card-footer text-end  text-body-secondary">
                {dados.preco}
            </div>
        </div>
    )
}