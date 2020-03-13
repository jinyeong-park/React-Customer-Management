import React, {Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'name': 'Jinyeong Park',
  'birthday':'961223',
  'gender': 'female',
  'job': 'university student'
}

class App extends Component {
  render() {
    return (
      <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
      />
    );
  }
}

export default App;