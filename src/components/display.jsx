import '../styles/components/display.sass'

const Display = () => {

    return (
      
        <div id="tipWrapper">
            <div id="valor">
                <div id="wrapp">
                    <label htmlFor="">Tip Amount</label>
                    <span id='person'>/ person</span>
                </div>
                
                <span id="total" >$0.00</span>
            </div>

            <div id="valor">
                <div id="wrapp">
                    <label htmlFor="">Total</label>
                    <span id='person'>/ person</span>
                </div>
                
                <span id="total">$0.00</span>
            </div>

            <button id='resetBtn'>RESET</button>

        </div>
      
    )
  }
  
  export default Display
  