import { Link } from "react-router-dom"
import { styled } from "styled-components"

export default function HomePage() {
    return (
        <>
            <SCTitle>Corretor de exercícios - Excel</SCTitle>
            <SCContainer>
                <Link to="/aula1">
                    <SCPages>Aula 1</SCPages>
                </Link>
                <Link to="/aula2">
                    <SCPages>Aula 2</SCPages>
                </Link>
                <Link to="/aula3">
                    <SCPages>Aula 3</SCPages>
                </Link>
            </SCContainer>
        </>
    )
}

const SCTitle = styled.h1`
    font-size: 80px;
    font-family: 'Recursive', sans-serif;
    font-weight: bold;

    color: #ffffff;

    text-align: center;
    margin: 50px;
`

const SCContainer = styled.div `
    width: 100%;
    height: 100%;

    padding: 150px 50px 150px 50px;
    

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

const SCPages = styled.button`
    width: 400px;
    height: 100px;

    background-color: #ffffff;

    border: none;
    border-radius: 5px;

    margin: 45px;

    font-family: 'Recursive', sans-serif;
    font-size: 30px;
    font-weight: bold;

    color: #008000;
    
    cursor: pointer;
`