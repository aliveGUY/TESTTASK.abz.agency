import React from 'react';
import background from '../img/wheet_field.png';

function Headline() {
  return (
    <div
      className="headline"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <h1 className="headline-text">Test assignment for front-end developer</h1>
      <p className="headline-text">
        What defines a good front-end developer
        is one that has skilled knowledge of HTML,
        CSS, JS with a vast understanding of User design
        thinking as they`ll be building web interfaces with accessibility in mind.
        They should also be excited
        to learn, as the world of
        Front-End Development keeps evolving.
      </p>
      <button type="button" className="Header-nav-usrs">Sign up</button>
    </div>
  );
}
export default Headline;
