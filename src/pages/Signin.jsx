import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { appFirebase } from '../firebase';

const auth = getAuth(appFirebase);

const Signin = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const loginUser = () => { signInWithEmailAndPassword(auth, email, pass).then(val => console.log("SignedIn!", val)).catch((err) => console.log(err)) };
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h1>Signin</h1>
            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" placeholder='Enter Email......' />
            <input onChange={(e) => { setPass(e.target.value) }} value={pass} type="password" placeholder='Enter Password......' />

            <button onClick={loginUser} className="submit">Submit</button>
        </div>
    )
}

export default Signin;