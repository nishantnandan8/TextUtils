import React, {useState}  from 'react'

export default function TextForm(props) {
    const handleupclick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("coverted to Uppercase","success");
    }
    const handlelowclick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showalert("coverted to Lowercase","success");
    }
    const handleOnChange = (Event)=>{
        // console.log("on change");
        setText(Event.target.value);
    }
  const [text, setText] = useState('');
  return (
      <>
    <div className='container' style={{color: props.mode==="light"?'black':'white'}}>
        <h1> {props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?'grey':'white' , color:props.mode==="light"?'black':'white' }} id=" mybox " rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>convert to uppercase</button> 
        <button className="btn btn-primary mx-2" onClick={handlelowclick}>convert to lowercase</button> 
    </div>
    <div className="container" style={{color: props.mode==="dark"?'white':'black'}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h3>preview</h3>
      <p>{text}</p>
    </div>
      </>
  )
}
