import React from 'react';

function Scroll({ children }) {
  return (
    <div
      style={{
        border: '1px solid black'
        // overflowY: 'scroll',
        // height: '625px'
      }}
    >
      {children}
    </div>
  );
}

export default Scroll;
