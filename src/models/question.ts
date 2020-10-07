import { QuestionOption } from "./question-option";

export interface Question {
  id?: string;
  options: QuestionOption[];
  content: string;
  answerId: string; /* question option id */
}