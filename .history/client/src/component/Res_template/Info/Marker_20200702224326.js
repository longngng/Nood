import React from 'react';
import './Marker.css';

const Marker = (props) => {
    const { color, name, id } = props;
    return (
      <div>
        <div
          className="bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        {/* <div className="pulse" /> */}
      </div>
    );
  };

  export default Marker;