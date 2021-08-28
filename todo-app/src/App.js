import React, {useState} from 'react';
import './App.css';
import Login from "./pages/login"
import ToDo from "./pages/todo"

function App() {

  const [session, setSessionData] = useState()

  const setSession = (data) => {
    // console.log(data)
    setSessionData(data)
  } 
  return (
    <>
      {(!session) ? <Login setSession={setSession}/> : <ToDo/>}
    </>
  );
}

export default App;
