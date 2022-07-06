import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log('Handle on change was clicked');
        setText(event.target.value);
    }
    const [text,setText] = useState('')
    //text = "change value" wrong way to change state
    // setText("new Text");// correct way to change state
    const handleLoClick = (event) =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = (event) =>{
    setText('');
    }
  return (
    <>
        <div className='container'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange = {handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text</button>
        </div>
        <div className='container my-2'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words,{text.length} characters</p>
            <p>{0.008* text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
