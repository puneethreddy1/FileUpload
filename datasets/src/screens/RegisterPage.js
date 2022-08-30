import React, { useState, useEffect } from 'react'
import axios from "axios";
import Navbar from '../components/Navbar';

function Register() {
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    async function rgstr() {

        if (password == cpassword) {
            const user = {
                name,
                password,
                cpassword
            }
            try {
                const result = await axios.post('/api/users/register', user)
                    .then(res => {
                        setname('')
                        setcpassword('')
                        setpassword('')
                    })
                    .catch(error => {
                        alert("The User already Exists")
                        setname('')
                        setcpassword('')
                        setpassword('')
                        return;
                    })
                // const data = await result.json();
                // alert(data.message);
                // setloading(false)
                // setsuccess(true)
                // setname('')
                // setemail('')
                // setcpassword('')
                // setpassword('')
            }
            catch (e) {
                console.log(e)
            }
        }
        else {
            alert("passwords don't match");
        }
    }
    return (
        <div className="">
            <Navbar />
            <div>
                <div className="row justify-content-center mt-5 ">
                    <div className="col-md-5 ">
                        <div className='bs'>
                            <h2>Register</h2>
                            <input type="text" className='form-control' placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
                            <input type="password" className='form-control' placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                            <input type="text" className='form-control' placeholder='confirm  password' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />

                            <button className='btn btn-primary mt-3' onClick={rgstr}>Register</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register