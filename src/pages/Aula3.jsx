import Footer from "../Components/Footer"
import aula3 from "../../mocks/exAula3"
import { useState } from 'react'
import styled  from 'styled-components'
import { RxCheckCircled } from "react-icons/rx"
import { RxCrossCircled } from 'react-icons/rx'
import { RxMinusCircled } from "react-icons/rx"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Aula3(props) {

  const { right, setRight, wrong, setWrong, answered, setAnswered } = props

  const questions = [];

  aula3.forEach(q => questions.push(q.question));

  const [empty, setEmpty] = useState(questions)

  useEffect( () => {
    
    setRight([])
    setWrong([])
    setAnswered(0)

}, []);

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

  function correctAnswer1(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[0].question)
    setEmpty(newEmpty)

    if (answer1 === aula3[0].answer) {
      if (right.includes(aula3[0].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[0].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[0].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula3[0].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[0].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[0].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer2(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[1].question)
    setEmpty(newEmpty)
    
    if (answer2 === aula3[1].answer) {
      if (right.includes(aula3[1].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[1].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[1].question]
      setRight(newRight)
    } else {
      if (right.includes(aula3[1].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[1].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[1].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer3(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[2].question)
    setEmpty(newEmpty)

    if (answer3 === aula3[2].answer) {
      if (right.includes(aula3[2].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[2].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[2].question]
      setRight(newRight)
    } else {
      if (right.includes(aula3[2].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[2].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[2].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer4(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[3].question)
    setEmpty(newEmpty)

    if (answer4 === aula3[3].answer) {
      if (right.includes(aula3[3].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[3].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[3].question]
      setRight(newRight)
    } else {
      if (right.includes(aula3[3].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[3].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[3].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer5(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[4].question)
    setEmpty(newEmpty)

    if (answer5 === aula3[4].answer) {
      if (right.includes(aula3[4].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[4].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[4].question]
      setRight(newRight)
    } else {
      if (right.includes(aula3[4].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[4].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[4].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer6(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[5].question)
    setEmpty(newEmpty)

    if (answer6 === aula3[5].answer) {
      if (right.includes(aula3[5].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[5].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[5].question]
      setRight(newRight)
    } else {
      if (right.includes(aula3[5].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[5].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[5].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer7(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[6].question)
    setEmpty(newEmpty)

    if (answer7 === aula3[6].answer) {
      if (right.includes(aula3[6].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[6].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[6].question]
      setRight(newRight)
    } else {
      if (right.includes(aula3[6].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[6].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[6].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer8(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[7].question)
    setEmpty(newEmpty)

    if (answer8 === aula3[7].answer) {
      if (right.includes(aula3[7].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[7].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[7].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula3[7].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[7].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[7].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer9(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[8].question)
    setEmpty(newEmpty)

    if (answer9 === aula3[8].answer) {
      if (right.includes(aula3[8].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[8].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[8].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula3[8].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[8].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[8].question]
      setWrong(newWrong)
   }
  }

  function correctAnswer10(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[9].question)
    setEmpty(newEmpty)

    if (answer10 === aula3[9].answer) {
      if (right.includes(aula3[9].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[9].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[9].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula3[9].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[9].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[9].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer11(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[10].question)
    setEmpty(newEmpty)

    if (answer11 === aula3[10].answer) {
      if (right.includes(aula3[10].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[10].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[10].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula3[10].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[10].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[10].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer12(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula3[11].question)
    setEmpty(newEmpty)

    if (answer12 === aula3[11].answer) {
      if (right.includes(aula3[11].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula3[11].question)
      setWrong(newWrong)
      const newRight = [...right, aula3[11].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula3[11].question)){
        return
      }
      const newRight = right.filter(r => r !== aula3[11].question)
      setRight(newRight)
      const newWrong = [...wrong, aula3[11].question]
      setWrong(newWrong)
    }
  }

  return (
    <>
      <SCTitle>Exercícios Aula 3</SCTitle>
      <SCForm>
            <SCContainer>
                <SCLabel>Questão 1</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[0].text}
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[0].question)}/>
                <SCIconGreen answer={right.includes(aula3[0].question)}/>
                <SCIconRed answer={wrong.includes(aula3[0].question)}/>
                <SCSubmit onClick={correctAnswer1}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 2</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[1].text}
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[1].question)}/>
                <SCIconGreen answer={right.includes(aula3[1].question)}/>
                <SCIconRed answer={wrong.includes(aula3[1].question)}/>
                <SCSubmit onClick={correctAnswer2}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 3</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[2].text}
                value={answer3}
                onChange={(e) => setAnswer3(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[2].question)}/>
                <SCIconGreen answer={right.includes(aula3[2].question)}/>
                <SCIconRed answer={wrong.includes(aula3[2].question)}/>
                <SCSubmit onClick={correctAnswer3}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 4</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[3].text}
                value={answer4}
                onChange={(e) => setAnswer4(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[3].question)}/>
                <SCIconGreen answer={right.includes(aula3[3].question)}/>
                <SCIconRed answer={wrong.includes(aula3[3].question)}/>
                <SCSubmit onClick={correctAnswer4}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 5</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[4].text}
                value={answer5}
                onChange={(e) => setAnswer5(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[4].question)}/>
                <SCIconGreen answer={right.includes(aula3[4].question)}/>
                <SCIconRed answer={wrong.includes(aula3[4].question)}/>
                <SCSubmit onClick={correctAnswer5}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 6</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[5].text}
                value={answer6}
                onChange={(e) => setAnswer6(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[5].question)}/>
                <SCIconGreen answer={right.includes(aula3[5].question)}/>
                <SCIconRed answer={wrong.includes(aula3[5].question)}/>
                <SCSubmit onClick={correctAnswer6}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 7</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[6].text}
                value={answer7}
                onChange={(e) => setAnswer7(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[6].question)}/>
                <SCIconGreen answer={right.includes(aula3[6].question)}/>
                <SCIconRed answer={wrong.includes(aula3[6].question)}/>
                <SCSubmit onClick={correctAnswer7}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 8</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[7].text}
                value={answer8}
                onChange={(e) => setAnswer8(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[7].question)}/>
                <SCIconGreen answer={right.includes(aula3[7].question)}/>
                <SCIconRed answer={wrong.includes(aula3[7].question)}/>
                <SCSubmit onClick={correctAnswer8}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 9</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[8].text}
                value={answer9}
                onChange={(e) => setAnswer9(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[8].question)}/>
                <SCIconGreen answer={right.includes(aula3[8].question)}/>
                <SCIconRed answer={wrong.includes(aula3[8].question)}/>
                <SCSubmit onClick={correctAnswer9}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 10</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[9].text}
                value={answer10}
                onChange={(e) => setAnswer10(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[9].question)}/>
                <SCIconGreen answer={right.includes(aula3[9].question)}/>
                <SCIconRed answer={wrong.includes(aula3[9].question)}/>
                <SCSubmit onClick={correctAnswer10}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 11</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[10].text}
                value={answer11}
                onChange={(e) => setAnswer11(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[10].question)}/>
                <SCIconGreen answer={right.includes(aula3[10].question)}/>
                <SCIconRed answer={wrong.includes(aula3[10].question)}/>
                <SCSubmit onClick={correctAnswer11}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 12</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula3[11].text}
                value={answer12}
                onChange={(e) => setAnswer12(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula3[11].question)}/>
                <SCIconGreen answer={right.includes(aula3[11].question)}/>
                <SCIconRed answer={wrong.includes(aula3[11].question)}/>
                <SCSubmit onClick={correctAnswer12}>Verificar</SCSubmit>
            </SCContainer>
      </SCForm>
      <Footer aula={aula3} right={right} answered={answered}/>
      <Link to='/'>
        <SCReturn>Retornar ao Início</SCReturn>
      </Link>
    </>
  )
}

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

const SCSubmit = styled.button`
  width: 100px;
  height: 40px;

  font-size: 15px;
  font-family: 'Recursive', sans-serif;

  background-color: #ffffff;

  border-radius: 5px;
  border: solid 1px black;

  color: black;
  font-weight: bold;

  margin-right: 40px;
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
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #008000; 

  font-family: 'Recursive', sans-serif;

  padding-left: 10px;

  color: black;
`

const SCIconGray = styled(RxMinusCircled)`
  width: 25px;
  height: 25px;

  color: #212121;

  position: absolute;
  right: 17px;

  display: ${(props => props.answer ? 'block' : 'none')};
`

const SCIconGreen = styled(RxCheckCircled)`
  width: 25px;
  height: 25px;

  color: #008000;

  position: absolute;
  right: 17px;

  display: ${(props => props.answer ? 'block' : 'none')};
`

const SCIconRed = styled(RxCrossCircled)`
  width: 25px;
  height: 25px;

  color: red;

  position: absolute;
  right: 17px;

  display: ${(props => props.answer ? 'block' : 'none')}; 
`

const SCReturn = styled.div`
    font-size: 20px;
    font-family: 'Recursive', sans-serif;
    font-weight: bold;

    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;

    color: #008000;

    cursor: pointer;
`