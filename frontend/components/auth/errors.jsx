import React from 'react';

const Errors = props => (
  <ul>
    {
      props.errors.map((error, idx) => <li key={ idx }>{ error }</li>)
    }
  </ul>
);

export default Errors;
