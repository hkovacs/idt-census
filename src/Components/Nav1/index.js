import { useEffect, useState, createContext } from 'react';

import USStates from '../../Services/rest/us_states.js';

import Details from '../Details';

import './Nav1.css';

export const USStateContext = createContext();

const Nav1 = () => {
  let initData = [];
  let initStateData = {};
  const [data, setData] = useState(initData);
  const [stateData, setStateData] = useState(initStateData);

  useEffect(() => {
    (async () => {
      const usstates = await USStates.GetUSStates();
      setData(usstates);
    })();
  }, []);

  const loadDetails = (e) => {
    let d = JSON.parse(e.target.getAttribute('data-d'));
    setStateData(d);
  }

  return (
    <div className='nav'>
      {data.map((d, i) => {
        return (
          <div key={d.state} className='us_state' data-d={JSON.stringify(d)} onClick={loadDetails}>
            {d.state}
          </div>
        )
      })}

      {Object.keys(stateData).length ? (
        <USStateContext.Provider value={stateData}>
          <Details />
        </USStateContext.Provider>
      ) : null}
    </div>
  );
}

export default Nav1;