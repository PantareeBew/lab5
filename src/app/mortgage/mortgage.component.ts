import { Component, OnInit } from '@angular/core';
import { InterestService } from '../Service/interest.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  years: number;
  Total: number = 0;

  constructor(private interest: InterestService) { }

  ngOnInit(): void {
  }

  calculateinterest()
  {
    this.Total = this.interest.calculateinterest(this.years);
  }
}
