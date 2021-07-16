import React, { createContext, useState } from 'react';



const AppContext = createContext()

function AppContextProvider({ children }) {


    const [showSidebar, setShowSidebar] = useState(false);

    const value = {
        showSidebar,
        setShowSidebar
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