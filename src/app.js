import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"
import "./index.scss"
import "./index.less"
import pic1 from './orca.jpg'

function App() {
  return (
    <div>
      app.js
      <img src={pic1} alt="显示失败"></img>
    </div>
  )
}

export default App

ReactDom.render(<App />, document.getElementById('app'))