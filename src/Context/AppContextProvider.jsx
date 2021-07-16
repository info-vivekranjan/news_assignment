import React, { createContext, useState } from 'react';



const AppContext = createContext()

function AppContextProvider({ children }) {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const value = {

        isLoading,
        isError,
        setIsLoading,
        setIsError
    }

    return (
        <>
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
        </>
    )

}

export { AppContextProvider, AppContext }