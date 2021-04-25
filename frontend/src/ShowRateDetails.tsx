import IndividualRateDetail from './IndividualRateDetail'

interface Props {
    reultsArr: any;
    term: number;
  }

const ShowRateDetail = ( {resultsArr, term } ): JSX.Element => {
    
    const count = Object.keys(resultsArr).length
    console.log(term)
    console.log(resultsArr)
 
    console.log(count)
    const rateDetailPanels = []
    if (typeof resultsArr[0] === 'undefined') {
        return (<h1>
            No reuslts were found for your parameters.
        </h1>)
    }
    else if (count === 1 && term != resultsArr[0].term) {
        return (<h1>
            No reuslts were found for your parameters.
        </h1>)
    } else if (typeof resultsArr[0].source === 'undefined'){
        return(<div><IndividualRateDetail
            lender= {resultsArr.source}
            rate={resultsArr.rate}
            payment={resultsArr.payment}
            term={resultsArr.term}
            type={resultsArr.type}
            /></div>)
      
    } else {
        var i;
        for (i = 0; i < count; i++){
            rateDetailPanels.push(<div><IndividualRateDetail
                lender= {resultsArr[i].source}
                rate={resultsArr[i].rate}
                payment={resultsArr[i].payment}
                term={resultsArr[i].term}
                type={resultsArr[i].type}
                /></div>)
        }
    }
    
    return (
        <div>
          {rateDetailPanels}
        </div>
      );
    };

    export default ShowRateDetail