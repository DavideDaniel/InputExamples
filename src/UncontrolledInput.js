import React, {Component} from 'react';

function reset(e,v) {
  e.target.closest('div').querySelector('input').value = '';
}

function alertValue(e) {
  // alert(this.refs.input.getDOMNode().value);
  alert(e.target.closest('div').querySelector('input').value);
}

const SomeInput = ({ def, ph }) => <input placeholder={ph} value={def} />

const UncontrolledInput = props => {
    return (
      <div>
        <SomeInput onChange={(e)=> e.target.value} ph='test'/>
        <button onClick={reset}>Reset</button>
        <button onClick={alertValue}>Alert Value</button>
      </div>
    );

};

export default UncontrolledInput;
