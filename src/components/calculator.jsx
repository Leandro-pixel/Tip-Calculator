import "../styles/components/calculator.sass"


const Calculator = () => {

    const keyPadNumbers = ["5%", "10%", "15%", "25%","50%"]

    return (
    <main id="calculator">
            <div id="bill">
                <label htmlFor="">Bill</label>
                <input type="number" id="inputBill" />
            </div>
            

            <div id="selectTip">
                <label htmlFor="">Select tip %</label>
                <div id="tipBtns">
                {keyPadNumbers.map((num) => (
                    <button key={num} className="btn">{num}</button>
                ))}
                <input type="number" placeholder="Custom" id="customTip" />
                </div>
                
            </div>

            <div className="numberPeople">
                <label htmlFor="">Number of People</label>
                <input type="number" id="inputPeople" />
            </div>
    </main>
      
    )
  }
  
  export default Calculator