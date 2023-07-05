import { useContext, useState } from "react"
import { controller } from "../Context/Controller"




export default function AbaLateral({ id }) {

    /*
      crtl - 1 : é os cartoes
      ctrl - 2 : é a funcao de adicionar cartao
      ctrl - 3 : é o cartao selecionado
      ctrl - 4 : é o que seta o cartao selecionado
    */
    const control = useContext(controller)

    // Capita o click na tela e verifica se ha mais de 1 'offcanvas-backdrop' caso ajá, remove um deles;
    window.addEventListener("click", () => {
        var backdrop = document.querySelectorAll(".offcanvas-backdrop");
        if (backdrop.length > 1) {
            backdrop[0].remove();
        }
    })

    return (
        <>
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id={id} aria-labelledby={id + "Label"} >
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id={id + "Label"}>Filtragem</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <h4>Raça</h4>
                    {control.dados[2].map((r) => {
                        return (
                            <div key={r.id}>
                                <input className="form-check-input" type="checkbox" value="" id={r._id} />
                                <label className="form-check-label" htmlFor={r._id} style={{ margin: "0 4px" }}>
                                    {r.raca}
                                </label>
                            </div>

                        )
                    })}
                    <hr />
                    <h4 style={{ margin: "8px 0" }}>Preço</h4>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="valorMaximo" className="form-label">Valor máximo</label>
                            <input type="text" className="form-control" id="valorMaximo" />

                        </div>
                        <div className="col-6">
                            <label htmlFor="valorMinimo" className="form-label">Valor mínimo</label>
                            <input type="text" className="form-control decimal" id="valorMinimo" />

                        </div>
                    </div>
                    <hr />
                    <h4 style={{ margin: "8px 0" }}>Idade</h4>
                    <div className="col-12">
                        <select className="form-select" aria-label="Idade" id="idadeFiltro">
                            <option value={"All"}>Todas as idade</option>
                            {control.dados[4].map((i) => {
                                return (
                                    <option key={i.id} value={i.id}>{i.idade}</option>
                                )
                            })}
                        </select>
                    </div>
                    <hr />
                    <h4 style={{ margin: "8px 0" }}>Sexo</h4>
                    <div className="col-12">
                        <select className="form-select" aria-label="Sexo" id="sexoFiltro">
                            <option value={"All"}>Todos os sexos</option>
                            {control.dados[3].map((s) => {
                                return (
                                    <option key={s.id} value={s.id}>{s.sexo}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="offcanvas-fooder" style={{ position: 'absolute', left: "16px", bottom: "16px", display: 'flex' }} >

                        <button type="button" data-bs-dismiss="offcanvas" className="btn btn-primary" style={{ margin: "0 4px 0 0" }} onClick={async () => {

                            var filtro = [];
                            var raca = document.querySelectorAll(".form-check-input");
                            var includ = false

                            raca.forEach(element => {

                                var racaId = control.dados[2].filter(item => item._id == element.id)[0]

                                if (element.checked) {
                                    includ = true;
                                    control.dados[0].filter(item => item.raca == racaId.id).forEach(e => {
                                        filtro.push(e);
                                    })
                                }
                            });

                            if (includ) {
                                if (document.getElementById("valorMinimo").value
                                    && parseFloat(document.getElementById("valorMinimo").value) != 0) {

                                    var newFiltro = filtro.filter(item => item.preco >= parseFloat(document.getElementById("valorMinimo").value))
                                    filtro = [];
                                    newFiltro.forEach(element => {
                                        filtro.push(element);
                                    })
                                }

                                if (document.getElementById("valorMaximo").value
                                    && parseFloat(document.getElementById("valorMaximo").value) != 0) {

                                    var newFiltro = filtro.filter(item => item.preco <= parseFloat(document.getElementById("valorMaximo").value))
                                    filtro = [];
                                    newFiltro.forEach(element => {
                                        filtro.push(element);
                                    })
                                }

                                if (document.getElementById("idadeFiltro").value != "All") {

                                    var newFiltro = filtro.filter(item => item.idade == parseInt(document.getElementById("idadeFiltro").value))
                                    filtro = [];
                                    newFiltro.forEach(element => {
                                        filtro.push(element);
                                    })
                                }

                                if (document.getElementById("sexoFiltro").value != "All") {

                                    var newFiltro = filtro.filter(item => item.sexo == parseInt(document.getElementById("sexoFiltro").value));
                                    filtro = [];
                                    newFiltro.forEach(element => {
                                        filtro.push(element);
                                    })
                                    

                                }

                            }
                            else {

                                if (document.getElementById("valorMinimo").value
                                    && parseFloat(document.getElementById("valorMinimo").value) != 0) {
                                    control.dados[0].filter(item => item.preco >= parseFloat(document.getElementById("valorMinimo").value)).forEach(e => {
                                        filtro.push(e);
                                    })

                                }

                                if (document.getElementById("valorMaximo").value
                                    && parseFloat(document.getElementById("valorMaximo").value) != 0) {

                                    if (filtro.length > 0) {
                                        var newFiltro = control.dados[0].filter(item => item.preco <= parseFloat(document.getElementById("valorMaximo").value))
                                        filtro = [];
                                        newFiltro.forEach(element => {
                                            filtro.push(element);
                                        })

                                    }
                                    else {
                                        control.dados[0].filter(item => item.preco <= parseFloat(document.getElementById("valorMaximo").value)).forEach(e => {
                                            filtro.push(e);
                                        })
                                    }

                                }

                                if (document.getElementById("idadeFiltro").value != "All") {

                                    if (filtro.length > 0) {
                                        var newFiltro = control.dados[0].filter(item => item.idade == parseInt(document.getElementById("idadeFiltro").value))
                                        filtro = [];
                                        newFiltro.forEach(element => {
                                            filtro.push(element);
                                        })

                                    }
                                    else {
                                        control.dados[0].filter(item => item.idade == parseInt(document.getElementById("idadeFiltro").value)).forEach(e => {
                                            filtro.push(e);
                                        })
                                    }

                                }

                                if (document.getElementById("sexoFiltro").value != "All") {

                                    if (filtro.length > 0) {
                                        var newFiltro = control.dados[0].filter(item => item.sexo == parseInt(document.getElementById("sexoFiltro").value));
                                        filtro = [];
                                        newFiltro.forEach(element => {
                                            filtro.push(element);
                                        })

                                    }
                                    else {
                                        control.dados[0].filter(item => item.sexo == parseInt(document.getElementById("sexoFiltro").value)).forEach(e => {
                                            filtro.push(e);
                                        });
                                    }
                                }
                            }

                            
                            control.metodos[6](filtro);
                        }}>
                            Adicionar
                        </button>
                        <button type="button" data-bs-dismiss="offcanvas" className="btn btn-secondary" onClick={() => { control.metodos[6]([]) }}>
                            Limpar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}