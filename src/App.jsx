import Footer from './Components/Footer'
import aula1 from "../mocks/aula1"
import { useState } from 'react'
import styled  from 'styled-components'
import { RxCheckCircled } from "react-icons/rx"
import { RxCrossCircled } from 'react-icons/rx'
import { RxMinusCircled } from "react-icons/rx"

function App() {
  const [questions, setQuestions] = useState([])
  const [right, setRigth] = useState([])
  const [wrong, setWrong] = useState([])
  const [answered, setAnswered] = useState(0)

  aula1.forEach(q => questions.push(q.question));

  const [empty, setEmpty] = useState(questions)

  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const [answer4, setAnswer4] = useState('')
  const [answer5, setAnswer5] = useState('')
  const [answer6, setAnswer6] = useState('')
  const [answer7, setAnswer7] = useState('')
  const [answer8, setAnswer8] = useState('')
  const [answer9, setAnswer9] = useState('')
  const [answer10, setAnswer10] = useState('')
  const [answer11, setAnswer11] = useState('')
  const [answer12, setAnswer12] = useState('')


  function correctAnswers(event) {
    event.preventDefault()
    setAnswered(1)
  }

  return (
    <>
      <SCTitle>Exercícios Aula 1</SCTitle>
      <SCForm onSubmit={correctAnswers}>
            <SCContainer>
                <SCLabel>Questão 1</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[0].text}
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(questions.question)}/>
                <SCIconGreen answer={right.includes(questions.question)}/>
                <SCIconRed answer={wrong.includes(questions.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 2</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[1].text}
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 3</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[2].text}
                value={answer3}
                onChange={(e) => setAnswer3(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 4</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[3].text}
                value={answer4}
                onChange={(e) => setAnswer4(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 5</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[4].text}
                value={answer5}
                onChange={(e) => setAnswer5(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 6</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[5].text}
                value={answer6}
                onChange={(e) => setAnswer6(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 7</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[6].text}
                value={answer7}
                onChange={(e) => setAnswer7(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 8</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[7].text}
                value={answer8}
                onChange={(e) => setAnswer8(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 9</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[8].text}
                value={answer9}
                onChange={(e) => setAnswer9(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 10</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[9].text}
                value={answer10}
                onChange={(e) => setAnswer10(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 11</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[10].text}
                value={answer11}
                onChange={(e) => setAnswer11(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 12</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula1[11].text}
                value={answer12}
                onChange={(e) => setAnswer12(e.target.value)}
                required
                ></SCInput>
                <SCIconGray answer={empty.includes(aula1.question)}/>
                <SCIconGreen answer={right.includes(aula1.question)}/>
                <SCIconRed answer={wrong.includes(aula1.question)}/>
            </SCContainer>
        <SCSubmit type='submit' value='Enviar Respostas'></SCSubmit>
      </SCForm>
      <Footer aula={aula1} right={right} answered={answered} />
    </>
  )
}

{/* <Question 
        questions={questions} 
        aula={aula1}
        right={right}
        wrong={wrong}
        empty={empty}
        answers={answers}
        setAnswers={setAnswers}/> */}

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