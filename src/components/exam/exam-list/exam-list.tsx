import React, { Component } from 'react';
import { Exam } from '../../../models/exam';
import ExamApiService from '../../../services/exam-api.service';
import { Card } from 'antd';
import './exam-list.css';

const { Meta } = Card;

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
    const exams = await ExamApiService.getExams();
    this.setState({ loading: false, exams: exams });
  }

  renderExams() {
    const { exams } = this.state;
    if (exams?.length) {
      return (
        exams.map(exam => {
          return (
            <div className="exam-item">
              <Card hoverable>
                <Meta
                  title={exam.title}
                  description={exam.description} />
              </Card>
            </div>
          );
        })
      );
    } else {
      return <span></span>;
    }
  }

  render() {
    return (
      <div>
        <h2>Exams</h2>
        {this.renderExams()}
      </div>
    );
  }
}

export default ExamList;