import React, { Component } from 'react';

class Exam extends Component {

  constructor(props: any) {
    super(props);
    console.log(props);
  }

  state = { examId: null };

  componentDidMount() {
  }

  render() {
    return (
      <div></div>
    );
  }
}
export default Exam;