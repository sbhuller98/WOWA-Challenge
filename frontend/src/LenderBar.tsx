const LenderBar = (): JSX.Element => {
  return (
    <div className="inline-flex space-x-10 border-b-4">
      <div className="flex underline text-base md:text-lg font-semibold">Lender</div>
      <div className="flex underline text-base md:text-lg font-semibold">Rate</div>
      <div className="flex underline text-base md:text-lg font-semibold">Weekly Change</div>
      <div className="flex underline text-base md:text-lg font-semibold">Monthly Payment</div>
    </div>
  );
};

export default LenderBar;
