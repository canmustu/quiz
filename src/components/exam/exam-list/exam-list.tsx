import React, { Component } from 'react';
import { Exam } from '../../../models/exam';
import ExamApiService from '../../../services/exam-api.service';

class ExamList extends Component {
  state: {
    loading: boolean;
    exams: Exam[]
  } = {
      loading: false,
      exams: []
    };

  async componentDidMount() {
    this.setState({ loading: true });
    const exams: any = await ExamApiService.getExams();
    this.setState({ loading: false, exams: exams.data });
  }

  renderExams() {
    const { exams } = this.state;
    if (exams?.length) {
      return exams.map(exam => {
        return (
          <div key={exam.id}>
            <div>
              <strong>
                {exam.title}
              </strong>
            </div>
            <p>
              {exam.description}
            </p>
          </div>
        );
      });
    } else {
      return <span></span>;
    }
  }

  render() {
    return (
      <div>
        {this.renderExams()}
      </div>
    );
  }
}

export default ExamList;