let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ];
  const average = calculateAverage(students)

  function calculateAverage (array){
    const sumAll = array.reduce(sum, 0)
    return sumAll / array.length
  }

  function sum (acc, student){
    acc = acc + student.score
    return acc
  } 
  
  console.log(average)