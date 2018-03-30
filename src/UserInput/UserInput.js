import React from 'react';

const userInput = (props) => {
  const style = {
    border: '1px solid #eee',
    height: '40px',
    fontSize: '1rem',
    padding: '0 20px',
    margin: '30px 0'
  };

  return (
    <div>
      <input style={ style } type="text" onChange={ props.changed } />
    </div>
  )
}

export default userInput;