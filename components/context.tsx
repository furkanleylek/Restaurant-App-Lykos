'use client'
import React, { createContext, useState, useContext } from 'react'

interface ContextType {
    isFilter: boolean;
    setIsFilter: React.Dispatch<React.SetStateAction<boolean>>
}
const Context = createContext<ContextType | undefined>(undefined)

function Provider({ children }: { children: React.ReactNode }) {

    const [isFilter, setIsFilter] = useState(false)

    const data = {
        isFilter, setIsFilter,
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider

export const useRestaurantContext = (): ContextType => {
    const context = useContext(Context)
    if (context === undefined) {
        throw new Error('useRestaurantContext must be used within a Provider');
    }
    return context;
}