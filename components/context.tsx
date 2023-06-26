'use client'
import React, { createContext, useState, useContext } from 'react'

interface ContextType {
    categoryIndex: number;
    setCategoryIndex: React.Dispatch<React.SetStateAction<number>>
    insideCategory: boolean;
    setInsideCategory: React.Dispatch<React.SetStateAction<boolean>>
    viewType: boolean
    setViewType: React.Dispatch<React.SetStateAction<boolean>>

}
const Context = createContext<ContextType | undefined>(undefined)

function Provider({ children }: { children: React.ReactNode }) {

    const [categoryIndex, setCategoryIndex] = useState(0)
    const [insideCategory, setInsideCategory] = useState(false)
    const [viewType, setViewType] = useState(true)
    const data = {
        categoryIndex, setCategoryIndex,
        insideCategory, setInsideCategory,
        viewType, setViewType
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