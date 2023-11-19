import '../styles/components/display.sass'
import  {useGlobalContext}  from "../context/context";
import React from 'react';



const Display = () => {

    const {resultTotal, setResultTotal} = useGlobalContext();
    const {resultTip, setResultTip} = useGlobalContext();
    const {peopleValue, setPeopleValue} = useGlobalContext();
    const {bill, setBill} = useGlobalContext();
    const {custom, setCustom} = useGlobalContext();
    
    const handleRsetClick = () => {
        setResultTip('$0.00')
        setResultTotal('$0.00')
        setPeopleValue('')
        setBill('')
        setCustom('')
    }

    return (
      
        <div id="tipWrapper">
            <div id="valor">
                <div id="wrapp">
                    <label htmlFor="">Tip Amount</label>
                    <span id='person'>/ person</span>
                </div>
                
                <span id="total" >{resultTip}</span>
            </div>

            <div id="valor">
                <div id="wrapp">
                    <label htmlFor="">Total</label>
                    <span id='person'>/ person</span>
                </div>
                
                <span id="total">{resultTotal}</span>
            </div>

            <button id='resetBtn' onClick={() => handleRsetClick()} >RESET</button>

        </div>
      
    )
  }
  
  export default Display
  