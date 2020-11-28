import React from 'react';
import { Helpers } from '../Helper';
import './styles.scss';

const MenuOptions = ({ values = [ 'benz', 'limo', 'toyota' ] }) => {
  return (
    <div className="custom-select">
      {/* <label>Select an option</label> */}
      <select>
        {values.map((value) => (
          <option key={Helpers.randomStringGenerator()} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MenuOptions;
