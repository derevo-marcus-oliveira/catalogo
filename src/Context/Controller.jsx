import { Children, createContext, useContext, useState } from "react";

export const controller = createContext()

export default function Controller ({children}) {

    const [card, SetCard] = useState(["", "", "", "", ""])
    const [selectCard, SetSelectCard] = useState([])

    return (
        <controller.Provider value={[card, SetCard, selectCard, SetSelectCard]}>
            {children}
        </controller.Provider>
    )
}