import { createContext, useEffect, useState } from 'react'
import './App.css'
import Showyour from './showYour'
export const variable = createContext(null);

function App() {
  const [user, setUser] = useState([]);
  const [currentuser, setCurentuser] = useState("")
  const handelClick = () => {
    setUser([...user, currentuser]);
    setCurentuser("");

  }
  // useEffect(() => {
  //   console.log(user)
  // }, [user])

  return (
    <>
      <variable.Provider value={{ user, setUser }}>
        <div>
          <input type="text" value={currentuser} onChange={(e) => setCurentuser(e.target.value)} />
          <button onClick={handelClick}>ADD</button>
        </div>
        <Showyour />
      </variable.Provider>

    </>
  )
}

export default App
