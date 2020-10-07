import axios from 'axios';
import Question from '../components/question/question';
import { API_URL } from '../definitions/api-paths';

class QuestionApiService {
  async getQuestionsByExamId(examId: string): Promise<Question[]> {
    return axios.get(`${API_URL}/questions`);
  }
}

export default new QuestionApiService();