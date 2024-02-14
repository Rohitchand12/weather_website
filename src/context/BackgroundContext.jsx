import { createContext, useState } from "react";

export const BackgroundContext = createContext({
    main:"load",
    setMain : ()=>{}
})

const BackgroundContextProvider = ({children}) => {
    const [main,setMain] = useState();

    const handleMain=(weather)=>{
        setMain(weather);
    }

    const ctx = {
        main,
        setMain : handleMain
    }
    return (
        <BackgroundContext.Provider value = {ctx}>
            {children}
        </BackgroundContext.Provider>
    )
}

export default BackgroundContextProvider;