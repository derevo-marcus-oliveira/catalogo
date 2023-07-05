import { useContext } from "react"
import { controller } from "../Context/Controller"

import catDog from "../assets/catDog.png";


export default function Cartao({ dados }) {

    /*
      crtl - 1 : é os cartoes
      ctrl - 2 : é a funcao de adicionar cartao
      ctrl - 3 : é o cartao selecionado
      ctrl - 4 : é o que seta o cartao selecionado
    */
    const control = useContext(controller)

    return (
        <div className="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className="card-header">
                <h5>{dados.nome  || "Sem nome"}</h5>
            </div>
            <img src={dados.url || catDog} className="card-img-top" alt="..." />
            <div className="card-body">

                <p className="card-text">
                    <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>
                        {control.dados[5].filter(s => s.id == dados.animal)[0].animal} - {control.dados[4].filter(s => s.id == dados.idade)[0].idade}
                    </span>
                </p>
                <p className="card-text">
                    <span style={{ fontWeight: 'bold' }}>Raça: </span> {control.dados[2].filter(r => r.id == dados.raca)[0].raca}
                </p>
                <p className="card-text">
                    <span style={{ fontWeight: 'bold' }}>Sexo: </span> {control.dados[3].filter(s => s.id == dados.sexo)[0].sexo}
                </p>
            </div>
            <div className="card-footer text-end  text-body-secondary">
                {dados.preco}
            </div>
        </div>
    )
}