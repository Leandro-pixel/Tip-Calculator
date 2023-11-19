
import Calculator from "./components/calculator"
import Display from "./components/display"
import "./styles/app.sass"
import Avatar from './images/logo.svg'
import { ContextProvider } from "./context/context";


function App() {

  return (
    
    <ContextProvider>
    <div id="wrapper">
      <img src={Avatar} alt="" />
      <main>
        <Calculator/>
        <Display/>
      </main>
    </div>
    </ContextProvider>
    
   
  )
}

export default App
