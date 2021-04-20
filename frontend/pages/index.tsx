import Head from 'next/head';
import SampleInput from 'src/SampleInput';
import SampleSelectField from 'src/SampleSelectField';

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>WOWA Challenge</title>
      </Head>
      <main className="w-full flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-semibold mb-4 text-center">
          Welcome to the WOWA Challenge
        </h1>{' '}
        <div className="text-lg text-center">
          Here are some example components that may help you
        </div>
        <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row items-center sm:space-x-8 justify-center mt-8">
          <div className="shadow p-4 rounded mx-auto">
            <div className="text-base text-gray-800 text-left mb-1">
              Sample Input Field
            </div>
            <SampleInput />
          </div>{' '}
          <div className="shadow p-4 rounded mx-auto">
            <div className="text-base text-gray-800 text-left mb-1">
              Sample Select Field
            </div>
            <SampleSelectField />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
