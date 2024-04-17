import React from 'react';
import styled from 'styled-components';

export const RadioButton = (
    {
        id, 
        className, 
        name, 
        value, 
        onChange, 
        label
    }
) => {
    return (
        <>
            <Input 
                id={id} 
                type="radio" 
                name={name} 
                value={value} 
                onChange={onChange}
            />
            <Label htmlFor={id} className={className}>
                {label}
            </Label>
        </>
    )
};

const Input = styled.input`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

    &:checked + label {
        background-color: black;
    }
`;


const Label = styled.label`
    cursor: pointer;
    user-select: none;

    display: flex;
    background-color: orange;
    min-height: 4rem;
    width: 100%;
    color: white;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    &:hover {
        opacity: 80%;
    }
`
