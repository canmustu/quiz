import axios from 'axios';
import { API_URL } from '../definitions/api-paths';
import { Exam } from '../models/exam';

class ExamApiService {

  async getExams(): Promise<Exam[]> {
    return axios.get(`${API_URL}/exams`);
  }

}

export default new ExamApiService();