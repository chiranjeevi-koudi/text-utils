import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick =()=>{
        setText(text.toUpperCase());
        props.showAlert('converted to uppercase','success');
    }
    const handleLoClick =()=>{
        setText(text.toLowerCase());
        props.showAlert('converted to lowercase','success');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] =useState("");
    return (
        <>
        <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox"value={text} onChange={handleOnChange} rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008*text.length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
        </>
        
    )
}
