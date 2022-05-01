import React, { useState, useEffect} from 'react'

const axios = require('axios').default;

export const Upload = () => {
    const [file, setFile] = useState();
    const [price, setPrice] = useState(0);
    function handleChange(e) {
        let cur_file = e.target.files[0];
        console.log(cur_file);
        let reader = new FileReader();
        let tmp = 0;
        reader.onloadend = function(){
            console.log('RESULT', reader.result)
            let myParams = {
                num: reader.result
            }
            axios.post('http://127.0.0.1:5000/recibe/', myParams,  { "Content-Type": "multipart/form-data" })
            .then(function(response){
                setPrice(response.data);
            })
            .catch(function(error){
                console.log(error);
            })
        }
        setPrice(tmp);
        reader.readAsDataURL(cur_file);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    useEffect(() => {
  console.log(price);
}, [price]);

  
    return (
        <div className="upload_btn">
            {price && <div className="precio">{price}</div>}
            <input type="file" onChange={handleChange} />
            <img src={file} alt="imagen enviada" className="upload_imagen"/>
        </div>
  
    );
}