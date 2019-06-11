import React, { PureComponent } from 'react';

// import 'components/DogsHeader/DogsHeader.css';

export default class DogsHeader extends PureComponent {
  render() {
    return (
      <thead className="DogsHeader">
        <tr className="DogsHeader__labels">
          <th className="DogsHeader__label">k9</th>
          <th className="DogsHeader__label">Date</th>
          <th className="DogsHeader__label">Location</th>
          <th className="DogsHeader__label">Skill</th>
        </tr>
      </thead>
    );
  }
}
