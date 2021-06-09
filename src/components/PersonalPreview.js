import React from 'react';
import Headers from './Utilities/Headers';

const Personal = (props) => {
  const { name, lastname, phone, city, mail, position, webpage } = props;
  return (
    <div>
      <h1>{name + ' ' + lastname}</h1>
      <h3>{position}</h3>
      <div>
        <div>
          <Headers title={'Contact'} />
          <p>
            <i className="fas fa-phone" />
            {phone}
          </p>
          <p>
            <i className="fas fa-envelope" />
            {mail}
          </p>
          <p>
            <i className="fas fa-map-marker-alt" />
            {city}
          </p>
          <p>
            <i className="fab fa-github" />
            {webpage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Personal;
