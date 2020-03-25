const wordResponder = (req, res) => {
  const { pressed_numbers, offset } = req.query;

  const letterBuckets = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };

  const wordGenerator = () => {
    const pressedNumbersArray = pressed_numbers
      .toString()
      .split("")
      .map(num => parseInt(num));
    let currentArray = [""];
    let newArray = [];
    pressedNumbersArray.forEach((element, index) => {
      letterBuckets[element].forEach(letter => {
        currentArray.forEach(currentWord => {
          newArray.push(`${currentWord}${letter}`);
        });
      });
      currentArray = [...newArray];
      newArray = [];
    });
    return currentArray;
  };

  const paginator = wordArray => {
    let fixedOffset = parseInt(offset);
    let numberOfWords = 20;
    if (fixedOffset < 0) {
      fixedOffset = 0;
    }
    if(wordArray.length && fixedOffset > wordArray.length){
        if(wordArray.length-numberOfWords < 0){

            fixedOffset = 0;

        }else{ 
            console.log(wordArray.length-numberOfWords)
            fixedOffset = wordArray.length-numberOfWords;
            console.log(fixedOffset)
        }
    }
    return wordArray.slice(fixedOffset,fixedOffset+numberOfWords);;
  };

  if (pressed_numbers) {
    return res.status(200).json(paginator(wordGenerator()));
  } else {
    return res.status(400).json([`No numbers pressed.`]);
  }
};

module.exports = {
  wordResponder: wordResponder
};
