import { useState } from 'react';
import SampleControlledNumberInput from './InputFields/SampleControlledNumberInput';

const HomeCalculator = (): JSX.Element => {
  const [valueOne, setValueOne] = useState<number>(0);
  const [valueTwo, setValueTwo] = useState<number>(0);

  return (
    <>
      <div className="p-4 shadow rounded border my-8">
        <div className="text-3xl text-gray-800 text-center">
          Calculator Example
        </div>
        <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row items-center sm:space-x-8 justify-center mt-8">
          <div>
            <div className="text-base text-gray-800 text-left mb-1">
              Number One
            </div>
            <SampleControlledNumberInput
              value={valueOne}
              onChange={setValueOne}
            />
          </div>{' '}
          <div>
            <div className="text-base text-gray-800 text-left mb-1">
              Number Two
            </div>
            <SampleControlledNumberInput
              value={valueTwo}
              onChange={setValueTwo}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mt-8">
          <span className="text-lg font-bold">{valueOne}</span>
          <span className="text-lg font-bold">+</span>
          <span className="text-lg font-bold">{valueTwo}</span>
          <span className="text-lg font-bold">=</span>
          <span className="text-lg font-bold">{valueOne + valueTwo}</span>
        </div>
      </div>
    </>
  );
};

export default HomeCalculator;
