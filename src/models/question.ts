import { QuestionOption } from "./question-option";

export interface Question {
  id?: string;
  options: QuestionOption[];
  content: string;
  responseId: string; /* question option id */
}