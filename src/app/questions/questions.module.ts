import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { QuestionService } from './shared';
import { CadastrarQuestionComponent } from './cadastrar';

@NgModule({
  declarations: [CadastrarQuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuestionService
  ]
})
export class QuestionsModule { }
