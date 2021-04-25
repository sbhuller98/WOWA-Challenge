interface Props {
  value: number;
  onChange: (number) => void;
}

const NumberInput = ({ value, onChange }: Props): JSX.Element => {
  return (
    <input
      className="border-blue-300 border-b-2 text-lg p-2"
      style={{ minWidth: '240px' }}
      type="number"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(Number(e.target.value))
      }
      value={value}
    />
  );
};

export default NumberInput;
