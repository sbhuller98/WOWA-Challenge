import { useState } from 'react';
import SampleControlledNumberInput from './InputFields/SampleControlledNumberInput';

const MortgageCalc = (): JSX.Element => {
    const [termVal, setTerm] = useState<number>(5);
    const [typeVal, setType] = useState<string>('Fixed');
    const [homePriceVal, setPrice] = useState<number>(0);
    const [downPaymentVal, setDownPayment] = useState<number>(0);
    const [mortgageAmount, setMortgageAmount] = useState<number>(0);
    const [ammortizationVal, setAmmortization] = useState<number>(25);
  
    return (
      <>
        <h5>Term Length</h5>
        <SampleControlledNumberInput
              value={termVal}
              onChange={setTerm}
            />
        <h5>Home Price</h5>
        <SampleControlledNumberInput
              value={homePriceVal}
              onChange={setPrice}
            />
        <h5>Down Payment</h5>
        <SampleControlledNumberInput
              value={downPaymentVal}
              onChange={setDownPayment}
            />
        <h5>Mortgage Amount</h5>
        <SampleControlledNumberInput
              value={mortgageAmount}
              onChange={setMortgageAmount}
            />
        <h5>Ammortization Term</h5>
        <SampleControlledNumberInput
              value={ammortizationVal}
              onChange={setAmmortization}
            />
      </>
    );
  };
  
  export default MortgageCalc;