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
    const [text,setText] = useState('Enter text here')
    //text = "change value" wrong way to change state
    // setText("new Text");// correct way to change state
  return (
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
        {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange = {handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}> Convert to Uppercase</button>
    </div>
  )
}
