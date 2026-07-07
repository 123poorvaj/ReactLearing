import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
//store the resonce data in the state useing axios  .install npm install axios 
//useEffect use to handel the side effects,it takes callback funtion and array 

function App() {
  const [data, setData] = useState([]);
  const [status, setstates] = useState(true);
  useEffect(() => {
    const handleLoadData = async () => {
      const response = await axios.get("https://dummyjson.com/products")

      setData(response.data.products);
      console.log([...response.data.products]);

    }
    handleLoadData();
  }, [status]);

  return (
    <>
      <button onClick={() => { setstates(status ? false : true) }}>load</button>
      <div className="cardbox">
        {
          data.map((elem, index) => (
            <div className="card" key={index}>useEffect
              <div className="cardImg">
                <img src={elem.thumbnail} alt='cardImage' />
              </div>
              <div className="cardDesc">
                <h4>{elem.title}</h4>
                <p><b>{elem.price}</b></p>
              </div>

            </div>
          ))
        }

      </div>
    </>
  )
}

export default App
