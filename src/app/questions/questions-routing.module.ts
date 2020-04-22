import { Routes } from '@angular/router';

import {CadastrarQuestionComponent } from './cadastrar';

export const QuestionRoutes: Routes = [
    {
        path: 'questions',
        redirectTo: 'questions/cadastrar'
    },
    {
        path: 'questions/cadastrar',
        component: CadastrarQuestionComponent
    }
];
