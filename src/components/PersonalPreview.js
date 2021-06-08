import React from 'react';

const Personal = (props) => {
  const { name, lastname, phone, city, mail, position } = props;
  return (
    <div>
      <h1>{name + ' ' + lastname}</h1>
      <div>
        {phone !== undefined && (
          <div>
            <h1>Contact</h1>
            <h3>
              <i className="fas fa-phone" />
              {phone}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Personal;
