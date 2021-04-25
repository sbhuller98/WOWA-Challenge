const LenderBar = (): JSX.Element => {
  return (
    <div className="flex-auto inline-flex space-x-10 border-b-4 border-blue-300">
        <div className="flex  text-base md:text-lg font-light">Lender</div>
        <div className="flex text-base md:text-lg font-light">Rate</div>
        <div className="flex text-base md:text-lg font-light">
          Weekly Change
        </div>
        <div className="flex text-base md:text-lg font-light">
          Monthly Payment
        </div>
      </div>
    
  );
};

export default LenderBar;
