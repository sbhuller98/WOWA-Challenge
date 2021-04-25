import { useState, useEffect } from 'react';
import NumberInput from './InputFields/NumberInput';
import axios from 'axios';
import IndividualRateDetail from './IndividualRateDetail';


const MortgageCalc = (): JSX.Element => {
    const [termVal, setTerm] = useState<number>(25);
    const [typeVal, setType] = useState<string>('fixed');
    const [homePriceVal, setPrice] = useState<number>(500000);
    const [downPaymentVal, setDownPayment] = useState<number>(50000);
    const [mortgageAmount, setMortgageAmount] = useState<number>(450000);
    const [ammortizationVal, setAmmortization] = useState<number>(25);
    const [dataRecevied, setDataReceived] = useState<boolean>(false)
    
  
    const [state, setState] = useState<any>(null);

    const createRateValues = () => {
      const count = Object.keys(state.results).length;
      var i = 0
      const resultsWithCalculations = {}
      for (i = 0; i < count; i++) {
        const monthlyInterest = (state.results[i].rate)/100/12
        
        const numberOfPayments = ammortizationVal*12
        

        const innerTerm = (1 + monthlyInterest)**numberOfPayments
  

        const mortgagePayment = Math.ceil(mortgageAmount*((monthlyInterest*innerTerm)/(innerTerm - 1)))
        

        const currResult = {
          'key': state.results[i].id,
          'source': state.results[i].source,
          'rate':state.results[i].rate,
          'payment': mortgagePayment,
          'term': state.results[i].year,
          'type': state.results[i].rate_type
        }
        resultsWithCalculations[i] =(currResult);
      }
      console.log(resultsWithCalculations)
    }


    let btn;
    const pay = 1000
    const fetchData = async () => {
      const res = await axios.get(
        'http://localhost:3001/rates/' + String(termVal) + '/' + typeVal
      );
      const data = res.data;
      console.log(data)
      setState(data)
      setDataReceived(true)
    };

    useEffect(() => {
      fetchData();
    }, [typeVal, termVal]);

    useEffect(() => {
    if (dataRecevied) {
      if (typeof state.results[0] === 'undefined') {
        btn=<p>There is no data to dispay.</p>
        return
      } else {
      console.log(state.results[0])
      createRateValues()

      btn = <IndividualRateDetail 
        lender={state.results[0].source}
        rate={state.results[0].rate}
        payment={pay}
        />}
      }
    }, [state])
    
  
    
  

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