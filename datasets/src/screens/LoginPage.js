
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
function LoginPage() {
    const nav=useNavigate();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [usr,setuser]=useState('')
    useEffect(()=>{
        const sc=localStorage.getItem('currentUser');
        console.log(sc)
        if(sc){
            window.href.location='/lists';
        }
    },[]);
    async function Login(){
        const user={
            email,password
        }
        try{
            const result = (await axios.post('/api/users/login', user)).data
            localStorage.setItem('currentUser', JSON.stringify(result))
            localStorage.tm=new Date();
            usr=setuser(localStorage.getItem('currentUser'));
            
        }
        catch(e){
            console.log(e);
        }
        window.location.href = '/lists'
    }
  return (
   <>
   <div className="">
             <Navbar />
            <div>
                {/* {loading && (<Loader />)} */}

                <div className="row justify-content-center mt-5 ">
                    <div className="col-md-5 ">

                        {/* {error && (<Error message="invalid credintials" />)} */}
                        <div className='bs'>
                            <h2>Login</h2>

                            <input type="text" className='form-control' placeholder='name' value={email} onChange={(e) => { setemail(e.target.value) }}/>
                            
                            <input type="password" className='form-control' placeholder='password' 
                            value={password} onChange={(e) => { setpassword(e.target.value) }} />


                            <button className='btn btn-primary mt-3' onClick={Login} >Login</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default LoginPage