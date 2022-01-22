import { Component, OnInit } from '@angular/core';
import { HandleEventsService } from 'src/app/services/handle-events.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private handleEventsService: HandleEventsService) {}
  correctNumber: any = '?';
  ngOnInit(): void {
    this.handleEventsService.emitCorrectNumber.subscribe((value) => {
      this.correctNumber = value;
    });
  }
  onAgainClick() {
    this.handleEventsService.handleAgainClick();
  }
}
