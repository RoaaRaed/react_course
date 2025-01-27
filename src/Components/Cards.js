import React, { useState } from 'react';

export default function Card(props) {
  const [BlackStar, setBlackStar] = useState(false);

  const Toggle = () => {
    setBlackStar(!BlackStar);
  };

  return (
    <div style={{ width: '300px' }}>
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          width: '300px',
          height: '300px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
        }}
      ></div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0',
        }}
      >
        <h1>{props.title}</h1>
        <h3
          style={{
            color: 'grey',
            fontWeight: 'normal',
            cursor: 'pointer',
          }}
          onClick={Toggle}
        >
          <span
            style={{
              color: BlackStar ? 'black' : 'yellow',
            }}
          >
            &#9733; 
          </span>
          {props.review}
        </h3> 
      </div>

      <h3 style={{ fontWeight: 'normal', marginTop: '0' }}>{props.desc}</h3>
      <h3>
        {props.price}$ <span style={{ color: 'grey', fontWeight: 'normal' }}>night</span>
      </h3>
    </div>
  );
}
