import Head from 'next/head';
import HomeCalculator from 'src/HomeCalculator';
import SampleInput from 'src/InputFields/SampleInput';
import SampleSelectField from 'src/InputFields/SampleSelectField';
import AsyncDataComponent from '../src/AsyncDataComponent';
import LenderBar from '../src/LenderBar';
import MortgageCalc from '../src/MortgageCalcDriver';
import IndividualRateDetail from '../src/IndividualRateDetail'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>WOWA Challenge</title>
      </Head>
      <main className="w-full container">
       
        <div>
        <MortgageCalc />
        </div>
      </main>
    </>
  );
};

export default Home;
