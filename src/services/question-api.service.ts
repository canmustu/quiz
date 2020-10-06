import axios from 'axios';
import { API_URL } from '../definitions/api-paths';

export class QuestionApiService {

  constructor() {

  }

  async getQuestionsByExamId(examId: string) {
    return axios.get(`${API_URL}/questions`, { params: { examId: examId } });
  }

}