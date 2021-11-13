import React, { useState } from 'react'
import {InputButton, InputContent, InputHeader, TextField } from './styles'



export const InputCommunit = () => {
    const[title,setTitle] = useState("")
    
    const handleSearch = (title:string) =>{
        console.log(title)
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
    return (
        <InputContent>
            <InputHeader>
                <h1>Comunidade</h1>
            </InputHeader>

            <TextField 
            value={title}
            onChange={handleChange}
            variant="outline"
            type="text"
            placeholder="Como limpar o box do chuveiro..."
            />

            <InputButton onClick={()=>handleSearch(title)}><span>Pesquisar</span></InputButton>
        </InputContent>
    )
}
