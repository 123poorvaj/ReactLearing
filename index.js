import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
let Fathername="Mogannegowda";
function Greeting() {
  let motherName="chudamani";
  let sister="Sonu";
  return (
    <>
      <h1>Hello</h1>
      <p>king is back</p>
      <Gisvame/>
      <h1>Mother Name: {motherName} // Father name : {Fathername} // Sister Name: {sister}</h1>
      <h2>sum of 5 + 6 = {5+6}</h2>
    </>
  );
};

function Gisvame(){
    return(
    <>
    <p style={{color:"green",fontSize:"27px"}}>king is coming soon</p>
     <h1 className='name'>Poorvaj</h1>
    </>);
};


//ReactDOM.render(<Greeting/>,document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);