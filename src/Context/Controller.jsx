import { Children, createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

export const controller = createContext()

export default function Controller ({children}) {

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

    
    // {id: 1, idade: 1, sexo: 1, raca: "Akita", nome: "produto 1", descricao: "Esse é um produto", preco: "150,00", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU"},
    // {id: 2, idade: 1, sexo: 1, raca: "Basset hound", nome: "produto 2", descricao: "Esse é um produto", preco: "150,00", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU"},
    // {id: 3, idade: 1, sexo: 1, raca: "Beagle", nome: "produto 3", descricao: "Esse é um produto", preco: "150,00", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU"},
    // {id: 4, idade: 1, sexo: 1, raca: "Bicho frise", nome: "produto 4", descricao: "Esse é um produto", preco: "150,00", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU"},
    //{id: 5, idade: 1, sexo: 1, raca: "Boiadeiro australiado", nome: "produto 5", descricao: "Esse é um produto", preco: "150,00", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU"}

    const [card, SetCard] = useState([
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
        debugger
        axios.post("http://localhost:4003/ToAdd", body)
        .then((response) => {
            toFind();
        })
        .catch((err) => {

        })
    }

    useEffect(() => {
        toFind();
    }, []);

    const [selectCard, SetSelectCard] = useState()

    return (
        <controller.Provider value={{dados: [card, selectCard, raca, sexo, idade, animal], metodos: [SetSelectCard, toAdd, SetCard]}}>
            {children}
        </controller.Provider>
    )
}