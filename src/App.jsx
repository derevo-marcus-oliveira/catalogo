import { useContext, useState } from 'react'
import Cartao from './components/Cartao';
import AbaLateral from './components/AbaLateral';
import Modal from './components/Modal';
import { controller } from './Context/Controller';

import './App.css'

function App() {

  /*
    crtl - 1 : é os cartoes
    ctrl - 2 : é a funcao de adicionar cartao
    ctrl - 3 : é o cartao selecionado
    ctrl - 4 : é o que seta o cartao selecionado
  */
  const control = useContext(controller)

  const cards = control.dados[0];
  const setCardSelecionado = control.metodos[0]

  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


  return (
    <>
      <div className="container ">
        <AbaLateral id={"abaLateral"} />
        <Modal />
       
        <div className="row">
          <div className="col-12 p-4 " style={{ border: "1px solid", display: 'flex', justifyContent: 'end' }}>
            <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ margin: "0 8px"}}
            onClick={() => {              
              setCardSelecionado("");
              <Modal />
            }}>
              <i className="bi bi-plus-square"></i> Salvar
            </button>
            <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target={"#abaLateral"} aria-controls={"abaLateral"}>
              <i className="bi bi-filter"></i> Filtrar
            </button>
          </div>
        </div>
        <div className="row g-2">
          {cards.map((ctrl, id) => {
            return (
              <div key={id} className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3 p-2" onClick={() => {
                setCardSelecionado(ctrl);
                <Modal />
              }}>
                <Cartao dados={ctrl} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
