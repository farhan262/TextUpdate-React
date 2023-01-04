import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success")
  }

  const handleLoClick = () =>{
    console.log("Lowercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success")
  }

  
  const handleClearClick = () =>{
    console.log("Lowercase was clicked" + text)
    let newText = '';
    setText(newText)
    props.showAlert("Cleared the text","success")
  }
  const handleonChange = (event) =>{
    console.log("onchange")
    setText(event.target.value)
  }
  const handleCopy = () =>{
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success")
  }
  const handleExtraSpaces = () =>{
    let newtext= text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed Extra Spaces","success")
  }
  const [text,setText] = useState("")
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
     <div className="mb-3">
     {/* <label for="myBox" class="form-label">Example textarea</label> */}
    <textarea className="form-control" id="myBox" value={text} onChange={handleonChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
    </div>
      <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
      <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
      <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
      <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Space</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
     <h2>Your text Summary</h2>
     <p>{text.split(" ").length} words, {text.length} characters</p>
     <p>{.008 * text.split(" ").length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
    </div>
    </>
  )
}
