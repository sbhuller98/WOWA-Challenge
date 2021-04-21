interface Props {
  value: string;
  onChange: (string) => void;
}

const SampleControlledInput = ({ value, onChange }: Props): JSX.Element => {
  return (
    <input
      className="border text-lg shadow bg-white border-gray-300 p-2 rounded-md"
      style={{ minWidth: '240px' }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      value={value}
    />
  );
};

export default SampleControlledInput;
