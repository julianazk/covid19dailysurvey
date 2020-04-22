import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarQuestionComponent } from './cadastrar-question.component';

describe('CadastrarQuestionComponent', () => {
  let component: CadastrarQuestionComponent;
  let fixture: ComponentFixture<CadastrarQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
