import Question from './Components/Question'
import Footer from './Components/Footer'
import questions from './mock'
import { useState } from 'react'
import styled  from 'styled-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SCTitle>Exercícios Aula 1</SCTitle>
      <SCForm>
        <Question questions={questions}/>
      </SCForm>
      <Footer />
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