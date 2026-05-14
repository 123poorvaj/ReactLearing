import React from 'https://esm.sh/react@19.1.1/?dev'
import ReactDOMClient from 'https://esm.sh/react-dom@19.1.1/client?dev'
const element = (
  <div>
    <h1 className='greeting'>Hello!</h1>
    <p>Good to see you here.</p>
  </div>
)

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(element)
