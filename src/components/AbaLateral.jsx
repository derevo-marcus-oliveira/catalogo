import { useContext, useState } from "react"
import { controller } from "../Context/Controller"




export default function AbaLateral({ id }) {

    const [dog, setDog] = useState([
        { id: 1, nome: "Akita", tipo: "akita" },
        { id: 2, nome: "Basset hound", tipo: "basset-hound" },
        { id: 3, nome: "Beagle", tipo: "beagle" },
        { id: 4, nome: "Bicho frise", tipo: "bicho-frise" },
        { id: 5, nome: "Boiadeiro australiado", tipo: "boiadeiro-australiado" }
    ])

    /*
      crtl - 1 : é os cartoes
      ctrl - 2 : é a funcao de adicionar cartao
      ctrl - 3 : é o cartao selecionado
      ctrl - 4 : é o que seta o cartao selecionado
    */
    const ctrl = useContext(controller)

    // Capita o click na tela e verifica se ha mais de 1 'offcanvas-backdrop' caso ajá, remove um deles;
    window.addEventListener("click", () => {
        var backdrop = document.querySelectorAll(".offcanvas-backdrop");
        if (backdrop.length > 1) {
            backdrop[0].remove();
        }
    })

    return (
        <>
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id={id} aria-labelledby={id + "Label"}>
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id={id + "Label"}>Filtragem</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <h4>Raça</h4>
                    {dog.map((d) => {
                        return (
                            <div>
                                <input class="form-check-input" type="checkbox" value="" id={d.tipo} />
                                <label class="form-check-label" htmlFor={d.tipo} style={{ margin: "0 4px" }}>
                                    {d.nome}
                                </label>
                            </div>

                        )
                    })}
                    <hr />
                    <h4 style={{ margin: "8px 0" }}>Preço</h4>
                    <div className="col-12">
                        <label htmlFor="valorMaximo" class="form-label">Valor maxímo</label>
                        <input type="text" class="form-control" id="valorMaximo" />

                    </div>
                    <div className="col-12">
                        <label htmlFor="valorMinimo" class="form-label">Valor minímo</label>
                        <input type="text" class="form-control decimal" id="valorMinimo" />

                    </div>

                    <button type="button" class="btn btn-primary" style={{position: 'absolute', left: "16px", bottom: "16px"}} onClick={() => {
                        
                    }}>
                        Adicionar
                    </button>
                </div>
            </div>
        </>
    )
}