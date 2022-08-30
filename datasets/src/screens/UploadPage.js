import React from 'react'
import Papa from 'papaparse'
import axios from 'axios'
import UploadFiles from '../components/DragDropFile';
import Navbar from '../components/Navbar';
 function UploadPage() {
//   const [csvFile, SetCsvFile] = useState();
//   const formData = new FormData();
//   formData.append('name', "FILENAME");
//   formData.append('file', csvFile); 
//   <input type="file" name="file" onChange={SetCsvFile(e.target.files[0])} />

//   const url = 'http://localhost:5000/uploaddata';
//   axios({
//       method: 'POST',
//       url: url,
//       headers: {
//           ContentType: 'multipart/form-data'
//       },
//       body: formData
//   })
//   .then(res => console.log(res))
//   .catch(err => console.log(err));
var currentUser=JSON.parse(localStorage.getItem('currentUser'));
//console.log(currentUser);
var res={data:{}};
console.log(res)
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
        // res.data=results.data;
        // Upload();
      }
    })
    }
    f(files[0]);
    // Papa.parse(files[0], {
    //   complete: function(results) {
    //    //console.log("Finished:",  results.data);
    //    //res.data=Object.assign({},results.data);
    //    //res.data=JSON.stringify(results.data)
    //    //res.data=results.data;
       
    //   }}
    //)
    
  }
}
const readUploadFile= e =>{
  const files = e.target.files;
  console.log( e.target);
  res={fname:files[0].name}
  res.u_id=currentUser._id;
  //console.log(currentUser);
  console.log(res);
  if(files[0].type==="text/csv"){
     handleCSV(files)
    //console.log(res)
    //Upload();
  }
  else if(files[0].type==="text/xls"){
    //handleXLS(e);
  }

}
async function Upload(){
  console.log(res)
  
  try{
    const result=(await axios.post('api/users/data',{data:res})).data;
    console.log(result)
  }
  catch(e) {console.log(e);}
}

  return (
    <div>
<Navbar />
<UploadFiles />
    </div>
  )
}

export default UploadPage;