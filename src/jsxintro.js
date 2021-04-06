import React from 'react';

function formatName() {

  const user = {
    firstName: 'Apurwa',
    lastName: 'Gupta'
  };
  
  const element = (
    <div>
      <h1>
      Hello, {user.firstName}!
    </h1>
    <h2>How you doin?</h2>
    </div>
  );
  return element
}

export default formatName;