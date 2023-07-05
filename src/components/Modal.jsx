import { useContext, useEffect } from "react"
import { controller } from "../Context/Controller"
import Alerta from "../components/Alerta";



export default function Modal({ card }) {

    /*
      crtl - 1 : é os cartoes
      ctrl - 2 : é a funcao de adicionar cartao
      ctrl - 3 : é o cartao selecionado
      ctrl - 4 : é o que seta o cartao selecionado
    */
    const control = useContext(controller)
    const cardSelecionado = control.dados[1];
    const SetCardSelecionado = control.metodos[0];

    useEffect(() => {
        SetCardSelecionado(card);
    }, [card])

    const information = "Para alterar basta inserir a nova informação, caso não informe, será usado a que já existia.";

    return (
        // <!-- Modal -->
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    {cardSelecionado ? (
                        <>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Model de alteração
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content={information} style={{ margin: "0 12px" }}>
                                        <i className="bi bi-question-circle"></i>
                                    </span>
                                </h1>

                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-2" hidden>
                                        <label htmlFor="id" className="form-label">id</label>
                                        <input type="text" className="form-control" id="id" value={cardSelecionado.id} disabled />
                                    </div>

                                    <div className="col-4">
                                        <label htmlFor="especie" className="form-label">Espécie</label>
                                        <select className="form-select form-select-modal" aria-label="especie" id="especie">
                                            {control.dados[5].map((item) => {
                                                document.getElementById("especie").value = cardSelecionado.animal
                                                return (

                                                    <option key={item.id} value={item.id}>{item.animal}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-4">
                                        <label htmlFor="sexo" className="form-label">Sexo</label>
                                        <select className="form-select form-select-modal" aria-label="Sexo" id="sexo">

                                            {control.dados[3].map((item) => {
                                                document.getElementById("sexo").value = cardSelecionado.sexo

                                                return (
                                                    <option key={item.id} value={item.id}>{item.sexo}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-4">
                                        <label htmlFor="idade" className="form-label">Idade</label>
                                        <select className="form-select form-select-modal" aria-label="Idade" id="idade">
                                            {control.dados[4].map((item) => {
                                                document.getElementById("idade").value = cardSelecionado.idade

                                                return (
                                                    <option key={item.id} value={item.id}>{item.idade}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-8">
                                        <label htmlFor="nome" className="form-label">Nome</label>
                                        <input type="text" className="form-control" id="nome" placeholder={cardSelecionado.nome || "Sem nome"} />
                                    </div>

                                    <div className="col-4">
                                        <label htmlFor="raca" className="form-label">Raça</label>
                                        <select className="form-select form-select-modal" aria-label="Raca" id="raca">
                                            {control.dados[2].map((item) => {

                                                document.getElementById("raca").value = cardSelecionado.raca

                                                return (
                                                    <option key={item.id} value={item.id}>{item.raca}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="observacao" className="form-label">Descrição</label>
                                        <textarea className="form-control" id="observacao" rows="3" placeholder={cardSelecionado.observacao || "Sem observação"}></textarea>
                                    </div>
                                    <div className="col-12" >
                                        <label htmlFor="preco" className="form-label">Preço</label>
                                        <input type="text" className="form-control" id="preco" placeholder="Escreva aqui..." />

                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="url" className="form-label">Url da imagem</label>
                                        <input type="text" className="form-control" id="url" placeholder={cardSelecionado.url || "Sem imagem"} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {

                                    var obj = {
                                        id: parseInt(document.getElementById("id").value),
                                        animal: parseInt(document.getElementById("especie").value),
                                        raca: parseInt(document.getElementById("raca").value),
                                        idade: parseInt(document.getElementById("idade").value),
                                        sexo: parseInt(document.getElementById("sexo").value),
                                        nome: document.getElementById("nome").value || cardSelecionado.nome,
                                        observacao: document.getElementById("observacao").value || cardSelecionado.observacao,
                                        preco: parseFloat(document.getElementById("preco").value) || cardSelecionado.preco,
                                        url: document.getElementById("url").value || cardSelecionado.url
                                    }

                                    document.querySelectorAll(".form-control").forEach(elemento => {
                                        elemento.value = "";
                                    });

                                    control.metodos[4](obj);
                                }}>Alterar</button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => {

                                    <Alerta />
                                    control.metodos[3](parseInt(document.getElementById("id").value));
                                }}>Excluir</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Modal de salvamento
                                </h1>

                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-2" hidden>
                                        <label htmlFor="id" className="form-label">id</label>
                                        <input type="text" className="form-control" id="id" value={0} disabled />

                                    </div>

                                    <div className="col-4">
                                        <label htmlFor="especie" className="form-label">Espécie</label>
                                        <select className="form-select form-select-modal" aria-label="especie" id="especie">
                                            {control.dados[5].map((item) => {
                                                return (
                                                    <option key={item.id} value={item.id}>{item.animal}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-4">
                                        <label htmlFor="sexo" className="form-label">Sexo</label>
                                        <select className="form-select form-select-modal" aria-label="Sexo" id="sexo">
                                            {control.dados[3].map((item) => {
                                                return (
                                                    <option key={item.id} value={item.id}>{item.sexo}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-4">
                                        <label htmlFor="idade" className="form-label">Idade</label>
                                        <select className="form-select form-select-modal" aria-label="Idade" id="idade">
                                            {control.dados[4].map((item) => {
                                                return (
                                                    <option key={item.id} value={item.id}>{item.idade}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-8">
                                        <label htmlFor="nome" className="form-label">Nome</label>
                                        <input type="text" className="form-control" id="nome" placeholder="Escreva aqui..." />

                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="raca" className="form-label">Raça</label>
                                        <select className="form-select form-select-modal" aria-label="Raca" id="raca">
                                            {control.dados[2].map((item) => {
                                                return (
                                                    <option key={item.id} value={item.id}>{item.raca}</option>
                                                )
                                            })}
                                        </select>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="observacao" className="form-label">Descrição</label>
                                        <textarea className="form-control" id="observacao" rows="3" placeholder="Escreva aqui..." ></textarea>

                                    </div>
                                    <div className="col-12" >
                                        <label htmlFor="preco" className="form-label">Preço</label>
                                        <input type="text" className="form-control" id="preco" placeholder="Escreva aqui..." />

                                    </div>
                                    <div className="col-12" >
                                        <label htmlFor="url" className="form-label">Url da imagem</label>
                                        <input type="text" className="form-control" id="url" placeholder="Escreva aqui..." />

                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={() => {

                                    var obj = {
                                        animal: parseInt(document.getElementById("especie").value),
                                        raca: parseInt(document.getElementById("raca").value),
                                        idade: parseInt(document.getElementById("idade").value),
                                        sexo: parseInt(document.getElementById("sexo").value),
                                        nome: document.getElementById("nome").value,
                                        observacao: document.getElementById("observacao").value,
                                        preco: parseFloat(document.getElementById("preco").value),
                                        url: document.getElementById("url").value
                                    }

                                    document.querySelectorAll(".form-control").forEach(elemento => {
                                        elemento.value = "";
                                    });

                                    document.querySelectorAll(".form-select-modal").forEach(elemento => {
                                        elemento.value = "0";
                                    })

                                    control.metodos[1](obj);
                                }}>Salvar</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}