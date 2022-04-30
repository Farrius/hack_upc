import React, { useState } from 'react'

export const Upload = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className="upload_btn">
            <input type="file" onChange={handleChange} />
            <img src={file} alt="imagen enviada" className="upload_imagen"/>
        </div>
  
    );
}