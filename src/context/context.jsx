
import { createContext, useContext, useState } from "react";

const Context = createContext({
    resultTotal: '',
     setResultTotal: () => {},
     resultTip: '', 
     setResultTip: () => {},
     reset: false, 
     setReset: () => {},
     peopleValue: '', 
     setPeopleValue: () => {},
     bill: '', 
     setBill: () => {},
     custom: '', 
     setCustom: () => {},
});

export const ContextProvider = ({ children }) => {
    const [resultTotal, setResultTotal] = useState('$0.00');
    const [resultTip, setResultTip] = useState('$0.00');
    const [reset, setReset] = useState(false);
    const [peopleValue, setPeopleValue] = useState('');
    const [bill, setBill] = useState('')
    const [custom, setCustom] = useState('')
    
    return (
        <Context.Provider value={{
            resultTotal,
            setResultTotal,
            resultTip,
            setResultTip,
            reset,
            setReset,
            peopleValue,
            setPeopleValue,
            bill,
            setBill,
            custom,
            setCustom
             }}>
            {children}
        </Context.Provider>
    )
};

export const useGlobalContext = () => useContext(Context);