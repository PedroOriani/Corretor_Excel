function correctAnswer1() {
    // Correção Questão 1
    if (answer1 === aula1[0].answer) {
      if (right.includes(aula1[0].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[0].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[0].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula1[0].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[0].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[0].question]
      setWrong(newWrong);
    }
  }

  function correctAnswer2() {
    const newEmpty = empty.filter(e => e !== aula1[0].question)
    setEmpty(newEmpty)

    if (answer2 === aula1[1].answer) {
      if (right.includes(aula1[1].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[1].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[1].question]
      setRight(newRight)
    } else {
      if (right.includes(aula1[1].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[1].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[1].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer3() {
    const newEmpty = empty.filter(e => e !== aula1[2].question)
    setEmpty(newEmpty)

    if (answer3 === aula1[2].answer) {
      if (right.includes(aula1[2].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[2].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[2].question]
      setRight(newRight)
    } else {
      if (right.includes(aula1[2].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[2].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[2].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer4() {
    const newEmpty = empty.filter(e => e !== aula1[3].question)
    setEmpty(newEmpty)

    if (answer4 === aula1[3].answer) {
      if (right.includes(aula1[3].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[3].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[3].question]
      setRight(newRight)
    } else {
      if (right.includes(aula1[3].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[3].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[3].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer5() {
    const newEmpty = empty.filter(e => e !== aula1[4].question)
    setEmpty(newEmpty)

    if (answer5 === aula1[4].answer) {
      if (right.includes(aula1[4].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[4].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[4].question]
      setRight(newRight)
    } else {
      if (right.includes(aula1[4].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[4].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[4].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer6() {
    const newEmpty = empty.filter(e => e !== aula1[5].question)
    setEmpty(newEmpty)

    if (answer5 === aula1[5].answer) {
      if (right.includes(aula1[5].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[5].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[5].question]
      setRight(newRight)
    } else {
      if (right.includes(aula1[5].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[5].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[5].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer7() {
    const newEmpty = empty.filter(e => e !== aula1[6].question)
    setEmpty(newEmpty)

    if (answer7 === aula1[6].answer) {
      if (right.includes(aula1[6].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[6].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[6].question]
      setRight(newRight)
    } else {
      if (right.includes(aula1[6].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[6].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[6].question]
      setWrong(newWrong)
    }
  }

  function correctAnswer8() {
    const newEmpty = empty.filter(e => e !== aula1[7].question)
    setEmpty(newEmpty)

    if (answer8 === aula1[7].answer) {
      if (right.includes(aula1[7].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[7].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[7].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula1[7].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[7].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[7].question]
      setWrong(newWrong)
    }
    correctAnswer7();
  }

  function correctAnswer9() {
    const newEmpty = empty.filter(e => e !== aula1[8].question)
    setEmpty(newEmpty)

    if (answer9 === aula1[8].answer) {
      if (right.includes(aula1[8].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[8].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[8].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula1[8].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[8].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[8].question]
      setWrong(newWrong)
   }
   correctAnswer8();
  }

  function correctAnswer10() {
    const newEmpty = empty.filter(e => e !== aula1[9].question)
    setEmpty(newEmpty)

    if (answer10 === aula1[9].answer) {
      if (right.includes(aula1[9].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[9].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[9].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula1[9].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[9].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[9].question]
      setWrong(newWrong)
    }
    correctAnswer9();
  }

  function correctAnswer11() {
    const newEmpty = empty.filter(e => e !== aula1[10].question)
    setEmpty(newEmpty)

    if (answer11 === aula1[10].answer) {
      if (right.includes(aula1[10].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[10].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[10].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula1[10].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[10].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[10].question]
      setWrong(newWrong)
    }
    correctAnswer10();
  }

  function correctAnswer12() {
    const newEmpty = empty.filter(e => e !== aula1[11].question)
    setEmpty(newEmpty)

    if (answer12 === aula1[11].answer) {
      if (right.includes(aula1[11].question)){
        return
      }
      const newWrong = wrong.filter(w => w !== aula1[11].question)
      setWrong(newWrong)
      const newRight = [...right, aula1[11].question]
      setRight(newRight)
    } else {
      if (wrong.includes(aula1[11].question)){
        return
      }
      const newRight = right.filter(r => r !== aula1[11].question)
      setRight(newRight)
      const newWrong = [...wrong, aula1[11].question]
      setWrong(newWrong)
    }
    correctAnswer11();
  }