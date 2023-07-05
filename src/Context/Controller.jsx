import { Children, createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import Alerta from "../components/Alerta";

export const controller = createContext()

export default function Controller ({children}) {

    const [card, SetCard] = useState([]);
    const [filtro, SetFiltro] = useState([]);
    const [selectCard, SetSelectCard] = useState();


    const [animal, SetAnimal] = useState([
        {id: 0, _id: "cachorro", animal: "Cachorro"},
        {id: 1, _id: "Gato", animal: "Gato"},
    ])

    const [sexo, SetSexo] = useState([
        {id: 0, _id: "macho", sexo: "Macho"},
        {id: 1, _id: "femia", sexo: "Fêmia"},
    ])

    const [idade, SetIdade] = useState([
        {id: 0, _id: "filhote", idade: "Filhote"},
        {id: 1, _id: "adulto", idade: "Adulto"},
    ])

    const [raca, SetRaca] = useState([
        {id: 0, _id: "akita-inu", raca: "Akita Inu"},
        {id: 1, _id: "basset-hound", raca: "Basset hound"},
        {id: 2, _id: "beagle", raca: "Beagle"},
        {id: 3, _id: "bichon-frise", raca: "Bichon frisé"},
        {id: 4, _id: "boiadeiro-australiado", raca: "Boiadeiro australiado"},
    ])

    const toFind = () => {
        axios.get("http://localhost:4003/ToFind")
        .then((response) => {
            SetCard(response.data);
        })
        .catch((err) => {

        })
    }

    const toAdd = (body) => {
        
        axios.post("http://localhost:4003/ToAdd", body)
        .then((response) => {
            toFind();
            
        })
        .catch((err) => {

        })
    }

    const toRemove = (id) => {
        
        axios.delete("http://localhost:4003/ToRemove", {
            data: {
                id: id
            }
        })
        .then((response) => {
            toFind();
        })
        .catch((err) => {

        })
    }

    const toUpdate = (body) => {
        
        axios.put("http://localhost:4003/ToUpdate", body)
        .then((response) => {
            toFind();
           
        })
        .catch((err) => {

        })
    }


    useEffect(() => {
        toFind();
    }, []);

    return (
        <controller.Provider value={{dados: [card, selectCard, raca, sexo, idade, animal, filtro], metodos: [SetSelectCard, toAdd, SetCard, toRemove, toUpdate, toFind, SetFiltro]}}>
            {children}
        </controller.Provider>
    )
}