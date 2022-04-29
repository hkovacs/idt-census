import React, { useEffect, useState, useContext } from 'react';

import USStateDetails from '../../Services/rest/us_state_details.js';

import { USStateContext } from '../Nav1';

import './Details.css';

const Details = () => {
  const initData = [];
  const [data, setData] = useState(initData);

  const ChosenUSState = useContext(USStateContext);
  console.log('ChosenUSState', ChosenUSState);

  useEffect(() => {
    (async () => {
      const USStateData = await USStateDetails.GetUSStateDetails(ChosenUSState.detail);
      console.log('USStateData', USStateData);
      setData(USStateData);
    })();
  }, [ChosenUSState]);

  console.log('data.length', data.length);
  let sum_counties = 0;
  return (
    <div className='details'>
      <div>
        {ChosenUSState.state}
      </div>
      <div>
        Population: {ChosenUSState.population}
      </div>
      <div>
        Number of counties: {data.length}
      </div>
      {data.length ?
        data.map((d, i) => {
          sum_counties += d.population;
          return (
            <div key={d.county}>
              {d.county}: {d.population}
            </div>
          )
        })
        : null}
      <div>
        Sum Counties Population: {sum_counties}; {(sum_counties === ChosenUSState.population) ? 'Population Matches State Data.' : 'Population Does not Match State Data.'}
      </div>
    </div >
  );
}

export default Details;