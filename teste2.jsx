function correctAnswers() {
    answers=[];
    setAnswered(1)
    setEmpty([])
    setRight([])
    setWrong([])

    answers.push(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12)

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === aula1[i].answer) {
        if (right.includes(aula1[i].question)) {
          console.log('ja ta');
        } else {
          const newWrong = wrong.filter(w => w !== aula1[11].question)
          setWrong(newWrong)
          const newRight = [...right, aula1[i].question]
          setRight(newRight)
        }
      } else {
        if (wrong.includes(aula1[i].question)) {
          console.log('ja ta');
        } else {
          const newRight = right.filter(r => r !== aula1[11].question)
          setRight(newRight)
          const newWrong = [...wrong, aula1[i].question]
          setWrong(newWrong)
        }
      }
    }

    console.log(answers)
    console.log(empty)
    console.log(right)
    console.log(wrong)
  }