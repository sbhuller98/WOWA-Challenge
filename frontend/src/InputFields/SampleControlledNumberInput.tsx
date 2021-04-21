interface Props {
  value: number;
  onChange: (number) => void;
}

const SampleControlledNumberInput = ({
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <input
      className="border text-lg shadow bg-white border-gray-300 p-2 rounded-md"
      style={{ minWidth: '240px' }}
      type="number"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(Number(e.target.value))
      }
      value={value}
    />
  );
};

export default SampleControlledNumberInput;
