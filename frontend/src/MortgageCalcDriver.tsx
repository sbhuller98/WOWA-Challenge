import { useState, useEffect } from 'react';
import NumberInput from './InputFields/NumberInput';
import axios from 'axios';
import ShowRateDetails from './ShowRateDetails';
import LenderBar from './LenderBar';
import SelectionInput from './InputFields/SelectionInput';

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

  //calculates and updates the payment values
  const resultsWithCalculations = {};
  const createRateValues = () => {
    const count = Object.keys(state.results).length;
    if (count === 0) {
      return;
    }
    var i = 0;

    //loops over the data and calculates mortgage payments and saves it to JSON
    for (i = 0; i < count; i++) {
      const monthlyInterest = state.results[i].rate / 100 / 12;
      const numberOfPayments = ammortizationVal * 12;
      const innerTerm = (1 + monthlyInterest) ** numberOfPayments;
      const mortgagePayment = Math.ceil(
        mortgageAmount * ((monthlyInterest * innerTerm) / (innerTerm - 1))
      );

      //creates new object with the relevant data and mortgage payment
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

  //fetches data from backend
  let btn;
  const pay = 1000;
  const fetchData = async () => {
    const res = await axios.get(
      'http://localhost:3001/rates/' + termVal + '/' + typeVal
    );
    const data = res.data;

    setState(data);
  };

  //Refetches data when amoortiation term or type of mortgage is changed, this does not need to occur since the filtering was mvoed from the backend to the frontend
  //useEffect(() => {
  //  fetchData();
  //}, [typeVal, termVal]);

  //new method to fetch data after filtering was mvoed to the front
  useEffect(() => {
    fetchData();
  }, []);

  //ensures we have fetched data and calls fucntion to caluclate monthly payment
  useEffect(() => {
    if (state === null || typeof state.results == 'undefined') {
      console.log('Error, there is no data');
      return null;
    } else {
      const newHomePrice = downPaymentVal + mortgageAmount;
      setPrice(newHomePrice);
      createRateValues();
    }
  }, [state, mortgageAmount, ammortizationVal]);

  //ensures home price, mortgage amount, and down payment remain in sync
  useEffect(() => {
    const amountMortgaged = homePriceVal - downPaymentVal;
    setMortgageAmount(amountMortgaged);
  }, [homePriceVal, downPaymentVal]);

  return (
    <div className="grid grid-cols-1">
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
      <div className="float-right">
        <LenderBar />
        <ShowRateDetails
          resultsArr={displayResults}
          correctTerm={termVal}
          correctType={typeVal}
        />
      </div>
    </div>
  );
};

export default MortgageCalc;
