
import Calculator from "./components/calculator"
import Display from "./components/display"
import "./styles/app.sass"
import Avatar from './images/logo.svg'


function App() {

  return (
    <>
    <div id="wrapper">
      <img src={Avatar} alt="" />
      <main>
        <Calculator/>
        <Display/>
      </main>
    </div>
      
        
      
    </>
  )
}

export default App
