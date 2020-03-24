const wordResponder = (req, res) => {

    const {
        pressed_numbers,
    } = req.query;

    const letterBuckets = {
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"],
    }


    const wordGenerator = () => {
        const pressedNumbersArray = pressed_numbers.toString().split("").map(num => parseInt(num));
        let currentArray = [""];
        let newArray = [];
        pressedNumbersArray.forEach((element,index)=>{
            letterBuckets[element].forEach(letter => {
                currentArray.forEach(currentWord => {
                    newArray.push(`${currentWord}${letter}`)
                })
            })
            currentArray = [...newArray];
            newArray = [];
        })
        return currentArray;
    }

    if(pressed_numbers){
        return res.status(200).json(wordGenerator())
    }
    else{
        return res.status(400).json(`Error - did not receive any numbers`)
    }
}

module.exports={
    wordResponder: wordResponder,
  };