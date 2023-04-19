import { useState } from 'react'

export const AddCategory = ({  onNewValue }) => {

    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return;

        onNewValue(inputValue.trim())
        setInputValue('')
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifts..." 
                value={ inputValue }
                onChange={ (e) => setInputValue(e.target.value) }
            />
        </form>
    )
}
