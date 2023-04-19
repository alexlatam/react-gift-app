import { useState } from "react"
import { AddCategory, GiftGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Landscapes'])
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewValue={onAddCategory}
            />

            { 
                categories.map(category => (
                    <GiftGrid 
                        key={category} 
                        category={category} 
                    />
                )) 
            }
        </>
    )
}

// const api_key = "cuXhvW1uWVQmEe8KTMGY5FR6TdMICpKR"