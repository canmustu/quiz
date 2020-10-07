import React, { Component } from 'react';
import ExamList from './components/exam/exam-list/exam-list';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <ExamList />
      </div>
    );
  }
}

export default App;
