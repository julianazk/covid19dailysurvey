import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { QuestionService, Question } from '../shared';


@Component({
  selector: 'app-cadastrar-question',
  templateUrl: './cadastrar-question.component.html',
  styleUrls: ['./cadastrar-question.component.css']
})
export class CadastrarQuestionComponent implements OnInit {

  @ViewChild('formQuestion', { static: true }) formQuestion: NgForm;
  
  question: Question;

  constructor(
    private questionService: QuestionService,
    private router: Router) { }

  ngOnInit(): void {
    this.question = new Question();
  }

  cadastrar(question: any) {
    //if (this.formQuestion.form.valid) {
      console.log(this.question);
      this.questionService.cadastrar(this.question).subscribe(
        resposta => {
        //console.log(this.question);
        this.formQuestion.reset();
      });
      this.router.navigate(["/questions"]);
    //}
    //console.log(resposta);
     //   });
  }

}
