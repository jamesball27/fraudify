import React from 'react';

const Errors = props => (
  <ul className="errors">
    {
      props.errors.map((error, idx) => <li key={ idx }>{ error }</li>)
    }
  </ul>
);

export default Errors;
