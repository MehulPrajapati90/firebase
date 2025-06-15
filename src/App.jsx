import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { appFirebase } from './firebase';

const db = getDatabase(appFirebase);

const App = () => {

  const putdata = () =>{
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
   </>
  )
}

export default App