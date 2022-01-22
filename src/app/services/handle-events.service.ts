import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HandleEventsService {
  @Output() emitAgainClick = new EventEmitter();
  @Output() emitCorrectNumber = new EventEmitter();
  handleAgainClick() {
    this.emitAgainClick.emit();
  }

  handleCorrectNumber(value: string) {
    this.emitCorrectNumber.emit(value);
  }
}
