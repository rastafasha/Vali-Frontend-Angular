import { Component, OnInit } from '@angular/core';
import { HandService } from '../../../service/hand.service';
import { Hand } from '../../../models/hand';

@Component({
  selector: 'app-body-hands',
  templateUrl: './body-hands.component.html',
  styleUrls: ['./body-hands.component.css']
})
export class BodyHandsComponent implements OnInit {

  hands: Hand;
  error: string;

  constructor(private handService: HandService) {}

  ngOnInit() {
    this.handService.getHands().subscribe(
      (data: Hand) => this.hands = data,
      error => this.error = error
    );
    
  }

}
