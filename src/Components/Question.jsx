import { styled } from "styled-components"

export default function Question(props){

    const { questions } = props;

    return(
        <>
        {questions.map((q, i) => (
            <SCContainer key={i}>
                <SCLabel>Questão {q.question}</SCLabel>
                <SCInput type="text" placeholder={q.text}></SCInput>
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
`

const SCLabel = styled.label`
  font-size: 25px;
  font-weight: bold;

  font-family: 'Recursive', sans-serif;
`

const SCInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #008000; 

`