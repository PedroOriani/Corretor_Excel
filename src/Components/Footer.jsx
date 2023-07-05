import { styled } from "styled-components"

export default function Footer (props){

    const { aula, right, answered } = props;

    let answ = `${right.length} / ${aula.length}`

    return(
        <SCContainer>
            <SCText>{answered === 0 ? "Ainda não respondido" : `Respostas Corretas: ${answ}`}</SCText>
        </SCContainer>
    )
}

const SCContainer = styled.div`
    width: 100%;
    height: 70px;

    background-color: #ffffff;

    border-top: solid 2px black;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;
`

const SCText = styled.p`
    font-size: 30px;
    font-family: 'Recursive', sans-serif;
    font-weight: bold;
`