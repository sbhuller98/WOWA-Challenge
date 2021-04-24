import React, { useMemo, useState } from 'react';

const SampleSelectField = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>();
  const options = ['Fixed', 'Variable']
  const listItems = options.map((mortgageType) => {
    <option value={mortgageType} key={mortgageType}>
          {mortgageType}
        </option>
  )
  }
 

  return (
    <select
      className="border text-lg shadow bg-white border-gray-300 p-2 rounded-md"
      style={{ minWidth: '240px' }}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        setInputValue(e.target.value)
      }
      value={inputValue}
    >
      {options.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SampleSelectField;
