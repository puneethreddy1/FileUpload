import {React,useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { JsonToTable } from "react-json-to-table";
import Navbar from './Navbar';
function TablePage() {
  var currentUser=JSON.parse(localStorage.getItem('currentUser'));
  const u_id=currentUser._id;
  const par=useParams();
  const id=par.id;
  const[list,setList]=useState({});
  const[isloading,setLoading]=useState(true);
  //var list={};

  useEffect(()=>{
    //var data;
    async function as1(){
  async function as(){
    try{
     const dat= (await axios.post("/api/users/gettable",{data:{u_id:u_id,ind:id}}));
     //console.log(dat.data.data)
   setList(dat.data.data)
   setLoading(false);
  }
    catch(e){console.log(e)}
  }
  as();
}
as1();
//console.log(data)
},[]);
  if(!isloading){
    console.log(list)
  //    let head=[]
  // list[0].forEach((product) => {
  //   head.push(<th>{product}</th>)
  // })
  // let body=[];
  // for(let i=1;i<list.length;i++){
  //   let rec=[]
  //   for(let j of list.data[i]){
  //   rec.push(<td>{j}</td>)}
  //   body.push(<tr>{rec}</tr>);
  // }
  return (
    <>
    <Navbar />
     <JsonToTable json={list} />
    </>
    //  <>
    //  <Table striped bordered hover>
    //   <thead>
    //     <tr>
    //       {head}
          
    //     </tr>
    //   </thead>
    //   <tbody>
    //   {()=>{
    //     for(let i of list){
    //       <tr>
    //       {()=>{for(let j of i){
    //         <td>{j}</td>
    //       }}}
    //       </tr>
    //     }}
    //   }
    //   </tbody>
    //   </Table>
    // </>
  );}
}

export default TablePage