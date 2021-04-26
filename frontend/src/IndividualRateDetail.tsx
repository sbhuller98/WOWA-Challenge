import axios from 'axios';
import { stringify } from 'node:querystring';
import Image from 'next/image';

interface Props {
  lender: string;
  rate: number;
  payment: number;
  term: number;
  type: string;
}

//maps company name to image file, some strings removed by Prettier but did not affect functionality
const nameToImage = {
  'Alterna Savings': 'alterna-savings.png',
  ATB: 'atb-financial.png',
  'Banyan Mortgage': 'banyan-mortgage.png',
  BMO: 'bmo.png',
  'Canada Life': 'canada-life-logo.svg',
  'Canadian Western': 'canadian-western-bank.png',
  CIBC: 'cibc.svg',
  'Citadel Mortgages': 'citadel-mortgages.png',
  CMLS: 'cmls.png',
  'Coast Capital': 'coast-capital.png',
  Desjardins: 'desjardins.png',
  DUCA: 'duca.png',
  Equitable: 'equitable.svg',
  'First National': 'first-national.png',
  'First Ontario': 'firstOntario.svg',
  HSBC: 'hsbc.png',
  ICICI: 'ICICI.png',
  'Investors Group': 'investorsgroup.png',
  Laurentian: 'laurentian.svg',
  Manulife: 'manulife.svg',
  MCAP: 'mcap-small.png',
  Meridian: 'meridian.svg',
  'Metro Mortgage': 'metro-mortgage-logo.png',
  motusbank: 'motusbank.png',
  National: 'national.svg',
  nuborrow: 'nuborrow.png',
  'Peoples Bank': 'peoples-bank.png',
  RBC: 'rbc.png',
  Scotiabank: 'scotiabank.png',
  'Simplii Financial': 'simplii.png',
  Tangerine: 'tangerine.png',
  TD: 'td.png',
  'Westworth Financial': 'westworth.png',
};

//shows detail for each bank
const IndividualRateDetail = ({
  lender,
  rate,
  payment,
  term,
  type
}): JSX.Element => {
  const imageSRC = '/logos/' + nameToImage[lender];
  return (
    <div className="inline-flex space-x-14 border border-blue-300 p-3 max-w-xl">
      <Image src={imageSRC} width={500} height={500} />
      <h3 className="flex text-base md:text-lg font-light">{lender}</h3>
      <h3 className="flex text-base md:text-lg font-light">{rate}</h3>
      <h3 className="flex text-base md:text-lg font-light">{payment}</h3>
      <h3 className="flex text-base md:text-lg font-light">{term}</h3>
      <h3 className="flex text-base md:text-lg font-light">{type}</h3>
    </div>
  );
};

export default IndividualRateDetail;
