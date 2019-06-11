import React, { Component } from 'react';

// import API from 'utils/API';
import organizeDogs from '../../utils/organizeDogs';

// HOC that returns a container after fetching and filtering data

export default function DogData(WrappedComponent) {
    return class extends Component {
      constructor() {
        super();
  
        this.state = {
          filter: '',
          dogs: [],
          organizedDogs: []
        };
  
        this.updateFilter = this.updateFilter.bind(this);
      }
  
      componentDidMount() {
        fetch('https://api.sheety.co/dbde88e4-be47-4cdf-b8bb-6828f8115f7d')
          .then(response => response.json())
          .then(
            data => {
              this.setState({ dogs: data });
            },
            error => {
              if (error) {
                throw new Error('something went wrong');
              }
            }
          )
          .then(this.updateFilter)
          .catch(error => Promise.reject(error));
      }
  
      updateFilter(filter) {
        const { dogs } = this.state;
        this.setState({
          organizedDogs: organizeDogs(filter, dogs),
        });
      }
  
      render() {
        const { organizedDogs } = this.state;
  
        return (
          <WrappedComponent
            {...this.props}
            dogs={organizedDogs}
            updateFilter={this.updateFilter}
          />
        );
      }
    };
  }