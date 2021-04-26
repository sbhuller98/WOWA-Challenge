const LenderBar = (): JSX.Element => {
  return (
    <div className="flex">
      <div className="inline-flex space-x-14 border-b-4 border-blue-300">
        <div className="flex text-base md:text-lg font-light">Lender</div>
        <div className="flex text-base md:text-lg font-light">Rate</div>
        <div className="flex text-base md:text-lg font-light">
          Monthly Payment
        </div>
        <div className="flex text-base md:text-lg font-light">Term</div>
        <div className="flex text-base md:text-lg font-light">
          Mortgage Type
        </div>
      </div>
    </div>
  );
};

export default LenderBar;
