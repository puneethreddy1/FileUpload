import '../main.css'
import Papa from 'papaparse'
import axios from 'axios'
import React from 'react';
import * as xlsx from 'xlsx'
// drag drop file component
export default function DragDropFile() {

  async function Upload(){
    console.log(res)
    
    try{
      const result=(await axios.post('api/users/data',{data:res})).data;
      console.log(result)
    }
    catch(e) {console.log(e);}
  }

  var currentUser=JSON.parse(localStorage.getItem('currentUser'));
  
  var res={data:{}};
 
  function handleCSV(files){
    if (files) {
      console.log(files[0]);
      async function f(files) {
        const txt=await files.text();
        //console.log(txt)
        Papa.parse(txt, {
          header:true,
        complete: function(results) {
          //console.log(results.data);
          res.data=results.data;
          Upload();
        }
      })
      }
      f(files[0]);      
    }
  }


  const handleXLS = (e) => {
    if (e.dataTransfer.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            res.data=json;
            Upload();
            //console.log(json)
        };
        reader.readAsArrayBuffer(e.dataTransfer.files[0]);
    }
}
const handleJSON = e => {
  const fileReader = new FileReader();
  fileReader.readAsText(e.dataTransfer.files[0], "UTF-8");
  fileReader.onload = e => {
    //console.log("e.target.result", e.target.result);
    res.data=e.target.result;
    Upload();
  };
};

  const readUploadFile= e =>{
    const files = e.dataTransfer.files;
    console.log(files[0].name);
    res={fname:files[0].name}
    res.u_id=currentUser._id;
    //console.log(currentUser);
    console.log(e.dataTransfer.files);
    if(files[0].type==="text/csv"){
       handleCSV(files)
    }
    else if(files[0].type.includes("application/vnd")){
      handleXLS(e);
    }
    else if(files[0].type.includes("application/json")){
      handleJSON(e);
    }
  };
    // drag state
    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef(null);
    
    // handle drag events
    const handleDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };
    
    // triggers when file is dropped
    const handleDrop = function(e) {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        //const files=e.dataTransfer.files;
        readUploadFile(e);
      }
    };
    
    // triggers when file is selected with click
    const handleChange = function(e) {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        // handleFiles(e.target.files);
      }
    };
    
  // triggers the input when the button is clicked
    const onButtonClick = (e) => {
      inputRef.current.click();
      readUploadFile(e);
    };
    
    return (
      <div className='container h-100 d-flex align-items-center justify-content-center'>
      <form id="form-file-upload" className='text-center' onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
        <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
          <div>
            <p>Drag and drop your file here</p>
           
          </div> 
        </label>
        { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        <button className="btn btn-primary" onClick={onButtonClick}>Upload a file</button>
      </form>
      </div>
    );
  };