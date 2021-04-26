interface Props {
  value: string;
  onChange: (string) => void;
}

const SelectionInput = ({ value, onChange }: Props): JSX.Element => {
  const options = ['fixed', 'variable'];
  const optionsRendered = options.map((item) => (
    <div
      className="border-blue-300 border-b-2 text-lg p-2"
      style={{ minWidth: '240px' }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(String(e.target.value))
      }
    >
      <option value={item} key={item}>
        {item}
      </option>
    </div>
  ));
  return (
    <select
      className="border text-lg shadow bg-white border-gray-300 p-2 rounded-md"
      style={{ minWidth: '240px' }}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(e.target.value)
      }
    >
      {options.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectionInput;
