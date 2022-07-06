import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
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
        props.showAlert('Converted to lowercase','success');

    }
    const handleClearClick = (event) =>{
    setText('');
    }
    const handleCopy = () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard','success');

    }
  return (
    <>
        <div className='container' style = {{color:props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange = {handleOnChange} rows="8" style = {{backgroundColor:props.mode==='dark'?'grey':'white',
            color: props.mode === 'dark'?'white':'black'}} id = 'myBox'></textarea>
            </div>
            <button className={`btn btn-${props.mode ==='green'?'success':'primary'} mx-1`} onClick={handleUpClick}> Convert to Uppercase</button>
            <button className={`btn btn-${props.mode ==='green'?'success':'primary'} mx-1`} onClick={handleLoClick}> Convert to LowerCase</button>
            <button className={`btn btn-${props.mode ==='green'?'success':'primary'} mx-1`} onClick={handleClearClick}> Clear Text</button>
            <button className={`btn btn-${props.mode ==='green'?'success':'primary'} mx-1`} onClick={handleCopy}> Copy Text</button>
        </div>
        <div className='container my-2' style = {{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words,{text.length} characters</p>
            <p>{0.008* text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length > 0? text:'Enter text to preview here'}</p>
        </div>
    </>
  )
}
