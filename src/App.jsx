import './App.css';
import styled from 'styled-components';
import { RadioButton } from './RadioButton';
import { RadioGroup } from './RadioGroup';
import { QuizData } from './metadata';
import { Headline } from './Headline';
import { Results } from './Results';
import { Header } from './Header';
import React, { useState, useEffect } from 'react';

function App() {
  const [selected, setSelected] = useState([undefined, undefined, undefined, undefined, undefined]);
  const [animal, setAnimal] = useState();

  function findModes(arr) {
    const frequencyMap = {};
    arr.forEach(animal => {
        frequencyMap[animal] =
            (frequencyMap[animal] || 0) + 1;
    });
    let modes;
    let maxFrequency = 0;

    for (const animal in frequencyMap) {
        const frequency = frequencyMap[animal];
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            modes = animal;
        }
    }
    return modes;
}

  const onChange = (e, index) => {
    let newSelected = [...selected];
    newSelected[index] = e.target.value;
    setSelected(newSelected);
  }

  useEffect(() => {
    if ((selected.filter(s => s !== undefined).length) === 5) {
      setAnimal(findModes(selected));
    }
  }, [selected]);

  return (
    <div className="App">
      <Header />
      <PageWrapper>
        <ArticleWrapper>    
          <Headline 
            title={`Let's See If You're More Of A Golden Retriever, Orange Cat, Black Cat, Or Doberman To Determine What We Should Do On Our Date`} 
            description={`Men are dogs. But he's not like other boys. Meow! Alternate caption: So I've heard you woof. Let's see what that dog (or cat) in you really looks like. This is all a joke, but I would like to narrow down what to do on our date next week :)`}
          />
          <FormWrapper>
            {QuizData.map(data => (
              <RadioGroup legendText={data.question} name={data.name} valueSelected={selected[data.name]} onChange={(e) => onChange(e, data.name)}>
                {data.answers.map(option => (
                  <RadioButton 
                    image={option.image} 
                    label={option.label} 
                    id={option.label} 
                    value={option.value} 
                  />
                ))}
              </RadioGroup>
            ))}
          </FormWrapper>
          {animal && 
          <Results animal={animal} />
          }
        </ArticleWrapper>
      </PageWrapper>
    </div>
  );
}

export default App;

const PageWrapper = styled.main`
  display: block;
  padding: 16px;
  position: relative;
`;

const ArticleWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  justify-content: center;
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;