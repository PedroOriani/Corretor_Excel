import { styled } from "styled-components"
import { RxCheckCircled } from "react-icons/rx"
import { RxCrossCircled } from 'react-icons/rx'
import { RxMinusCircled } from "react-icons/rx"
import { useState } from "react";

export default function Question(props){

    const { right, wrong, empty, aula, answers, setAnswers} = props;

    return(
        <>
        {aula.map((q, i) => (
            <SCContainer key={i}>
                <SCLabel>Questão {q.question}</SCLabel>
                <SCInput 
                type="text" 
                placeholder={q.text}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(q.question)}/>
                <SCIconGreen answer={right.includes(q.question)}/>
                <SCIconRed answer={wrong.includes(q.question)}/>
            </SCContainer>
        ))}
        </>
    )
}

const SCContainer = styled.div`
  width: 700px;
  min-height: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #ffffff;

  border-radius: 6px;
  border: none;

  margin-top: 20px;

  position: relative;
`

const SCLabel = styled.label`
  font-size: 25px;
  font-weight: bold;

  font-family: 'Recursive', sans-serif;

  color: #008000;
`

const SCInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #008000; 

  margin-right: 70px;

  font-family: 'Recursive', sans-serif;

  padding-left: 10px;

  color: black;
`

const SCIconGray = styled(RxMinusCircled)`
  width: 25px;
  height: 25px;

  color: #212121;

  position: absolute;
  right: 35px;

  display: ${(props => props.answer ? 'block' : 'none')};
`

const SCIconGreen = styled(RxCheckCircled)`
  width: 25px;
  height: 25px;

  color: #008000;

  position: absolute;
  right: 35px;

  display: ${(props => props.answer ? 'block' : 'none')};
`

const SCIconRed = styled(RxCrossCircled)`
  width: 25px;
  height: 25px;

  color: red;

  position: absolute;
  right: 35px;

  display: ${(props => props.answer ? 'block' : 'none')}; 
`