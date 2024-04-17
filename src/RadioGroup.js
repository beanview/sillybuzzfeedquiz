import React from 'react';
import styled from 'styled-components';

export const RadioGroup = (props) => {
    const radioNodes = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
            checked: props.valueSelected === child.value,
            name: props.name,
            key: index,
            onChange: props.onChange,
        });
    });

    return (
        <Fieldset>
            <Legend>{props.legendText}</Legend>
            <NodeContainer>
                {radioNodes}
            </NodeContainer>
        </Fieldset>
    )
};

const Fieldset = styled.fieldset`
    border: 0;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
`;

const Legend = styled.legend`
    width: 100%;
    background-color: #412393;
    min-height: 12.5rem;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1.1;
    font-weight: 800;
    word-break: break-word;
    color: white;
    margin-bottom: 20px;

    font-size: 50px;
    @media (max-width: 700px) {
        font-size: 40px;
    }
`;

const NodeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;

    // @media (max-width: 700px) {
    //     grid-template-columns: 1fr;
    //     grid-template-rows: 1fr 1fr 1fr 1fr;
    // }
`;

