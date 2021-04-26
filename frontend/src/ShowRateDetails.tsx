import IndividualRateDetail from './IndividualRateDetail';

interface Props {
  reultsArr: any;
  correctTerm: number;
  correctType: string;
}

const ShowRateDetail = ({
  resultsArr,
  correctTerm,
  correctType,
}): JSX.Element => {
  const count = Object.keys(resultsArr).length;

  const sourcesSeen = [];

  //first checks for errors in data, then renders data via Indidividual rate detail
  const rateDetailPanels = [];
  if (typeof resultsArr[0] === 'undefined') {
    return <h1>No reuslts were found for your parameters.</h1>;
  } else if (correctTerm > 25 || correctTerm < 1) {
    return <h1>No reuslts were found for your parameters.</h1>;
  } else if (count === 1 && correctTerm != resultsArr[0].term) {
    return <h1>No reuslts were found for your parameters.</h1>;
  } else if (typeof resultsArr[0].source === 'undefined') {
    return (
      <div>
        <IndividualRateDetail
          lender={resultsArr.source}
          rate={resultsArr.rate}
          payment={resultsArr.payment}
          term={resultsArr.term}
          type={resultsArr.type}

        />
      </div>
    );
  } else {
    var i;
    // iterates over our object if we have multiple banks in our response
    for (i = 0; i < count; i++) {
      if (
        correctTerm === resultsArr[i].term &&
        correctType === resultsArr[i].type &&
        sourcesSeen.includes(resultsArr[i].source) === false
      ) {
        rateDetailPanels.push(
          <div key={resultsArr[i].id}>
            <IndividualRateDetail
              lender={resultsArr[i].source}
              rate={resultsArr[i].rate}
              payment={resultsArr[i].payment}
              term={resultsArr[i].term}
              type={resultsArr[i].type}
    
            />
          </div>
        );
        sourcesSeen.push(resultsArr[i].source);
      }
    }
  }

  return <div>{rateDetailPanels}</div>;
};

export default ShowRateDetail;
