import Question from './Components/Question'
import Footer from './Components/Footer'
import aula1 from "../mocks/aula1"
import { useState } from 'react'
import styled  from 'styled-components'

function App() {
  const [questions, setQuestions] = useState([])
  const [right, setRigth] = useState([])
  const [wrong, setWrong] = useState([])

  aula1.forEach(q => questions.push(q.question));

  const [empty, setEmpty] = useState(questions)

  function correctAnswers() {
    
  }

  return (
    <>
      <SCTitle>Exercícios Aula 1</SCTitle>
      <SCForm onSubmit={correctAnswers}>
        <Question 
        questions={questions} 
        aula={aula1}
        right={right}
        wrong={wrong}
        empty={empty}/>
        <SCSubmit type='submit' value='Enviar Respostas'></SCSubmit>
      </SCForm>
      <Footer aula={aula1} right={right}/>
    </>
  )
}

export default App

const SCTitle = styled.h1`
  font-size: 45px;
  font-weight: bold;

  color: #ffffff;

  font-family: 'Recursive', sans-serif;
  
  text-align: center;

  margin-top: 50px;
`

const SCForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
`

const SCSubmit = styled.input`
  width: 350px;
  height: 100px;
  margin-top: 20px;

  font-size: 30px;
  font-family: 'Recursive', sans-serif;

  background-color: #ffffff;

  border-radius: 5px;
  border: none;

  color: #008000;
  font-weight: bold;
`