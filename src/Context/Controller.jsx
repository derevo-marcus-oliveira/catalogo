import { Children, createContext, useContext, useState } from "react";

export const controller = createContext()

export default function Controller ({children}) {


    const [card, SetCard] = useState([
        {id: 1, raca: "Akita", nome: "produto 1", descricao: "Esse é um produto", preco: "150,00", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU"},
        {id: 2, raca: "Basset hound", nome: "produto 2", descricao: "Esse é um produto", preco: "150,00", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU"},
        {id: 3, raca: "Beagle", nome: "produto 3", descricao: "Esse é um produto", preco: "150,00", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU"},
        {id: 4, raca: "Bicho frise", nome: "produto 4", descricao: "Esse é um produto", preco: "150,00", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU"},
        {id: 5, raca: "Boiadeiro australiado", nome: "produto 5", descricao: "Esse é um produto", preco: "150,00", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OEEx1h1xn72b61WVGUBpCuhWztIuJCjhHg&usqp=CAU"}
    ])
    const [selectCard, SetSelectCard] = useState([])

    return (
        <controller.Provider value={[card, SetCard, selectCard, SetSelectCard]}>
            {children}
        </controller.Provider>
    )
}