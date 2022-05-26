import { Component, OnInit } from '@angular/core';
import { Questions } from '../futuruma.interface';
import { FuturumaService } from '../services/futuruma.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  questions$ = this.futurumaService.fetchQuestions();
  currentQuestion: number = 0;
  questionsList: Questions[] = [];
  public score: number = 0;

  constructor(private futurumaService: FuturumaService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questions$.subscribe((questions) => {
      console.log(questions);
      this.questionsList = questions;
    });
  }

  nextQuestion() {
    this.currentQuestion++;
  }
  checkAnswer(id, selectedOption) {
    console.log(id, selectedOption);
    if (this.questionsList[id].correctAnswer === selectedOption) {
      console.log('win');
      this.score++;
    }
    this.currentQuestion++;
  }
  reset() {
    this.getQuestions();
    this.currentQuestion = 0;
    this.score = 0;
  }
}
