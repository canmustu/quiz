import { Question } from "./question";

export interface Exam {
  id?: string;
  title: string;
  description?: string;
  questions: Question[];
}