const dummyResponse = (req, res) => {

    const {
        pressed_numbers,
    } = req.query;

    if(pressed_numbers){
        return res.status(200).json(`Numbers pressed ${pressed_numbers}`)
    }
    else{
        return res.status(400).json(`Error - did not receive any numbers`)
    }
}

module.exports={
    dummyResponse: dummyResponse,
  };