import { useState } from 'react'
import axios from 'axios'
import { stringify } from 'node:querystring';

interface Props {
    lender: string;
    rate: number;
    payment: number;
  }
const nameToImage = {
    'Alterna Savings': 'alterna-savings.png',
    'ATB': 'atb-financial.png',
    'Banyan Mortgage': 'banyan-mortgage.png',
    'BMO': 'bmo.png',
    'Canada Life': 'canada-life-logo.svg',
    'Canadian Western': 'canadian-western-bank.png',
    'CIBC': 'cibc.svg',
    'Citadel Mortgages': 'citadel-mortgages.png',
    'CMLS': 'cmls.png',
    'Coast Capital': 'coast-capital.png',
    'Desjardins':'desjardins.png',
    'DUCA':'duca.png',
    'Equitable':'equitable.svg',
    'First National': 'first-national.png',
    'First Ontario': 'firstOntario.svg',
    'HSBC': 'hsbc.png',
    'ICICI': 'ICICI.png',
    'Investors Group': 'investorsgroup.png',
    'Laurentian': 'laurentian.svg',
    'Manulife': 'manulife.svg',
    'MCAP':'macp=small.png',
    'Meridian':'meridian.svg',
    'Metro Mortgage':'metro-mortgage-logo.png',
    'motusbank':'motusbank.org',
    'National':'national.svg',
    'nuborrow':'nuborrow.png',
    'Peoples Bank': 'peoples-bank.png',
    'RBC': 'rbc.png',
    'Scotiabank': 'scotiabank.png',
    'Simplii FInancial': 'simplii.png',
    'Tangerine': 'tangerine.png',
    'TD':'td.png',
    'Westworth Financial': 'westworth.png'
}



const IndividualRateDetail = ( {lender, rate, payment} ): JSX.Element => {


    
      
    return(
        <div>
            <h3>'Test'</h3>
            
            <h3>{lender}</h3>
        
            <h3>{rate}</h3>
            <h3>{payment}</h3>
        </div>
    )
    }

export default IndividualRateDetail;