import React from 'react';
/* eslint-disable */

function Card(props) {
  return (
    <div className="card">
      <img className="avatar" src={props.photo} alt="Avatar" />
      <p>{props.name}</p>
      <br/>
      <p>{props.position}</p>
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
}
export default Card;
