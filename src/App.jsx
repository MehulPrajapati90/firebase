import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { appFirebase } from './firebase';
import Signup from './pages/signup.jsx';
import Signin from './pages/Signin.jsx';

const db = getDatabase(appFirebase);

const App = () => {

  const putdata = () => {
    set(ref(db, "user/mehul"), {
      id: 1,
      name: "mehul",
      age: 20
    })
  }

  return (
    <>
      <div>App-firbase</div>
      <button onClick={putdata}>PutData</button>
      <Signup />
      <Signin/>
    </>
  )
}

export default App