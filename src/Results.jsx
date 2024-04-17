import React from 'react';
import styled from 'styled-components';
import quiz from './quiz.svg';
import { QuizAnswers } from './metadata';

export const Results = ({animal}) => {
    const result = QuizAnswers[animal];

    return (
        <ResultsWrapper>
            <ResultsContainer>
                <Header>
                    <QuizImage src={quiz} alt="quiz" />
                    Let's See If You're More Of A Golden Retriever, Orange Cat, Black Cat, Or Doberman To Determine What We Should Do On Our Date
                </Header>
                <ResultsAnswer>
                    <AnswerContainer>
                        <AnswerText>You've got {result.animal}!</AnswerText>
                        <span>{result.description}</span>
                        <span>{result.date}</span>
                        <img src={result.img} alt={result.animal} />
                    </AnswerContainer>
                </ResultsAnswer>
            </ResultsContainer>
        </ResultsWrapper>
    )
}

const ResultsAnswer = styled.div`
    background-color: white;
    border-radius: calc(3px -1rem)px;
    width: 100%;
    min-height: 50px;
`;

const ResultsWrapper = styled.div`
    margin: 1.5rem 0;
    padding: 1rem;
    background-image: linear-gradient(180deg, #e40c78 0%, #e32 51.44%, #e40c78 100%);
    border-radius: 3px;
`;

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const Header = styled.span`
    color: white;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const QuizImage = styled.img`
    width: 50px;
`;

const AnswerContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const AnswerText = styled.div`
    font-weight: 600;
`;
