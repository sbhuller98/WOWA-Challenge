import axios from 'axios';
import { useEffect, useState } from 'react';

const AsyncDataComponent = (): JSX.Element => {
  const [state, setState] = useState<string[]>();

  const fetchData = async () => {
    const res = await axios.get(
      'https://baconipsum.com/api/?type=meat-and-filler'
    );
    const data = res.data as string[];
    setState(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="p-4 shadow rounded border my-8 container">
        <div className="text-3xl text-gray-800 text-center mb-8">
          Async Data Fetching Example
        </div>
        <div className="text-center text-base text-gray-800">
          {!state && 'Fetching data...'}
          {state && (
            <>
              {state.map((str) => (
                <p className="text-base text-gray-800 my-4">{str}</p>
              ))}{' '}
              <button
                onClick={fetchData}
                type="button"
                className="text-white bg-yellow-500 duration-200 transition hover:bg-yellow-600 rounded shadow px-8 py-2 text-lg font-semibold"
              >
                Refetch Data
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AsyncDataComponent;
