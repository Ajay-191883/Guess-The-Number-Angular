import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HandleEventsService } from 'src/app/services/handle-events.service';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor(private handleEventsService: HandleEventsService) {}
  @ViewChild('numberInput') numberInput: ElementRef<any> = {
    nativeElement: HTMLElement,
  };
  // @ViewChild('gameMessage') gameMessage: ElementRef = {
  //   nativeElement: HTMLElement,
  // };

  originalNumber: number = 0;
  gameEnd: boolean = false;
  gameHighscore: number = 0;
  yourScore: number = 30;
  gameMessage: string = 'Start guessing...';
  ngOnInit(): void {
    this.generateOriginalNumber();
    this.respondOnAgainCLick();
  }

  generateOriginalNumber() {
    this.originalNumber = Math.floor(Math.random() * 30) + 1;
    console.log(this.originalNumber);
  }
  respondOnAgainCLick() {
    this.handleEventsService.emitAgainClick.subscribe((event) => {
      this.generateOriginalNumber();
      this.numberInput.nativeElement.value = '';
      this.gameMessage = 'Start guessing...';
      document.body.style.backgroundColor = '#222';
      // this.yourScore.nativeElement.textContent = '30';
      this.yourScore = 30;
      this.handleEventsService.handleCorrectNumber(`?`);
      this.gameEnd = false;
    });
  }

  gameLost() {
    this.handleEventsService.handleCorrectNumber(`${this.originalNumber}`);
    this.gameMessage = '😱 You Lost! Play Again';
    this.gameEnd = true;
  }

  checkInputNumber() {
    if (+this.numberInput.nativeElement.value === this.originalNumber) {
      this.gameMessage = '🥳 Yeah! Correct';
      document.body.style.backgroundColor = '#60b347';
      this.handleEventsService.handleCorrectNumber(`${this.originalNumber}`);
      this.gameEnd = true;
      this.gameHighscore =
        this.gameHighscore <= this.yourScore
          ? +this.yourScore
          : this.gameHighscore;
    } else if (+this.numberInput.nativeElement.value < this.originalNumber) {
      this.gameMessage = '❌ Oh No! Too Less';
      this.gameEnd = false;
      this.yourScore--;
      if (this.yourScore === 0) {
        this.gameLost();
      }
    } else {
      this.gameMessage = '❌ Oh No! Too High';
      this.gameEnd = false;
      this.yourScore--;
      if (this.yourScore === 0) {
        this.gameLost();
      }
    }
  }
}
