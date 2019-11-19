import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick'
import ButtonCounter from './components/ButtonCounter'
import LightSwitch from './components/LightSwitch'

ReactDOM.render(
  <div>
    <p>--ClickityClick----</p>
    <ClickityClick />
    <p>--ButtonCounter----</p>
    <ButtonCounter />
    <p>--LightSwitch----</p>
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
