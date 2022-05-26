import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    component.questionsList = [
      {
        correctAnswer: 'Philip',
        id: 1,
        possibleAnswers: ['Fred', 'Philip', 'Will', 'John'],
        question: "What is Fry's first name?",
      },
    ];
    component.score = 2;
    component.currentQuestion = 5;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if score is displayed', () => {
    const scoreElement =
      fixture.debugElement.nativeElement.querySelector('.score');
    expect(scoreElement.textContent).not.toBeNull();
  });
  it('should check if correct-score is displayed', () => {
    const scoreElement =
      fixture.debugElement.nativeElement.querySelector('.score');

    expect(scoreElement.textContent).toEqual('Score : 2');
  });
  it('should check if questions no is displayed', () => {
    const totalElement =
      fixture.debugElement.nativeElement.querySelector('.total-questions');
    expect(totalElement.textContent).not.toBeNull();
  });
  it('should check if correct-questions are displayed', () => {
    const totalElement =
      fixture.debugElement.nativeElement.querySelector('.total-questions');

    expect(totalElement.textContent).toEqual(' Question 6 of 1 ');
  });

  it('check if get questions is called', () => {
    const getSpy = spyOn(component, 'getQuestions');
    component.ngOnInit();
    fixture.detectChanges();
    expect(getSpy).toHaveBeenCalled();
  });
});
