import { createContext } from "react";

const simpleData = createContext({
    days: "Hey, I'm context",
    ballons: (day) => {
        return `${day * 5} ballons`
    }
})

export { simpleData }