import { useState, useEffect } from 'react';
import NumberInput from './InputFields/NumberInput';
import axios from 'axios';
import ShowRateDetails from './ShowRateDetails'; 
import LenderBar from './LenderBar'
import SelectionInput from './InputFields/SelectionInput'

const MortgageCalc = (): JSX.Element => {
  const [termVal, setTerm] = useState<number>(25);
  const [typeVal, setType] = useState<string>('fixed');
  const [homePriceVal, setPrice] = useState<number>(500000);
  const [downPaymentVal, setDownPayment] = useState<number>(50000);
  const [mortgageAmount, setMortgageAmount] = useState<number>(450000);
  const [ammortizationVal, setAmmortization] = useState<number>(25);
  const [state, setState] = useState<any>(null);
  const [displayResults, setDisplayResults] = useState<any>({
    key: 137,
    source: 'RBC',
    rate: 8.75,
    payment: 3700,
    term: 25,
  });

  const resultsWithCalculations = {};
  const createRateValues = () => {
    const count = Object.keys(state.results).length;
    if (count === 0) {
      return;
    }
    var i = 0;

    for (i = 0; i < count; i++) {
      const monthlyInterest = state.results[i].rate / 100 / 12;
      const numberOfPayments = ammortizationVal * 12;
      const innerTerm = (1 + monthlyInterest) ** numberOfPayments;
      const mortgagePayment = Math.ceil(
        mortgageAmount * ((monthlyInterest * innerTerm) / (innerTerm - 1))
      );

      const currResult = {
        key: state.results[i].id,
        source: state.results[i].source,
        rate: state.results[i].rate,
        payment: mortgagePayment,
        term: state.results[i].year,
        type: state.results[i].rate_type,
      };
      resultsWithCalculations[i] = currResult;
    }
    setDisplayResults(resultsWithCalculations);
  };

  let btn;
  const pay = 1000;
  const fetchData = async () => {
    const res = await axios.get(
      'http://localhost:3001/rates/' + termVal + '/' + typeVal
    );
    const data = res.data;

    setState(data);
  };

  useEffect(() => {
    fetchData();
  }, [typeVal, termVal]);

  useEffect(() => {
    if (state === null || typeof state.results == 'undefined') {
      btn = <p>There is no data to dispay.</p>;
      return;
    } else {
      createRateValues();
    }
  }, [state]);

  return (
    <div className='flex'>
      <div className="border-2 border-blue-300 p-3 shadow float-left">
        <h5>Term Length</h5>
        <NumberInput value={termVal} onChange={setTerm} />
        <h5>Home Price</h5>
        <NumberInput value={homePriceVal} onChange={setPrice} />
        <h5>Down Payment</h5>
        <NumberInput value={downPaymentVal} onChange={setDownPayment} />
        <h5>Mortgage Amount</h5>
        <NumberInput value={mortgageAmount} onChange={setMortgageAmount} />
        <h5>Ammortization Term</h5>
        <NumberInput value={ammortizationVal} onChange={setAmmortization} />
        <SelectionInput value={typeVal} onChange={setType} />
      </div>
      <div className='w-9/12'>
        <LenderBar />
        <ShowRateDetails resultsArr={displayResults} term={termVal} />
      </div>
    </div>
  );
};

export default MortgageCalc;
