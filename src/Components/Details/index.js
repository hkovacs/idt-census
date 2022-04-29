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
  return (
    <div className='details'>
      <div>
        {ChosenUSState.state}
      </div>
      <div>
        {ChosenUSState.population}
      </div>
      {data.length ?
        data.map((d, i) => {
          return (
            <div key={i}>
              {d ?
                `${ d.county }
                ${d.population}`
                : null}
            </div>
          )
        })
        : null}
    </div>
  );
}

export default Details;