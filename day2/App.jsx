import './App.css'

function App() {
  return (
    <>
      <h1>Hello World!!</h1>
      <h1> My name is ,<String name="JAVROOP"/>!!!</h1>
      <p>Start  learning of react this is my day 2
         today i learn a new consept that are componets and props
         <ul>
          <li>componet is a javascript function that is return jsx elements</li>
          <li>props means propertis or arguments that helps to pass the information from one componet to another componet</li>
         </ul>
      </p>
      <h1>My Friend name is ,<String name="IHSKA"/> </h1> /*nested  componets */
    </>
  )
}

function String(props){ 
  let {name}=props;
  return(
    <>
      <h1>{revers_string(name)}</h1>
    </>
  );  
}

function revers_string(name){
  if (name.length===0){
    return '';
  }
  return revers_string(name.slice(1))+name[0];
}

export default App
