import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-duration',
  templateUrl: './step-duration.component.html',
  styleUrls: ['./step-duration.component.css']
})
export class StepDurationComponent implements OnInit {
  @Input() step: string;
  @Input() duration: string;

  constructor() { }

  ngOnInit() {
  }

}