import { useState } from 'react';

const SampleInput = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>();
  return (
    <input
      className="border text-lg shadow bg-white border-gray-300 p-2 rounded-md"
      style={{ minWidth: '240px' }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      value={inputValue}
    ></input>
  );
};

export default SampleInput;
