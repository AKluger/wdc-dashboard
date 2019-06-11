import React from 'react';

export function Input(props) {
  return (
    <form>
      <input className="form-control" {...props} placeholder="Search by Exercise or Canine"/>
    </form>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }}>
      {props.children}
    </button>
  );
}
