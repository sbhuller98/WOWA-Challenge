import { useState, useEffect } from 'react';
import NumberInput from './InputFields/NumberInput';
import axios from 'axios';
import IndividualRateDetail from './IndividualRateDetail';


const MortgageCalc = (): JSX.Element => {
    const [termVal, setTerm] = useState<number>(5);
    const [typeVal, setType] = useState<string>('Fixed');
    const [homePriceVal, setPrice] = useState<number>(500000);
    const [downPaymentVal, setDownPayment] = useState<number>(50000);
    const [mortgageAmount, setMortgageAmount] = useState<number>(450000);
    const [ammortizationVal, setAmmortization] = useState<number>(25);
    const [dataRecevied, setDataReceived] = useState<boolean>(false)
  
    const [state, setState] = useState<any>(null);
    let btn;
    const pay = 1000
    const fetchData = async () => {
      const res = await axios.get(
        'http://localhost:3001/rates/5/fixed'
      );
      const data = res.data;
      console.log(data)
      setState(data)
      setDataReceived(true)
    };
    useEffect(() => {
      fetchData();
    }, []);
    if (dataRecevied) {
      
      console.log(state.results[0])
      btn = <IndividualRateDetail 
        lender={state.results[0].source}
        rate={state.results[0].rate}
        payment={pay}
        />}
    
   
    
  

    return (
      <div className="border-2 border-blue-300 p-3 shadow">
        <h5>Term Length</h5>
        <NumberInput
              value={termVal}
              onChange={setTerm}
            />
        <h5>Home Price</h5>
        <NumberInput
              value={homePriceVal}
              onChange={setPrice}
            />
        <h5>Down Payment</h5>
        <NumberInput
              value={downPaymentVal}
              onChange={setDownPayment}
            />
        <h5>Mortgage Amount</h5>
        <NumberInput
              value={mortgageAmount}
              onChange={setMortgageAmount}
            />
        <h5>Ammortization Term</h5>
        <NumberInput
              value={ammortizationVal}
              onChange={setAmmortization}
            />
          {btn}
      </div>
    );
  };
  
  export default MortgageCalc;