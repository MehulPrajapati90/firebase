import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { appFirebase } from '../firebase';

const auth = getAuth(appFirebase);

const Signup = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const createUser = () => { createUserWithEmailAndPassword(auth, email, pass).then(val => console.log(val)) };
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h1>SignUp</h1>
            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" placeholder='Enter Email......' />
            <input onChange={(e) => { setPass(e.target.value) }} value={pass} type="password" placeholder='Enter Password......' />

            <button onClick={createUser} className="submit">Submit</button>
        </div>
    )
}

export default Signup;