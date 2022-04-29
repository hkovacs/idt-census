import React, { useEffect, useState } from 'react';

import USStates from '../../Services/rest/us_states.js';

const Nav2 = () => {
  let initData = [];
  const [data, setData] = useState(initData);

  useEffect(() => {
    (async () => {
      const usstates = await USStates.GetUSStates();
      setData(usstates);
    })();
  }, []);

  // console.log('data', data);
  return (

    <div className='nav'>
      {data.map((d, i) => {
        return (
          <div key={i}>
            {d.state}
          </div>
        )
      })}

    </div>
  );
}

export default Nav2;