import React from 'react';
import styled from 'styled-components';
import chickentikka from './chickentikka.svg';

export const Headline = ({title, description}) => {
    return (
        <HeadlineWrapper>
            <Date>Posted on Apr 16, 2024</Date>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Byline>
                <UserSquare><img src={chickentikka} alt="chicken" /></UserSquare>
                <NameWrapper>
                    <Name>Ben</Name>
                    <SubName>Silly Goose</SubName>
                </NameWrapper>
            </Byline>
        </HeadlineWrapper>
    )
};

const HeadlineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
`;

const Date = styled.span`
    font-size: .875rem;
    margin-bottom: 1rem;
`;

const Title = styled.span`
    margin-bottom: .5rem;
    font-size: 2.5rem;
    line-height: 1.05;
    font-family: Montserrat;
    font-weight: 600;
`;

const Description = styled.span`
    font-family: Montserrat;
    margin-bottom: 1rem;
    font-weight: 450;
`;

const Byline = styled.div`
    display: flex;
    flex-direction: row;
`;

const UserSquare = styled.div`
    width: 56px;
    height: 56px;
    background-color: #6e6eb1;
    margin-right: .5rem;
    border-radius: 4px;
`;

const Name = styled.span`
    font-size: .875rem;
    line-height: 1.21;
    font-weight: 700;
`;

const SubName = styled.span`
    font-size: .875rem;
    line-height: 1.21;
`;

const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;