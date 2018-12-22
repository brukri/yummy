import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yummy-step-duration',
  templateUrl: './step-duration.component.html'
})
export class StepDurationComponent {
  @Input() step: string;
  @Input() duration: string;

}
