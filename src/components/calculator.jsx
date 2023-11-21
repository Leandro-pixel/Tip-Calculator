import "../styles/components/calculator.sass"
import React, { useState,useEffect, useContext } from 'react';
import  {useGlobalContext} from "../context/context";


const Calculator = () => {

    const keyPadNumbers = ["5", "10", "15", "25","50"]
    
    const [errorVisible, setErrorVisible] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(null);
    const [percent, setPercent] = useState('')

    const {resultTotal, setResultTotal} = useGlobalContext();
    const {resultTip, setResultTip} = useGlobalContext();
    const {peopleValue, setPeopleValue} = useGlobalContext();
    const {bill, setBill} = useGlobalContext();
    const {custom, setCustom} = useGlobalContext();

//function for custom percent
    const handlecustom = (e) => {
      const value = e.target.value;
      setCustom(value);

      if (bill > 0 && peopleValue > 0) {
        setPercent(value)
      }
    }


//function to error message
    const handlePeopleChange = (e) => {
        const value = e.target.value;
        setPeopleValue(value);
    
        if (value < 1) {
          setErrorVisible(true);
        } else {
          setErrorVisible(false);
        }

      };

//function for btn style
      const handleClick = (num, index) => {
        setButtonClicked(index)

        if (bill > 0 && peopleValue > 0) {
          setPercent(num)
        }
      };

      //function for bill
      const handleBillChange = (e) => {
        const value = e.target.value;
        setBill(value);
      }

//function for calculate
      const handleCalculate = () => {
        const numPercent = parseFloat(percent);
        const numBill = parseFloat(bill);
        const numPeople = parseFloat(peopleValue);

        let resultTotal;
        let resultTip;

          if(numPeople > 0 && numBill > 0) {
            resultTotal = numBill / numPeople
            setResultTotal(resultTotal.toFixed(2));
            if(numPercent > 0) {
              resultTip = resultTotal * numPercent / 100
              setResultTip(resultTip.toFixed(2));
            }
          }
  
          
           
      }

      useEffect(() => {
        handleCalculate();
      }, [bill, peopleValue, percent]);

    return (
    <main id="calculator">
            <div id="bill">
                <label htmlFor="">Bill</label>
                <input type="number" id="inputBill" placeholder="0" value={bill} onChange={handleBillChange} />
            </div>
            

            <div id="selectTip">
                <label htmlFor="">Select tip %</label>
                <div id="tipBtns">
                {keyPadNumbers.map((num, index) => (
                    <button key={num} 
                    className={index === buttonClicked ? 'clicked' : 'btn'} 
                    onClick={() => handleClick(num, index)}
                    value={num}>
                      {num}%
                      </button>
                ))}
                <input type="number" value={custom} placeholder="Custom" id="customTip" onChange={handlecustom} />
                </div>
                
            </div>

            <div className="numberPeople">
                <label htmlFor="">Number of People</label>
                {errorVisible && <label htmlFor="" className="error">Can't be zero</label>}
            </div>

            <input type="number"
                value={peopleValue}
                onChange={handlePeopleChange}
                className={errorVisible ? 'errorOutline' : 'inputPeople'}
                placeholder="0"
                
             />
    </main>
      
    )
  }
  
  export default Calculator