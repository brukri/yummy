import { Component, OnInit, Input } from '@angular/core';
import { Instructions, InstructionStep } from '../../services/yummy-data-service/yummy-data.service';
@Component({
  selector: 'yummy-instructions-list',
  templateUrl: './instructions.component.html'
})
export class InstructionsComponent {
  @Input() instructions: Instructions;

}
