import { useContext } from "react"
import { controller } from "../Context/Controller"




export default function AbaLateral({ id }) {

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
                    <h5 className="offcanvas-title" id={id + "Label"}>Offcanvas with body scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
        </>
    )
}