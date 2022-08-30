import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import List from '../components/List'
import axios from 'axios'
function ListPage() {
  const [list,setList]=useState([])
  var currentUser=JSON.parse(localStorage.getItem('currentUser'));
  const u_id=currentUser._id;
  useEffect(()=>{
    async function as1(){
  async function as(){
    try{
    const data= await(await axios.post("/api/users/getalllists",{data:u_id})).data;
   setList(data)
  }
    catch(e){console.log(e)}
  }
  as();
}
as1();
},[])
console.log(list)
  return (
    <>
      <Navbar />
    <ul>
    {
      list.map((ls)=>{
        return (<li>

          <List name={ls.fname} length={ls.length} index={ls.index} date={ls.date}/>
        </li>)
      })
    }
    </ul>
    </>
  )
}

export default ListPage