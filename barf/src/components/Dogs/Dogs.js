import React, { PureComponent } from 'react';

import DogsHeader from '../DogsHeader/DogsHeader';
import DogsRow from '../DogsRow/DogsRow';
import DogFilter from '../dogFilter/dogFilter';
import './Dogs.css'



class Dogs extends PureComponent {
    render() {
      // console.log(this.props.earthquakes[0].id)
      const { updateFilter } = this.props;


      return (
        <div className="Dogs">
          <DogFilter onInput={updateFilter} />
          <div className="Dogs__table-scroller">
            <table className="Dogs__table">
              <DogsHeader />
              <tbody>
              {this.props.dogs.map(dog => (
                <DogsRow
                  {...this.props}
                //   key={}
                  name={dog.k9name}
                  date={dog.date}
                  location={dog.location}
                  skill={dog.skill_1}
                />
              ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
  export default Dogs; 