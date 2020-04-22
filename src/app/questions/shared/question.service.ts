import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Question } from './';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionUrl = 'https://motacsadriano.herokuapp.com/covid19/healthcheck';

  constructor(private httpClient: HttpClient) { }

  
  listarTodos(): Question[] {
    const questions = localStorage['questions'];
    return questions ? JSON.parse(questions) : [];
  }

  //cadastrar(question: Question) {
  //  return this.http.post(this.questionUrl, question);
    //localStorage['questions'] = JSON.stringify(question);
  //}

  cadastrar(question: Question) {
    return this.httpClient.post<any>(this.questionUrl, question);
  }
}
