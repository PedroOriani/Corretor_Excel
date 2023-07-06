import aula2 from "../../mocks/exAula2";
import { styled } from "styled-components";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RxCheckCircled } from "react-icons/rx"
import { RxCrossCircled } from 'react-icons/rx'
import { RxMinusCircled } from "react-icons/rx"

export default function Aula2(props){

    const { right, setRight, wrong, setWrong, answered, setAnswered } = props

    const questions = [];
  
    aula2.forEach(q => questions.push(q.question));

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
        const [answer13, setAnswer13] = useState('')
        const [answer14, setAnswer14] = useState('')
        const [answer15, setAnswer15] = useState('')
        const [answer16, setAnswer16] = useState('')
        const [answer17, setAnswer17] = useState('')
        const [answer18, setAnswer18] = useState('')
        const [answer19, setAnswer19] = useState('')
        const [answer20, setAnswer20] = useState('')
        const [answer21, setAnswer21] = useState('')
        const [answer22, setAnswer22] = useState('')
        const [answer23, setAnswer23] = useState('')
        const [answer24, setAnswer24] = useState('')
        const [answer25, setAnswer25] = useState('')
        const [answer26, setAnswer26] = useState('')
        const [answer27, setAnswer27] = useState('')
        const [answer28, setAnswer28] = useState('')
        const [answer29, setAnswer29] = useState('')
        const [answer30, setAnswer30] = useState('')

    function correctAnswer1(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[0].question)
    setEmpty(newEmpty)

    if (answer1 === aula2[0].answer) {
      if (right.includes(aula2[0].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[0].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[0].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[0].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[0].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[0].question]
      setWrong(newWrong);
    }
  }

    function correctAnswer2(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[1].question)
    setEmpty(newEmpty)

    if (answer2 === aula2[1].answer) {
      if (right.includes(aula2[1].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[1].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[1].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[1].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[1].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[1].question]
      setWrong(newWrong);
    }
  }

    function correctAnswer3(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[2].question)
    setEmpty(newEmpty)

    if (answer3 === aula2[2].answer) {
      if (right.includes(aula2[2].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[2].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[2].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[2].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[2].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[2].question]
      setWrong(newWrong);
    }
  }

    function correctAnswer4(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[3].question)
    setEmpty(newEmpty)

    if (answer4 === aula2[3].answer) {
      if (right.includes(aula2[3].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[3].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[3].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[3].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[3].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[3].question]
      setWrong(newWrong);
    }
  }

    function correctAnswer5(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[4].question)
    setEmpty(newEmpty)

    if (answer5 === aula2[4].answer) {
      if (right.includes(aula2[4].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[4].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[4].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[4].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[4].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[4].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer6(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[5].question)
    setEmpty(newEmpty)

    if (answer6 === aula2[5].answer) {
      if (right.includes(aula2[5].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[5].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[5].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[5].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[5].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[5].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer7(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[6].question)
    setEmpty(newEmpty)

    if (answer7 === aula2[6].answer) {
      if (right.includes(aula2[6].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[6].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[6].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[6].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[6].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[6].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer8(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[7].question)
    setEmpty(newEmpty)

    if (answer8 === aula2[7].answer) {
      if (right.includes(aula2[7].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[7].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[7].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[7].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[7].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[7].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer9(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[8].question)
    setEmpty(newEmpty)

    if (answer9 === aula2[8].answer) {
      if (right.includes(aula2[8].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[8].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[8].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[8].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[8].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[8].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer10(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[9].question)
    setEmpty(newEmpty)

    if (answer10 === aula2[9].answer) {
      if (right.includes(aula2[9].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[9].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[9].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[9].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[9].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[9].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer11(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[10].question)
    setEmpty(newEmpty)

    if (answer11 === aula2[10].answer) {
      if (right.includes(aula2[10].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[10].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[10].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[10].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[10].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[10].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer12(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[11].question)
    setEmpty(newEmpty)

    if (answer12 === aula2[11].answer) {
      if (right.includes(aula2[11].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[11].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[11].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[11].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[11].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[11].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer13(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[12].question)
    setEmpty(newEmpty)

    if (answer13 === aula2[12].answer) {
      if (right.includes(aula2[12].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[12].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[12].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[12].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[12].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[12].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer14(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[13].question)
    setEmpty(newEmpty)

    if (answer14 === aula2[13].answer) {
      if (right.includes(aula2[13].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[13].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[13].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[13].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[13].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[13].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer15(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[14].question)
    setEmpty(newEmpty)

    if (answer15 === aula2[14].answer) {
      if (right.includes(aula2[14].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[14].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[14].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[14].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[14].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[14].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer16(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[15].question)
    setEmpty(newEmpty)

    if (answer16 === aula2[15].answer) {
      if (right.includes(aula2[15].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[15].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[15].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[15].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[15].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[15].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer17(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[16].question)
    setEmpty(newEmpty)

    if (answer17 === aula2[16].answer) {
      if (right.includes(aula2[16].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[16].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[16].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[16].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[16].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[16].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer18(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[17].question)
    setEmpty(newEmpty)

    if (answer18 === aula2[17].answer) {
      if (right.includes(aula2[17].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[17].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[17].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[17].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[17].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[17].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer19(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[18].question)
    setEmpty(newEmpty)

    if (answer19 === aula2[18].answer) {
      if (right.includes(aula2[18].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[18].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[18].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[18].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[18].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[18].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer20(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[19].question)
    setEmpty(newEmpty)

    if (answer20 === aula2[19].answer) {
      if (right.includes(aula2[19].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[19].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[19].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[19].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[19].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[19].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer21(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[20].question)
    setEmpty(newEmpty)

    if (answer21 === aula2[20].answer) {
      if (right.includes(aula2[20].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[20].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[20].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[20].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[20].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[20].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer22(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[21].question)
    setEmpty(newEmpty)

    if (answer22 === aula2[21].answer) {
      if (right.includes(aula2[21].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[21].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[21].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[21].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[21].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[21].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer23(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[22].question)
    setEmpty(newEmpty)

    if (answer23 === aula2[22].answer) {
      if (right.includes(aula2[22].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[22].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[22].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[22].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[22].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[22].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer24(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[23].question)
    setEmpty(newEmpty)

    if (answer24 === aula2[23].answer) {
      if (right.includes(aula2[23].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[23].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[23].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[23].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[23].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[23].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer25(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[24].question)
    setEmpty(newEmpty)

    if (answer25 === aula2[24].answer) {
      if (right.includes(aula2[24].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[24].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[24].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[24].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[24].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[24].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer26(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[25].question)
    setEmpty(newEmpty)

    if (answer26 === aula2[25].answer) {
      if (right.includes(aula2[25].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[25].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[25].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[25].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[25].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[25].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer27(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[26].question)
    setEmpty(newEmpty)

    if (answer27 === aula2[26].answer) {
      if (right.includes(aula2[26].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[26].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[26].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[26].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[26].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[26].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer28(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[27].question)
    setEmpty(newEmpty)

    if (answer28 === aula2[27].answer) {
      if (right.includes(aula2[27].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[27].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[27].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[27].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[27].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[27].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer29(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[28].question)
    setEmpty(newEmpty)

    if (answer29 === aula2[28].answer) {
      if (right.includes(aula2[28].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[28].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[28].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[28].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[28].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[28].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer30(event) {
    event.preventDefault()
    setAnswered(1)
    const newEmpty = empty.filter(e => e !== aula2[29].question)
    setEmpty(newEmpty)

    if (answer30 === aula2[29].answer) {
      if (right.includes(aula2[29].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula2[29].question)
      setWrong(newWrong)
      const newRight = [...right, aula2[29].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula2[29].question)){
        return
      }
      const newRight = right.filter(r => r !== aula2[29].question)
      setRight(newRight)
      const newWrong = [...wrong, aula2[29].question]
      setWrong(newWrong);
    }
  }

    return(
        <>
        <SCTitle>Exercícios Aula 2</SCTitle>
      <SCForm>
            <SCContainer>
                <SCLabel>Questão 1</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[0].text}
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[0].question)}/>
                <SCIconGreen answer={right.includes(aula2[0].question)}/>
                <SCIconRed answer={wrong.includes(aula2[0].question)}/>
                <SCSubmit onClick={correctAnswer1}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 2</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[1].text}
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[1].question)}/>
                <SCIconGreen answer={right.includes(aula2[1].question)}/>
                <SCIconRed answer={wrong.includes(aula2[1].question)}/>
                <SCSubmit onClick={correctAnswer2}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 3</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[2].text}
                value={answer3}
                onChange={(e) => setAnswer3(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[2].question)}/>
                <SCIconGreen answer={right.includes(aula2[2].question)}/>
                <SCIconRed answer={wrong.includes(aula2[2].question)}/>
                <SCSubmit onClick={correctAnswer3}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 4</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[3].text}
                value={answer4}
                onChange={(e) => setAnswer4(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[3].question)}/>
                <SCIconGreen answer={right.includes(aula2[3].question)}/>
                <SCIconRed answer={wrong.includes(aula2[3].question)}/>
                <SCSubmit onClick={correctAnswer4}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 5</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[4].text}
                value={answer5}
                onChange={(e) => setAnswer5(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[4].question)}/>
                <SCIconGreen answer={right.includes(aula2[4].question)}/>
                <SCIconRed answer={wrong.includes(aula2[4].question)}/>
                <SCSubmit onClick={correctAnswer5}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 6</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[5].text}
                value={answer6}
                onChange={(e) => setAnswer6(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[5].question)}/>
                <SCIconGreen answer={right.includes(aula2[5].question)}/>
                <SCIconRed answer={wrong.includes(aula2[5].question)}/>
                <SCSubmit onClick={correctAnswer6}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 7</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[6].text}
                value={answer7}
                onChange={(e) => setAnswer7(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[6].question)}/>
                <SCIconGreen answer={right.includes(aula2[6].question)}/>
                <SCIconRed answer={wrong.includes(aula2[6].question)}/>
                <SCSubmit onClick={correctAnswer7}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 8</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[7].text}
                value={answer8}
                onChange={(e) => setAnswer8(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[7].question)}/>
                <SCIconGreen answer={right.includes(aula2[7].question)}/>
                <SCIconRed answer={wrong.includes(aula2[7].question)}/>
                <SCSubmit onClick={correctAnswer8}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 9</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[8].text}
                value={answer9}
                onChange={(e) => setAnswer9(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[8].question)}/>
                <SCIconGreen answer={right.includes(aula2[8].question)}/>
                <SCIconRed answer={wrong.includes(aula2[8].question)}/>
                <SCSubmit onClick={correctAnswer9}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 10</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[9].text}
                value={answer10}
                onChange={(e) => setAnswer10(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[9].question)}/>
                <SCIconGreen answer={right.includes(aula2[9].question)}/>
                <SCIconRed answer={wrong.includes(aula2[9].question)}/>
                <SCSubmit onClick={correctAnswer10}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 11</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[10].text}
                value={answer11}
                onChange={(e) => setAnswer11(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[10].question)}/>
                <SCIconGreen answer={right.includes(aula2[10].question)}/>
                <SCIconRed answer={wrong.includes(aula2[10].question)}/>
                <SCSubmit onClick={correctAnswer11}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 12</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[11].text}
                value={answer12}
                onChange={(e) => setAnswer12(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[11].question)}/>
                <SCIconGreen answer={right.includes(aula2[11].question)}/>
                <SCIconRed answer={wrong.includes(aula2[11].question)}/>
                <SCSubmit onClick={correctAnswer12}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 13</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[12].text}
                value={answer13}
                onChange={(e) => setAnswer13(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[12].question)}/>
                <SCIconGreen answer={right.includes(aula2[12].question)}/>
                <SCIconRed answer={wrong.includes(aula2[12].question)}/>
                <SCSubmit onClick={correctAnswer13}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 14</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[13].text}
                value={answer14}
                onChange={(e) => setAnswer14(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[13].question)}/>
                <SCIconGreen answer={right.includes(aula2[13].question)}/>
                <SCIconRed answer={wrong.includes(aula2[13].question)}/>
                <SCSubmit onClick={correctAnswer14}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 15</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[14].text}
                value={answer15}
                onChange={(e) => setAnswer15(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[14].question)}/>
                <SCIconGreen answer={right.includes(aula2[14].question)}/>
                <SCIconRed answer={wrong.includes(aula2[14].question)}/>
                <SCSubmit onClick={correctAnswer15}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 16</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[15].text}
                value={answer16}
                onChange={(e) => setAnswer16(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[15].question)}/>
                <SCIconGreen answer={right.includes(aula2[15].question)}/>
                <SCIconRed answer={wrong.includes(aula2[15].question)}/>
                <SCSubmit onClick={correctAnswer16}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 17</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[16].text}
                value={answer17}
                onChange={(e) => setAnswer17(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[16].question)}/>
                <SCIconGreen answer={right.includes(aula2[16].question)}/>
                <SCIconRed answer={wrong.includes(aula2[16].question)}/>
                <SCSubmit onClick={correctAnswer17}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 18</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[17].text}
                value={answer18}
                onChange={(e) => setAnswer18(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[17].question)}/>
                <SCIconGreen answer={right.includes(aula2[17].question)}/>
                <SCIconRed answer={wrong.includes(aula2[17].question)}/>
                <SCSubmit onClick={correctAnswer18}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 19</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[18].text}
                value={answer19}
                onChange={(e) => setAnswer19(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[18].question)}/>
                <SCIconGreen answer={right.includes(aula2[18].question)}/>
                <SCIconRed answer={wrong.includes(aula2[18].question)}/>
                <SCSubmit onClick={correctAnswer19}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 20</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[19].text}
                value={answer20}
                onChange={(e) => setAnswer20(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[19].question)}/>
                <SCIconGreen answer={right.includes(aula2[19].question)}/>
                <SCIconRed answer={wrong.includes(aula2[19].question)}/>
                <SCSubmit onClick={correctAnswer20}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 21</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[20].text}
                value={answer21}
                onChange={(e) => setAnswer21(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[20].question)}/>
                <SCIconGreen answer={right.includes(aula2[20].question)}/>
                <SCIconRed answer={wrong.includes(aula2[20].question)}/>
                <SCSubmit onClick={correctAnswer21}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 22</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[21].text}
                value={answer22}
                onChange={(e) => setAnswer22(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[21].question)}/>
                <SCIconGreen answer={right.includes(aula2[21].question)}/>
                <SCIconRed answer={wrong.includes(aula2[21].question)}/>
                <SCSubmit onClick={correctAnswer22}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 23</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[22].text}
                value={answer23}
                onChange={(e) => setAnswer23(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[22].question)}/>
                <SCIconGreen answer={right.includes(aula2[22].question)}/>
                <SCIconRed answer={wrong.includes(aula2[22].question)}/>
                <SCSubmit onClick={correctAnswer23}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 24</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[23].text}
                value={answer24}
                onChange={(e) => setAnswer24(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[23].question)}/>
                <SCIconGreen answer={right.includes(aula2[23].question)}/>
                <SCIconRed answer={wrong.includes(aula2[23].question)}/>
                <SCSubmit onClick={correctAnswer24}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 25</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[24].text}
                value={answer25}
                onChange={(e) => setAnswer25(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[24].question)}/>
                <SCIconGreen answer={right.includes(aula2[24].question)}/>
                <SCIconRed answer={wrong.includes(aula2[24].question)}/>
                <SCSubmit onClick={correctAnswer25}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 26</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[25].text}
                value={answer26}
                onChange={(e) => setAnswer26(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[25].question)}/>
                <SCIconGreen answer={right.includes(aula2[25].question)}/>
                <SCIconRed answer={wrong.includes(aula2[25].question)}/>
                <SCSubmit onClick={correctAnswer26}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 27</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[26].text}
                value={answer27}
                onChange={(e) => setAnswer27(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[26].question)}/>
                <SCIconGreen answer={right.includes(aula2[26].question)}/>
                <SCIconRed answer={wrong.includes(aula2[26].question)}/>
                <SCSubmit onClick={correctAnswer27}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 28</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[27].text}
                value={answer28}
                onChange={(e) => setAnswer28(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[27].question)}/>
                <SCIconGreen answer={right.includes(aula2[27].question)}/>
                <SCIconRed answer={wrong.includes(aula2[27].question)}/>
                <SCSubmit onClick={correctAnswer28}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 29</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[28].text}
                value={answer29}
                onChange={(e) => setAnswer29(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[28].question)}/>
                <SCIconGreen answer={right.includes(aula2[28].question)}/>
                <SCIconRed answer={wrong.includes(aula2[28].question)}/>
                <SCSubmit onClick={correctAnswer29}>Verificar</SCSubmit>
            </SCContainer>
            <SCContainer>
                <SCLabel>Questão 30</SCLabel>
                <SCInput 
                type="text" 
                placeholder={aula2[29].text}
                value={answer30}
                onChange={(e) => setAnswer30(e.target.value)}
                ></SCInput>
                <SCIconGray answer={empty.includes(aula2[29].question)}/>
                <SCIconGreen answer={right.includes(aula2[29].question)}/>
                <SCIconRed answer={wrong.includes(aula2[29].question)}/>
                <SCSubmit onClick={correctAnswer30}>Verificar</SCSubmit>
            </SCContainer>
      </SCForm>
            <Footer aula={aula2} right={right} answered={answered} />
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