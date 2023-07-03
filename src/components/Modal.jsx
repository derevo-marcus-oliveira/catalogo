import { useContext, useEffect } from "react"
import { controller } from "../Context/Controller"



export default function Modal({ card }) {

    /*
      crtl - 1 : é os cartoes
      ctrl - 2 : é a funcao de adicionar cartao
      ctrl - 3 : é o cartao selecionado
      ctrl - 4 : é o que seta o cartao selecionado
    */
    const context = useContext(controller)

    const cardSelecionado = context[2];
    const SetCardSelecionado = context[3];

    useEffect(() => {
        SetCardSelecionado(card);
    }, [card])

    console.log(cardSelecionado)
    const information = "Para alterar basta inserir a nova informação, caso não informe, será usado a que já existia.";
    

    return (
        // <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    {cardSelecionado ? (
                        <>
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Model de alteração
                                    <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content={information} style={{ margin: "0 12px" }}>
                                        <i class="bi bi-question-circle"></i>
                                    </span>
                                </h1>

                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="id" class="form-label">id</label>
                                        <input type="text" class="form-control" id="id" value={cardSelecionado.id} disabled />

                                    </div>
                                    <div className="col-10">
                                        <label htmlFor="nome" class="form-label">Nome</label>
                                        <input type="text" class="form-control" id="nome" placeholder={cardSelecionado.nome} />

                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="descricao" class="form-label">Descrição</label>
                                        <textarea class="form-control" id="descricao" rows="3" placeholder={cardSelecionado.descricao}></textarea>

                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="url" class="form-label">Url da imagem</label>
                                        <input type="text" class="form-control" id="url" placeholder={cardSelecionado.url} />

                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" onClick={() => {

                                }}>Alterar</button>
                                <button type="button" class="btn btn-danger" onClick={() => {

                                }}>Excluir</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">
                                    Modal de salvamento                              
                                </h1>

                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="id" class="form-label">id</label>
                                        <input type="text" class="form-control" id="id" value={0} disabled/>

                                    </div>
                                    <div className="col-10">
                                        <label htmlFor="nome" class="form-label">Nome</label>
                                        <input type="text" class="form-control" id="nome" placeholder="Escreva aqui..."/>

                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="descricao" class="form-label">Descrição</label>
                                        <textarea class="form-control" id="descricao" rows="3" placeholder="Escreva aqui..." ></textarea>

                                    </div>
                                    <div className="col-12" >
                                        <label htmlFor="url" class="form-label">Url da imagem</label>
                                        <input type="text" class="form-control" id="url" placeholder="Escreva aqui..."/>

                                    </div>
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" onClick={() => {
                                    
                                }}>Salvar</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}