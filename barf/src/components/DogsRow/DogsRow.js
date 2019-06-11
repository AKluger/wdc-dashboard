import React, { PureComponent, Fragment } from 'react';
// import Moment from 'react-moment';

// import 'components/DogsRow/DogsRow.css';

export default class DogsRow extends PureComponent { 
  constructor() {
    super();
  }
    render() {

    // const time = (
    //   <Moment format="MMMM Do YYYY, @ HH:mm">{this.props.time}</Moment>
    // );
    return (
      <Fragment>
        <tr className="DogsRow">
          <td className="DogRow__Value">{this.props.name}</td>
          <td className="DogRow__Value">{this.props.date}</td>
          <td className="DogRow__Value">{this.props.location}</td>
          <td className="DogRow__Value">{this.props.skill}</td>
        </tr>
      </Fragment>
    );
  }
}
